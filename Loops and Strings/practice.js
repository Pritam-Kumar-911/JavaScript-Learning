//for loops
for (let i=0;i<5 ; i++){
    console.log("Hello World!");
}

//For , while and do while loop works same as java 

//for-of loops used for arrays and string
let str = "Pritam Kumar";
for(let i of str){
    console.log(i);
}

//for-in loops used for objects
const student = {
    name : "Pritam Kumar",
    age : 21,
    cgpa : 3.412,
    isPass : true,
}
for(let i in student){
    console.log(i,"=",student[i])
}

//Practice Question 1

for(let i = 1 ; i<=100 ; i++){
    if(i%2 !=0){
        console.log(i);
    }
}

//Practice Question 2
let gameNum = 25;
let input = prompt("Guess the Number");

while(input != gameNum){
   input = prompt("Guess the Number");
} 
console.log("You guessed the right number!");