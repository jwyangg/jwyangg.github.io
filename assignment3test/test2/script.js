// Predefined pixel art pattern (1 = Pink, 2 = Blue, 3 = Yellow, 4 = Purple, 5 = White)
const pixelArtPattern = [
    // [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 4, 4, 0, 0],
    // [0, 0, 0, 1, 1, 0, 3, 0, 1, 1, 0, 4, 0, 0, 4, 0],
    // [0, 0, 0, 1, 1, 3, 0, 3, 1, 1, 0, 4, 0, 0, 4, 0],
    // [0, 0, 1, 1, 1, 0, 3, 0, 1, 1, 1, 0, 4, 4, 0, 0],
    // [0, 0, 1, 1, 3, 0, 0, 0, 3, 1, 1, 1, 0, 0, 0, 0],
    // [0, 1, 1, 3, 0, 0, 0, 0, 0, 3, 1, 1, 1, 4, 4, 0],
    // [0, 1, 1, 3, 0, 3, 3, 3, 0, 3, 1, 1, 1, 0, 0, 0],
    // [1, 1, 0, 0, 3, 0, 3, 0, 3, 0, 0, 1, 1, 4, 4, 0],
    // [1, 0, 3, 3, 0, 3, 3, 3, 0, 3, 3, 1, 0, 4, 0, 0],
    // [0, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 4, 4, 0, 0],
    // [0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 4, 4, 0, 0, 0],
    // [0, 0, 0, 3, 0, 3, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0],
    // [0, 0, 3, 0, 0, 0, 0, 3, 0, 4, 4, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 3, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5],
[1,1,1,1,1,1,2,17,17,17,3,3,3,3,3,3,17,17,17,4,5,5,5,5,5,5],
[16,1,1,1,1,1,17,19,19,19,17,17,17,17,17,17,19,19,19,17,5,5,5,5,5,6],
[16,16,1,1,1,17,18,17,17,18,17,19,19,19,19,17,18,17,17,18,17,5,5,5,6,6],
[16,16,16,1,1,17,20,17,17,20,17,19,19,19,19,17,20,17,17,20,17,5,5,6,6,6],
[16,16,16,16,17,17,20,20,20,17,19,19,19,19,19,19,17,20,20,20,17,17,6,6,6,6],
[15,15,15,17,21,21,17,17,17,19,19,17,19,19,17,19,19,17,17,17,21,21,17,7,7,7],
[15,15,15,17,21,19,22,22,22,19,19,19,17,17,19,19,19,22,22,22,19,21,17,7,7,7],
[15,15,17,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,17,7,7],
[15,17,23,21,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,21,23,17,7],
[14,17,23,23,23,19,19,19,19,19,17,21,21,21,21,17,19,19,19,19,19,23,23,23,17,8],
[14,17,23,23,23,23,23,17,23,23,17,24,24,24,24,17,23,23,17,23,23,23,23,23,17,8],
[14,17,23,23,23,23,23,17,23,23,23,17,24,24,17,23,23,23,17,23,23,23,23,23,17,8],
[13,13,17,23,23,23,23,23,17,23,23,17,24,24,17,23,23,17,23,23,23,23,23,17,9,9],
[13,13,13,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,9,9,9],
[13,13,13,13,13,13,12,12,12,12,11,11,11,11,11,11,10,10,10,10,9,9,9,9,9,9]
  ];
  
  
// Variable to store the current painting mode (default: individual)
let paintingMode = 'individual';

// Listen for mode changes from the dropdown
const modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('change', (e) => {
  paintingMode = e.target.value;
});

// Create the grid dynamically with numbers
const grid = document.querySelector('.grid');
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    const patternColor = pixelArtPattern[i][j];
    if (patternColor > 0) {
      cell.innerText = patternColor;  // Display the number corresponding to the color
      cell.dataset.correctColor = patternColor;  // Set the correct color for the cell
    }
    cell.addEventListener('dragover', (e) => e.preventDefault());
    cell.addEventListener('drop', handleDrop);
    grid.appendChild(cell);
  }
}

