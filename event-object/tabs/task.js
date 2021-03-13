const tab = Array.from(document.getElementsByClassName("tab"));
const tabContent = Array.from(document.getElementsByClassName("tab__content"));

tab.forEach(item => item.addEventListener("click", () => {
    document.querySelector(".tab_active").classList.remove("tab_active");
    document.querySelector(".tab__content_active").classList.remove("tab__content_active");

    let activeTab = tab.indexOf(item);

    tabContent[activeTab].classList.add("tab__content_active");
    item.classList.add("tab_active");
}))