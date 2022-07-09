
//A grid exists. There is a grid. Hello, grid!
//At some point, I would like this to be user input.
let gridSize = 16;
const gridContainer = document.getElementById('grid-container');

gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

//Depending on the grid size, create the elements that populate the grid.
//There should be gridsize squared number of elements
//i want each iteration of this to be a square.
for (i=1; i <= gridSize ** 2; i++) {
    const div = document.createElement('div');
    gridContainer.append(div);
    div.setAttribute('class', 'grid-item');
};
 
let gridItem = document.querySelectorAll(".grid-item");

console.log(gridItem.length);

gridItem.forEach(element => {
    console.log(gridItem.length);
    element.addEventListener("hover")
});

