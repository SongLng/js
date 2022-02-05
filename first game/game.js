// var name = prompt('Whats your name?');
// console.log("hello " + name);

// var likesCats = confirm('Do You like cats?');
// if (likesCats) {
//     console.log('You are a cool cat!')
// }
// else {
//     console.log('Yeah that`s fine. You are still cool cat!')
// }
// alert('Java script is awesome')

var words = [
    'javascript',
    'monkey',
    'amazing',
    'pancake',
];
var word = words[Math.floor(Math.random() * words.length)];
console.log(word)
var answerArray = [];

for (var i = 0; i < word.length; i+=1){
    answerArray[i] = "_";
    console.log(answerArray)
}
var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));


var guess = prompt('Guess a letter, or click Cancel to stop playing.');
if (guess === null) {

    break;

} else if (guess.length !== 1) {

    alert('Please enter a single letter.');

} else {
    for (var j = 0; j < word.length; j++){
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);