let numberToGuess = Math.round(Math.random() * 100);
let attempts = 0;
const test = (event) => console.log(event);

const guessTheNumber = (event) => {
    attempts++;
    headline.style.color = "";
    displayAttemps.innerHTML = "Versuche: " + attempts;
    if (numberToGuess < guessInput.value) {
        headline.innerHTML = "Die gesuchte Zahl ist kleiner!";
    } else if (numberToGuess > guessInput.value) {
        headline.innerHTML = "Die gesuchte Zahl ist größer!";
    }
    if (numberToGuess == guessInput.value) {
        headline.innerHTML = "Herzlichen Glückwunsch, du hast die Zahl erraten!";
        headline.style.color = "green";
    }
    console.log(numberToGuess);
};
