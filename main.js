// Button


// Function: creates a new paragraph and append it to the bottom of the HTML body.

function createButton() {
  var para = document.createElement('button');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
  // document.getElementById('container').innerHTML = para;
}

/*
  1. Get references to all the buttons on the page and sort them in an array.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createButton);
}

// Guessing Number Games
var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Note: Whitespace inside elements is considered as text, and text is considered as nodes.

// I've been trying to add a new element in a div.
// I'm guessing the way is to use and id tag.

// $(document).ready(function(){
//     // JS also provide firstChild and lastChild node
//
//     // use appendChild
//     var targetArea = document.getElementById('nav');
//     var div = document.createElement('div');
//     var snippet = document.createTextNode('this is a new DIV');
//     div.appendChild(snippet);
//     targetArea.appendChild(div);
//
//     // use the jQuery way
//     $('#nav').append('<div>this is a new DIV</div>');
// });
