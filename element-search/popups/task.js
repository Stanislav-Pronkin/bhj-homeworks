let modal = document.getElementById("modal_main");

function getShow() {
    modal.className = "modal modal_active";
}

getShow();

let modalClose = document.querySelectorAll(".modal__close");
let closeBtn = Array.from(modalClose);

for (let index = 0; index < closeBtn.length; index++) {
    function getClose(index) {
        let close = closeBtn[index];
        return close;
    }

    let x = getClose(index);

    x.onclick = function () {
        if (x.className === "btn btn_danger modal__close show-success") {

            let success = document.getElementById("modal_success");

            success.className = "modal modal_active";
            modal.className = "modal";
        } else {
            x.closest(".modal_active").className = "modal";
        }


    }
}