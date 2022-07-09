//set up grid//
let gridSize = 25;
const gridContainer = document.getElementById('grid-container');

gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

//grid pixels are added with class grid-item.
for (i=1; i <= gridSize ** 2; i++) {
    const div = document.createElement('div');
    gridContainer.append(div);
    div.setAttribute('class', 'grid-item');
};

//
const gridItem = document.querySelectorAll('.grid-item');

gridItem.forEach(element => {
    element.addEventListener('mouseover', () => {
    element.removeAttribute('.grid-item');
    element.classList.add('grid-hover');
    });
});