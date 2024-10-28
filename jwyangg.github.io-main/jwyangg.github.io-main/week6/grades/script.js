function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  // let total =  parseFloat(a1.value) + parseFloat(a2.value)
  let a1Value = parseFloat(a1.value);
  let a2Value = parseFloat(a2.value);
  let sum = calculateTotal(a1Value, a2Value);
  console.log("sum is", sum);
  sendReport(sum);
}

function calculateTotal(a, b) {
  let total = a + b;
  return total;
}

function sendReport(score) {
  const report = document.querySelector("#report");
  console.log(report);
  if (score > 30) {
    console.log("You got HD!");
    report.textContent = "You got HD!";
  } else if (score > 20 && score <= 30) {
    console.log("You got a D.");
    report.textContent = "You got D.";
  }
}

// const para = document.querySelector("p");
// console.log(para);

// const allPara = document.querySelectorAll("p");
// console.log(allPara);

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.textContent);
h1.classList.add("red-style");
// h1.textContent = "This is a new heading!";

const question1 = document.querySelector("#question1");
console.log(question1.textContent);
question1.classList.add("red-style");
question1.classList.add("blue-style");
question1.classList.remove("blue-style");
// question1.textContent = "What is Assignment 1 score?";

// const question2 = document.querySelector("#question2");
// console.log(question2.textContent);
// question2.textContent = "What is Assignment 2 score?";

// const abcd = document.querySelector(".abcd");
// console.log(abcd);

// const allAbcd = document.querySelectorAll(".abcd");
// console.log(allAbcd);

// const report = document.querySelector("#report");
// console.log(report);

const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.classList.add("round");

function toggleMe() {
  myCat.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
console.log(header.textContent);
// header.textContent = "my cat 2";
let personality = "boring";
let doubt = "doubt";
header.innerHTML += `<p class = "blue-style" > is the ${personality} </p>
<p class="red-style" > do you have any ${doubt}? </p>`;
