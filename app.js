let addBtn = document.getElementById("add-task-button");

addBtn.addEventListener("click", addTask);

let count = 0;

function addTask() {
    let todoList = document.getElementById("todo-list");
    let newTask = document.createElement("div");
    let taskName = document.getElementById("task-name");
    if (taskName.value.length != 0 ) {
        todoList.appendChild(newTask);
        count += 1;
        newTask.className = "todo-task";
        newTask.innerHTML = "<span id='task-view-name'>" + taskName.value + "</span>" + '<span class="icon-checkbox-unchecked checkbox"' + ' id="box' + count.toString() + '"' + ' onclick = checkUncheck(this.id)></span>'; //text content didn't work, why?
        taskName.value = null;
    } else {
        alert("What are you even? Atleast enter smth oooof");
    }
}

/*let checkbox = document.getElementById("checkbox");


document.getElementsByClassName("checkbox").addEventListener("click", checkUncheck);/*/

function checkUncheck(buttonNo) {
    /*if(checkbox.classList.contains("icon-checkbox-unchecked"))
        checkbox.className = "icon-checkbox-checked checkbox"
*/
let checkbox = document.getElementById(buttonNo);

if(checkbox.className == "icon-checkbox-checked checkbox"){
    checkbox.className = "icon-checkbox-unchecked checkbox";
    document.getElementById('task-view-name').classList.remove('striked')
}
else {
    checkbox.className = "icon-checkbox-checked checkbox";
    document.getElementById('task-view-name').classList.add('striked')

}
}
