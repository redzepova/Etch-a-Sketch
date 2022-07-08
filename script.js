let gridSize = 16;
const gridContainer = document.getElementById('grid-container');

gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

for (i=1; i <= gridSize ** 2; i++) {
    const div = document.createElement('div');
    gridContainer.append(div);
    div.setAttribute('class', 'grid-item');
};
 
let gridItem = document.querySelectorAll(".grid-item");

console.log(gridItem.length);

gridItem.forEach(element => {
    console.log(gridItem.length);
});

