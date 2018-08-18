var letters = [ "f", "m", "l"];

var guessedLetters = [];

var lettersToGuess = null;

var guessesLeft = 7;

var wins = 0;
var losses = 0;

var updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    letters.length = 3;
};

var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");
};

var reset = function() {
    guessesLeft = 7;
    guessedLetters= [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesleft();

document.onkeydown = function(event) {
    guessesLeft--;


var letter = String.fromCharCode(event.which).toLowerCase();

guessedLetters.push(letter);

updateGuessesLeft();
updateLettersGuessed();

if (letter === letterToGuess) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;

    reset();
}

if (guessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;

    reset();
}
};