let humanScore = 0;
let computerScore = 0;
let num = 0;
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random(3) * 3);
    if(computerChoice == 0){
        return "rock";
    }
    if(computerChoice == 1){
        return "paper";
    }
    if(computerChoice == 2){
        return "scissors";
    }
}

alert(`Total rounds : 5`);
function getHumanChoice(){
    let UserChoice = prompt("Enter Your Choice (rock, paper, scissor): ");
    return UserChoice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        alert(`Draw! You chose ${humanChoice} and computer chose ${computerChoice}`);
        num++;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        alert(`You Win! you chose ${humanChoice} and computer chose ${computerChoice} `);
        humanScore++;
        num++
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        alert(`You Win! you chose ${humanChoice} and computer chose ${computerChoice} `);
        humanScore++;
        num++
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        alert(`You Win! you chose ${humanChoice} and computer chose ${computerChoice} `);
        humanScore++;
        num++
    }
    else {
            alert(`You Lose! you chose ${humanChoice} and computer chose ${computerChoice} `);
            computerScore++;
            num++
    }
    return;
    
}
function playGame(){
    while (num < 5){
        playRound(getHumanChoice(), getComputerChoice());
    }
    alert(`your Score is ${humanScore} and computer Score is ${computerScore}`);
    if(humanScore > computerScore){
        alert("You win");
    }
    else{
        alert("you Lose!");
    }  
}
playGame();