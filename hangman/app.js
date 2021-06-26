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

const puzzle = getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    }else {
        console.log(puzzle);
    }
});

// Making and HTTP request


// const countryCode = 'FR';
// const restCountries = 'http://restcountries.eu/rest/v2/all';

// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('Unable to fetch data.')
//     }
// })

// countryRequest.open('GET', restCountries);
// countryRequest.send()
