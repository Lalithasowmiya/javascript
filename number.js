let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('checkButton').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    let message = '';
    
    if (userGuess > randomNumber) {
        message = 'Try with a smaller number';
    } else if (userGuess < randomNumber) {
        message = 'Try with a larger number';
    } else {
        
        message = `Congratulations! You've guessed the number in ${attempts} attempts.`;
    }

    document.getElementById('message').textContent = message;
    document.getElementById('attempts').textContent = attempts;
});

document.getElementById('resetButton').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guessInput').value = '';
});

