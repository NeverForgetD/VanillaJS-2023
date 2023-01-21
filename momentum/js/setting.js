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

//테마 변경
/*
const themeBtn1 = document.querySelector(".theme-option:nth-child(1)");
const themeBtn2 = document.querySelector(".theme-option:nth-child(1)");
const themeBtn3 = document.querySelector(".theme-option:nth-child(1)");

const palette1 = document.querySelector(".palette-box1");
const palette2 = document.querySelector(".palette2");
const palette3 = document.querySelector(".palette3");
*/
function handleReset() {
    let reallyReset = confirm("정말로 리셋하시겠습니까?");
    if (reallyReset) {
        localStorage.clear();
    }
}
resetBtn.addEventListener("click", handleReset);