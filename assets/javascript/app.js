//setting & naming variables 

var score = 0;
var question = 0;
var countdown = 10;
var index = 0;
var canPress = true;
clockRunning = false;
var timerHandle;

//questions in the game
//make this an object instead of an array. keep questions as an array.
var quiz = {
    questions: ["George Washington lied to his father when he cut down the cherry tree",
        "Is purple the color of Kings?.",
        "Kurtis Carpenter is a man, myth and ledgend",
        "You are grading this project.",
        "Forrest Gump was the greatest movie ever made"],
    answers: [false, true, true, true, true]
};

//prints questions to page and console.logs it as well
$(document).ready(function () {

    function printQuestion() {
        clearInterval(timerHandle);
        console.log(index);
        if (index < quiz.questions.length) {
            $("#questions").text(quiz.questions[index]);
            clockRunning = true;
            canPress = true;
            startTimer();
        }
        else {
            console.log(quiz.questions[index]);
            $("#update").text("Game Over");
            clockRunning = false;
            canPress = false;
        }

    }

    document.onkeyup = function (event) {
        if (canPress === true) {

            if (event.key === "t" || event.key === "f") {
                // if(event.key === "t"){
                //     var userChoice = true;
                // } else{
                //     var userChoice = false;
                // }
                var userChoice = (event.key === "t") ? true : false;

                if (userChoice === quiz.answers[index]) {
                    $("#update").text("correct")
                    score++;
                    console.log(score);
                    $("#score").text("Current Score: " + score + " points");
                } else {
                    $("#update").text("you're wrong");
                    $("#score").text("Current Score: " + score + " points");
                }

                index++;
                printQuestion();


            }
        }
    }


    //function that starts the timer 
    //set timer equal to 10 sec
    //make timer clock decrease by 1 second per 
    //if timer runs out before questions is answered, then next question
    //if timer does not run out before questions is answered, then question answer, 
    //add points in necessary, then next question, start timer over
    function startTimer() {
        countdown = 10;
        $("#timer").text(countdown + " seconds left to answer");        
        timerHandle = setInterval(function () {
            countdown--;
            if (countdown > 0) {
                $("#timer").text(countdown + " seconds left to answer");
            }
            else if (countdown === 0) {
                clearInterval(timerHandle);
                index++;
                printQuestion();

            }
        }, 1000);
    }

    printQuestion();


});
//i am trying to get the timer to work. I am aware it isnt working with the code at this point in time









