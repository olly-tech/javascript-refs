console.log("Hello");

// PC choice - need function getComputerChoice()
const pcChoice = "scissors";
function getComputerChoice() {
  //rng to choose number 1-3
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      return "rock"
    case 2:
      return "paper"
    case 3:
      return "scissors"
    default:
      console.log("error");
  }
  console.log(randomNum);
}

console.log(getComputerChoice());
// user choice
const userChoice = "paper";
// prompt("choose rock, paper or scissors?");

// if pcChoice is equal to userChoice function

function getWinner() {
  if (pcChoice === userChoice) {
    console.log("it's a draw");
  } else {
    // if else for win/lose
    if (
      (userChoice === "scissors" && pcChoice === "rock") ||
      (userChoice === "rock" && pcChoice === "paper") ||
      (userChoice === "paper" && pcChoice === "scissors")
    ) {
      console.log("PC wins! :(");
    } else {
      console.log("You win! :) :) :)");
    }
  }
}

getWinner();
