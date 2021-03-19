const rotators = Array.from(document.getElementsByClassName("rotator"));
const rotator = Array.from(rotators[0].children);

function changeText(textArr) {
    let activeText = textArr.findIndex(function (value) {
        return value.classList.contains("rotator__case_active");
    })
    textArr[activeText].classList.remove("rotator__case_active");
    activeText = activeText + 1;
    if (activeText === textArr.length) {
        activeText = 0;
    }
    textArr[activeText].classList.add("rotator__case_active");
}

setInterval(changeText, 1000, rotator);