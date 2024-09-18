const userChoices = document.querySelectorAll("button");
const userImg = document.querySelector("#userChoice");
const computerImg = document.querySelector("#computerChoice");
const userHScore = document.querySelector(".myScore");
const computerHScore = document.querySelector(".compScore")

userHScore.value = 0;
computerHScore.value = 0;

let userSelectedChoice = '', computerSelectedChoice = '';
let userScore = 0, computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * choices.length);
    return choices[num];
}

userChoices.forEach((button) => {
    button.addEventListener("click", () => {
        if(checkScore()){}
        else{
            userSelectedChoice = button.textContent.toLowerCase();
            computerSelectedChoice = getComputerChoice();
            playRound(userSelectedChoice, computerSelectedChoice);
            userImg.src=`images/${userSelectedChoice}.png`;
            computerImg.src = `images/${computerSelectedChoice}.png`;
            updateScore();
            checkScore();
        };
    });
})

function checkScore(){
    if (userHScore.value === 5){
        alert("how did u win");
        return true;
    }else if (computerHScore.value === 5){
        alert("u lost u nerd")
        return true;
    }else return false;
}

function updateScore(){
    userHScore.textContent = userHScore.value;
    computerHScore.textContent = computerHScore.value;
}

function playRound(user, computer){
    let winCond = (computer === "rock" && user === "paper") || (computer === "paper" && user === "scissors") || (computer === "scissors" && user === "rock");

    console.log(`Your choice: ${user}, Computer choice: ${computer}`);

    if (user === "rock" || user === "paper" || user === "scissors"){
        if (user === computer){
            return "draw";
        }else if (winCond){
            userHScore.value++;
            return `win`;
        }else {
            computerHScore.value++;
            return `loss`;
        }
    }else{
        return "error";
    }
}

/*
function getUserChoice(){
    /*let userChoice = prompt("rock, paper, or scissors: ");
    return userChoice;
}*/

/*function gamePlay(){
    let rounds = prompt("How many rounds would you like to lose? ");
    for(let i = 1; i <= rounds; i++){
        console.log(playRound(getUserChoice(), getComputerChoice()));
    }
    return scoreTally(userScore, computerScore);
}*/

/*function scoreTally(user, computer){
    console.log(`Final score
Your score: ${user}, computer score: ${computer}`);
}*/

/*
//console.log(gamePlay());
console.log(playRound(getUserChoice(), getComputerChoice()));
console.log(scoreTally(userScore, computerScore));*/