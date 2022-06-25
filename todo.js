const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const FirstCardBody = document.querySelector(".card-body")[0];
const SecondCardBody = document.querySelector(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addtodo);

}

function addtodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        showAlert("danger", "Lütfen bir todo giriniz");
    }
    else {
        addTodoToUI(newTodo);
    }
    e.preventDefault();
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    FirstCardBody.appendChild(alert);
}

function addTodoToUI(newTodo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>"
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";
}



