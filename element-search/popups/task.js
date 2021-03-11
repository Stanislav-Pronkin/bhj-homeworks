let modal = document.getElementById("modal_main");

    modal.classList.add("modal_active");

let modalClose = document.querySelectorAll(".modal__close");
let closeBtn = Array.from(modalClose);

for (let index = 0; index < closeBtn.length; index++) {

    let x = closeBtn[index];

    x.onclick = function () {
        if (x.classList.contains("show-success")) {

            let success = document.getElementById("modal_success");

            success.classList.add("modal_active");
            modal.classList.remove("modal_active");
        } else {
            x.closest(".modal_active").className = "modal";
        }
    }
}