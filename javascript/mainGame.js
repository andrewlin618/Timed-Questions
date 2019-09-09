const TIMEOUT = 3000;

var questionNow = "";
var answerNowA = "";
var answerNowB = "";
var answerNowC = "";
var answerNowD = "";
var answerText = "";

var win = 0;
var losses = 0;
var indexNow = 1;

var started = false;

//Game instruction page;
$("#answer-text").html(instruction);
$("#timer").html("Timer<BR>00 : " + time);
$("#losses-count").html("Correct : 0<br>Wrong : " + losses);
$("#question-number").text("Game Start in 6 seconds");

var count = 5;

var intervalId1 = setInterval(function () {
    if (count == 0) {
        clearInterval(intervalId1);
        setGame(indexNow);
    } else {
        $("#question-number").text("Game Start in " + count + " seconds");
        count--;
    }
}, 1000);


//Start the game;


$(".answers").on("click", function () {
    clearInterval(intervalId2);
    timerReset();

    //Already win or lose;
    if (indexNow == 11 || losses == 3) {
        alert("game over!");
        return;
    }

    //Check answer;
    if ($(this).attr("answerName") == qaBank[indexNow].correctAnswer[0]) {
        correct();
    } else {
        wrong();
        //You lose;
        if (losses == 3) {
            setTimeout(function () {
                gameOver();
            }, TIMEOUT);
            return;
        }
    }

    //You win;
    indexNow++;
    if (indexNow == 11) {
        setTimeout(function () {
            clearInterval(intervalId);
            showResult();
        }, TIMEOUT);

        //Next question;
    } else {
        setTimeout(function () {
            clearInterval(intervalId);
            setGame(indexNow);
        }, TIMEOUT);
    }
});