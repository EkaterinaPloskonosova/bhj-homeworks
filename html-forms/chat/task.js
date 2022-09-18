const chatWidget = document.querySelector('.chat-widget');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.querySelector('.chat-widget__input');
const botMessages = [
    'Хай!',
    'Чего надо?',
    'Некогда нам!',
    'Ты кто?',
    'У меня нет на тебя времени!',
    'Напишите через год!',
    'Я вышел из чата!',
    'Гуляй, Вася!'
];

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

function getCurrentTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
};

function randomBotMessages() {
    let indexMessage = Math.floor(Math.random() * botMessages.length);
    return botMessages[indexMessage];
}
document.addEventListener("keydown", (e) => {
    let clientText = chatWidgetInput.value.trim();
    if (e.key === "Enter" && clientText !== "") {
        chatWidgetMessages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${getCurrentTime()}</div>
            <div class="message__text">${clientText}</div>
        </div>
        `;
        chatWidgetInput.value = ""
        chatWidgetMessages.innerHTML += `
        <div class="message">
            <div class="message__time">${getCurrentTime()}</div>
            <div class="message__text">${randomBotMessages()}</div>
        </div>
        `;
    };
});