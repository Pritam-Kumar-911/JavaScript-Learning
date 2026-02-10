//for loops
// for (let i=0;i<5 ; i++){
//     console.log("Hello World!");
// }

//For , while and do while loop works same as java 

//for-of loops used for arrays and string
// let str = "Pritam Kumar";
// for(let i of str){
//     console.log(i);
// }

//for-in loops used for objects
// const student = {
//     name : "Pritam Kumar",
//     age : 21,
//     cgpa : 3.412,
//     isPass : true,
// }
// for(let i in student){
//     console.log(i,"=",student[i])
// }

//Practice Question 1
// for(let i = 1 ; i<=100 ; i++){
//     if(i%2 !=0){
//         console.log(i);
//     }
// }

//Practice Question 2
// let gameNum = 25;
// let input = prompt("Guess the Number");
// while(input != gameNum){
//    input = prompt("Guess the Number");
// } 
// console.log("You guessed the right number!");


//Srings 

//string intiatization
let str2 = "Pritam Kumar";
//Inbuild function for string to find length
console.log(str2.length);
//access particular index
console.log(str2[3]);

//String Literals
let str3 = `This is a string literal`;
console.log(str3);
const student1 = {
    name : "harry",
    age : 20,
    height : 57,
}
//normally we print like this
console.log("Name is " , student1.name , "and Age is",student1.age, "and height is",student1.height);
//but with string literals we embed the variables
let answer = `Name is ${student1.name} and Age is ${student1.age} and height is ${student1.height}`;
console.log(answer);

//escape character \n used for next line
console.log("pritam\nkumar");

// \t is used for tab space 
//note that escape sequence is considered as one character not 2 like if we do \n it is considered as one character

// string uppercase
let str4 = "pritam kumar";
console.log(str4.toUpperCase());

//string lowercase
let str5 = "HELLO WORLD";
console.log(str5.toLowerCase());

//string trim removes  white spaces in start or end
let str6 = "   pritam kumar "
console.log(str6.trim());

//note that all the functions does not change the original string value it just creates and new value and return or print


//string slice 
let str7 = "Karachi";
console.log(str7.slice(0,4))
//note that the last index is non inclusive

//string concat //note that we can also concat string with plus + 
let str8 = "karachi"; 
let str9 = "university";
console.log(str8.concat(str9));

//string replace
let str10 = "hello";
console.log(str10.replace("e" , "u"))
//we can used replace all to replace all characters 
console.log(str10.replaceAll("l" , "y"));

//charAt 
let str11 = "pritam";
console.log(str11.charAt(0));

//Practice question 1
let input = prompt("Enter Your Name");
let answer1 = `@${input}${input.length}`;
console.log(answer1);