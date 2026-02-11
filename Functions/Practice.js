
//Function Defination
function myFunction(){
    console.log("Hello my name is pritam");
    console.log("This is a function");
}
//Function call
myFunction();

//passing values
function helloWorld(msg){ //parameter
    console.log(msg);
}
helloWorld("Hello world!"); //argument

//returning a value
function sum(num1 , num2){
    let s = num1+num2;
    return s;
}
let answer = sum(2, 6);
console.log(answer);

//arrow functions (modern js)
const arrowFunction = (x , y)=>{
    console.log(x+y);
}
console.log(arrowFunction);
arrowFunction(8 , 1);

//Pracice Question 1
function Vowels(value){
    let vowelscount = 0;
    for(let i of value){
        if(i === 'a'|| i==='e'|| i==='i'|| i==='o'|| i==='u'){
            vowelscount++;
        }
    }
    return vowelscount;
}
let count = Vowels("karachi");
console.log(count);

//Pracitce Question 2 (Perform the task but with arrow function)

const arrowVowels = (str)=>{
    let vowelscount = 0;
    for(let i of str){
        if(i === 'a'|| i==='e'|| i==='i'|| i==='o'|| i==='u'){
            vowelscount++;
        }
    }
    return vowelscount;
}
console.log(arrowVowels("hello"));

//array for each and call back funtions
let stringArray = ["karachi" , "Lahore" , "Islamabad" , "Faisalabad"];
stringArray.forEach((value , i , arr) => {
    console.log(value , i , arr);
})
//note that for each is the higher order function (conceptual question asked in interviews)

//Practise Question 1
let givenArr = [2,4,8,10,20];
givenArr.forEach((value) => {
    console.log("Square of ",value," is",value*value);
})

//array map method (its works same as of forEach but in for each original array is being considered but in map a new array is created)
  let example = [5,36,345,21];
  let newArray = example.map((value) => {
    return value;
  })
  console.log(newArray);

//array filter
let even = [1,2,5,8,10,18,15,11];

let evenNumbers = even.filter((value) => {
    return value % 2 === 0;
})
console.log(evenNumbers);

//Practise Question 1
let studentMarks = [87,93,64,99,86];

let updatedMarks = studentMarks.filter((value) => {
    return value > 90;
})

console.log(updatedMarks);

//Practice Question 2
let inputN = prompt("Enter N");
let pracArray = [];

for(let i=1 ; i<=inputN ; i++){
    pracArray.push(i);
}
console.log(pracArray);
let sumReduce = pracArray.reduce((intial , final) => {
    return intial+final;
})
console.log(sumReduce);

let Product = pracArray.reduce((intial , final) => {
    return intial*final;
})
console.log(Product);

