const loader = document.getElementById("loader");
const items = document.getElementById("items");
let xhr = new XMLHttpRequest;
let answer;
let data;

function addValute(code, value) {
    let item = document.createElement("div");
    let itemCode = document.createElement("div");
    let itemValue = document.createElement("div");
    let itemCurrency = document.createElement("div");

    item.className = "item";
    itemCode.className = "item__code";
    itemCode.innerText = code;
    itemValue.className = "item__value";
    itemValue.innerText = value;
    itemCurrency.className = "item__currency";
    itemCurrency.innerText = "руб.";

    items.insertAdjacentElement("afterbegin", item);
    item.insertAdjacentElement("beforeend", itemCurrency);
    item.insertAdjacentElement("afterbegin", itemValue);
    item.insertAdjacentElement("afterbegin", itemCode);
}

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        loader.classList.remove("loader_active");  
        answer = JSON.parse(this.response);
        data = answer.response.Valute;
        for (let key in data) {
            let valute = data[key];
            addValute(valute.CharCode, valute.Value);    
        }
    }
}