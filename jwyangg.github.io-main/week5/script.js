// // check everything through chrome, inspect, console
// console.log("Welcome to Interactive Media");
// // this is a comment
// let count = 10;
// console.log(count);
// const name = "Jiwon";
// /* This creates a pop-up for the browser,
// that gets data from the user*/
// // const name = prompt("What is your name?");
// console.log("Hello", name);
// const myName = "Jiwon";
// const myCity = "Melbourne";
// console.log(myName, "lives in", myCity);

// count = 20;
// console.log(count);

// count = 40;
// console.log(count);

// // Whatever is the last value will be outputted (most recent value), let (const cannot change)
// // const myName = "abcd" will come up as an error because it cannot be changed

// // you won't be able to see the value of b is console is outside {}
// {
//   let b = 30;
//   console.log(b);
// }
// // console.log(b);
// let countStudents = 30;

// let isItRaining = true;
// console.log(isItRaining);
// if (isItRaining === true) {
//   console.log("Please bring an umbrella");
// } else {
//   console.log("No need fo an Umbrealla");
// }
// let isitOARTClass = true;
// console.log(isitOARTClass);

// const studentRecord = {
//   name: "Jiwon",
//   id: 4082101,
//   class: "OART1013",
//   amIScienceStudent: false,
//   amIDesignStudent: true,
// };

// if (studentRecord.amIDesignStudent === true) {
//   console.log("Welcome to the class");
// } else {
//   console.log("Sorry you are in the wrong class");
// }

// let myGrade = 40;
// if (myGrade > 80) {
//   console.log("You got an HD");
// } else if (myGrade < 90 && myGrade >= 70) {
//   console.log("You got D");
// } else if (myGrade < 70 && myGrade >= 50) {
//   console.log("You got C");
// } else if (myGrade < 50 && myGrade >= 30) {
//   console.log("You got P");
// } else {
//   console.log("You got F");
// }

// console.log(studentRecord.name);
// console.log(studentRecord.name, "is an", studentRecord.class, "student");
// console.log(`${studentRecord.name}
//     is a ${studentRecord.class}
//     student`);
// console.log(studentRecord.amIDesignStudent);

// // console.log(studentNames[4]) will be undefined because it starts from 0
// let studentNames = ["Robert", "Alice", "Frank", "Jenny"];
// console.log(studentNames);
// console.log(studentNames[3]);

// let numArray = [2, 5, 6, 8, 10];
// console.log(numArray);

console.log("Hello Sarah");
console.log("Hello Alice");
console.log("Hello Frank");
console.log("Hello Peter");
console.log("Hello Rob");

let names = ["Sarah", "Alice", "Frank", "Peter", "Rob", "Jenny", "Mike"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

/*
i = 0, names.length = 7
i < 7 TRUE
hello names[0] => Sarah
i = 1

1 < 7 TRUE
Hello names[1] => Alice
i = 2

2 < 7 TRUE
Hello names[2] => Frank
i = 3

3 < 7 TRUE
Hello names[3] => Peter
i = 4

4 < 7 TRUE
Hello names[4] => Rob
i = 5

5 < 7 TRUE
Hello names[5] => Jenny
i = 6

6 < 7 TRUE
Hello names[6] => Mike
i = 7

7 < 7 FALSE

*/

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
  { name: "Sunglasses", price: 90 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log("My Shopping Total", total);

// i++ is a way to jump to the next level (like a step)
let sum = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("Intermediate Sum", sum);
}

console.log("My Shopping Sum", sum);

// shoppingCart.forEach(calculateTotal);
// sum = 0;
// function calculateTotal(item) {
//   sum = sum + item.price;
//   console.log(item.price);
// }
// console.log("My Shopping Sum", sum);
