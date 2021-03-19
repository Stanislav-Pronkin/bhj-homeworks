const reveal = Array.from(document.getElementsByClassName("reveal"));

let showReveal = function () {
    reveal.forEach(element => {
        const viewportHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealBottom = element.getBoundingClientRect().bottom;

        if (revealBottom < viewportHeight && revealTop > 0) {
            element.classList.add("reveal_active");
        } else {
            element.classList.remove("reveal_active");
        }
    });

}

document.addEventListener("scroll", showReveal);