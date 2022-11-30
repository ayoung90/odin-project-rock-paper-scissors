
const validChoices = ["rock", "paper", "scissors"];

const playerWins = "You win!! :)";
const computerWins = "Sorry, you lose!! :(";

/**
 * 'Randomly' select a choice for the computer player
 * @returns String of either 'rock', 'paper' or 'scissors'
 */
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    let choice = validChoices[randInt];

    return choice;
}

