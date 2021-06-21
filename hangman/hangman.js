const Hangman = function (guessedWord, remainingGuesses) {
        this.guessedWord = guessedWord.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.guessedWord.every((letter) => this.guessedLetters.includes(letter));

    if (this.remainingGuesses === 0) {
        this.status = 'failed';
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing'){
        return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.guessedWord.join('')}".`;
    } else {
        return 'Great work! You guessed the work.'
    }
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

    if (this.status !== 'playing') {
        return;
    }
    if (isUnique) {
        this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess ) {
        this.remainingGuesses--;
        
    }

    this.calculateStatus()
}

