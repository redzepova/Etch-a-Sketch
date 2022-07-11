//set up grid//
let gridSize = 40;
const gridContainer = document.getElementById('grid-container');

gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

//grid pixels are added with class grid-item.
for (i=1; i <= gridSize ** 2; i++) {
    const div = document.createElement('div');
    gridContainer.append(div);
    div.setAttribute('class', 'grid-item');
};

//loop through node list and add mousedown event listener to each child of grid.
const gridItem = document.querySelectorAll('.grid-item');

gridItem.forEach(element => {
    element.addEventListener('mouseover', changeColor);
    console.log(gridItem.length);
});

function changeColor (e) {
    e.target.style.backgroundColor = "red";
};