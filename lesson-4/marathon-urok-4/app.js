const board = document.querySelector("#board");
const colors = [
  "red",
  "pink",
  "green",
  "yellow",
  "white",
  "blue",
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
];
const SQUARE_NUMBER = 500;

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);

  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor(colors);
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(arrayColor) {
  return arrayColor[Math.floor(Math.random() * arrayColor.length)];
}
