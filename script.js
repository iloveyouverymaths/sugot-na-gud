const persuasionMessages = [
    "Oh no! I can't imagine my day without you.",
    "Are you sure? You're the sunshine in my life.",
    "Come on, give me a chance to make you smile.",
    "Don't break my heart! You mean the world to me.",
    "I thought we had a special connection...",
    "Is there anything I can do to make you feel loved?",
    "I believe in us! You make every moment special.",
    "Are you playing hard to get? 😉 You're my one and only.",
    "I can't stop thinking about you! You're my everything.",
    "Do you really want to miss out on love? You complete me."
];

function onNoClick() {
    const randomMessageIndex = Math.floor(Math.random() * persuasionMessages.length);
    const randomMessage = persuasionMessages[randomMessageIndex];
    alert(`${randomMessage}`);
}

function onYesClick() {
    alert("Yay! Thank you for being my Valentine!");
}
