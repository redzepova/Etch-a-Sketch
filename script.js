//set up grid//


const sizeSelector = document.getElementById('grid-size');
let gridSize = 40
const gridContainer = document.getElementById('grid-container');
let userColor = document.getElementById('color').value;
const gridItem = document.querySelectorAll('.grid-item');


gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

sizeSelector.addEventListener("input", () => {
    removeGrid(gridContainer);
    createGrid();
});

//grid pixels are added with class grid-item.

function createGrid () {
    gridSize = sizeSelector.value;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (i=1; i <= gridSize ** 2; i++) {
        const div = document.createElement('div');
        gridContainer.append(div);
        div.setAttribute('class', 'grid-item');
        console.log(userColor);
    };
};

function removeGrid (parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    };
};

//loop through node list and add mousedown event listener to each child of grid.


gridItem.forEach(element => {
    element.addEventListener('mouseover', changeColor);
    console.log(gridItem.length);
});

function changeColor (e) {
    userColor = document.getElementById('color').value;
    e.target.style.backgroundColor = userColor;
};