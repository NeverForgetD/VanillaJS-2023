const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = document.querySelector(".todo-form input");
const TODOS_KEY = "todos"
let toDos = [];
let doneToDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delToDo(event) {
    const delLi = event.target.parentElement.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(delLi.id));
    delLi.remove();
    saveToDos();
}

function monthGen(i) {
    if (i === 0) {
        return "JAN";
    }
    if (i === 1) {
        return "FEB";
    }
    if (i === 2) {
        return "MAR";
    }
    if (i === 3) {
        return "APR";
    }
    if (i === 4) {
        return "MAY";
    }
    if (i === 5) {
        return "JUN";
    }
    if (i === 6) {
        return "JUL";
    }
    if (i === 7) {
        return "AUG";
    }
    if (i === 8) {
        return "SEP";
    }
    if (i === 9) {
        return "OCT";
    }
    if (i === 10) {
        return "NOV";
    }
    if (i === 11) {
        return "DEC";
    } 
} // from clock.js
function saveDoneToDos(event) {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    const monthCode = time.getMonth();
    const month = monthGen(monthCode);
    const date = String(time.getDate());

    const timeline = `${hour}:${minute}  ${month} ${date}`;
    const text = event.target.parentElement.parentElement.firstChild.firstChild.innerText;

    const doneToDoObj = {
        timeline: timeline,
        text: text
    };
    let countOnStock = localStorage.getItem("count");
    // localStorage.setItem("count", 0); this on greeting.js
    // init count when login

    localStorage.setItem(countOnStock, JSON.stringify(doneToDoObj));
    let numOfDone = parseInt(countOnStock);
    numOfDone = numOfDone + 1;
    localStorage.setItem("count", JSON.stringify(numOfDone));
}

function paintToDo(newToDo) {
    const toDoBox = document.createElement("div");
    toDoBox.classList.add("todo-box");
    toDoBox.id = newToDo.id

    const toDoLineBox = document.createElement("div");
    toDoLineBox.classList.add("todo-line-box");

    const toDoLine = document.createElement("span");
    toDoLine.innerText = newToDo.text;
    
    const toDoBtnBox = document.createElement("div");

    const toDoDoneBtn = document.createElement("button");
    toDoDoneBtn.innerText = "Complete!";
    toDoDoneBtn.classList.add("color-btn");

    const toDoDelBtn = document.createElement("button");
    toDoDelBtn.innerText = "Delete";
    toDoDelBtn.classList.add("color-btn");
    toDoDelBtn.classList.add("del-btn");

    toDoBox.appendChild(toDoLineBox);
    toDoLineBox.appendChild(toDoLine);

    toDoBox.appendChild(toDoBtnBox);
    toDoBtnBox.appendChild(toDoDoneBtn);
    toDoBtnBox.appendChild(toDoDelBtn);

    toDoList.appendChild(toDoBox);

    toDoDoneBtn.addEventListener("click", saveDoneToDos);
    toDoDoneBtn.addEventListener("click", delToDo);
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