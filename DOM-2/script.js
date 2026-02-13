// let div = document.querySelector("#box");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// div.setAttribute("id", "newBox");
// let newID = div.getAttribute("id");
// console.log(newID);

// let box1 = document.querySelector("#box");

// box1.style.backgroundColor = "red";

// box1.style.fontSize = "20px";

// box1.innerText = "Hello!";

// insert items

// let newbtn = document.createElement("button");
// newbtn.innerText = "Click Me!";

// let newDiv = document.querySelector("#box");

// newDiv.before(newbtn);

// //remove items

// newbtn.remove();

//Practice Question 1

let newbutton = document.createElement("button");
newbutton.innerText = "Click Me!";

newbutton.style.backgroundColor = "red";
newbutton.style.color = "white";

let get = document.querySelector("body");
get.prepend(newbutton);

//Practice Question 2


