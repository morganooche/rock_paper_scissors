//console.log("Hello World")//

const choices = ["rock", "paper", "scissors"];
const humanDisplay = document.getElementById("humanDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const humanScoreDisplay = document.getElementById("humanScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(humanChoice === computerChoice){
        result = "Tie!";
    }
    else{
        switch(humanChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;
        }
    }

    humanDisplay.textContent = `Human: ${humanChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = `Results: ${result}`;

   

    switch(result){
        case "You win!":
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
            break;
        case "You lose!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}