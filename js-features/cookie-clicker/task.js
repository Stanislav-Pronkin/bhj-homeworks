const image = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let speed = document.getElementById("clicker__spd");
let count = parseInt(counter.textContent, 10);
let date;

function changeSizes() {
    counter.textContent = count += 1;
    if (count % 2 == 0) {
        this.width = "200";
    } else {
        this.width = "300";
    }
    let dateNow = Date.now();
    speed.textContent = (1 / ((dateNow - date) / 1000)).toFixed(2);
    date = dateNow;
}
image.onclick = changeSizes;
