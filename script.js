// ask user for a number between 1-100
//check to see if input is a whole number, and not a string or any other input
//use javascript to draw a grid in a div container with set dimensions
//use CSS grid to make sure the divs are laid out in a grid pattern
//add a hover effect to each div
//use javascript to change the css properties of each div that is hovered over with the mouse
//POTENTIALLY MAKE IT SO THE USER ALSO HAS TO HOLD LEFT CLICK



let gridSize = 0;
const inputBtn = document.getElementById('input');

function getInput() { // prompt user for grid size, check to make sure value is within parameters of code
    input = Math.round(prompt("How many squares per side would you like to draw on? Please enter a number between 1-100"));
    if (isNaN(input)) {
        alert("Please enter a number between 1-100");
        return;
    } else if (input < 1 || input > 100) {
        alert("Only whole numbers between 1-100 work");
        return;
    } else {
        gridSize = input;
        return gridSize;
    }
};

// REMEMBER FOR LATER when requesting grid size with getInput function, save the value and use it to rewrite grid CSS repeat()

function drawGrid(size) {
    gridContainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`
    for (i = 0; i < (size * size); i++) {
        let pixel = document.createElement('div');
        pixel.className = "pixel";
        gridContainer.appendChild(pixel);
    }
};

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};

inputBtn.addEventListener('click', function(e) {
    gridSize = 0;
    removeGrid();
    getInput();
    drawGrid(gridSize);
});