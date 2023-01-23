const themeBtn1 = document.getElementById("theme-btn1");
const themeBtn2 = document.getElementById("theme-btn2");
const themeBtn3 = document.getElementById("theme-btn3");
const themeBtn4 = document.getElementById("theme-btn4");

const palette1 = document.querySelector(".palette-box1");
const palette2 = document.querySelector(".palette-box2");
const palette4 = document.querySelector(".palette-box4");

const root = document.querySelector(":root");

const mainColor1 = "rgb(194, 222, 209)";
const subColor1 = "rgb(53, 66, 89)";
const ptColor1 = "rgb(205, 194, 174)";
const pt2color1 = " rgb(205, 194, 174)";

const mainColor2 = "rgb(20, 63, 107)";
const subColor2 = "rgb(254, 177, 57)";
const ptColor2 = " rgb(245, 83, 83";
const pt2color2 = "rgb(246, 245, 77)";

const mainColor3 = "rgb(223, 120, 97)";
const subColor3 = "rgb(212, 226, 212)";
const ptColor3 = "rgb(236, 179, 144)";
const pt2color3 = "rgb(252, 248, 232)";

const mainColor4 = "rgb(217, 228, 221)";
const subColor4 = "rgb(85, 85, 85)";
const ptColor4 = "rgb(205, 201, 195)"
const pt2color4 = "rgb(251, 247, 240)"

function themeChange1() {
    root.style.setProperty('--main-color', mainColor1);
    root.style.setProperty('--sub-color', subColor1);
    root.style.setProperty('--pt-color', ptColor1);
    root.style.setProperty('--pt2-color', pt2Color1);
}
//themeBtn1.addEventListener("mouseenter", themeChange1);
themeBtn1.addEventListener("click", themeChange1);

function themeChange2() {
    root.style.setProperty('--main-color', mainColor2);
    root.style.setProperty('--sub-color', subColor2);
    root.style.setProperty('--pt-color', ptColor2);
    root.style.setProperty('--pt2-color', pt2Color2);
}

//themeBtn2.addEventListener("mouseenter", themeChange2);
themeBtn2.addEventListener("click", themeChange2);

function themeChange3() {
    root.style.setProperty('--main-color', mainColor3);
    root.style.setProperty('--sub-color', subColor3);
    root.style.setProperty('--pt-color', ptColor3);
    root.style.setProperty('--pt2-color', pt2Color3);
}
//themeBtn3.addEventListener("mouseenter", themeChange3);
themeBtn3.addEventListener("click", themeChange3);

function themeChange4() {
    root.style.setProperty('--main-color', mainColor4);
    root.style.setProperty('--sub-color', subColor4);
    root.style.setProperty('--pt-color', ptColor4);
    root.style.setProperty('--pt2-color', pt2Color4);
}
//themeBtn4.addEventListener("mouseenter", themeChange3);
themeBtn4.addEventListener("click", themeChange4);