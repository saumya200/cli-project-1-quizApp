var readlineSync = require("readline-sync");
var score = 0;

//wait for user's response
var userName = readlineSync.question("What's your name?");
console.log("Welcome " + userName + " do you know Saumya?");

//data of highscores
var highScores = [
  {
    Name: "Saumya",
    score: 5,
  },
  {
    Name: "Anjali",
    score: 4,
  }
]

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase === answer.toUpperCase) {
    console.log("Right!");
    score = score + 1;

  }
  else {
    console.log("Wrong!");
  }
  console.log("Your current score is : ", score);
  console.log("-------------------");
}


//array of objects
var questions = [{
  question: "Which colour does Saumya like?",
  answer: "Yellow"
},
{
  question: "Which school does Saumya study?",
  answer: "Army Public School Bolarum"
},
{
  question: "Which fruit does Saumya like?",
  answer: "Chikoo"
},
{
  question: "Which flavour of ice-cream does Saumya like?",
  answer: "Tender coconut"
},
{
  question: "Is she introvert or extrovert?",
  answer: "Introvert"
}];

//loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);

}
console.log("Yay! You Scored: ", score);
console.log("Checkout Scores: ", highScores);