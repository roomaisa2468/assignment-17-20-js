// CHAPTER 17-20
// (QUESTION 1) Declare and initialize an empty multidimensional array.(Array of arrays)

let rows = 2;
let cols = 3;
let multiArray = Array.from({ length: rows }, () => Array(cols).fill(undefined));
console.log(multiArray);





// (QUESTION 2)  Declare and initialize a multidimensional array representing the following matrix:

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);


// (QUESTION 3) Write a program to print numeric counting from 1 to 10.
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// (QUESTION 4)Write a program to print multiplication table of any
//umber using for loop. Table number & length should betaken as an input from user.

// function printMultiplicationTable() {
//     let tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
//     let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
//     if (isNaN(tableNumber) || isNaN(tableLength)) {
//         alert("Please enter valid numbers.");
//         return;
//     }
//         console.log(`Multiplication table for ${tableNumber} up to ${tableLength}:`);
//     for (let i = 1; i <= tableLength; i++) {
//         console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
//     }
// }
// printMultiplicationTable()




//(QUESTION 5)Write a program to print items of the following array using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]

 let fruits = [" <h3> apple", "banana", "mango", "orange", "strawberry </h3>"];
 document.write(fruits[0] + "<br>");
 document.write(fruits[1] + "<br>");
 document.write(fruits[2] + "<br>");
 document.write(fruits[3] + "<br>");
document.write(fruits[4] + "<br>");


//(QUESTION 6)  Generate the following series in your browser. See example output.

 document.write("<h2>Counting</h2>");
 for (let i = 1; i <= 15; i++) {
     document.write(i + ",");
 }

 //REVERSE COUNTING
 document.write("<h2> Reverse Counting</h2>");
 for (let i = 10; i >= 1; i--) {
    document.write(i + ",");
 }

 //EVEN COUNTING
 document.write("<h2> Even counting</h2>");
 for (let i = 2; i <= 20; i += 2) {
    document.write(i + ",");
 }

// // ODD COUNTING
document.write("<h2> Odd Counting </h2>");
 for (let i = 1; i <= 19; i += 2){
     document.write(i + ",")
 }

// // SERIES COUNTING
document.write("<h2> Series Counting </h2>");
 for (let i = 2; i <= 20; i += 2) {
     document.write(i + " k" +  "," +"<br> " );
 }

 //(QUESTION 7) You have an array
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an array.


// let bakery = [" cake", "cookies", "apple pie", "choco chips", "patties"];
// let userInput = prompt("Welcome to Sweet Serenity Bakery. What do you want?");
// let found = (bakery.includes(userInput))
// if (found) {
//     document.write(userInput + " is available in our Sweet Serenity Bakery.");
// } else {
//     document.write("sorry", " " +  userInput + " is not available in our Sweet Serenity Bakery.");
// }


//(QUESTION 8)Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

let A = [24, 53, 78, 91, 12];
let largest = A[0];
for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
console.log(`The largest number in the array A is: ${largest}`);

//(QUESTION 9)Write a program to identify the smallest number in the given array.

let C = [24, 53, 78, 91, 12];
let smallest = C[0];
for (let i = 1; i < C.length; i++) {
    if (C[i] < smallest) {
        smallest = C[i];
    }
}
console.log(`The smallest number in the array C is: ${smallest}`);

//(QUESTION 10)Write a program to print multiples of 5 ranging 1 to 100.
document.write("<h2>Multiples of 5 from 1 to 100:</h2>");
document.write("<p>");
let first = true;
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        if (!first) {
            document.write(", ");
        }
        document.write(`${i}`);
        first = false;
    }
}
document.write("</p>");