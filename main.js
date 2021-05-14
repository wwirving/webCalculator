// pseudo-code for calc.

// On button press (0-9, .) add string += to 1) screen inner html.
// On button press (+,-,/,*) then add " " + string + " " to 1) screen inner html

// group event listener for all buttons, with switch case to parse values.

window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    event.target.classList ?

    switch (event.key) {
      case "ArrowDown":
        // code for "down arrow" key press.
        break;
      case "ArrowUp":
        // code for "up arrow" key press.
        break;
      case "ArrowLeft":
        // code for "left arrow" key press.
        break;
      case "ArrowRight":
        // code for "right arrow" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true
);
// the last option dispatches the event to the listener first,
// then dispatches event to window

// on equals, call sumArray function which takes array as input

// sumArray functions takes array, splits into sections (even = numbers, odd = sum functions) and calculates sum for length of array