// Handle drag start (for palette colors)
const colors = document.querySelectorAll('.color');
colors.forEach(color => {
  color.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('color', e.target.dataset.color);  // Pass the color code
  });
});

// Handle drop on the grid cells
function handleDrop(e) {
  const droppedColor = e.dataTransfer.getData('color');  // Get the dragged color code
  const correctColor = e.target.dataset.correctColor;

  // Apply color based on the selected painting mode
  if (paintingMode === 'all') {
    paintAllMatchingCells(correctColor, droppedColor);  // Paint all matching cells
  } else {
    paintSingleCell(e.target, correctColor, droppedColor);  // Paint just the dropped cell
  }
}

// Paint a single cell
function paintSingleCell(cell, correctColor, droppedColor) {
  const colorMap = {
    1: '#FFB6C1',  // Pink
    2: '#ADD8E6',  // Blue
    3: '#FFFFB3',  // Yellow
    4: '#D8BFD8',  // Purple
    5: '#FFFFFF'   // White
  };

  if (correctColor === droppedColor) {
    cell.style.backgroundColor = colorMap[droppedColor];  // Apply the correct color
    cell.innerText = '';  // Remove the number once correctly painted
  } else {
    alert('Wrong color! Try again.');
  }
}

// Paint all cells that match the dragged color number
function paintAllMatchingCells(targetColor, newColor) {
  const cells = document.querySelectorAll('.cell');
  const colorMap = {
    1: '#FFB6C1',  // Pink
    2: '#ADD8E6',  // Blue
    3: '#FFFFB3',  // Yellow
    4: '#D8BFD8',  // Purple
    5: '#FFFFFF'   // White
  };

  cells.forEach(cell => {
    if (cell.dataset.correctColor === targetColor) {
      cell.style.backgroundColor = colorMap[newColor];  // Change the color of all matching cells
      cell.innerText = '';  // Remove the number once it's painted
    }
  });
}

// Color mixing functionality
const mixButton = document.getElementById('mixButton');
const resetMix = document.getElementById('resetMix');
const mixedColorDisplay = document.getElementById('mixedColorDisplay');

mixButton.addEventListener('click', () => {
  const color1 = document.getElementById('color1').value;
  const color2 = document.getElementById('color2').value;

  const mixedColor = mixColors(color1, color2);
  mixedColorDisplay.style.backgroundColor = mixedColor;
  mixedColorDisplay.innerText = `Mixed Color: ${mixedColor}`;
  mixedColorDisplay.style.padding = '10px';
  mixedColorDisplay.setAttribute('data-color', color1 + '+' + color2); // Set the mixed color as data

  // Make mixed color draggable
  mixedColorDisplay.setAttribute('draggable', 'true');
  mixedColorDisplay.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('color', color1 + '+' + color2); // Pass the mixed color
  });
});

resetMix.addEventListener('click', () => {
  mixedColorDisplay.style.backgroundColor = '';
  mixedColorDisplay.innerText = '';
  mixedColorDisplay.removeAttribute('draggable');
});

// Simple color mixing logic
function mixColors(color1, color2) {
  const colorMap = {
    1: '#FFB6C1',  // Pink
    2: '#ADD8E6',  // Blue
    3: '#FFFFB3',  // Yellow
    4: '#D8BFD8',  // Purple
    5: '#FFFFFF'   // White
  };

  const c1 = hexToRgb(colorMap[color1]);
  const c2 = hexToRgb(colorMap[color2]);

  const mixed = {
    r: Math.min(255, Math.floor((c1.r + c2.r) / 2)),
    g: Math.min(255, Math.floor((c1.g + c2.g) / 2)),
    b: Math.min(255, Math.floor((c1.b + c2.b) / 2))
  };

  return rgbToHex(mixed.r, mixed.g, mixed.b);
}

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

// Helper function to convert RGB to hex
function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}