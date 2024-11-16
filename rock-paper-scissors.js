
//Create computer choice
function getComputerChoice(){
    let mathComputer = Math.floor(Math.random() * 3 + 1);
    if (mathComputer === 1){
        return "rock"
    } else if (mathComputer === 2){
        return "paper"
    } else if (mathComputer === 3){
        return "scissors"
    }
   
}

//Create the human response

 function getHumanChoice(){
     let promptHuman = prompt("Rock, paper or scissors?");
     if (promptHuman.toLowerCase === "rock"){
        return "rock";
     } else if (promptHuman.toLowerCase === "paper"){
        return "paper";
     } else if (promptHuman.toLowerCase === "scissors"){
         return "scissors";
     }
     


 }