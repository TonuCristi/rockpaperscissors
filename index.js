let youScore = document.querySelector(".you-score");
let enemyScore = document.querySelector(".enemy-score");
let youChoice = document.querySelector(".you-choice");
let enemyChoice = document.querySelector(".enemy-choice");
let statusScore = document.querySelector(".status");
let resetBtn = document.querySelector(".reset-btn");

let ysValue = 0;
let esValue = 0;

resetBtn.addEventListener("click", () => {
  ysValue = 0;
  esValue = 0;
  youScore.textContent = ysValue;
  enemyScore.textContent = esValue;
  youChoice.textContent = "";
  enemyChoice.textContent = "";
  statusScore.textContent = "";
});

window.addEventListener("keydown", (e) => {
  let x = e.keyCode;
  console.log(x);

  if (x == 65) {
    youChoice.textContent = "Rock";
  } else if (x == 83) {
    youChoice.textContent = "Paper";
  } else if (x == 68) {
    youChoice.textContent = "Scissors";
  } else if (x == 74) {
    enemyChoice.textContent = "Rock";
  } else if (x == 75) {
    enemyChoice.textContent = "Paper";
  } else if (x == 76) {
    enemyChoice.textContent = "Scissors";
  }

  if (
    (youChoice.textContent == "Rock" && enemyChoice.textContent == "Rock") ||
    (youChoice.textContent == "Paper" && enemyChoice.textContent == "Paper") ||
    (youChoice.textContent == "Scissors" &&
      enemyChoice.textContent == "Scissors")
  ) {
    statusScore.textContent = "Tie!";
    let x = setTimeout(() => {
      youChoice.textContent = "";
      enemyChoice.textContent = "";
      statusScore.textContent = "";
    }, 1000);
  } else if (
    youChoice.textContent == "Paper" &&
    enemyChoice.textContent == "Rock"
  ) {
    statusScore.textContent = "Winner!";
    statusScore.style.color = "rgb(82, 82, 255)";
    ysValue++;
    youScore.textContent = ysValue;
    let x = setTimeout(() => {
      youChoice.textContent = "";
      enemyChoice.textContent = "";
      statusScore.textContent = "";
    }, 1000);
  } else if (
    youChoice.textContent == "Rock" &&
    enemyChoice.textContent == "Paper"
  ) {
    statusScore.textContent = "Winner!";
    statusScore.style.color = "rgb(255, 55, 55)";
    esValue++;
    enemyScore.textContent = esValue;
    let x = setTimeout(() => {
      youChoice.textContent = "";
      enemyChoice.textContent = "";
      statusScore.textContent = "";
    }, 1000);
  } else if (
    youChoice.textContent == "Rock" &&
    enemyChoice.textContent == "Scissors"
  ) {
    statusScore.textContent = "Winner!";
    statusScore.style.color = "rgb(82, 82, 255)";
    ysValue++;
    youScore.textContent = ysValue;
    let x = setTimeout(() => {
      youChoice.textContent = "";
      enemyChoice.textContent = "";
      statusScore.textContent = "";
    }, 1000);
  } else if (
    youChoice.textContent == "Scissors" &&
    enemyChoice.textContent == "Rock"
  ) {
    statusScore.textContent = "Winner!";
    statusScore.style.color = "rgb(255, 55, 55)";
    esValue++;
    enemyScore.textContent = esValue;
    let x = setTimeout(() => {
      youChoice.textContent = "";
      enemyChoice.textContent = "";
      statusScore.textContent = "";
    }, 1000);
  } else if (
    youChoice.textContent == "Scissors" &&
    enemyChoice.textContent == "Paper"
  ) {
    statusScore.textContent = "Winner!";
    statusScore.style.color = "rgb(82, 82, 255)";
    ysValue++;
    youScore.textContent = ysValue;
    let x = setTimeout(() => {
      youChoice.textContent = "";
      enemyChoice.textContent = "";
      statusScore.textContent = "";
    }, 1000);
  } else if (
    youChoice.textContent == "Paper" &&
    enemyChoice.textContent == "Scissors"
  ) {
    statusScore.textContent = "Winner!";
    statusScore.style.color = "rgb(255, 55, 55)";
    esValue++;
    enemyScore.textContent = esValue;
    let x = setTimeout(() => {
      youChoice.textContent = "";
      enemyChoice.textContent = "";
      statusScore.textContent = "";
    }, 1000);
  }
});
