// Define players
const player = 'Player';
const computer = 'Computer';

// Define position
let position = null;

// Define gameValues
const gameValues = ["rock", "paper", "scissors"];

// Define classes
const options = {
  rockClass: "fa-hand-back-fist",
  paperClass: "fa-hand",
  scissorsClass: "fa-hand-scissors"
}

const optionsKeys = Object.keys(options);

// Define counters
let pCounter = 0;
let cCounter = 0;
const playerCounter = document.querySelector("#player-counter");
const computerCounter = document.querySelector("#computer-counter");;

// Save selections
const optionsBoard = document.querySelector(".options");
const playerSelection = document.querySelector('.player-selection span');
const computerSelection = document.querySelector('.computer-selection span');

// Save options
const rock = document.querySelector(".rock span");
const paper = document.querySelector(".paper span");
const scissors = document.querySelector(".scissors span");

// Save log
const log = document.querySelector(".log");


// Get the computer selection
const getComputerSelection = () => {
  computerSelection.className = "fa-solid ";
  position = Math.floor(Math.random(optionsKeys) * optionsKeys.length);
  computerSelection.classList.add(options[optionsKeys[position]]);
}

// Get the player selection
const getPlayerSelection = (option) => {
  playerSelection.className = "fa-solid ";
  playerSelection.classList.add(option);
}

// Get winner
const getWinner = (pCounter, cCounter) => {
  // Create 'p' element as a log
  const logElement = document.createElement("p");

  if (pCounter === 3) {
    logElement.textContent = `👉 Player Wins`;
    log.appendChild(logElement);
  }

  if (cCounter === 3) {
    logElement.textContent = `👉 Computer Wins`;
    log.appendChild(logElement);
  }

  if (cCounter === 3 || pCounter === 3) {
    optionsBoard.classList.toggle("options-disabled");
  }
}

// Calculate Score
const calculateScore = (playerOption, computerOption) => {
  if (  playerOption === computerOption ) {
    playerCounter.textContent = pCounter;
    computerCounter.textContent = cCounter;
  } 
  
  if ( playerOption === "rock" && computerOption === "paper"
    || playerOption === "scissors" && computerOption === "rock"
    || playerOption === "paper" && computerOption === "scissors") {
    cCounter += 1;
    computerCounter.textContent = cCounter;
  }

  if (playerOption === "rock" && computerOption === "scissors"
    || playerOption === "scissors" && computerOption === "paper"
    || playerOption === "paper" && computerOption === "rock") {
    pCounter += 1;
    playerCounter.textContent = pCounter;
  }
    
  // Create 'p' element as a log
  const logElement = document.createElement("p");

  logElement.textContent = `👉 Player selects ${playerOption} and Computer selects ${computerOption}`;
  log.appendChild(logElement);

  getWinner(pCounter, cCounter);
}

// Listeners
rock.addEventListener("click", () => {
  getPlayerSelection(options.rockClass);
  getComputerSelection();
  calculateScore(gameValues[0], gameValues[position]);
});

paper.addEventListener("click", () => {
  getPlayerSelection(options.paperClass);
  getComputerSelection();
  calculateScore(gameValues[1], gameValues[position]);
});

scissors.addEventListener("click", () => {
  getPlayerSelection(options.scissorsClass);
  getComputerSelection();
  calculateScore(gameValues[2], gameValues[position]);
});







