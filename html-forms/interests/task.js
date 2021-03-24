const check = Array.from(document.querySelectorAll(".interest__check"));

check.forEach(element => {
    element.addEventListener("change", (event) => {
        let parent = event.target.closest(".interest");
        let child = Array.from(parent.querySelectorAll(".interest__check"));
        
        child.forEach(item => {
            item.checked = event.target.checked;
        })   
    })
})