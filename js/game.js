
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
function getPlayerChoice(){
    let input;
    let choiceObject;
    while (true){
        input = prompt("Please enter 'Rock, Paper or Scissors'");
        input = input.toLowerCase();
        choiceObject = validChoices.find((item) => item.name === input) // check it exists
        if (choiceObject){
            break;
        }
        alert(`Sorry, ${input} does not exist. Please enter 'Rock, Paper or Scissors'`);
        
    }

    return choiceObject.name;
}

/**
 * Take two player inputs and calculate the winner
 * Assumption is that the inputs are validated elsewhere
 * @param {*} playerSelection 
 * @param {*} computerSelection 
 * @returns String representing winner / loser
 */
function playRound(playerSelection, computerSelection) {
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