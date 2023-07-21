'use strict';

// Secret Number Created!
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function(msg){
    document.querySelector('.message').textContent = msg;
};


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        displayMessage('No Number 💀');
    }
    else if(guess === secretNumber){
        displayMessage('Correct Number 🥳');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#2f9306';
        document.querySelector('.number').style.width = '30rem';


        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== secretNumber){
        displayMessage(guess > secretNumber ? 'Too high 📈' : 'Too low 📉');
        score = score - 1; // score --
        document.querySelector('.score').textContent = score;
    }
    else{
        displayMessage('You lost the game 😭');
        document.querySelector('.score').textContent = 0;
    }
});


///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/