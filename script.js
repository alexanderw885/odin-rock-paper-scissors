let humanScore = 0;
let computerScore = 0;
let gameActive = true;

function printOutput(out) {
    const text = document.createElement("p");
    text.textContent = out;

    const div = document.querySelector(".results");
    div.appendChild(text);
}


function updateScore(team) {
    let newScore = 0;
    switch(team) {
        case "human": {
            humanScore += 1;
            newScore = humanScore;
            break;
        }
        case "computer": {
            computerScore += 1;
            newScore = computerScore;
            break;
        }
    }
    const counter = document.querySelector(`.${team}.score`);
    counter.textContent = String(newScore);
    return Math.max(humanScore, computerScore) >= 5;
} 


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    let output = ['rock','paper','scissors'][num]
    return output
}


function playRound(humanChoice) {
    if (!gameActive) {
        return;
    }
    let computerChoice = getComputerChoice();
    let isGameOver = false;

    if (computerChoice === humanChoice){
        printOutput(`Tie! You both guessed ${computerChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper") {
        printOutput(`You win! ${humanChoice} beats ${computerChoice}`);
        isGameOver = updateScore("human");
    } else {
        printOutput(`You lose! ${computerChoice} beats ${humanChoice}`);
        isGameOver = updateScore("computer");
    }

    if (isGameOver) {
        gameActive = false;
        const result = document.querySelector(".final-results");
        if (humanScore > computerScore) {
            result.textContent = "You Win!!!";
        } else {
            result.textContent = "You Lose...";
        }
    }
}




const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => 
        playRound(button.textContent.toLowerCase()));
})

const restart = document.querySelector(".restart > button");
restart.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    gameActive = true;

    const scores = document.querySelectorAll(".score");
    scores.forEach((score) => score.textContent = "0");

    const resultLog = document.querySelectorAll(".results > p");
    resultLog.forEach((log) => log.remove());

    const finalResult = document.querySelector(".final-results");
    finalResult.textContent = "Rock Paper Scissors";
    
})