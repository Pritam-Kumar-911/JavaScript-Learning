//Arithmetic Operators
let a = 6;
let b = 2;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
//remainder operator
console.log("a % b = ", a%b);
//Exponentiation
console.log("a^b = ", a**b);

//unary operators includes increment and decrement operators that works same as others languages ++ -- 

//comparison operators

/*Equal to == (it only checks the value for example we do 3 == "3" its still return true )
Equal to & type === (it is more strict type it also checks whether the data types are same or not)
Not equal to != (same applies for not equals to)        
Not equal to & type !== (same applies for this as well) */

/*Logical operators works same 
Logical AND && 
Logical OR|| 
Logical NOt ! */


//Practise Question 1
let number = prompt("Enter a number");
console.log(number);
if (number % 5 == 0){
    console.log("Number is a multiple of 5");
}
else{
    console.log("Number is not muliple of 5");
}

//Practise Question 2
let score = 76;
if(score >= 80 && score <= 100){
    console.log("Grade A");
}
else if(score >= 70 && score <= 89){
    console.log("Grade B");
}
else if(score >= 60 && score <= 69){
    console.log("Grade C");
}
else if(score >= 50 && score <= 59){
    console.log("Grade B");
}
else{
    console.log("Grade F");
}