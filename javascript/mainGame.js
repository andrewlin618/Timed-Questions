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

var count = 5;

countDown();

// clearInterval(countDown);

//Start the game;
setTimeout(function () {
    setGame(indexNow);
}, 2 * TIMEOUT);


$(".answers").on("click", function () {
    clearInterval(intervalId);
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