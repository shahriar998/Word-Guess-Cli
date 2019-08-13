var Letter = require("./letter.js");
function Word(gameWord) {
    this.gameWord = gameWord;
    this.LettersArray = [];

    var gameArray = this.gameWord.split("");
    console.log(gameArray);
    for(var i = 0; i<gameArray.length; i++){
        var newLetter = new Letter(gameArray[i]);
        this.LettersArray.push(newLetter);
    }

}

// var testWord = new Word("cat");

// console.log(testWord);

module.exports = Word;