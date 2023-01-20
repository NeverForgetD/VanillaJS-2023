const loginInput = document.querySelector(".login-form input");
const loginForm = document.querySelector(".login-form");
const greeting = document.querySelector(".greeting");

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

if (savedusername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    showGreeting()
}