
/**
 * Hold all possible game moves + win and lose conditions
 */
const validChoices = [
    {
        name: "rock"
        , beats: "scissors"
        , loses: "paper"
    },
    {
        name: "paper"
        , beats: "rock"
        , loses: "scissors"
    },
    {
        name: "scissors"
        , beats: "paper"
        , loses: "rock"
    },

]

const playerWins = "You win!! :)";
const computerWins = "Sorry, you lose!! :(";
const tie = "Looks like a tie!";

/**
 * 'Randomly' select a choice for the computer player
 * @returns String of either 'rock', 'paper' or 'scissors'
 */
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    let choice = validChoices[randInt];

    return choice.name;
}

/**
 * Take two player inputs and calculate the winner
 * Assumption is that the inputs are validated elsewhere
 * @param {*} playerSelection 
 * @param {*} computerSelection 
 * @returns String representing winner / loser
 */
function playGame(playerSelection, computerSelection) {
    let result;
    let playerObject = validChoices.find((choice) => choice.name === playerSelection);
    let computerObject = validChoices.find((choice) => choice.name === computerSelection);

    if (playerObject == computerObject){
        return result = tie;
    }else if(playerObject.beats === computerObject.name){
        return result = playerWins;
    }else if (playerObject.loses === computerObject.name){
        return result = computerWins;
    }
}