console.log("Rock Paper Scissors - from script file")

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let compChoice = "";
    let value = Math.floor(Math.random()*3);
    if(value == 0){
        compChoice = "Rock";
    } else if (value ==1){
        compChoice = "Paper";
    } else if (value == 2){
        compChoice = "Scissors"
    }
    console.log ("Computers Choice: " + compChoice);

    return compChoice;
}

function getHumanChoice(){
    let humanEntry = parseInt(prompt("0 = Rock, 1 = Paper, 2 = Scissors"));
    if(humanEntry == 0){
        humanChoice = "Rock";
    } else if (humanEntry ==1){
        humanChoice = "Paper";
    } else if (humanEntry == 2){
        humanChoice = "Scissors"
    }
    console.log("Human choice: " + humanChoice)

     return humanChoice;
}

function playRound(humanChoice, computerChoice){

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)