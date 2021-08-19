function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let rand = (Math.floor(Math.random() * 3)); //return random int between 0 and 2
    let compChoice = choices[rand];
    return compChoice;
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice.toLowerCase() == computerChoice.toLowerCase()) {
        return(`It's a draw! Both players drew ${playerChoice}`);
    }
    else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'paper') {
        return("You win! Scissors beat Paper");
    }
    else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'scissors') {
        return("You lose! Scissors beat Paper");
    }
    else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'rock') {
        return("You win! paper beats rock");
    }
    else if(playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'paper') {
        return("You lose! paper beats rock");
    }
    else if(playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'scissors') {
        return("You win! rock beats scissors");
    }
    else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'rock') {
        return("You lose! rock beats scissors");
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt(`Give a choice for round number ${i+1}/5:`);
        let computerChoice = computerPlay();
        let gameResult = playRound(playerChoice, computerChoice);
        console.log(gameResult); //Print the result of the round
        if(gameResult.substring(4, 7) == 'win'){
            playerScore++;
        }
        if(gameResult.substring(4, 8) == 'lose'){
            computerScore++;
        }
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}