console.log("hello world");



/* 
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

/*
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



let button = document.querySelector(".testComp");
button.addEventListener("click", ()=>{console.log(getComputerChoice())});

button = document.querySelector(".testGuess");
button.addEventListener("click", ()=>{console.log(getHumanChoice())});