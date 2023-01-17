//alert("Hi");

console.log("hello");

const a = "NeverChange";
let b = "CanChanged";

// boolean
// true, false. null, undefined

//arrays
const primeNums = [2, 3, 5,];
console.log(primeNums);
console.log(primeNums[2]);
primeNums.push(7);
console.log(primeNums);

//objects
/*
const userName = "JY";
const userAge = 25;
const userGirlfriend = null;
*/
const user = {
    name: "JY",
    age: 25,
    girlfriend: null
};

console.log(user.name);
user.hobby = "game";
console.log(user);

//function
function sayHello() {
    console.log("Hello");
}
sayHello();

function myNameIs(name) {
    console.log("My name is", name)
};
myNameIs(user.name);

function add(a, b) {
    return a+b;
}
console.log(add(1,2));

//conditions
//parseInt() _ sting into number
//prompt() _ take Input
//isNaN() _ check if it's Not a Number!
function isItTrue(condition) {
    if(condition == true) {
        console.log("It's True");
    }
    else {
        console.log("It's False");
    }
}
isItTrue(10 > 5);
isItTrue(5 > 10);
isItTrue(5 == 10);

console.log(isNaN(user.age));
console.log(isNaN(user.name));

// && and operator
// || or operator

console.dir(document);
console.log(document.title);

document.title = "Hello";

console.dir(document.getElementsByClassName("line"));

const title = document.getElementById("title");
console.log(title.id);
console.log(title.className);
console.log(title);
console.log(typeof(title));
const text = document.getElementsByClassName("text");
console.log(text);

// We will use only querrySelector!
const time = document.querySelector(".main-box .line:first-child");
console.log(time);
console.log(time.innerHTML);
console.dir(time);
console.log(time.style);

// Event
/*
function handleClick() {
    console.log("Clikced!");
    time.style.color = "coral";
};
time.addEventListener("click", handleClick);

function handleMouseEnter() {
    console.log("enter");
    time.innerText = "In";
};
function handleMouseLeave() {
    console.log("leave");
    time.innerText = "out";
};
time.addEventListener("mouseenter", handleMouseEnter);
time.addEventListener("mouseleave", handleMouseLeave);

//time.onmouseenter = handleMouseEnter;
//time.onmouseleave = handleMouseLeave;

function handleWindowResize() {
    document.body.style.backgroundColor = "coral";
};
window.addEventListener("resize", handleWindowResize);

function handleWifiOff() {
    alert("no wifi...");
}
window.addEventListener("offline", handleWifiOff);
*/

const box = document.querySelector(".main-box");
const mainText = document.querySelector(".main-box h1");

function handleClick() {
    console.log("clikced");
    clickedClass = "clickActive";
    
    // using toggle!
    mainText.classList.toggle(clickedClass);

    // using class + CSS & JS
    /*
    if (mainText.classList.contains(clickedClass)) {
        mainText.classList.remove(clickedClass);
    }
    else {
        mainText.classList.remove(clickedClass);
        mainText.classList.add(clickedClass);
    }
    */

    // using if/else
    /*
    const currentColor = mainText.style.color;
    let newColor;
    if (currentColor == "white") {
        newColor = "coral";
    }
    else {
        newColor = "white";
    }
    mainText.style.color = newColor;
    */
};
box.addEventListener("click", handleClick);