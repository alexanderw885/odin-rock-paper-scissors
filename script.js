console.log("hello world");



/**
PLAN:
generate random number 0, 1, or 2
if 0, return "rock"
if 1, return "paper"
if 2, return "scissors"
*/
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    let output = ['rock','paper','scissors'][num]
    return output
}

/**
PLAN:
print "rock, paper, or scissors?"
record input
trim leading/trailing space
lowercase input
return guess
*/
function getHumanChoice() {
    let guess = prompt("Rock, paper, or scissors?");
    guess = guess.trim().toLowerCase();
    return guess
}


/**
 * PLAN:
 * run getComputerChoice, save output
 * run getPlayerChoice, save output
 * for each possible outcome, increment correct score
 *  check equality for ties
 *  check 3 player-winning cases
 *  use else case to catch all player-losing cases
 */
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (computerChoice === humanChoice){
        console.log(`Tie! You both guessed ${computerChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

let humanScore = 0;
let computerScore = 0;




let button = document.querySelector(".testComp");
button.addEventListener("click", ()=>{console.log(getComputerChoice())});

button = document.querySelector(".testGuess");
button.addEventListener("click", ()=>{console.log(getHumanChoice())});

button = document.querySelector(".testRound");
button.addEventListener("click", () => {
    playRound(); 
    console.log(humanScore, computerScore)
})