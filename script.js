// ask user for a number between 1-100
//check to see if input is a whole number, and not a string or any other input
//use javascript to draw a grid in a div container with set dimensions
//use CSS grid to make sure the divs are laid out in a grid pattern
//add a hover effect to each div
//use javascript to change the css properties of each div that is hovered over with the mouse
//POTENTIALLY MAKE IT SO THE USE ALSO HAS TO HOLD LEFT CLICK



let gridSize = 0;
const inputBtn = document.getElementById('input');

function getInput() { // prompt user for grid size, check to make sure value is within parameters of code
    input = prompt("How many squares per side would you like to draw on? Please enter a number between 1-100")
    if (isNaN(input)) {
        alert("Please enter a number between 1-100");
        return;
    } else if (input < 1 || input > 100) {
        alert("Only whole numbers between 1-100 work");
        return;
    } else {
        gridSize = input;
    }

}

// function checkNumber() {
//     if inp
// }

// SAVED FOR LATER when requesting grid size with getInput function, save the value and use it to rewrite grid CSS repeat()

function drawGrid() {
    for (i = 0; i < 16; i++) {
        let pixel = document.createElement('div');
        pixel.className = "pixel";
        gridContainer.appendChild(pixel);
    }
}

drawGrid();

inputBtn.addEventListener('click', getInput);