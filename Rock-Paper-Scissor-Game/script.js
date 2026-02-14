let UserScore = 0;
let compScore = 0;

let choice = document.querySelectorAll(".structure");

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userSelection = choice.getAttribute("id");
        console.log("User :",userSelection);
        let computerAnswer = computerSelectionn();
        console.log("Computer :",computerAnswer);
        gameLogic(userSelection , computerAnswer);
    })
})

function computerSelectionn(){
    let array = ["Rock" , "Paper" , "Scissor"];
    let index = Math.floor(Math.random() * 3);
    let answer = array[index];
    return answer;
}

let userAcess = document.querySelector("#user");
let ComputerAccess = document.querySelector("#comp");
let text = document.querySelector("#box-text");
let outerbox = document.querySelector(".output-box")

function gameLogic(userSelection , computerAnswer){
    if(userSelection === computerAnswer){
        console.log("game draw!");
        text.innerText = `Game Drawn!`;
        outerbox.style.backgroundColor = "blue";

    }
    else if(userSelection === "Paper" && computerAnswer === "Rock"){
        console.log("user won!");
        UserScore++;
        userAcess.innerText = UserScore;
        text.innerText = `You Won! ${userSelection} beats ${computerAnswer}`;
        outerbox.style.backgroundColor = "green";

    }
    else if(userSelection === "Rock" && computerAnswer === "Scissor"){
        console.log("user won!");
        UserScore++;
        userAcess.innerText = UserScore;
        text.innerText = `You Won! ${userSelection} beats ${computerAnswer}`;
        outerbox.style.backgroundColor = "green";
    }
    else{
        console.log("computer won!");
        compScore++;
        ComputerAccess.innerText = compScore;
        text.innerText = `You Lost! ${computerAnswer} beats ${userSelection}`;
        outerbox.style.backgroundColor = "red";
    }
}