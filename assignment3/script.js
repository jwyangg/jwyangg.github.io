// Design for the pixel art pattern (was done by drawing a pixel art drawing
// and then manually went through each block to differentiate)
const pixelArtPattern = [
  [
    1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5,
    5,
  ],
  [
    1, 1, 1, 1, 1, 1, 2, 17, 17, 17, 3, 3, 3, 3, 3, 3, 17, 17, 17, 4, 5, 5, 5,
    5, 5, 5,
  ],
  [
    16, 1, 1, 1, 1, 1, 17, 19, 19, 19, 17, 17, 17, 17, 17, 17, 19, 19, 19, 17,
    5, 5, 5, 5, 5, 6,
  ],
  [
    16, 16, 1, 1, 1, 17, 18, 17, 17, 18, 17, 19, 19, 19, 19, 17, 18, 17, 17, 18,
    17, 5, 5, 5, 6, 6,
  ],
  [
    16, 16, 16, 1, 1, 17, 20, 17, 17, 20, 17, 19, 19, 19, 19, 17, 20, 17, 17,
    20, 17, 5, 5, 6, 6, 6,
  ],
  [
    16, 16, 16, 16, 17, 17, 20, 20, 20, 17, 19, 19, 19, 19, 19, 19, 17, 20, 20,
    20, 17, 17, 6, 6, 6, 6,
  ],
  [
    15, 15, 15, 17, 21, 21, 17, 17, 17, 19, 19, 17, 19, 19, 17, 19, 19, 17, 17,
    17, 21, 21, 17, 7, 7, 7,
  ],
  [
    15, 15, 15, 17, 21, 19, 22, 22, 22, 19, 19, 19, 17, 17, 19, 19, 19, 22, 22,
    22, 19, 21, 17, 7, 7, 7,
  ],
  [
    15, 15, 17, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
    19, 19, 19, 19, 17, 7, 7,
  ],
  [
    15, 17, 23, 21, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
    19, 19, 19, 21, 23, 17, 7,
  ],
  [
    14, 17, 23, 23, 23, 19, 19, 19, 19, 19, 17, 21, 21, 21, 21, 17, 19, 19, 19,
    19, 19, 23, 23, 23, 17, 8,
  ],
  [
    14, 17, 23, 23, 23, 23, 23, 17, 23, 23, 17, 24, 24, 24, 24, 17, 23, 23, 17,
    23, 23, 23, 23, 23, 17, 8,
  ],
  [
    14, 17, 23, 23, 23, 23, 23, 17, 23, 23, 23, 17, 24, 24, 17, 23, 23, 23, 17,
    23, 23, 23, 23, 23, 17, 8,
  ],
  [
    13, 13, 17, 23, 23, 23, 23, 23, 17, 23, 23, 17, 24, 24, 17, 23, 23, 17, 23,
    23, 23, 23, 23, 17, 9, 9,
  ],
  [
    13, 13, 13, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
    17, 17, 17, 17, 9, 9, 9,
  ],
  [
    13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 11, 11, 11, 11, 11, 11, 10, 10, 10,
    10, 9, 9, 9, 9, 9, 9,
  ],
];

// Creating the grid for the pixel art pattern
const grid = document.getElementById("grid");

for (let row = 0; row < pixelArtPattern.length; row++) {
  for (let col = 0; col < pixelArtPattern[row].length; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.textContent = pixelArtPattern[row][col];
    grid.appendChild(block);
  }
}

// This is to track the colours added so far for the mixing palette
let accumulatedColors = [];

const mixingPalette = document.getElementById("mixing-palette");

// Making the colours made in the mixing zone draggable,
// so that users can use the colours they created
mixingPalette.addEventListener("dragover", (event) => {
  event.preventDefault();
});

mixingPalette.addEventListener("drop", (event) => {
  event.preventDefault();
  const color = event.dataTransfer.getData("color");

  // Converted the colours to RGB so that the average of the colours can be found
  accumulatedColors.push(convertToRGB(color));

  // Colour mixing, accumulating colours each time
  const mixedColor = mixColors(accumulatedColors);
  mixingPalette.style.backgroundColor = mixedColor;
});

// Converted the values to RGB array (this took me the longest to figure out 🥹)
function convertToRGB(color) {
  const changeRGB = document.createElement("rgb");
  changeRGB.style.color = color;
  document.body.appendChild(changeRGB);

  const computedColor = getComputedStyle(changeRGB).color;
  document.body.removeChild(changeRGB);

  return computedColor.match(/\d+/g).map(Number).slice(0, 3);
}

// Finding the average colour for the mixed colours (this was an absolute nightmare as well
// but I wanted to add it to make the best of the drag and drop features)
// Just an FYI the colours change very slightly so if you want a really dark green
// you have to keep adding black onto green (if you started off with green, but
// if you started off with black you can just add green a couple of times)
function mixColors(colors) {
  let red = 0;
  let green = 0;
  let blue = 0;

  // Adding each of the colours for rgb
  colors.forEach((color) => {
    red += color[0];
    green += color[1];
    blue += color[2];
  });

  // Calculating the average of the colours
  const length = colors.length;
  const avgRed = Math.floor(red / length);
  const avgGreen = Math.floor(green / length);
  const avgBlue = Math.floor(blue / length);

  return `rgb(${avgRed}, ${avgGreen}, ${avgBlue})`;
}

// Mode switching (individual colouring and block colouring)
const modeSwitch = document.getElementById("modeSwitch");

// Letting colours from the palette and the mixing palette to be draggable
document
  .querySelectorAll(".palette-color, #mixing-palette")
  .forEach((color) => {
    color.addEventListener("dragstart", (event) => {
      draggedColor = event.target.style.backgroundColor;
      event.dataTransfer.setData("color", draggedColor);
    });
  });

// Making sure each block can have the drag and drop function
// (when the colours are dropped on top)
document.querySelectorAll("#grid .block").forEach((block) => {
  block.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  block.addEventListener("drop", (event) => {
    event.preventDefault();
    if (!draggedColor) return;

    selectedNumber = block.textContent;

    // Differentiating the drag and drop with the two different modes
    if (modeSwitch.value === "all") {
      // For matching numbered blocks
      colorAllMatchingBlocks(selectedNumber, draggedColor);
    } else {
      // Individual block colouring
      block.style.backgroundColor = draggedColor;
    }
  });
});

// Colouring for the matching blocks (for the paint all matching blocks mode)
function colorAllMatchingBlocks(number, color) {
  document.querySelectorAll("#grid .block").forEach((block) => {
    if (block.textContent === number) {
      block.style.backgroundColor = color;
    }
  });
}

// Reset button for mixing palette, making back to default white when clicked
const mixingColour = document.getElementById("mixing-palette");
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  mixingColour.style.backgroundColor = "";
});

// Welcome message and instructions for the experience
window.onload = function () {
  alert(
    "Welcome!\nThe numbers are a guide to where you should be dragging and dropping but feel free to colour multiple numbers the same colour!\nHave fun! :)"
  );
};
