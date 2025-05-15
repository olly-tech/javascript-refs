const code = 2300; // NUMBER
let userGuess = prompt("Guess the 4 digit code");
userGuess = parseInt(userGuess); 


if (userGuess === code) {
    // if user guesses correctly
    console.log("Congrats!")
} else if (userGuess >= 10000) {
    // if user enters more than 4 digits
    console.log("Too many digits!");
} else if (userGuess <= 999) {
    // if user enters less than 4 digits
    console.log("Not enough digits");
} else if (isNaN(userGuess)){
    // isNaN is true if the value is not a number, if it's true, console.log "Not a number"
    console.log("Not a number!");
} else {
    // right number of digits but not correct
    console.log("Not correct, sorry!");
}