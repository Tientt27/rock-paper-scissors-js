console.log("hello")

let humanScore = 0;
    let computerScore = 0;


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


function getHumanChoice(){
    
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
}




function playRound(humanSelection, computerSelection){


    //Draw statement
    if (computerSelection === humanSelection){
        console.log("Draw")

        //Other posibilities
        //When losing

    } else if (humanSelection === "Scissors"  && computerSelection === "Rock"){
        console.log("You loose! Rock beats Scissors")
        return computerScore = computerScore + 1

    } else if (humanSelection === "Paper"  && computerSelection === "Scissors"){
        console.log("You loose! Scissors beat Paper")
        return computerScore = computerScore + 1

    } else if (humanSelection === "Rock"  && computerSelection === "Paper"){
        console.log("You loose! Paper beats Rock")
        return computerScore = computerScore + 1

        //When winning

    } else if (humanSelection === "Scissors"  && computerSelection === "Paper"){
        console.log("You win! Scissors beat Paper")
        return humanScore =  humanScore + 1

    } else if (humanSelection === "Paper"  && computerSelection === "Rock"){
        console.log("You win! Paper beats Rock")
        return humanScore =  humanScore + 1

    } else if (humanSelection === "Rock"  && computerSelection === "Scissors"){
        console.log("You win! Rock beats Scissors")
        return humanScore =  humanScore + 1
    }
         
}

function playGame(){
    
    for (let i = 0; i < 5; i++)
        playRound (getHumanChoice(), getComputerChoice());

    const winner = (humanScore < computerScore  ? 'Computer': 'Human');
    console.log(`${winner} wins`)
    
  
}

playGame();