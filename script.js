let grid = document.querySelector('.grid')

for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 24; j++) {
        //create 768 buttons
        var tempButton = document.createElement('button');
        tempButton.style.backgroundColor = 'lightgrey'
        tempButton.addEventListener('mouseover', setPlatformMO)
        tempButton.addEventListener('click', setPlatformCL)
        grid.appendChild(tempButton);  
    }
}

let buttonList = grid.querySelectorAll('button')

function setPlatformMO(e) {
    if (e.buttons > 0) {
        if (this.style.backgroundColor == 'lightgrey') this.style.backgroundColor = 'blue'
        else if (this.style.backgroundColor == 'blue') this.style.backgroundColor = 'lightgrey' 
    }

}

function setPlatformCL(e) {
    if (this.style.backgroundColor == 'lightgrey') this.style.backgroundColor = 'blue'
    else if (this.style.backgroundColor == 'blue') this.style.backgroundColor = 'lightgrey' 

}

function exportLevel() {
    var tempArray = [];

    for (let i = 0; i < buttonList.length; i++) {
        if (buttonList[i].style.backgroundColor == 'blue')
            tempArray.push('02');
        else if (buttonList[i].style.backgroundColor == 'lightgrey')
            tempArray.push('01');
    }

    console.log(tempArray)
}