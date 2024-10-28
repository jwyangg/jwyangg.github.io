// This section shows the button change when clicking play and pause
const craftVideo = document.querySelector("#craft-video");
console.log(craftVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

playPauseBtn.addEventListener("click", TogglePlay);

const playPauseImg = document.querySelector("#play-pause-img");

function TogglePlay() {
  if (craftVideo.paused || craftVideo.ended) {
    craftVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    craftVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// This button is so that the user is able to click out of the
// video upon double clicking
const fullscreenBtn = document.querySelector("#fullscreen-btn");
console.log(fullscreenBtn);

fullscreenBtn.addEventListener("click", toggleFullScreen);

const fullscreenImg = document.querySelector("#fullscreen-img");

craftVideo.addEventListener("dblclick", toggleFullScreen);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    craftVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// This is so that the user is able to see how far into the video they are
// but I excluded any numbers because I don't really like the way it looks
craftVideo.addEventListener("timeupdate", showProgress);

const progressBar = document.querySelector("#progress-bar-fill");
const videoTime = document.querySelector("#video-time");

function showProgress() {
  const currentTime = craftVideo.currentTime;

  const progress = (currentTime / craftVideo.duration) * 100;
  progressBar.style.width = progress + "%";
}

// This is the mute button to toggle the sound
const muteBtn = document.querySelector("#mute-btn");
console.log(muteBtn);

muteBtn.addEventListener("click", toggleSound);

const muteImg = document.querySelector("#mute-img");

function toggleSound() {
  if (craftVideo.muted) {
    craftVideo.muted = false;
    muteImg.src =
      "https://img.icons8.com/?size=100&id=102027&format=png&color=000000";
  } else {
    craftVideo.muted = true;
    muteImg.src =
      "https://img.icons8.com/?size=100&id=102036&format=png&color=000000";
  }
}

// The next long list is for each of the steps, and their respective times
const step1Btn = document.querySelector("#step-1-btn");
console.log(step1Btn);
step1Btn.addEventListener("click", gotoStep1);

function gotoStep1() {
  craftVideo.currentTime = 0.0;
}

const step2Btn = document.querySelector("#step-2-btn");
console.log(step2Btn);
step2Btn.addEventListener("click", gotoStep2);

function gotoStep2() {
  craftVideo.currentTime = 30;
}

const step3Btn = document.querySelector("#step-3-btn");
console.log(step3Btn);
step3Btn.addEventListener("click", gotoStep3);

function gotoStep3() {
  craftVideo.currentTime = 40;
}

const step4Btn = document.querySelector("#step-4-btn");
console.log(step4Btn);
step4Btn.addEventListener("click", gotoStep4);

function gotoStep4() {
  craftVideo.currentTime = 47;
}

const step5Btn = document.querySelector("#step-5-btn");
console.log(step5Btn);
step5Btn.addEventListener("click", gotoStep5);

function gotoStep5() {
  craftVideo.currentTime = 52;
}

const step6Btn = document.querySelector("#step-6-btn");
console.log(step6Btn);
step6Btn.addEventListener("click", gotoStep6);

function gotoStep6() {
  craftVideo.currentTime = 62;
}

const step7Btn = document.querySelector("#step-7-btn");
console.log(step7Btn);
step7Btn.addEventListener("click", gotoStep7);

function gotoStep7() {
  craftVideo.currentTime = 84;
}

const step8Btn = document.querySelector("#step-8-btn");
console.log(step8Btn);
step8Btn.addEventListener("click", gotoStep8);

function gotoStep8() {
  craftVideo.currentTime = 96;
}

const step9Btn = document.querySelector("#step-9-btn");
console.log(step9Btn);
step9Btn.addEventListener("click", gotoStep9);

function gotoStep9() {
  craftVideo.currentTime = 133;
}

const step10Btn = document.querySelector("#step-10-btn");
console.log(step10Btn);
step10Btn.addEventListener("click", gotoStep10);

function gotoStep10() {
  craftVideo.currentTime = 147;
}

const step11Btn = document.querySelector("#step-11-btn");
console.log(step11Btn);
step11Btn.addEventListener("click", gotoStep11);

function gotoStep11() {
  craftVideo.currentTime = 156;
}

const step12Btn = document.querySelector("#step-12-btn");
console.log(step12Btn);
step12Btn.addEventListener("click", gotoStep12);

function gotoStep12() {
  craftVideo.currentTime = 206;
}

// This section is for the "Done!" button. I had to do a lot of experimenting
// to work out how to get it to randomly shuffle

// Making the "Done!" button shuffle through a random order of colours
const doneButton = document.querySelector("#done-btn");
console.log(doneButton);

// Array of colours I chose for the website to shift through
// I chose all bright colours because it's a kids craft video
const colors = ["#EF3E36", "#FFA400", "#009FFD", "#5DFDCB", "#DABFFF"];

function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

doneButton.addEventListener("click", changeColor);

// On a side note, although I wanted to experiment doing more things
// for the website I was very unwell, so this was the best I could come up
// with for the time frame :(
