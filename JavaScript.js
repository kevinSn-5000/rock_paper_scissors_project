/*
this function will randomly generate a number
between 1 and 3, and depending on the number the 
computers choice will be design
*/
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if(computerChoice === 1){
        return "Rock";
    }
    else if(computerChoice === 2){
        return "Paper";
    }
    else if(computerChoice === 3){
        return "Scissors";
    }
}

/* 
this function will take the human choice and return it
*/ 
function getHumanChoice(){
   let humanChoice = window.prompt("Write your move to see if you can win!");
   let humanChoiceLC = humanChoice.toLowerCase();
    if(humanChoiceLC === "rock"){
        return "Rock";
    }
    else if(humanChoiceLC === "paper"){
        return "Paper"
    }
    else if(humanChoiceLC === "scissors"){
        return "Scissors";
    }
}

// functions to store the global score
let humanScore = 0;
let computerScore = 0;

/*
this function will play the game one round and increment
the winner's score
it will compare the two a choices and decide a winner
*/
function playRound(humanChoice, computerChoice){
    if(humanChoice === "Rock"){
        switch(computerChoice){
            case "Rock":
                console.log("It's a tie! Rock ties Rock")
            break;
            case "Paper":
                console.log("You lose! Paper beats Rock")
            break;
            case "Scissors":
                console.log("You win! Rock beats Scissors")
            break;
        }
    }
    else if(humanChoice === "Paper"){
        switch(computerChoice){
            case "Rock":
                console.log("You win! Paper beats Rock")
            break;
            case "Paper":
                console.log("It's a tie! Paper ties Paper")
            break;
            case "Scissors":
                console.log("You lose! Scissors beats Paper")
            break;
        }
    }
    else if(humanChoice === "Scissors"){
        switch(computerChoice){
            case "Rock":
                console.log("You lose! Rock beats Scissors")
            break;
            case "Paper":
                console.log("You win! Scissors beats Paper")
            break;
            case "Scissors":
                console.log("It's a tie! Scissors ties Scissors")
            break;
    }
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)