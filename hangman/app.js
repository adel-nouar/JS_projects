//import Hangman from hangman.js

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Cat', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
    const guess = e.key;
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
})

const puzzle = getPuzzle('2', (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    }else {
        console.log(puzzle);
    }
});



getCountry('FR', (error, country) => {
    if (error){
        console.log(error)
    }else {
        console.log(`Country name: ${country.name}`)
    }
})



