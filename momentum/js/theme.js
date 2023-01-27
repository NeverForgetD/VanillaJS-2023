const themeBtn1 = document.getElementById("theme-btn1");
const themeBtn2 = document.getElementById("theme-btn2");
const themeBtn3 = document.getElementById("theme-btn3");
const themeBtn4 = document.getElementById("theme-btn4");
const themeBtn5 = document.getElementById("theme-btn5");

const root = document.querySelector(":root");

const mainColor1 = "black";
const subColor1 = "white";
const ptColor1 = "gray";
const pt2Color1 = "yellow";

const mainColor2 = "rgb(20, 63, 107)";
const subColor2 = "rgb(254, 177, 57)";
const ptColor2 = " rgb(245, 83, 83";
const pt2Color2 = "rgb(246, 245, 77)";

const mainColor3 = "rgb(245, 237, 206)";
const subColor3 = "rgb(26, 0, 0)";
const ptColor3 = "rgb(137, 196, 225)";
const pt2Color3 = "rgb(88, 40, 127)";

const mainColor4 = "rgb(0,98,65)";
const subColor4 = "rgb(212,233,226)";
const ptColor4 = "rgb(30, 57, 50)";
const pt2Color4 = "rgb(0, 117, 74)";

const mainColor5 = "rgb(226, 27, 77)";
const subColor5 = "rgb(255, 211, 0)";
const ptColor5 = "rgb(244, 235, 238)";
const pt2Color5 = "rgb(0, 11, 141)";

const allThemeBtns = document.querySelectorAll(".setting-btn")
function deactivateThemeBtn() {
    let i = 0;
    for (i = 0; i < allThemeBtns.length; i++) {
        allThemeBtns[i].classList.remove("color-setting-btn-active");
    }
}

function themeChange1() {
    root.style.setProperty('--main-color', mainColor1);
    root.style.setProperty('--sub-color', subColor1);
    root.style.setProperty('--pt-color', ptColor1);
    root.style.setProperty('--pt2-color', pt2Color1);

    deactivateThemeBtn();
    themeBtn1.classList.add("color-setting-btn-active");
    localStorage.setItem("currentTheme","theme1"); 
}
//themeBtn1.addEventListener("mouseenter", themeChange1);
themeBtn1.addEventListener("click", themeChange1);

function themeChange2() {
    root.style.setProperty('--main-color', mainColor2);
    root.style.setProperty('--sub-color', subColor2);
    root.style.setProperty('--pt-color', ptColor2);
    root.style.setProperty('--pt2-color', pt2Color2);

    deactivateThemeBtn();
    themeBtn2.classList.add("color-setting-btn-active");
    localStorage.setItem("currentTheme","theme2");
}

//themeBtn2.addEventListener("mouseenter", themeChange2);
themeBtn2.addEventListener("click", themeChange2);

function themeChange3() {
    root.style.setProperty('--main-color', mainColor3);
    root.style.setProperty('--sub-color', subColor3);
    root.style.setProperty('--pt-color', ptColor3);
    root.style.setProperty('--pt2-color', pt2Color3);

    deactivateThemeBtn();
    themeBtn3.classList.add("color-setting-btn-active");
    localStorage.setItem("currentTheme","theme3");
}
//themeBtn3.addEventListener("mouseenter", themeChange3);
themeBtn3.addEventListener("click", themeChange3);

function themeChange4() {
    root.style.setProperty('--main-color', mainColor4);
    root.style.setProperty('--sub-color', subColor4);
    root.style.setProperty('--pt-color', ptColor4);
    root.style.setProperty('--pt2-color', pt2Color4);

    deactivateThemeBtn();
    themeBtn4.classList.add("color-setting-btn-active");
    localStorage.setItem("currentTheme","theme4");
}
//themeBtn4.addEventListener("mouseenter", themeChange4);
themeBtn4.addEventListener("click", themeChange4);

function themeChange5() {
    root.style.setProperty('--main-color', mainColor5);
    root.style.setProperty('--sub-color', subColor5);
    root.style.setProperty('--pt-color', ptColor5);
    root.style.setProperty('--pt2-color', pt2Color5);

    deactivateThemeBtn();
    themeBtn5.classList.add("color-setting-btn-active");
    localStorage.setItem("currentTheme","theme5");
}
//themeBtn5.addEventListener("mouseenter", themeChange5);
themeBtn5.addEventListener("click", themeChange5);

const THEME_STATUS = localStorage.getItem("currentTheme");
if (THEME_STATUS == "theme1") {
    themeChange1();
}
else if (THEME_STATUS == "theme2") {
    themeChange2();
}
else if (THEME_STATUS == "theme3") {
    themeChange3();
}
else if (THEME_STATUS == "theme4") {
    themeChange4();
}
else if (THEME_STATUS == "theme5") {
    themeChange5();
}