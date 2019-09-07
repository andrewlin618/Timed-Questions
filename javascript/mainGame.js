const TIMEOUT = 1000;

var questionNow = "";
var answerNowA = "";
var answerNowB = "";
var answerNowC = "";
var answerNowD = "";
var answerText = "";
var started = false;
var win = 0;
var losses = 0;
var indexNow = 1;
var timer;

//Game instruction page;
$("#answer-cg").text(title)
$("#answer-text").text(qaBank[0]);

//Start the game;
setTimeout(function () {
    $("#losses-count").html("Wins : 0<br>Losses : " + losses);
    setGame(indexNow);
}, TIMEOUT);


$(".answers").on("click", function () {
    setTimeout(function(){
        window.clearInterval;
    },TIMEOUT)

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
        if (losses == 3){
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
            showResult();
        }, TIMEOUT);

    //Next question;
    } else {
        setTimeout(function () {
            setGame(indexNow);
        }, TIMEOUT);
    }
});