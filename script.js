const start = document.getElementById('start');
const blue = document.getElementById('blue');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

const counter = document.getElementById('counter');
let turn = 0; // Initialize turn counter
let sequence = []; // Initialize sequence array
let playerSequence = []; // Initialize player sequence array

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game() {
            // Increment turn counter
    turn++;
    counter.innerHTML = `<h1>Turn: ${turn}</h1>`;

            // Clear previous sequences
    sequence = [];
    playerSequence = [];

            // Loop to handle the color changes for each turn
    for (let i = 0; i < turn; i++) {
        setTimeout(() => {
                    // Reset all colors
            blue.style.backgroundColor = "";
            red.style.backgroundColor = "";
            yellow.style.backgroundColor = "";
            green.style.backgroundColor = "";

                    // Randomly select a color
            const random = getRandomInteger(1, 4);
            let selectedButton;

            if (random === 1) {
                selectedButton = red;
                red.style.backgroundColor = "red";
            } else if (random === 2) {
                selectedButton = blue;
                blue.style.backgroundColor = "blue";
            } else if (random === 3) {
                selectedButton = yellow;
                yellow.style.backgroundColor = "yellow";
            } else {
                selectedButton = green;
                green.style.backgroundColor = "green";
            }

            sequence.push(selectedButton.id); // Add to sequence array
        }, i * 2000);

                // Reset colors after each turn
        setTimeout(() => {
            blue.style.backgroundColor = "";
            red.style.backgroundColor = "";
            yellow.style.backgroundColor = "";
            green.style.backgroundColor = "";
        }, i * 2000 + 1000);
    }

    // Allow player to input sequence
    setTimeout(() => {
        enableButtons();
    }, turn * 2000);
}

function enableButtons() {
    blue.addEventListener('click', () => handlePlayerInput('blue'));
    red.addEventListener('click', () => handlePlayerInput('red'));
    yellow.addEventListener('click', () => handlePlayerInput('yellow'));
    green.addEventListener('click', () => handlePlayerInput('green'));
}

function handlePlayerInput(color) {
    playerSequence.push(color);

    if (playerSequence.length === sequence.length) {
        if (arraysEqual(playerSequence, sequence)) {
            alert("You win!");
        } else {
            alert("Try again!");
        }
        playerSequence = [];
    }
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

start.addEventListener('click', game);
