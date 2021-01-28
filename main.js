
var task = document.getElementById("inputTask");
var taskList = document.getElementById("taskList");
var list = [];
let id = 0;
function addTask(){

// display error if input is empty
if (task.value.length == 0){
    document.getElementById("error").innerHTML = "You forgot to enter a task!";

} else { 
    id = id + 1;
    document.getElementById("error").innerHTML = "";
    let enteredTask = {text: task.value, id: id, checked: false, htmlValue: ""};
    const htmlTask = '<li class="list-group-item list-group-item-primary"><input onclick="handleCheckboxChange(this);" id="' + enteredTask.id + '" type="checkbox"> ' + enteredTask.text + ' <button class="delButton" onclick="deleteItem(this)" id="' + enteredTask.id +'">Delete</button></li>';
    enteredTask.htmlValue = htmlTask;
    list.push(enteredTask);
// delete previously displayed tasks
    taskList.innerHTML = ""; 
// display task list   
    taskList.innerHTML = list.map(listElem => listElem.htmlValue).join("");
    task.value = "";
}};

function handleCheckboxChange(checkbox) {
    list = list.map(elem => {
        if (elem.id == checkbox.id) {
            elem.checked = !elem.checked;
        }
        return elem
    });
    taskList.innerHTML = list.map(listElem => {
        const newHtml = '<li class="list-group-item list-group-item-primary"><input '+ (listElem["checked"] ? 'checked' : '') +' onclick="handleCheckboxChange(this);" id="' + listElem.id + '" type="checkbox"> ' + listElem.text + ' <button class="delButton" onclick="deleteItem(this)" id="' + listElem.id +'">Delete</button></li>';
        listElem.htmlValue = newHtml;
        return newHtml;
    }).join("");
}

// delete an item from a list
function deleteItem(htmlElem){
    list = list.filter(listElem => listElem.id != htmlElem.id);
    taskList.innerHTML = list.map(elem => elem.htmlValue).join("");
};

// click enter to add task to list
task.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add-task-btn").click();
  }});
