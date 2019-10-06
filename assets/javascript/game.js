


const computerGuessOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let computerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessesSofar = [];




document.onkeyup = function(event) {
    
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    guessesLeft--;
    guessesSofar.push(userGuess);
    showGuessesSoFar();
    showGuessesLeft();
    
    if (userGuess === computerGuess) {
        wins++;
        document.getElementById("Wins").innerHTML = ' ' + wins;
        startOver();
    }

    else if (guessesLeft === 0) {
        losses++;
        document.getElementById("Losses").innerHTML = ' ' + losses;
        console.log("this works")
        starOver();
    }


}

function showGuessesSoFar() {
    
    document.getElementById("Guesses-input").innerHTML = guessesSofar.join("");
}

function showGuessesLeft() {
    document.getElementById("GuessesLeft").innerHTML = guessesLeft;
}

function starOver () {
    guessesLeft = 9; 
    guessesSofar = []; 

}