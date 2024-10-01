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

//The buttons event listeners
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () =>{
    let humanChoice = "rock";
    playGame(humanChoice);
} );
btnPaper.addEventListener("click", () =>{
    let humanChoice = "paper";
    playGame(humanChoice);
} );
btnScissors.addEventListener("click", () =>{
    let humanChoice = "scissors";
    playGame(humanChoice);
} );

//window.alert("Write your move to see if you can win!");

// variables to store the global score
let humanScore = 0;
let computerScore = 0;


   const result = document.querySelector("#results")
/*
this function will play the game one round and increment
the winner's score
it will compare the two a choices and decide a winner
*/
function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        switch(computerChoice){
            case "Rock":
                result.textContent = "It's a tie! Rock ties Rock";
            break;
            case "Paper":
                result.textContent = "You lose! Paper beats Rock";
                computerScore++
            break;
            case "Scissors":
                result.textContent = "You win! Rock beats Scissors";
                humanScore++
            break;
        }
    }
    else if(humanChoice === "paper"){
        switch(computerChoice){
            case "Rock":
                result.textContent = "You win! Paper beats Rock";
                humanScore++
            break;
            case "Paper":
                result.textContent = "It's a tie! Paper ties Paper";
            break;
            case "Scissors":
                result.textContent = "You lose! Scissors beats Paper";
                computerScore++
            break;
        }
    }
    else if(humanChoice === "scissors"){
        switch(computerChoice){
            case "Rock":
                result.textContent = "You lose! Rock beats Scissors";
                computerScore++
            break;
            case "Paper":
                result.textContent = "You win! Scissors beats Paper";
                humanScore++
            break;
            case "Scissors":
                result.textContent = "It's a tie! Scissors ties Scissors";
            break;
    }
}
}

    //function to play the game
function playGame(userChoice){

    if(computerScore> 4){
        result.textContent = "The winner is the computer"
        return;
    }  
    else if(humanScore> 4){
        result.textContent = "You win the game!"
        return
    }

    let humanChoice = userChoice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)

    //code to show the total score of the game
    const score = document.querySelector("#score");
    score.textContent = 
   `The computer score is: ${computerScore} - Your score is: ${humanScore}`

}
