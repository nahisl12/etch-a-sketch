const mainDiv = document.querySelector('.main');

function createGrid() {
     for(let i = 0; i < 16; i++) {
         for(let j = 0; j < 16; j++){
            const row = document.createElement('div');
            row.className = "row";
            mainDiv.appendChild(row);
        }
    }
}
createGrid();

// used to change the colorof the divs
mainDiv.addEventListener('mouseover', function(event){
    if(event.target === mainDiv) {
        mainDiv.style.backgroundColor = 'white';
    } else {
    (event.target).style.backgroundColor = 'red';
    }
 });


// function hoverColor() {
//     row.style.backgroundColor = 'red';
//     console.log("working");
// }

// function createBoard() {
//     for(let i = 0; i < (16*16); i++) {
//         const box = document.createElement('div');
//         box.innerText = (i + 1);
//         box.className = "cell";
//         mainDiv.appendChild(box);
//     }
// }

// createBoard();

