const mainDiv = document.querySelector('.main');

function createGrid(row, col) {
     for(let i = 0; i < row; i++) {
        mainDiv.style.setProperty('--grid-rows', row);
        mainDiv.style.setProperty('--grid-cols', col);
         for(let j = 0; j < col; j++){
            const row = document.createElement('div');
            row.className = "row";
            mainDiv.appendChild(row);
        }
    }
}

// function createBoard(row, col) {
//     mainDiv.style.setProperty('--grid-rows', row);
//     mainDiv.style.setProperty('--grid-cols', col);
//     for(let i = 0; i < (row*col); i++) {
//         const box = document.createElement('div');
//         box.innerText = (i + 1);
//         box.className = "cell";
//         mainDiv.appendChild(box);
//     }
// }

// createBoard(16,16);


// used to change the colorof the divs
mainDiv.addEventListener('mouseover', function(event){
    if(event.target === mainDiv) {
        mainDiv.style.backgroundColor = 'white';
    } else {
    (event.target).style.backgroundColor = 'red';
    }
 });

 // RESET BUTTON AND REDRAW BASED ON INPUTTED SIZE
 const resetBtn = document.querySelector('.resetGrid');
 resetBtn.addEventListener('click', function(){
    let child = mainDiv.lastElementChild;
    while(child){
        mainDiv.removeChild(child);
        child = mainDiv.lastElementChild;
    }

    let userChoice = prompt("how big would you like the grid to be?");
    if(userChoice <= 64){
    createGrid(userChoice,userChoice);
    } else {
        let userChoice = prompt("how big would you like the grid to be? DO NOT EXCEED 64");
    }
 });


 createGrid(16,16);
