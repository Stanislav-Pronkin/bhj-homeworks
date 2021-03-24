const chat = document.querySelector(".chat-widget");
const inputMessage = document.getElementById("chat-widget__input");

chat.addEventListener("click", function () {
    chat.classList.add("chat-widget_active");
})

const answerBot = ["Добрый день!",
    "До свидания.",
    "Где ваша совесть?",
    "Добрый день, мы ещё не проснулись. Позвоните через 10 лет.",
    "К сожалению, все операторы сейчас заняты. Не пишите нам больше.",
    "Мы ничего не будем вам продавать!",
    "Кто тут?!"];


function getTime() {
    let date = new Date;
    let time = date.getHours() + ":" + date.getMinutes();
    return time;
}

function sendMessage(sender) {
    const messages = document.getElementById("chat-widget__messages");

    let message = document.createElement("div");
    let messageTime = document.createElement("div");
    let messageText = document.createElement("div");

    messageTime.className = "message__time";
    messageTime.innerHTML = getTime();
    message.insertAdjacentElement("afterbegin", messageTime);

    message.className = "message";
    messages.insertAdjacentElement("afterbegin", message);

    messageText.className = "message__text";
    message.insertAdjacentElement("beforeend", messageText);

    if (sender === "client") {
        message.classList.add("message_client");
        messageText.innerHTML = inputMessage.value;
    } else if (sender === "bot") {
        let text = Math.floor(Math.random() * answerBot.length);
        messageText.innerHTML = answerBot[text];
    }
}

inputMessage.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && inputMessage.value != false) {
        sendMessage("client");
        inputMessage.value = "";

        setTimeout(sendMessage, 1000, "bot");
    }
})