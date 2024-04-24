### Hangman Game
This JavaScript code sets up a simple hangman game. Here's how it works:

It defines an array wordsArr containing arrays of letters representing different words.
It randomly selects a word from wordsArr.
It initializes guessWord array with underscores representing each letter in the word to be guessed.
It sets up a canvas to draw the hangman figure.
It defines a function drawHangman to draw parts of the hangman figure based on the number of failures.
It defines a function checkMatch to check if the letter provided by the user matches any of the letters in the word. If a letter matches, it updates guessWord. If not, it adds the letter to a list of wrong letters and increments the failure count.
It checks if all letters have been guessed correctly or if the maximum number of failures (6) has been reached to determine the game's outcome.
It initializes the game by calling init() function, which prints the initial guess field.
Overall, it's a fun and interactive game where players try to guess the word by inputting letters, and the hangman figure gradually appears with each wrong guess.

Live preview: https://jirkavicha.github.io/hangman/
