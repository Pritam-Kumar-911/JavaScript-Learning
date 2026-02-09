//print
console.log("Hello world!");

//variable store

//we can also store variables without any keyword 
name = "pritam Kumar";
age = 21;
IsStudent = true;

console.log(name);
console.log(age);
console.log(IsStudent);

//var is not a conventional for declaring the variable var is obsolete in js and variable can be defined again
//var has global scope
var univerisy = "Szabist";

//let is the conventional way to store a variable
//let has block scope
let surename = "Kumar";
console.log(surename);

//const is used for constant declaration
//const has also block scope
const PI = 3.142;
console.log(PI);

// we can check type of data using
typeof variableName;

//we can make collections which are basically object which hold data of multiple variables
const student = {
    name : "Pritam Kumar",
    age : 21,
    height : 5.7,
    isPass : true,
}

console.log(student);

console.log(student.name);

//Practice question 1
const product = {
    name : "Parker Jotter Standard CT Ball Pen (BLACK)",
    rating : 4.2,
    price : 270,
    discount : 0.50,
}

console.log(product);

//Practice Question 2

const profile = {
    name : "ShradhaKhapra",
    posts : 195,
    BigInt : 56900000,
    following : 4,
}

console.log(profile);