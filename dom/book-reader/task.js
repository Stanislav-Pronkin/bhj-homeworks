const control = Array.from(document.querySelector(".book__control").children);
const book = document.getElementById("book");

function changeFontSize(button) {
    let size = button.getAttribute("data-size");
    
    if (size === "small") {
        book.className = "book book_fs-small";
    } else if (size === "big") {
        book.className = "book book_fs-big";
    } else {
        book.className = "book";
    }
}

control.forEach(element => {
    element.addEventListener("click", (event) => {
        changeFontSize(element);
        event.preventDefault();
    });
})