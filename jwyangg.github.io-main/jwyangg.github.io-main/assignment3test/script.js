const swatches = document.querySelectorAll(".swatch");
const areas = document.querySelectorAll(".numbered-area");

swatches.forEach((swatch) => {
  swatch.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("color", e.target.dataset.color); // Pass the color as data
  });
});

areas.forEach((area) => {
  area.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow drop
  });

  area.addEventListener("drop", (e) => {
    const color = e.dataTransfer.getData("color");
    e.target.style.backgroundColor = color; // Apply the color
  });
});

area.addEventListener("dragenter", () => {
  area.style.border = "2px dashed #333"; // Highlight border
});

area.addEventListener("dragleave", () => {
  area.style.border = ""; // Remove highlight
});
