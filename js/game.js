/**
 * Hold all possible game moves + win and lose conditions
 */
const validChoices = [
  {
    name: "rock",
    beats: "scissors",
    loses: "paper",
  },
  {
    name: "paper",
    beats: "rock",
    loses: "scissors",
  },
  {
    name: "scissors",
    beats: "paper",
    loses: "rock",
  },
];

const playerWinResult = "You win!! :)";
const computerWinResult = "Sorry, you lose!! :(";
const tieResult = "Looks like a tie!";

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
 * Prompts input and validates that a correct choice has been made
 * @returns String of either 'rock', 'paper' or 'scissors'
 */
function getPlayerChoice() {
  let input;
  let choiceObject;
  while (true) {
    input = prompt("Please enter 'Rock, Paper or Scissors'");
    input = input.toLowerCase();
    choiceObject = validChoices.find((item) => item.name === input); // check it exists
    if (choiceObject) {
      break;
    }
    alert(
      `Sorry, ${input} does not exist. Please enter 'Rock, Paper or Scissors'`
    );
  }

  return choiceObject.name;
}

/**
 * Take two player inputs and calculate the winner
 * Assumption is that the inputs are validated elsewhere
 * @param {String} playerSelection
 * @param {String} computerSelection
 * @returns String representing winner / loser
 */
function playRound(playerSelection, computerSelection) {
  let playerObject = validChoices.find(
    (choice) => choice.name === playerSelection
  );
  let computerObject = validChoices.find(
    (choice) => choice.name === computerSelection
  );

  if (playerObject == computerObject) {
    return tieResult;
  } else if (playerObject.beats === computerObject.name) {
    return playerWinResult;
  } else if (playerObject.loses === computerObject.name) {
    return computerWinResult;
  }
}

/**
 * Play a series of Rock, Paper, Scissors games and output the result
 * @param {number} rounds Number of rounds to play (Default = 5)
 */
function playGame(rounds = 5) {
  let playerCounter = 0;
  let computerCounter = 0;
  let tieCounter = 0;

  for (i = 0; i < rounds; i++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let result = playRound(playerChoice, computerChoice);

    //Let the player know if they win/lose each round
    console.log(result);

    if (result === playerWinResult) {
      playerCounter++;
    } else if (result === computerWinResult) {
      computerCounter++;
    } else if (result === tieResult) {
      tieCounter++;
    }
  }
  
  // Final Output
  console.log("GAME OVER ---- Rounds = " + rounds);
  console.log("Player wins = " + playerCounter);
  console.log("Computer wins = " + computerCounter);
  console.log("Ties = " + tieCounter);
}
