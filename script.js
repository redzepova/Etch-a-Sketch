//set up grid//


const sizeSelector = document.getElementById('grid-size');
let gridSize = 40
const gridContainer = document.getElementById('grid-container');
let userColor = document.getElementById('color').value;
let gridItem = document.querySelector('.grid-item');
let r = 0;
let g = 0;
let b = 0;

createGrid(gridSize);


/* when size slider is moved "input" do the following:
    Remove the existing grid by deleting the children of gridContainer
    Create a new grid using the input from size Slider */

sizeSelector.addEventListener("input", () => {
    gridSize = sizeSelector.value;
    removeGrid(gridContainer);
    createGrid(gridSize);
});



function createGrid (size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (i=1; i <= size ** 2; i++) {
        const div = document.createElement('div');
        gridContainer.append(div);
        div.setAttribute('class', 'grid-item');
        gridItem = document.querySelectorAll('.grid-item');  
    };
    gridItem.forEach(element => {
        element.addEventListener('mouseover', changeColor);
    });
};

/*This function actually happens first. Pass parent node to the function. While parent node has any children
remove the first child until no more children.
    removeGrid (grid container). While gridContainer has any gridItem divs, delete the first gridItem.
    Do this until there are no more gridItems. */

function removeGrid (parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    };
};

//loop through node list and add mousedown event listener to each child of grid.


function changeColor (e) {
   // userColor = document.getElementById('color').value;
   r = rainbowColor();
   g = rainbowColor();
   b = rainbowColor();
   userColor = `rgb(${r}, ${g}, ${b})`;
    e.target.style.backgroundColor = userColor;
}; 

function rainbowColor () {
    return Math.floor(Math.random()* (255+1));
};