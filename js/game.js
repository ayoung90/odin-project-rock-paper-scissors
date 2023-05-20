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

//References to styles
const buttonSelectedStyle = "selected";

/**
 * Returns a formatted string of valid options for input
 * e.g item1, item2, item3
 * @returns
 */
function getValidChoicesString() {
  let choiceNames = validChoices.map((choice) => choice.name);

  return choiceNames.join(", ");
}

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
  let validChoiceString = getValidChoicesString();

  while (true) {
    input = prompt("Please enter: " + validChoiceString);
    input = input.toLowerCase();
    choiceObject = validChoices.find((item) => item.name === input); // check it exists
    if (choiceObject) {
      break;
    }
    alert(
      `Sorry, ${input} does not exist. Please enter: '${validChoiceString}'`
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

function styleButton(button) {
  button.classList.add(buttonSelectedStyle);
}

/**
 * On click event handler to play game & display the result
 * @param {*} event
 */
function playerClick(event) {
  //reset state of buttons
  playerButtons.forEach((button) => button.classList.remove(buttonSelectedStyle));
  computerButtons.forEach((button) => button.classList.remove(buttonSelectedStyle));

  let playerChoice = event.target.innerText.toLowerCase();
  let computerChoice = getComputerChoice();

  //play round and display result
  let resultDisplayContainer = document.querySelector("#result");
  resultDisplayContainer.textContent = playRound(playerChoice, computerChoice);

  //colour the selected items for player and computer
  styleButton(document.querySelector(`#playerContainer .${playerChoice}`));
  styleButton(document.querySelector(`#computerContainer .${computerChoice}`));
}

const playerButtons = document.querySelectorAll("#playerContainer button");
const computerButtons = document.querySelectorAll("#computerContainer button");

//Add event handlers to all player buttons
playerButtons.forEach((button) => {
  button.addEventListener("click", playerClick);
});
