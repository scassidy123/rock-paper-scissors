let ninjaScore = 0
let playerScore = 0

const playerPlayedElement = document.getElementById('playerPlayed');
const ninjaPlayedElement = document.getElementById('ninjaPlayed');
const playerScoreElement = document.getElementById('playerCurrentScore');
const ninjaScoreElement = document.getElementById('ninjaCurrentScore');
const winOrLoseElement = document.getElementById('winOrLose')


//get the players play, then trigger a round
const rockPlayed = document.querySelector('#rock');
rockPlayed.addEventListener('click', () => {
    playerPlay = 'rock'
    ninjaPlay = getNinjasPlay()
    playerPlayedElement.textContent = `You played: ${playerPlay}`;
    ninjaPlayedElement.textContent = `Ninja played: ${ninjaPlay}`;
    playRound(ninjaPlay, playerPlay, playerScore, ninjaScore);
});

const paperPlayed = document.querySelector('#paper');
paperPlayed.addEventListener('click', () => {
    playerPlay = 'paper'
    ninjaPlay = getNinjasPlay()
    playerPlayedElement.textContent = `You played: ${playerPlay}`;
    ninjaPlayedElement.textContent = `Ninja played: ${ninjaPlay}`;
    playRound(ninjaPlay, playerPlay, playerScore, ninjaScore);
});

const scissorsPlayed = document.querySelector('#scissors');
scissorsPlayed.addEventListener('click', () => {
    playerPlay = 'scissors'
    ninjaPlay = getNinjasPlay()
    playerPlayedElement.textContent = `You played: ${playerPlay}`;
    ninjaPlayedElement.textContent = `Ninja played: ${ninjaPlay}`;
    playRound(ninjaPlay, playerPlay, playerScore, ninjaScore);
});


function getNinjasPlay() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return "rock";
    } else if (randomInt === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(cpu, human) {
    const wins = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (playerScore < 5 && ninjaScore < 5) {
        if (human === cpu) {
            console.log("It's a tie. Play again.");
        } else if (wins[human] === cpu) {
            console.log("You win this round.");
            playerScore++;
            playerScoreElement.textContent = `${playerScore}, You.`;
        } else {
            console.log("Ninja wins this round.");
            ninjaScore++;
        }
        // Update score display after each round
        ninjaScoreElement.textContent = `${ninjaScore}, Ninja`;
    } else {
        // End game logic here (not fully implemented)
        if (playerScore > ninjaScore) {
            winOrLoseElement.textContent = "You win!"
            console.log("Player wins!");
        } else {
            winOrLoseElement.textContent = "You lose!"
            console.log("Ninja wins!");
        }
    }
}
