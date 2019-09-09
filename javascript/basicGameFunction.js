var time = 15;
var timerRunning = false;
var counterRunning = false;

var intervalId1;
var intervalId2;

function setGame(index) {
    timerRestart();
    $("#answer-body").addClass("d-none");
    $("#answers-body").removeClass("d-none");

    questionNow = qaBank[index].question;
    answerNowA = qaBank[index].answer[0];
    answerNowB = qaBank[index].answer[1];
    answerNowC = qaBank[index].answer[2];
    answerNowD = qaBank[index].answer[3];
    answerText = qaBank[index].correctAnswer[1]

    $("#question-number").text("Question " + indexNow + " / 10")
    $("#question").text(questionNow);
    $("#answer-a").text(answerNowA);
    $("#answer-b").text(answerNowB);
    $("#answer-c").text(answerNowC);
    $("#answer-d").text(answerNowD);
    $("#answer-text").text(answerText);
}

function countDown() {
    if (!counterRunning) {
        $("#question-number").text("Game Start in " + count + " seconds");
        intervalId1 = setInterval(function () {
            if (count > 0) {
                count--;
                $("#question-number").text("Game Start in " + count + " seconds");
            } else {
                clearInterval(intervalId1);
                count = 5;
            }
        },1000);
        counterRunning = true;
    }
}


function timerRestart() {
    if (!timerRunning) {
        $("#timer").html("Timer<BR>00 : " + time);
        intervalId2 = setInterval(timerRun, 1000);
        timerRunning = true;
    }
}

function timerReset() {
    clearInterval(intervalId2);
    time = 15;
    timerRunning = false;
}

function timerRun() {
    time--;
    if (time > 9) {
        $("#timer").html("Timer<BR>00 : " + time);
    } else if (time >= 0) {
        $("#timer").html("Timer<BR>00 : 0" + time);
    } else {
        wrong();
        if (losses == 3) {
            setTimeout(function () {
                gameOver();
            }, TIMEOUT);
            return;
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

    }
}

function correct() {
    $("#answers-body").addClass("d-none");
    $("#answer-body").removeClass("d-none");
    $("#answer-cg").css("color", "green");
    $("#answer-cg").text("Congratulations!")
    win++;
    $("#losses-count").html("Correct : " + (indexNow - losses) + "<br>Wrong : " + losses);
    timerReset();
}

function wrong() {
    $("#answers-body").addClass("d-none");
    $("#answer-body").removeClass("d-none");
    $("#answer-cg").css("color", "red");
    $("#answer-cg").text("Sorry....!")
    losses++;
    $("#losses-count").html("Correct : " + (indexNow - losses) + "<br>Wrong : " + losses);
    timerReset();
}

function gameOver() {
    $("#question-number").css("color", "red");
    $("#question-number").text("Game over!");
    $("#question").text(gameOverWords);
    $("#answer-text").text("Refresh to play again");
    timerReset();
}

function showResult() {
    $("#question-number").css("color", "green");
    $("#question-number").text("WIN!");
    $("#question").html(celebrationWords);
    $("#answer-text").text("Refresh to play again");
    timerReset();
}