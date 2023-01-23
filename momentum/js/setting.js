const cog = document.querySelector(".setting-icon");
const settingScreen = document.querySelector(".setting-screen");
const themeBtn = settingScreen.querySelector(".theme-btn");
const resetBtn = document.querySelector(".reset-btn");
const exitBtn = document.querySelector(".exit-icon");
const themeScreen = document.querySelector(".theme-box");
const goBackBtn = document.querySelector(".arrow-up-icon");

function cogEffectStep1() {
    cog.classList.toggle("setting-icon-hidden");
    cog.classList.toggle("setting-icon-hover");
    cog.classList.remove("setting-icon-reshow");
}
function cogEffectStep2() {
    cog.classList.toggle("setting-icon-hidden");
    cog.classList.toggle("setting-icon-hover");
    cog.classList.add("setting-icon-reshow");
}

function showSetting() {
    settingScreen.classList.toggle("screen-show");
    settingScreen.classList.toggle("screen-hide");
}

cog.addEventListener("click", showSetting);
cog.addEventListener("click", cogEffectStep1);
exitBtn.addEventListener("click", showSetting);
exitBtn.addEventListener("click", cogEffectStep2);

/*
function settingShow() {
    //themeBtn.classList.toggle("hidden");
    //resetBtn.classList.toggle("hidden");
    settingScreen.classList.toggle("screen-show");
    settingScreen.classList.toggle("screen-hide");
    cog.classList.toggle("setting-icon-hidden");
    cog.classList.toggle("setting-icon-hover");
    cog.classList.toggle("setting-icon-reshow");
}
cog.addEventListener("click", settingShow);

function settingHide() {
    //themeBtn.classList.toggle("hidden");
    //resetBtn.classList.toggle("hidden");
    settingScreen.classList.toggle("screen-show");
    settingScreen.classList.toggle("screen-hide");
    cog.classList.toggle("setting-icon-hidden");
    cog.classList.toggle("setting-icon-hover");
    cog.classList.toggle("setting-icon-reshow")
}
exitBtn.addEventListener("click", settingHide);
*/
const themeOption = document.querySelector(".theme-option");

function themeToggle() {
    showSetting();
    themeScreen.classList.toggle("theme-show");
    themeScreen.classList.toggle("theme-hide");
}
themeBtn.addEventListener("click", themeToggle);

function goBackSetting() {
    themeScreen.classList.toggle("theme-show");
    themeScreen.classList.toggle("theme-hide");
    settingScreen.classList.toggle("screen-show");
    settingScreen.classList.toggle("screen-hide");
}
goBackBtn.addEventListener("click", goBackSetting);

function handleReset() {
    let reallyReset = confirm("정말로 리셋하시겠습니까?");
    if (reallyReset) {
        localStorage.clear();
        location.reload();
    }
}
resetBtn.addEventListener("click", handleReset);