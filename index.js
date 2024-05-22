const leftDice = document.querySelector("#left-dice");
const rightDice = document.querySelector("#right-dice");

const roll = document.querySelector(".roll-btn");
const result = document.querySelector(".result");

// GENERATE A RANDOM NUMBER FROM 0 TO 5
function randomNum() {
  return Math.floor(Math.random() * 6 + 1);
}

// RANDOM LEFT DICE
function randomDiceLeft() {
  let chooseDice = randomNum();
  if (chooseDice === 1) {
    leftDice.setAttribute("src", "./src/images/one.svg");
  } else if (chooseDice === 2) {
    leftDice.setAttribute("src", "./src/images/two.svg");
  } else if (chooseDice === 3) {
    leftDice.setAttribute("src", "./src/images/three.svg");
  } else if (chooseDice === 4) {
    leftDice.setAttribute("src", "./src/images/four.svg");
  } else if (chooseDice === 5) {
    leftDice.setAttribute("src", "./src/images/five.svg");
  } else if (chooseDice === 6) {
    leftDice.setAttribute("src", "./src/images/six.svg");
  }
  console.log(chooseDice);
  return chooseDice;
}

// RANDOM RIGHT DICE
function randomDiceRight() {
  let chooseDice = randomNum();
  if (chooseDice === 1) {
    rightDice.setAttribute("src", "./src/images/one.svg");
  } else if (chooseDice === 2) {
    rightDice.setAttribute("src", "./src/images/two.svg");
  } else if (chooseDice === 3) {
    rightDice.setAttribute("src", "./src/images/three.svg");
  } else if (chooseDice === 4) {
    rightDice.setAttribute("src", "./src/images/four.svg");
  } else if (chooseDice === 5) {
    rightDice.setAttribute("src", "./src/images/five.svg");
  } else if (chooseDice === 6) {
    rightDice.setAttribute("src", "./src/images/six.svg");
  }
  console.log(chooseDice);
  return chooseDice;
}

// PLAY THE GAME
function play() {
  let leftDiceResult = randomDiceLeft();
  let rightDiceResult = randomDiceRight();
  if (leftDiceResult < rightDiceResult) {
    result.innerHTML = "RIGHT WINS!";
  } else if (leftDiceResult > rightDiceResult) {
    result.innerHTML = "LEFT WINS!";
  } else if (leftDiceResult === rightDiceResult) {
    result.innerHTML = "DRAW! TRY AGAIN";
  }
}

roll.addEventListener("click", play);
