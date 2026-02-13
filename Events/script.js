let button1 = document.querySelector("#btn1");
button1.onclick = () => {
    console.log("This button was logged!");
    let a = 25;
    console.log(a);
}

let div = document.querySelector("#div1");
div.onmouseover = () => {
    div.style.backgroundColor = 'red';
}

//over Inline html event handling and over Js event handling the priority goes to JS

//event object used to get info about event

button1.onclick = (e) => {
    console.log("This button was logged!");
    let a = 25;
    console.log(a);
    console.log(e.type);
    console.log(e.target);
}

//the best way to use event handing is event listeners in this way we can do multiple taks with same listeners

button1.addEventListener("click" , () => {
    console.log("This button is clicked by event listener!");
})