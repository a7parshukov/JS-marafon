const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeElem = document.querySelector("#time");
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

const timeList = document.querySelector("#time-list");

let time = 0;
let score = 0;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function finishGame() {
  timeElem.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`;
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeElem.innerHTML = `00:${value}`;
}

function createRandomCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const size = getRandomNumber(10, 30);

  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  const colorCircle = getRandomColor(colors);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = colorCircle;
  circle.style.boxShadow = `0 0 2px ${colorCircle}, 0 0 10px ${colorCircle}`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor(arrayColor) {
  return arrayColor[Math.floor(Math.random() * arrayColor.length)];
}

function endTheGame() {
  function kill() {
    const circle = document.querySelector(".circle");
    if (circle) circle.click();
  }
  setInterval(kill, 75);
}
