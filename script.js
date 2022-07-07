let gridSize = 4
const gridContainer = document.getElementById('grid-container');

for (i=1; i <= gridSize; i++) {
    const div = document.createElement('div');
    gridContainer.append(div);
    div.setAttribute('class', 'grid-item');
};