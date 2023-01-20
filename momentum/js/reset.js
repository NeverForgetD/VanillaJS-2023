const resetBtn = document.querySelector(".reset-btn");

function handleReset() {
    let reallyReset = confirm("정말로 리셋하시겠습니까?");
    if (reallyReset) {
        localStorage.clear();
    }
}
resetBtn.addEventListener("click", handleReset);