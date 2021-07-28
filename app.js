console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let randomNum = Math.floor(Math.random() * 100) + 1;

let userInput = window.prompt("Enter a whole number between 1 and 100");

if (
  isNaN(userInput) ||
  userInput <= 0 ||
  userInput > 100 ||
  userInput !== userInput
) {
  alert(`You did not enter a whole number between 1 and 100.`);
}
if (randomNum === userInput) {
  alert(`Congrats! ${userInput} = ${randomNum}`);
} else if (randomNum < userInput) {
  alert(`${userInput} too high... :(`);
} else {
  alert(`${userInput} too low... :(`);
}

// Exercise 2
let color = window
  .prompt('Enter your favorite color (e.g. "blue, green, etc."):')
  .toLowerCase();

switch (color) {
  case "blue":

  case "grey":
    alert("Sky colors.");
    break;
  case "green":
    alert("Grass color");
    break;
  case "white":
    alert("Snow color");
    break;
  case "orange":
    alert("Color of sun");
    break;
  default:
    alert("Tons of colors to choose from");
}
