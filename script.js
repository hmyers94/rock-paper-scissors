const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const roundNoDisp = document.querySelector(".round-number");
const resetBtn = document.querySelector("#reset");
let playerScoreDisp = document.querySelector("#player-score");
let compScoreDisp = document.querySelector("#comp-score");
let messageDisp = document.querySelector(".message");
let container = document.querySelector(".container");

let compTurn;
let randNo;
let playerScore = 0;
let compScore = 0;
let isGameOver = false;

// Array containing each option for the computer to select
const compOptions = ["rock", "paper", "scissors"];

function compPlay() {
  // Generate a random number between 0 and 2
  randNo = Math.floor(Math.random() * 3);
  compTurn = compOptions[randNo];
  console.log(compTurn);
  return compTurn;
}

function updateScore() {
  playerScoreDisp.textContent = `${playerScore}`;
  compScoreDisp.textContent = `${compScore}`;
}

function resetScore() {
  playerScore = 0;
  compScore = 0;
  updateScore();
  container.classList.remove("won");
  container.classList.remove("lost");
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  messageDisp.textContent = "Who will win?";
}

function checkForWin() {
  if (playerScore > 2) {
    isGameOver = "true";
    messageDisp.textContent = "You won the game!";
    container.classList.add("won");
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (compScore > 2) {
    isGameOver = "true";
    messageDisp.textContent = "You lost the game!";
    container.classList.add("lost");
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

rockBtn.addEventListener("click", function () {
  compPlay();
  if (compTurn === "rock") {
    messageDisp.textContent = "Computer chose rock! That's a tie!";
  } else if (compTurn === "paper") {
    compScore++;
    messageDisp.textContent = "Computer chose paper! You lose this round!";
  } else {
    playerScore++;
    messageDisp.textContent = "Computer chose scissors! You win this round!";
  }
  updateScore();
  checkForWin();
});

paperBtn.addEventListener("click", function () {
  compPlay();
  if (compTurn === "rock") {
    playerScore++;
    messageDisp.textContent = "Computer chose rock! You win this round!";
  } else if (compTurn === "paper") {
    messageDisp.textContent = "Computer chose paper! That's a tie!";
  } else {
    compScore++;
    messageDisp.textContent = "Computer chose scissors! You lose this round!";
  }
  updateScore();
  checkForWin();
});

scissorsBtn.addEventListener("click", function () {
  compPlay();
  if (compTurn === "rock") {
    compScore++;
    messageDisp.textContent = "Computer chose rock! You lose this round!";
  } else if (compTurn === "paper") {
    playerScore++;
    messageDisp.textContent = "Computer chose paper! You win this round!";
  } else {
    messageDisp.textContent = "Computer chose scissors! That's a tie!";
  }
  updateScore();
  checkForWin();
});

resetBtn.addEventListener("click", resetScore);
