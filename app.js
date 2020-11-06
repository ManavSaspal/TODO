let addBtn = document.getElementById("add-task-button");

addBtn.addEventListener("click", addTask);

let count = 0;

function addTask() {
    count += 1;
    let todoList = document.getElementById("todo-list");

    let newTask = document.createElement("div");
    todoList.appendChild(newTask);
    newTask.className = "todo-task";
    let taskName = document.getElementById("task-name");
    newTask.innerHTML = taskName.value + '<span class="icon-checkbox-unchecked checkbox"' + ' id="box' + count.toString() + '"' + ' onclick = checkUncheck(this.id)></span>'; //text content didn't work, why?
}

/*let checkbox = document.getElementById("checkbox");


document.getElementsByClassName("checkbox").addEventListener("click", checkUncheck);/*/

function checkUncheck(buttonNo) {
    /*if(checkbox.classList.contains("icon-checkbox-unchecked"))
        checkbox.className = "icon-checkbox-checked checkbox"
*/
let checkbox = document.getElementById(buttonNo);

if(checkbox.className == "icon-checkbox-checked checkbox")
    checkbox.className = "icon-checkbox-unchecked checkbox";
else {
    checkbox.className = "icon-checkbox-checked checkbox";

    }
}