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
  if (failure === 5) {
    result.textContent = "Sorry....You've lost!!";
  }
}

function init() {
  printGuessword();
}

window.onload = init;






 




