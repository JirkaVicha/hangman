// Easy hangman game, just for fun

var wordsArr = [
  ['P', 'Y', 'T', 'H', 'O', 'N'],
  ['R', 'U', 'B', 'Y'],
  ['J', 'A', 'V', 'A'],
];

// the word to guess will be chosen from the array 'wordsArr'
var random = Math.floor(Math.random() * (wordsArr.length));
var word = wordsArr[random];
var guessWord = new Array(word.length);
var failure = 0;
console.log(word);
console.log(guessWord);

// every letter in the word is displayed by an underscore on the page
for (var i = 0; i < guessWord.length; i++) {
  guessWord[i] = "_ ";
}

// Prints the guess field on the page
function printGuessword() {
  for (var i = 0; i < guessWord.length; i++) {
    var secretField = document.getElementById('guess-field');
    var letter = document.createTextNode(guessWord[i]);
    secretField.appendChild(letter);
  }
};

// Display stack on the page
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(20, 240);
ctx.lineTo(100, 240);

ctx.moveTo(60, 240);
ctx.lineTo(60, 40);

ctx.lineTo(130, 40);
ctx.lineTo(130, 60);
ctx.stroke();

// draw partts of hangman if failure number goes up
var drawHangman = function () {
  if (failure === 1) {
    ctx.strokeRect(110, 60, 40, 40);
  } else if (failure === 2) {
    ctx.beginPath();
    ctx.moveTo(130, 100);
    ctx.lineTo(130, 170);
    ctx.stroke();
  } else if (failure === 3) {
    ctx.beginPath();
    ctx.moveTo(130, 100);
    ctx.lineTo(100, 130);
    ctx.stroke();
  } else if (failure === 4) {
    ctx.beginPath();
    ctx.moveTo(130, 100);
    ctx.lineTo(160, 130);
    ctx.stroke();
  } else if (failure === 5) {
    ctx.beginPath();
    ctx.moveTo(130, 170);
    ctx.lineTo(100, 200);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(130, 170);
    ctx.lineTo(160, 200);
    ctx.stroke();
  }
}

// checks if the letter provided by the user matches one or more of the letters in the word
var checkMatch = function() {
  var f = document.guessform;
  var b = f.elements['get-letter'];
  var symbol = b.value; // the letter provided by the user
  symbol = symbol.toUpperCase();
  for (var i = 0; i < word.length; i++) {
    if (word[i] === symbol) {
      guessWord[i] = symbol + " ";
      var match = true;
    }
  b.value = "";
  }

  // deletes the guessfield and replace it with the new one
  var guessField = document.getElementById('guess-field');
  guessField.innerHTML = "";
  printGuessword();

  // if a guessed letter is not in the word, the letter will be put on the 'wrong 
  // letters' list and hangman grows
  if (!match) {
    var wrongLetters = document.getElementById('wrong-letters');
    var letter = document.createTextNode(" " + symbol);
    wrongLetters.appendChild(letter);
    failure++;
    drawHangman();
  }

  // checks if all letters have been found
  var isDone = true;
  for (var i = 0; i < guessWord.length; i++) {
    if (guessWord[i] === "_ ") {
      isDone = false;
    }
  }
  if (isDone) {
    result.textContent = "You Win!!";
  }

  // once you got five wrong letters, you lose game
  if (failure === 6) {
    result.textContent = "Sorry....You've lost!!";
  }
}

function init() {
  printGuessword();
}

window.onload = init;






 




