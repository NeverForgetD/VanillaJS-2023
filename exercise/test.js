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