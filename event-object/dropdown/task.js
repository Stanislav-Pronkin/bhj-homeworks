const dropDown = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const dropDownLink = Array.from(document.getElementsByClassName("dropdown__link"));


dropDown.addEventListener("click", () => {
    list.classList.add("dropdown__list_active")
});

dropDownLink.forEach(item => item.addEventListener("click", (event) => {
    dropDown.textContent = item.textContent;
    list.classList.remove("dropdown__list_active");
    event.preventDefault();
}));
