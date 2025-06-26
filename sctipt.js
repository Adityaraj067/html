const messages = [
    "🎉 Jackpot!",
    "😢 You Lose!",
    "🌈 You're gay!",
    "🧠 You're a very smart hero! Lag rahe ho 😎"
];

const boxes = document.querySelectorAll('.boxes');

boxes.forEach((box, index) => {
    const originalText = `Box ${index + 1}`;
    box.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        box.textContent = messages[randomIndex];

        setTimeout(() => {
            box.textContent = originalText;
        }, 1000);
    });
});
