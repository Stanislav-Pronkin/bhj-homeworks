const cartProducts = document.querySelector(".cart__products");

function addProduct() {
    let button = event.target;
    let parent = button.parentElement;
    let quantity = parent.querySelector(".product__quantity-value");

    if (button.innerText === "+") {
        quantity.textContent++;
    } else if (button.innerText === "-" && quantity.textContent > 1) {
        quantity.textContent--;
    }
}

function addBasket(product) {

    let image = product.getElementsByTagName("img");
    let quantity = Number(product.getElementsByClassName("product__quantity-value")[0].textContent);
    let cartAdded = Array.from(cartProducts.getElementsByClassName("cart__product"));
    let cartProductId;
    
    cartAdded.forEach(element => {
        if (element.dataset.id === product.dataset.id) {
            cartProductId = Number(element.dataset.id);
            element.querySelector(".cart__product-count").textContent = Number(element.querySelector(".cart__product-count").textContent) + quantity;
        }
    })

    if (cartProductId === undefined) {
        let cartProduct = document.createElement("div");
        let productImage = document.createElement("img");
        let productCount = document.createElement("div");

        cartProduct.className = "cart__product";
        cartProduct.dataset.id = product.dataset.id;

        productImage.className = "cart__product-image";
        productImage.setAttribute("src", image[0].getAttribute("src"));

        productCount.className = "cart__product-count";
        productCount.innerText += quantity;

        cartProducts.insertAdjacentElement("beforeend", cartProduct);
        cartProduct.insertAdjacentElement("afterbegin", productImage);
        cartProduct.insertAdjacentElement("beforeend", productCount);
    }
}

document.addEventListener("click", (event) => {
    let product = event.target.closest(".product");
    
    if (event.target.classList.contains("product__quantity-control")) {
        addProduct();
    } else if (event.target.classList.contains("product__add")) {
        addBasket(product);
    }
})