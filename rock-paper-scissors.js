console.log("hello")

//Score variables declaration (Global scope)
let humanScore = 0;
let computerScore = 0;

//It could be possible to add an arrow function instead of this

let computerChoice = function getComputerChoice(){
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


let humanChoice = function getHumanChoice(){
    
    prompt("Rock, Paper or Scissors?")
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
}


function playRound(){


    //Draw statement
    if (computerChoice === humanChoice){
        console.log("Draw")
        humanScore + 1

        //Other posibilities
        //When losing

    } else if (humanChoice === "Scissors"  && computerChoice === "Rock"){
        console.log("You loose! Rock beats Scissors")

    } else if (humanChoice === "Paper"  && computerChoice === "Scissors"){
        console.log("You loose! Scissors beat Paper")

    } else if (humanChoice === "Rock"  && computerChoice === "Paper"){
        console.log("You loose! Paper beats Rock")

        //When winning

    } else if (humanChoice === "Scissors"  && computerChoice === "Paper"){
        console.log("You win! Scissors beat Paper")

    } else if (humanChoice === "Paper"  && computerChoice === "Rock"){
        console.log("You win! Paper beats Rock")
        
    } else if (humanChoice === "Rock"  && computerChoice === "Scissors"){
        console.log("You win! Rock beats Scissors")
    }
    
}
