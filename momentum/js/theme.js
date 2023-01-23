/*
    --main-color1 : rgb(235, 69, 95)
    --sub-color1 : rgb(252, 255, 231)
    --pt-color1 : rgb(186, 215, 233)
    --pt2-color1 : rgb(43, 52, 103)


    --main-color2 : rgb(20, 63, 107)
    --sub-color2 : rgb(245, 83, 83)
    --pt-color2 : rgb(254, 177, 57)
    --pt2-color2 : rgb(246, 245, 77)

    --main-color3 : rgb(254, 249, 167)
    --sub-color3 : rgb(250, 194, 19)
    --pt-color3 : rgb(247, 126, 33)
    --pt2-color3 : rgb(214, 28, 78)
*/

const themeBtn1 = document.getElementById("theme-btn1");
const themeBtn2 = document.getElementById("theme-btn2");
const themeBtn3 = document.getElementById("theme-btn3");

const palette1 = document.querySelector(".palette-box1");
const palette2 = document.querySelector(".palette-box2");
const palette3 = document.querySelector(".palette-box3");

const root = document.querySelector(":root");

const mainColor1 = "rgb(235, 69, 95)";
const subColor1 = "rgb(252, 255, 231)";
const ptColor1 = "rgb(186, 215, 233)";
const pt2color1 = "rgb(43, 52, 103)"

const mainColor2 = "rgb(20, 63, 107)";
const subColor2 = "rgb(245, 83, 83)";
const ptColor2 = "rgb(254, 177, 57)";
const pt2color2 = "rgb(246, 245, 77)";

const mainColor3 = "rgb(254, 249, 167)";
const subColor3 = "rgb(250, 194, 19)";
const ptColor3 = "rgb(247, 126, 33)";
const pt2color3 = "rgb(214, 28, 78)";

function themeChange1() {
    root.style.setProperty('--main-color', mainColor1);
    root.style.setProperty('--sub-color', subColor1);
    root.style.setProperty('--pt-color', ptColor1);
    root.style.setProperty('--pt2-color', pt2Color1);
}
themeBtn1.addEventListener("mouseenter", themeChange1);
themeBtn1.addEventListener("click", themeChange1);

function themeChange2() {
    root.style.setProperty('--main-color', mainColor2);
    root.style.setProperty('--sub-color', subColor2);
    root.style.setProperty('--pt-color', ptColor2);
    root.style.setProperty('--pt2-color', pt2Color2);
}

themeBtn2.addEventListener("mouseenter", themeChange2);
themeBtn2.addEventListener("click", themeChange2);

function themeChange3() {
    root.style.setProperty('--main-color', mainColor3);
    root.style.setProperty('--sub-color', subColor3);
    root.style.setProperty('--pt-color', ptColor3);
    root.style.setProperty('--pt2-color', pt2Color3);
}
themeBtn3.addEventListener("mouseenter", themeChange3);
themeBtn3.addEventListener("click", themeChange3);




