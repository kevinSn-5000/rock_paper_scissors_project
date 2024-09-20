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


    //function to play the game
function playGame(){
    // functions to store the global score
let humanScore = 0;
let computerScore = 0;

    //iteration to play 5 rounds
for (let i = 1; i < 6; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    console.log(`The computer score is: ${computerScore}`);
    console.log(`The human score is: ${humanScore}`);
    console.log(" ");
}

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
                computerScore++
            break;
            case "Scissors":
                console.log("You win! Rock beats Scissors")
                humanScore++
            break;
        }
    }
    else if(humanChoice === "Paper"){
        switch(computerChoice){
            case "Rock":
                console.log("You win! Paper beats Rock")
                humanScore++
            break;
            case "Paper":
                console.log("It's a tie! Paper ties Paper")
            break;
            case "Scissors":
                console.log("You lose! Scissors beats Paper")
                computerScore++
            break;
        }
    }
    else if(humanChoice === "Scissors"){
        switch(computerChoice){
            case "Rock":
                console.log("You lose! Rock beats Scissors")
                computerScore++
            break;
            case "Paper":
                console.log("You win! Scissors beats Paper")
                humanScore++
            break;
            case "Scissors":
                console.log("It's a tie! Scissors ties Scissors")
            break;
    }
}
}
}
playGame();