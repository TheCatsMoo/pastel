const generateButton = document.getElementById("generate-button");
const colorPalette = document.getElementById("color-palette");

generateButton.addEventListener("click", generatePalette);

function generatePalette() {
  // Generate random colors
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  const color4 = getRandomColor();
  const color5 = getRandomColor();

  // Clear the previous palette
  colorPalette.innerHTML = "";

  // Create div elements for each color
  const colorDiv1 = document.createElement("div");
  colorDiv1.classList.add("color-box");
  colorDiv1.style.backgroundColor = color1;
  colorPalette.appendChild(colorDiv1);

  const colorDiv2 = document.createElement("div");
  colorDiv2.classList.add("color-box");
  colorDiv2.style.backgroundColor = color2;
  colorPalette.appendChild(colorDiv2);

  const colorDiv3 = document.createElement("div");
  colorDiv3.classList.add("color-box");
  colorDiv3.style.backgroundColor = color3;
  colorPalette.appendChild(colorDiv3);

  const colorDiv4 = document.createElement("div");
  colorDiv4.classList.add("color-box");
  colorDiv4.style.backgroundColor = color4;
  colorPalette.appendChild(colorDiv4);

  const colorDiv5 = document.createElement("div");
  colorDiv5.classList.add("color-box");
  colorDiv5.style.backgroundColor = color5;
  colorPalette.appendChild(colorDiv5);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  color = lightenColor(color, 60);
  return color;
}

function lightenColor(color, percent) {
    var num = parseInt(color.slice(1),16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = (num >> 8 & 0x00FF) + amt,
    G = (num & 0x0000FF) + amt;

  return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
}