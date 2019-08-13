var Word = require("./word.js");

var inquirer = require('inquirer');

var wordsToPlay =["dog","cat","owl"];


var game = new Word(wordsToPlay[Math.floor(Math.random()*wordsToPlay.length)]);

function displayWord() {
    var displayString = "";
    for (var i = 0; i < game.LettersArray.length; i++) {
        if (game.LettersArray[i].show === false) {
            displayString += " _";
        }
        else {
            displayString += game.LettersArray[i].char;
        }
    }
    console.log("CURRENT GAME WORD", displayString);
    guessLetter();
}

displayWord();

function guessLetter() {
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                message: "Guess a letter?",
                type: "input",
                name: "userGuess"
            }
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers);
            checkLetter(answers.userGuess);
        });
}

function checkLetter(userGuess) {
    for (var i = 0; i < game.LettersArray.length; i++) {
        if (userGuess === game.LettersArray[i].char) {
            game.LettersArray[i].show = true;
        }
    }
    endGameCheck();
}

function endGameCheck(){
    var allGuessed = true;
    for(var i = 0; i <game.LettersArray.length; i++){
        if(game.LettersArray[i].show === false){
            allGuessed = false;
        }
    }
    if(allGuessed){
        console.log("Here is the word you guessed "+game.gameWord +" \n GAME OVER!!!");
    }
    else{
        displayWord();
    }
}
