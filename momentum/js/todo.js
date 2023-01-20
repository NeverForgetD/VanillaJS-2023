const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = document.querySelector(".todo-form input");
const TODOS_KEY = "todos"
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delToDo(event) {
    const delLi = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(delLi.id));
    delLi.remove();
    saveToDos();
}

function paintToDo(newToDo) {
    const toDoBox = document.createElement("li");
    toDoBox.id = newToDo.id
    const toDoLine = document.createElement("span");
    toDoLine.innerText = newToDo.text;
    toDoBox.appendChild(toDoLine);
    const toDoDelBtn = document.createElement("button");
    toDoDelBtn.innerText = "X";
    toDoDelBtn.classList.add("color-btn");
    toDoBox.appendChild(toDoDelBtn);
    toDoList.appendChild(toDoBox);
    toDoDelBtn.addEventListener("click", delToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text:newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);

    paintToDo(newToDoObj);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(element => {
        paintToDo(element);
    });
}