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

