const container = document.querySelector('#gridContainer');

function addDiv () {
   const newDiv = document.createElement('div');
   newDiv.textContent = "Hi";
   container.appendChild(newDiv);
}

function multipleDiv (numBlocks) {
    for (let i = 0; i < numBlocks; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('gridBox')
        container.appendChild(newDiv);
    }

    const gridBox = document.querySelectorAll('.gridBox');
    for (const box of gridBox) {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "black";
        });
    }
}


const button = document.querySelector('button');
const input = document.querySelector('#number');
button.addEventListener('click', () => {
    const userInput = input.value;
    container.innerHTML= ""
    multipleDiv(userInput);
}
)



