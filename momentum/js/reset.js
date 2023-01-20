const resetBtn = document.querySelector(".reset-btn");

function handleReset() {
    localStorage.clear();
}
resetBtn.addEventListener("click", handleReset);