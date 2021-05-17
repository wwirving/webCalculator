// pseudo-code for calc.

// On button press (0-9, .) add string += to 1) screen inner html.
// On button press (+,-,/,*) then add " " + string + " " to 1) screen inner html
// group event listener for all buttons, with switch case to parse values.

window.addEventListener("load", (event) => {
  screen.textContent = "";
});

const calculator = document.querySelector(".calculator");

const screen = document.querySelector(".calculator__cell--screen");

calculator.addEventListener("click", () => {
  if (event.defaultPrevented) {
    return; // do nothing if event processed
  }
  switch (event.target.classList.value) {
    case "calculator__cell--screen":
      screen.textContent = "";
      break;
    case "calculator__cell--1":
      screen.textContent += "1";
      break;
    case "calculator__cell--2":
      screen.textContent += "2";
      break;
    case "calculator__cell--3":
      screen.textContent += "3";
      break;
    case "calculator__cell--plus":
      screen.textContent += " + ";
      break;
    case "calculator__cell--4":
      screen.textContent += "4";
      break;
    case "calculator__cell--5":
      screen.textContent += "5";
      break;
    case "calculator__cell--6":
      screen.textContent += "6";
      break;
    case "calculator__cell--minus":
      screen.textContent += " - ";
      break;
    case "calculator__cell--7":
      screen.textContent += "7";
      break;
    case "calculator__cell--8":
      screen.textContent += "8";
      break;
    case "calculator__cell--9":
      screen.textContent += "9";
      break;
    case "calculator__cell--divide":
      screen.textContent += " / ";
      break;
    case "calculator__cell--0":
      screen.textContent += "0";
      break;
    case "calculator__cell--dot":
      screen.textContent += ".";
      break;
    case "calculator__cell--equals":
      screen.textContent += "" + "\r\n = " + `${doSum(screen.textContent)}`;
      addToReadOut(screen.textContent);
      break;
    case "calculator__cell--times":
      screen.textContent += " * ";
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
console.log(doSum(testSum));

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
