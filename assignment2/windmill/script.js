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

craftVideo.addEventListener("timeupdate", showProgress);

const progressBar = document.querySelector("#progress-bar-fill");
const videoTime = document.querySelector("#video-time");

function showProgress() {
  const currentTime = craftVideo.currentTime;

  const progress = (currentTime / craftVideo.duration) * 100;
  progressBar.style.width = progress + "%";
}

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
