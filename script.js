let userScore = 0, computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * choices.length);
    return choices[num];
}

function playRound(user, computer){
    user = user.toLowerCase();

    let winCond = (computer === "rock" && user === "paper") || (computer === "paper" && user === "scissors") || (computer === "scissors" && user === "rock");

    console.log(`Your choice: ${user}, Computer choice: ${computer}`);

    if (user === "rock" || user === "paper" || user === "scissors"){
        if (user === computer){
            return "Draw!";
        }else if (winCond){
            userScore++;
            return `you won?? ${user} beats ${computer}!`;
        }else {
            computerScore++;
            return `You lost. ${computer} beats ${user}.`;
        }
    }else{
        return "Not a valid choice.";
    }
}

function getUserChoice(){
    let userChoice = prompt("rock, paper, or scissors: ");
    return userChoice;
}

function gamePlay(){
    let rounds = prompt("How many rounds would you like to lose? ");
    for(let i = 1; i <= rounds; i++){
        console.log(playRound(getUserChoice(), getComputerChoice()));
    }
    return scoreTally(userScore, computerScore);
}

function scoreTally(user, computer){
    return `Final score
Your score: ${user}, computer score: ${computer}`;
}

console.log(gamePlay());