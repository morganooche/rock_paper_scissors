console.log("Hello World");

const options = ["rock", "paper", "scissors"];

// Create function to get a random choice from computer 
function getComputerChoice(){
    const choice = options[Math.floor(Math.random()* options.length)];
    return choice;
}
//create function to find out if human or computer has won
function checkWinner(humanSelection, compSelection){
    if(humanSelection === compSelection){
        return "Tie";
    } else if (
        (humanSelection === "rock" && compSelection ==="scissors") ||
        (humanSelection === "scissors" && compSelection === "paper") ||
        (humanSelection === "paper" && compSelection === "rock")
    ){
        return "Human";
    } else {
        return "Computer";
    }
}
// create function to find out if human or computer won each round

function playRound(humanSelection, compSelection){
    const result = checkWinner(humanSelection, compSelection);
    if(result === "Tie"){
        return "It's a tie!"
    } else if (result === "Human"){
        return `You win! ${humanSelection} beats ${compSelection}`
    } else {
        return `You lost. ${compSelection} beats ${humanSelection}`
    }
}

//make a prompt that gets the human to choice rock, paper or scissors as input

function getHumanChoice(){
    let input = false;
    while(input === false){
        const choice = prompt("Rock Paper Scissors");
        if( choice === null) {
            continue; 
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            input = true;
            return choiceInLower;
        }
    }
}

//start game and play 5 rounds of the game then announce when the game is over
function playGame(){
    let scoreHuman = 0;
    let scoreComputer = 0;
    console.log("Welcome. Let's Play!")
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const compSelection = getComputerChoice();
        console.log(playRound(humanSelection, compSelection));
        if(checkWinner(humanSelection, compSelection) == "Human"){
            scoreHuman++;
        }
        else if (checkWinner(humanSelection, compSelection) == "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if(scoreHuman > scoreComputer){
        console.log("Human Won!");
    }
     else if (scoreHuman < scoreComputer){
        console.log("Computer won!");  
     }
     else{
        console.log("We have a tie");
     }
}
playGame()


