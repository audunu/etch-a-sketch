// <div class="grid-item grid-item-1">Grid item 1</div>

const container = document.querySelector('.grid-container');
const btn = document.querySelector('.button');

function createGrid(numberOfRows) {
    container.style.cssText = `grid-template-columns: repeat(${numberOfRows}, 1fr); grid-template-rows: repeat(${numberOfRows}  , 1fr)`;
    for (let i = 1; i <= (numberOfRows*numberOfRows); i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item', `grid-item-${i}`);
        
        
        square.addEventListener('mouseover', e => {
            e.target.classList.add('color')});
        
        container.appendChild(square);
    }    
}


function clearGrid() {
    /* const allSquares = document.querySelectorAll('.grid-item');
    for (const square of allSquares) {
        square.classList.remove('color');
    } */

    container.innerHTML = '';
    
    
}

function getUserInput() {
    let userInput = parseInt(prompt('enter desired number of rows/columns for a new grid. min 1 max 100.', 16));
    while(isNaN(userInput) || userInput > 100 || userInput < 1) {
        userInput = parseInt(prompt('enter desired number of rows/columns for a new grid. min 1 max 100.', 16));
    }
    return userInput;

}



btn.addEventListener('click', () => {;
    clearGrid();
    createGrid(getUserInput());
});



createGrid(16);