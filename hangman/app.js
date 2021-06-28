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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle);
},(error) => {
    console.log(`Error: ${error}`);
});



getCountry('FR').then((country) => {
    console.log(country.name)
}, (err) => {
    console.log(`Error: ${err}`)
});