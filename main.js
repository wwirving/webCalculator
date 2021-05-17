// pseudo-code for calc.

// On button press (0-9, .) add string += to 1) screen inner html.
// On button press (+,-,/,*) then add " " + string + " " to 1) screen inner html
// group event listener for all buttons, with switch case to parse values.

window.addEventListener("load", (event) => {
  screen.textContent = "";
});

const calculator = document.querySelector(".calculator");

const screen = document.querySelector(".calculator__cell--screen");

const splash = document.querySelector("#cutoff");

const main = document.querySelector("#fade");
let operatorIsClicked = true;

calculator.addEventListener("click", () => {
  if (event.defaultPrevented) {
    return; // do nothing if event processed
  }
  switch (event.target.classList.value) {
    case "calculator__cell--screen":
      screen.textContent = "";
      operatorIsClicked = true;
      break;
    case "calculator__cell--1":
      screen.textContent += "1";
      operatorIsClicked = false;

      break;
    case "calculator__cell--2":
      screen.textContent += "2";
      operatorIsClicked = false;

      break;
    case "calculator__cell--3":
      screen.textContent += "3";
      operatorIsClicked = false;

      break;
    case "calculator__cell--plus":
      if (operatorIsClicked) {
      } else {
        screen.textContent += " + ";
        operatorIsClicked = true;
      }
      break;
    case "calculator__cell--4":
      screen.textContent += "4";
      operatorIsClicked = false;

      break;
    case "calculator__cell--5":
      screen.textContent += "5";
      operatorIsClicked = false;

      break;
    case "calculator__cell--6":
      screen.textContent += "6";
      operatorIsClicked = false;

      break;
    case "calculator__cell--minus":
      if (operatorIsClicked) {
      } else {
        screen.textContent += " - ";
        operatorIsClicked = true;
      }
      break;
    case "calculator__cell--7":
      screen.textContent += "7";
      operatorIsClicked = false;

      break;
    case "calculator__cell--8":
      screen.textContent += "8";
      operatorIsClicked = false;

      break;
    case "calculator__cell--9":
      screen.textContent += "9";
      operatorIsClicked = false;

      break;
    case "calculator__cell--divide":
      if (operatorIsClicked) {
      } else {
        screen.textContent += " / ";
        operatorIsClicked = true;
      }
      break;
    case "calculator__cell--0":
      screen.textContent += "0";
      operatorIsClicked = false;

      break;
    case "calculator__cell--dot":
      if (operatorIsClicked) {
      } else {
        screen.textContent += ".";
        operatorIsClicked = true;
      }
      break;
    case "calculator__cell--equals":
      if (operatorIsClicked) {
      } else {
        screen.textContent += "" + "\r\n = " + `${doSum(screen.textContent)}`;
        addToReadOut(screen.textContent);
        operatorIsClicked = true;
      }
      break;
    case "calculator__cell--times":
      if (operatorIsClicked) {
      } else {
        screen.textContent += " * ";
        operatorIsClicked = true;
      }
      break;
    default:
      return;
  }
});

// on equals, call sumArray function which takes array as input

// create function for each expression

const add = (firstNumber, secondNumber) => {
  let first = Number(firstNumber);
  let second = Number(secondNumber);
  return first + second;
};

const minus = (firstNumber, secondNumber) => {
  let first = Number(firstNumber);
  let second = Number(secondNumber);
  return first - second;
};

const times = (firstNumber, secondNumber) => {
  let first = Number(firstNumber);
  let second = Number(secondNumber);
  return first * second;
};

const divide = (firstNumber, secondNumber) => {
  let first = Number(firstNumber);
  let second = Number(secondNumber);
  return first / second;
};

const doSum = (input) => {
  let total = 0;
  const sumArr = input.split(" ");
  // input "33 + 66"
  // "22 + 33 = 55"
  // ["33", "+", "66"]
  if (sumArr.length <= 1) {
    total = sumArr[0];
  }
  // loop through array and create sum
  for (let i = 0; i < sumArr.length; i++) {
    let value = sumArr[i];
    if (isNaN(value)) {
      switch (value) {
        case "+":
          if (i === 1) {
            total += add(sumArr[i - 1], sumArr[i + 1]);
          } else {
            total += Number(sumArr[i + 1]);
          }
          break;
        case "-":
          if (i === 1) {
            total += minus(sumArr[i - 1], sumArr[i + 1]);
          } else {
            total -= Number(sumArr[i + 1]);
          }
          break;
        case "/":
          if (i === 1) {
            total += divide(sumArr[i - 1], sumArr[i + 1]);
          } else {
            total /= Number(sumArr[i + 1]);
          }
          break;
        case "*":
          if (i === 1) {
            total += times(sumArr[i - 1], sumArr[i + 1]);
          } else {
            total *= Number(sumArr[i + 1]);
          }
          break;
        default:
          break;
      }
    }
  }
  return total;
};

let testSum = "435 + 238 * 234 / 3243 - 213";

// function to add last sum to console list

const addToReadOut = (screenInput) => {
  const readOut = document.querySelector(".readout__list");

  let htmlString = `
  <li>
  <span> RESULT </span><br>
  ${screenInput}
  </li>
  `;

  readOut.insertAdjacentHTML("afterbegin", htmlString);
};
