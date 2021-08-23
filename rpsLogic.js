let playerScore = 0;
let computerScore = 0;

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

function playGame(playerChoice) {
    let computerChoice = computerPlay();
    let gameResult = playRound(playerChoice, computerChoice);
    console.log(gameResult); //Print the result of the round
    if(gameResult.substring(4, 7) == 'win'){
        playerScore++;
    }
    if(gameResult.substring(4, 8) == 'lose'){
        computerScore++;
    }
    updateScore(gameResult);
    checkScore();
}

function checkScore() {
    if(playerScore == 5) {
        resultDiv.textContent = "Player wins!";
        resultDiv.style.backgroundColor = "green";
    }
    else if(computerScore == 5) {
        resultDiv.textContent = "Computer wins!";
        resultDiv.style.backgroundColor = "red";
    }
}

function updateScore(gameResult) {
    roundResultDiv.textContent = gameResult;
    playerScoreText.textContent = `Player score: ${playerScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
}

const rockButton = document.querySelector('#rockBtn');
const paperButton = document.querySelector('#paperBtn');
const scissorButton = document.querySelector('#scissorsBtn');

rockButton.addEventListener("click", function(){
    playGame('rock');
});
paperButton.addEventListener("click", function() {
    playGame('paper');
});
scissorButton.addEventListener("click", function() {
    playGame('scissors');
});

const roundResultDiv = document.querySelector('#roundResult');

const resultDiv = document.querySelector('#gameResult');

const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');

