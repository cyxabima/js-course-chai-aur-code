const actual = Math.floor(Math.random() * 100) + 1;

const form = document.querySelector('form');
const guessField = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const hiOrLow = document.querySelector('.lowOrHi');
const button = document.querySelector('#subt');

const allGuess = [];
let total_guess = 10;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const guessFieldValue = parseInt(guessField.value);

    if (isNaN(guessFieldValue)) {
        hiOrLow.innerHTML = 'Please enter a valid number.';
        return;
    }

    if (total_guess > 0) {
        allGuess.push(guessFieldValue);
        total_guess--;
        lastResult.innerHTML = `${total_guess}`;
        guesses.innerHTML = `${allGuess.join(', ')}`;
    }

    if (guessFieldValue === actual) {
        hiOrLow.innerHTML = `🎉 You Win! Your score is: ${total_guess}`;
        return;
    }

    if (total_guess === 0) {
        hiOrLow.innerHTML = `❌ You Lost! The answer was ${actual}.`;
        return;
    }
// best line ternary operator 
    hiOrLow.innerHTML = guessFieldValue > actual ? '⬇ Try a lower value' : '⬆ Try a higher value';
});
