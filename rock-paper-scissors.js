console.log("hello")

let humanScore = 0;
let computerScore = 0;
let roundsplayed = 0;

//UI DOM elements
const ul = document.getElementById("btnUl")

const btnRock = document.createElement("button")
const btnPaper = document.createElement("button")
const btnScissors = document.createElement("button")

btnRock.textContent = ("Rock")
btnPaper.textContent = ("Paper")
btnScissors.textContent = ("Scissors")
ul.append(btnRock, btnPaper, btnScissors)




//add div

const body = document.querySelector("body")
const divResults = document.createElement("div")
const divScore = document.createElement("div")
const divHumanScore = document.createElement("div")
const divComputerScore = document.createElement("div")
const divWinner = document.createElement("div")

body.append(divResults, divScore, divWinner)
divScore.append(divHumanScore, divComputerScore)


//It could be possible to add an arrow function instead of this

function getComputerChoice(){
    let randomToThree = Math.floor(Math.random() * 3);
    if (randomToThree === 0){ 
         //console.log("Rock");
         return ("Rock")
        
    } else if (randomToThree === 1){
        //console.log("Paper"); 
        return ("Paper")
    } else {
        //console.log("Scissors");
        return ("Scissors")
    }
}


/*function getHumanChoice(){
    
    let humanChoice = prompt("Rock, Paper or Scissors?")
    //console.log(humanChoice);
    if(humanChoice.toLowerCase() === "rock"){
        //console.log("Rock");
         return ("Rock")
    } else if (humanChoice.toLowerCase() === "paper"){
        //console.log("Paper");
         return ("Paper")
        
    } else if (humanChoice.toLowerCase() === "scissors") {
        //console.log("Scissors")
         return ("Scissors")
    } else {
        console.log("no")
    }
}*/


//This plays a single round
function playRound(humanSelection, computerSelection){


    //Draw statement
    if (computerSelection === humanSelection){
        divResults.textContent = ("Draw")

        //Other posibilities
        //When losing

    } else if (humanSelection === "Scissors"  && computerSelection === "Rock"){
        divResults.textContent = ("You loose! Rock beats Scissors")
        return  computerScore = computerScore + 1
        
    } else if (humanSelection === "Paper"  && computerSelection === "Scissors"){
        divResults.textContent = ("You loose! Scissors beat Paper")
        return  computerScore = computerScore + 1

    } else if (humanSelection === "Rock"  && computerSelection === "Paper"){
        divResults.textContent = ("You loose! Paper beats Rock")
        return computerScore = computerScore + 1

        //When winning

    } else if (humanSelection === "Scissors"  && computerSelection === "Paper"){
        divResults.textContent = ("You win! Scissors beat Paper")
        return humanScore =  humanScore + 1

    } else if (humanSelection === "Paper"  && computerSelection === "Rock"){
        divResults.textContent = ("You win! Paper beats Rock")
        return humanScore =  humanScore + 1

    } else if (humanSelection === "Rock"  && computerSelection === "Scissors"){
        divResults.textContent = ("You win! Rock beats Scissors")
        return humanScore =  humanScore + 1
        
    }
    divHumanScore.textContent = `Human: ${humanScore}`;
    divComputerScore.textContent = `Computer: ${computerScore}`;

    roundsplayed++

    if (roundsplayed=== 5){

        endGame()
    }
         
}


function endGame(){

    const whoWins = humanScore > computerScore ? "Human" : "Computer"
    divWinner.textContent = `${whoWins} wins the game!`;
}

//buttons event listeners
    btnRock.addEventListener('click', () => playRound("Rock", getComputerChoice()) )
    btnPaper.addEventListener('click', () => playRound("Paper", getComputerChoice()) )
    btnScissors.addEventListener('click', () => playRound("Scissors", getComputerChoice()) )






 







