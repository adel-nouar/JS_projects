// 1- Create a constructor function for the hangman game
const Hangman = function (guessedWord, nbGuesses) {
        this.guessedWord = guessedWord.toLowerCase().split('');
        this.nbGuesses = nbGuesses;
        this.guessedLetters = ['c', 'e'];
    
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

const game1 = new Hangman('Cat', 2);
console.log(game1.getPuzzle());

const game2 = new Hangman('New Jersey', 4);
console.log(game2.getPuzzle());