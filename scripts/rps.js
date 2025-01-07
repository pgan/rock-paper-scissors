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
    if(humanChoice == computerChoice){
        console.log("Both players chose " + humanChoice + "! It's a Draw!")
    }else if(humanChoice == "Rock" && computerChoice == "Scissors"){
        humanScore++;
        console.log(humanChoice + " beats " + computerChoice + "! You Win!")
    }else if(humanChoice == "Paper" && computerChoice == "Rock"){
        humanScore++;
        console.log(humanChoice + " beats " + computerChoice + "! You Win!")
    }
    else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        humanScore++;
        console.log(humanChoice + " beats " + computerChoice + "! You Win!")
    }else if(computerChoice == "Rock" && humanChoice == "Scissors"){
        computerScore++;
        console.log(computerChoice + " beats " + humanChoice + "! Computer Wins!")
    }else if(computerChoice == "Paper" && humanChoice == "Rock"){
        computerScore++;
        console.log(computerChoice + " beats " + humanChoice + "! Computer Wins!")
    }
    else if(computerChoice == "Scissors" && humanChoice == "Paper"){
        computerScore++;
        console.log(computerChoice + " beats " + humanChoice + "! Computer Wins!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)