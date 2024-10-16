const button = document.querySelector('button');

let randomNumberOne;
let randomNumberTwo;

// Player counters
var playerOneCount = 0;
var playerTwoCount = 0;

// Flag to check if the game is resetting
let isResetting = false;

// Change the button text on click
button.addEventListener('click', function () {
    if (button.textContent === "Roll the Dice") {
        button.textContent = "Roll again";
        isResetting = false; // Not resetting, regular game flow
    } else if (button.textContent === "Play another round...") {
        button.textContent = "Roll the Dice";
        playerOneCount = 0;
        playerTwoCount = 0;
        isResetting = true; // Game is resetting now
        resetCounters(); // Call the function to reset counters visually
        document.querySelector('h2').textContent = ""; // Clear the result message
    }
});

// Roll Player 1 Dice
button.addEventListener('click', function rollDiceOne() {
    if (!isResetting) {
        randomNumberOne = Math.floor(Math.random() * 6) + 1;
        const newLocationOne = "images/dice" + randomNumberOne + ".png";
        const imageOne = document.querySelectorAll("img")[0];
        imageOne.setAttribute("src", newLocationOne);
    }
});

// Roll Player 2 Dice
button.addEventListener('click', function rollDiceTwo() {
    if (!isResetting) {
        randomNumberTwo = Math.floor(Math.random() * 6) + 1;
        const newLocationTwo = "images/dice" + randomNumberTwo + ".png";
        const imageTwo = document.querySelectorAll("img")[1];
        imageTwo.setAttribute("src", newLocationTwo);
    }
});

// Display the result
button.addEventListener('click', function results() {
    if (!isResetting) {
        if (randomNumberOne > randomNumberTwo) {
            document.querySelector("h2").textContent = "Player 1 wins";
        } else if (randomNumberOne < randomNumberTwo) {
            document.querySelector("h2").textContent = "Player 2 wins";
        } else {
            document.querySelector("h2").textContent = "Draw";
        }
    }
});

// Player counter logic
button.addEventListener('click', function results1() {
    if (!isResetting) {
        let h2Element = document.querySelector('h2');
        if (h2Element && h2Element.textContent.includes('Player 1 wins')) {
            playerOneCount += 1;
        } else if (h2Element && h2Element.textContent.includes('Player 2 wins')) {
            playerTwoCount += 1;
        }

        updateCounters(); // Update visual counters
    }
});

// Function to reset the counters visually
function resetCounters() {
    const playerOneDivs = document.querySelectorAll('.visualCounter1 div');
    const playerTwoDivs = document.querySelectorAll('.visualCounter2 div');
    playerOneDivs.forEach(div => div.style.backgroundColor = '#c2fbd7');
    playerTwoDivs.forEach(div => div.style.backgroundColor = '#c2fbd7');
}

// Function to update the counters visually
function updateCounters() {
    // Player1 color bar
    const playerOneDivs = document.querySelectorAll('.visualCounter1 div');
    const playerTwoDivs = document.querySelectorAll('.visualCounter2 div');

    // Update Player 1 Counter
    for (let i = 0; i < 5; i++) {
        playerOneDivs[i].style.backgroundColor = (i < playerOneCount) ? 'green' : '#c2fbd7';
    }
    if (playerOneCount === 5) {
        playerOneDivs.forEach(div => div.style.backgroundColor = 'gold');
        document.querySelector("h2").textContent = "Player 1 has won the game!!!";
        button.textContent = "Play another round...";
    }

    // Update Player 2 Counter
    for (let i = 0; i < 5; i++) {
        playerTwoDivs[i].style.backgroundColor = (i < playerTwoCount) ? 'green' : '#c2fbd7';
    }
    if (playerTwoCount === 5) {
        playerTwoDivs.forEach(div => div.style.backgroundColor = 'gold');
        document.querySelector("h2").textContent = "Player 2 has won the game!!!";
        button.textContent = "Play another round...";
    }
}
