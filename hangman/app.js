//import Hangman from hangman.js

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Cat', 2);
puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keydown', function (e){
    const guess = e.key;
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
})

// Making and HTTP request
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4){
        const data = JSON.parse(e.target.responseText)
        console.log(data);
    }
});
request.open('GET', 'https://puzzle.mead.io/puzzle');
request.send();
