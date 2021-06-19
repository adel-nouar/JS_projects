// 1- Create a constructor function for the hangman game
const Hangman = function (guessedWord, remainingGuesses) {
        this.guessedWord = guessedWord.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
    
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = '';
    
    this.guessedWord.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter;
        } else{
            puzzle += '*';
        }
    });
    
    return puzzle;
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    console.log(guess)
    const isUnique = !this.guessedLetters.includes(guess);
    
    const isBadGuess = this.guessedWord.includes(guess);

    if (isUnique) {
        this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess ) {
        this.remainingGuesses--;
        
    }
}
const game1 = new Hangman('Cat', 2);
console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);

window.addEventListener('keydown', function (e){
    const guess = e.key
    game1.makeGuess(guess)
    console.log(game1.getPuzzle());
    console.log(game1.remainingGuesses);
})