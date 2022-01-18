const p = document.querySelectorAll("p");
const text = "";
const listOfRSP = ["Rock", "Scissor", "Paper"];
const btn = document.querySelector("button");
const h3 = document.querySelector("h3");
const div = document.querySelector("div");
let playerScore = 0;
let computerScore = 0;

btn.addEventListener("click", getPlayerName);
div.addEventListener("click", function (e) {
  //console.log(e.target.innerText);
  const playersChoise = e.target.innerText;

  p[1].innerText = "Player choise: " + e.target.innerText;
  const computerChoise = generateRockScissorPaper(listOfRSP);
  p[2].innerText = "Computer choise: " + computerChoise;

  compareChoices(computerChoise, playersChoise);
});

function compareChoices(computerChoise, playersChoise) {
  if (computerChoise === playersChoise) {
    p[3].innerText = "Try again";
  }
  else if (computerChoise === "Rock" && playersChoise === "Paper") {
    playerScore++;
  }
  else if (computerChoise === "Rock" && playersChoise === "Scissor") {
    computerScore++;
  }
  else if (computerChoise === "Scissor" && playersChoise === "Paper") {
    computerScore++;
  }
  else if (computerChoise === "Scissor" && playersChoise === "Rock") {
    playerScore++;
  }
  else if (computerChoise === "Paper" && playersChoise === "Scissor") {
    playerScore++;
  }
  else if (computerChoise === "Paper" && playersChoise === "Rock") {
    computerScore++;
  }
  p[4].innerText = playerScore;
  p[5].innerText = computerScore;

  if (computerScore === 3 || playerScore === 3) {
    setTimeout( function() {
        alert("We have a winner");
        playerScore = 0;
        computerScore = 0;
        p[4].innerText = playerScore;
        p[5].innerText = computerScore;
    }, 0);
    
}

}


function generateRockScissorPaper(listOfRSP) {
  return listOfRSP[Math.floor(Math.random() * listOfRSP.length)];
}

function getPlayerName() {
  let inputVal = document.getElementById("myInput").value;
  p[0].innerText = "Player name: " + inputVal;
}


