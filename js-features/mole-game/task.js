let dead = document.getElementById("dead");
let deadParse = parseInt(dead.textContent, 10);
let lost = document.getElementById("lost");
let lostParse = parseInt(lost.textContent, 10);

for (let index = 1; index <= 9; index ++) {
    function getHole(index) {
        let hole = document.getElementById(`hole${index}`);
        return hole;
    }

    let holeClick = getHole(index);

    holeClick.onclick = function () {
        if (holeClick.className.includes("hole_has-mole")) {
            dead.textContent = deadParse += 1;
        } else {
            lost.textContent = lostParse += 1;
        }
        if (deadParse === 10) {
            alert("Победа!");
            dead.textContent = 0;
            deadParse = 0;
            lost.textContent = 0;
            lostParse = 0;
        } else if (lostParse === 5) {
            alert("Вы проиграли");
            dead.textContent = 0;
            deadParse = 0;
            lost.textContent = 0;
            lostParse = 0;
        }
    }
}
