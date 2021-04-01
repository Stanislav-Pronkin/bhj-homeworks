let xhr = new XMLHttpRequest;
const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

function getAnswer(item) {
    let answer = document.createElement("button");

    answer.className = "poll__answer"
    answer.innerText = item;
    pollAnswers.insertAdjacentElement('beforeend', answer);
}

xhr.open('GET', "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        let serverAnswer = JSON.parse(this.response);
        let poll = serverAnswer.data;

        pollTitle.innerText = poll.title;
        poll.answers.forEach(element => {
            getAnswer(element);
        });
    }
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains("poll__answer")) {
        alert("Спасибо, ваш голос засчитан!");
    }
})