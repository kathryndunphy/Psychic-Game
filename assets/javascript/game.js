	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	var win = 0;
	var loss = 0;
	var guessesLeft = 14;
	var guessedLetters = [];


	//reset everything to default and start a new game!
	function reset() {
	    guessesLeft = 14;

	    guessedLetters = [];
	    computerGuess = letters[Math.floor(Math.random() * letters.length)];
	    console.log(computerGuess);

	}
	reset();

	function updateLetterToGuess() {
	    guessedLetters = [];
	    guessesLeft = 14;
	    computerGuess = letters[Math.floor(Math.random() * letters.length)];
	    console.log(computerGuess);
	}
	document.onkeydown = function (event) {
	    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	    if (!/[a-z]/.test(userGuess)) {
	        alert("Please choose letter only");
	        guessesLeft++;
	        loss--;
	    }

	    if (guessedLetters.indexOf(userGuess) === -1) {
	        guessedLetters.push(userGuess);
	    } else {
	        guessesLeft++;
	        loss--;
	    }

	    if (userGuess === computerGuess) {
	        win++;
	        alert("Your guess is right, let's try a new letter");
	        updateLetterToGuess();
	    } else {
	        loss++;
	        guessesLeft--;
	    }

	    if (guessesLeft === 0) {

	        alert("You lost")
	        reset();
	    }

	    document.querySelector('#win').innerHTML = "Win: " + win;
	    document.querySelector('#loss').innerHTML = "Loss: " + loss;
	    document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
	    document.querySelector('#guessofar').innerHTML = " Your Guesses: " + guessedLetters;


	};