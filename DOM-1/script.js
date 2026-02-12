//DOM Manipulation

//Selecting with id
let header = document.getElementById("heading1");
console.log(header);

//selecting with class
let classWiseSelection = document.getElementsByClassName("heading-class");
console.dir(classWiseSelection);
console.log(classWiseSelection);

//selecting with tags
let paragh = document.getElementsByTagName("p");
console.log(paragh);

//query selector
let elemets = document.querySelector("p"); //return first p
console.log(elemets);

let allElements = document.querySelectorAll("p") //returns all p
console.log(allElements);

let classElemets = document.querySelector(".heading-class");
console.log(classElemets);

let classElementsAll = document.querySelectorAll(".heading-class");
console.log(classElementsAll);

let idElement = document.querySelector("#heading1");
console.log(idElement);

//Properties

//tagName (it return tag names)
console.log(idElement.tagName);

//innterText (it return inner text)
let div = document.querySelector("div");
console.log(div.innerHTML);

//we can also set 
// div.innerText = "This text is updated";
// console.log(div.innerText);

// div.innerHTML = "<div>Inner div</div>"; //this creates a nested div
// console.log(div.innerHTML);

//textContent is used as same of innerText but i can also read hidden content

//Pratice Question 1
let Pratice = document.querySelector("#practice-1");
console.dir(Pratice.innerText);
Pratice.innerText = Pratice.innerText + " from Apna College";

//Practice Question 2
let boxs = document.querySelectorAll(".box");
boxs[0].innerText = "New text 1";
boxs[1].innerText = "New text 2";
boxs[2].innerText = "New text 3";
//we could use loops for this purpose

