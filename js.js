let cpuScore = 0;
let huScore = 0;

// Randomly generates a computer play
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return "rock";
    } else if (randomInt === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Prompts the user to type in a play, then converts the input to lowercase.
function getPlayerChoice() {
    let huChoice = prompt("Rock, Paper, or Scissors?: ");
    return huChoice.toLowerCase();
}

function playARound(hu, cpu) {
    switch (true) {
        // Checking for a tie
        case hu === cpu:
            console.log(`Human played ${hu} & the computer played ${cpu}. It's a tie!`);
            break;
        // All cases where human wins go here
        case hu === "rock" && cpu === "scissors":
        case hu === "paper" && cpu === "rock":
        case hu === "scissors" && cpu === "paper":
            console.log(`Human played ${hu} & the computer played ${cpu}. Human wins a point!`);
            huScore++;
            break;
        // The default case runs last, and defaults to a computer win.
        default:
            console.log(`Human played ${hu} & the computer played ${cpu}. Computer wins a point!`);
            cpuScore++;
    }
    console.log(`Score -- Human: ${huScore}, Computer: ${cpuScore}`);
}

while (huScore + cpuScore < 5){
    let hu = getPlayerChoice();
    let cpu = getComputerChoice();
    playARound(hu, cpu);
}

if (huScore > cpuScore) {
    console.log("The human wins!")
} else {
    console.log("The computer wins!")
}
