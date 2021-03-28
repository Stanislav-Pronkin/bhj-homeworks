const text = Array.from(document.getElementsByClassName("has-tooltip"));

function toolTipNew() {
    let toolTip = document.createElement("div");
    toolTip.className = "tooltip";
    return toolTip;
}

text.forEach(element => {
    element.addEventListener("click", (event) => {
        const deleted = document.querySelector(".tooltip_active");
        let tooltipActive = element.nextElementSibling;

        function tooltipAdd() {
            let hint = toolTipNew();
            let elementPos = element.getBoundingClientRect();

            hint.innerHTML = element.getAttribute("title");
            hint.classList.add("tooltip_active");

            element.insertAdjacentElement("afterEnd", hint);
            hint.setAttribute("style", `left: ${elementPos.left}px`);
        }

        function tooltipShow() {
            if (tooltipActive != null) {
                if (tooltipActive.classList.contains("tooltip")) {
                    tooltipActive.classList.toggle("tooltip_active");
                } else {
                    tooltipAdd();
                }
            } else {
                tooltipAdd();
            }
        }

        if (deleted != null) {
            tooltipShow();
            deleted.classList.remove("tooltip_active");
        } else {
            tooltipShow();
        }
        event.preventDefault();
    })
})