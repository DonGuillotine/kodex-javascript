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
    }
});