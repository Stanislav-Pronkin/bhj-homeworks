let slider = Array.from(document.querySelectorAll(".slider__item"));
const nextBtn = document.querySelector(".slider__arrow_next");
const prevBtn = document.querySelector(".slider__arrow_prev");

let indexActive;
for (i = 0; i < slider.length; i++) {
    if (slider[i].className === "slider__item slider__item_active") {
        indexActive = slider.indexOf(slider[i]);
    }
}

nextBtn.onclick = function () {
    slider[indexActive].className = "slider__item";
    indexActive = indexActive + 1;
    if (indexActive === slider.length) {
        indexActive = 0;
    }
    slider[indexActive].className = "slider__item slider__item_active";
}

prevBtn.onclick = function () {
    slider[indexActive].className = "slider__item";
    indexActive = indexActive - 1;
    if (indexActive < 0) {
        indexActive = slider.length - 1;
    }
    slider[indexActive].className = "slider__item slider__item_active";
}