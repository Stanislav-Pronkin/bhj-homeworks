const menuLink = document.getElementsByClassName("menu__link");

for (let index = 0; index < menuLink.length; index++) {
    function getLink(index) {
        let link = menuLink[index];
        return link;
    }

    let linkClick = getLink(index);

    linkClick.onclick = function () {
        let menuItem = linkClick.closest(".menu__item");
        let menuSub = menuItem.querySelector(".menu_sub");
        let menuActiveNow = Array.from(document.querySelectorAll(".menu_active"));

        menuActiveNow.forEach(element => element.className = "menu menu_sub");
        if (menuSub !== null) {
            menuSub.className = ("menu menu_sub menu_active");
            return false;
        }
    }
}