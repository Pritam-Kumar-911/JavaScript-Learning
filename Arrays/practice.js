//array initialization
let arr = [20,45,47,56,12,54,12];
let names = ["pritam" , "furqan" , "raffay" , "abdullah"];
console.log(arr);
console.log(names);
console.log(arr[1]);

//looping over an array
for(let i=0 ; i<arr.length ; i++){
    console.log(arr[i]);
}

//Pracise question 1 find average of entire students
let students = [85, 97, 44, 37, 76, 60];
let sum = 0;
let average;

for(let i=0 ; i<students.length ; i++){
    sum = sum + students[i];
}
average = sum/students.length;
console.log("Average of entire class is ",average);

//Pracise question 2 apply 10% discound 

let items = [250, 645, 300, 900, 50];

for(let i=0 ; i<items.length ; i++){
    let discount = items[i] * 0.10;
    items[i] = items[i] - discount;
}

console.log(items);

//push (adds element to the end of the array)
let foodItems = ["potato" , "Onions" , "ladyfinger"];
foodItems.push("Tomatoes");
console.log(foodItems);

//pop (delete item from end and return);

let deleted = foodItems.pop();
console.log(foodItems);
console.log("Deleted Item: ",deleted);

//unshift (adds element to the start of the array)
//shift (deletes element from the start of the array)