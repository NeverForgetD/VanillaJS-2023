// alert("refresh");
const loginInput = document.querySelector(".login-form input");
const loginForm = document.querySelector(".login-form");
const greeting = document.querySelector(".greeting");
const resetBtn = document.querySelector(".reset-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedusername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    showGreeting();
}

function showGreeting() {
    if (savedusername === null) {
        greeting.innerText = `Hello ${loginInput.value}!`;
    }
    else {
        greeting.innerText = `Hello ${savedusername}!`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleReset() {
    localStorage.removeItem(USERNAME_KEY);
}
resetBtn.addEventListener("click", handleReset);

if (savedusername === null) {
    // no username, after reset
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    showGreeting()
}