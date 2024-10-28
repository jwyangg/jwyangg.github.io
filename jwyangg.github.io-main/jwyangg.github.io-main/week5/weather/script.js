function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log(temp.value);
  if (temp.value >= 40) {
    console.log("It is burning hot");
    body.style.backgroundColor = "crimson";
    outer.style.backgroundColor = "blue";
    outer.style.borderColor = "black";
  } else if (temp.value < 40 && temp.value >= 30) {
    console.log("It is sunny and warm");
    body.style.backgroundColor = "limegreen";
    outer.style.backgroundColor = "pink";
  } else if (temp.value < 30 && temp.value >= 15) {
    console.log("It is pleasant weather");
    body.style.backgroundColor = "aqua";
    outer.style.backgroundColor = "purple";
  } else if (temp.value < 15) {
    console.log("It is freezing cold");
    body.style.backgroundColor = "grey";
    outer.style.backgroundColor = "coral";
  }
}
