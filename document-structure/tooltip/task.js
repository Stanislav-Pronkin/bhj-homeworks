const text = Array.from(document.getElementsByClassName("has-tooltip"));

function toolTipNew() {
    let toolTip = document.createElement("div");
    toolTip.className = "tooltip";
    return toolTip;
}

text.forEach(element => {
    element.addEventListener("click", (event) => {
        const deleted = document.querySelector(".tooltip");
        if (deleted != null) {
            deleted.remove();
        } else {
            let hint = toolTipNew();
            let elementPos = element.getBoundingClientRect();

            hint.innerHTML = element.getAttribute("title");
            hint.classList.add("tooltip_active");

            element.insertAdjacentElement("afterEnd", hint);
            hint.setAttribute("style", `left: ${elementPos.left}px`);
            event.preventDefault();
        }
    })
})