let slider = Array.from(document.querySelectorAll(".slider__item"));
const nextBtn = document.querySelector(".slider__arrow_next");
const prevBtn = document.querySelector(".slider__arrow_prev");


let indexActive = slider.findIndex(function(value) {
    return value.classList.contains("slider__item_active");
})

nextBtn.onclick = function () {
    slider[indexActive].classList.remove("slider__item_active");
    indexActive = indexActive + 1;
    if (indexActive === slider.length) {
        indexActive = 0;
    }
    slider[indexActive].classList.add("slider__item_active");
}

prevBtn.onclick = function () {
    slider[indexActive].classList.remove("slider__item_active");
    indexActive = indexActive - 1;
    if (indexActive < 0) {
        indexActive = slider.length - 1;
    }
    slider[indexActive].classList.add("slider__item_active");
}