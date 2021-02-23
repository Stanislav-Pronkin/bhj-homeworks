const timer = document.getElementById("timer");

const count = setInterval(function() {
    if (timer.textContent > 0) {
        timer.textContent -=1;
    } else {
        clearInterval(count);
        alert("Вы победили в конкурсе!");
    }
}, 1000);

