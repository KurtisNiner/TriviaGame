//setting & naming variables 

var rightAnswer;
var wrongAnswer;
var unanswered;
var question = 0;
var score = 0;
var countdown = 30;
var index = 0;
var canPress = true;

//questions in the game
//make this an object instead of an array. keep questions as an array.
var quiz = {
    questions: ["George Washington lied to his father when he cut down the cherry tree", 
        "Is purple the color of Kings?.",
        "Kurtis Carpenter is a man, myth and ledgend",
        "You are grading this project.",
        "Forest Gump was the greatest movie ever made"],
    answers: [false, true, true, true, true]
  };

 //prints questions to page and console.logs it as well
$(document).ready(function(startGame){

function printQuestion(){
    
    if(index < quiz.questions.length){
        $("#questions").text(quiz.questions[index]);
        canPress = true;
    }
    else {
        console.log(quiz.questions[index]);
        alert("game over");
        canPress=false;
    }

    // if(index >= quiz.questions.length){
    //     alert("game Over");
    //     canPress = false;
    // } else{
    //     console.log(quiz.questions[index]);
    //     $("#questions").text(quiz.questions[index]);
    // }
    
}

document.onkeyup = function(event){
    if(canPress === true){

        if(event.key === "t" || event.key === "f"){
            // if(event.key === "t"){
            //     var userChoice = true;
            // } else{
            //     var userChoice = false;
            // }
            var userChoice = (event.key === "t") ? true : false;

            if(userChoice === quiz.answers[index]){
                alert("you're Correct!");
                score++;
                console.log(score);
            } else{
                alert("you're wrong");
            }
            index++
            printQuestion();
        }
    }
}


printQuestion();

});

//function that starts the timer




// function timer(){
//     countdown--;
//     if (countdown <= 0) {
//      clearInterval(counter);
//      return;
//     }
    
//      $("#timer").html("Time remaining: " + "00:" + countdown + " secs");
//     }
    
//function that renders the questions
