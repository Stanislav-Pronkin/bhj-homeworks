const list = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");
const addBtn = document.getElementById("tasks__add");

function addTask() {
    let task = document.createElement("div");
    let taskTitle = document.createElement("div");

    task.className = "task";
    taskTitle.className = "task__title";
    list.insertAdjacentElement("afterbegin", task);
    task.innerHTML = "<a href=\"#\" class=\"task__remove\">&times;</a>";
    task.insertAdjacentElement("afterbegin", taskTitle);
    taskTitle.innerText = taskInput.value;
}

document.addEventListener("click", (event) => {
    event.preventDefault();
    let element = event.target;
    if (element.className === "task__remove") {
        element.parentElement.remove();
    } else if (element === addBtn && taskInput.value != false) {
        addTask();
        taskInput.value = "";
    }
})
