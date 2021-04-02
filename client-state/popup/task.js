let modal = document.getElementById("subscribe-modal");

function getCookie(name) {
    const cookies = document.cookie.split('; ');

    for(const i of cookies) {
        const [key, value] = i.split('=');
        if (key === name) {
            return value;
        }
    }
    return null
}

if (getCookie('checkmodal') !== 'close') {
    modal.classList.add("modal_active");
}

const modalClose = document.querySelector(".modal__close");

modalClose.onclick = function() {
    modalClose.closest(".modal_active").className = "modal";
    document.cookie = 'checkmodal=close';
}