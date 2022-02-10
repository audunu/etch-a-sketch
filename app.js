// <div class="grid-item grid-item-1">Grid item 1</div>

const container = document.querySelector('.grid-container');
const btn = document.querySelector('.button');

for (let i = 1; i <= (16*16); i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item', `grid-item-${i}`);
    square.innerText = `${i}`;
    
    square.addEventListener('mouseover', e => {
        e.target.classList.add('color')});
    
    container.appendChild(square);
}

btn.addEventListener('click', newGrid);

function newGrid() {
    
    prompt('enter desired number of rows/columns for a new grid');
}