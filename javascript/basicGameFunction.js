function setGame(index) {
    timer = timerRestart();
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

function timerRestart() {
    var time = 15;
    $("#timer").text("00:" + time);
    setInterval(function () {
        time--;
        if (time >= 10) {
            $("#timer").text("00:" + time);
        } else if (time >= 0) {
            $("#timer").text("00:0" + time);
        } else {
            wrong();
            indexNow++;
            window.clearInterval();
            if (losses == 3) {
                setTimeout(function () {
                    gameOver();
                }, TIMEOUT);
                return;
            } else {
                setTimeout(function () {
                    setGame(indexNow);
                }, TIMEOUT);
            }
        }
    }, 1000);

}

function correct() {
    $("#answers-body").addClass("d-none");
    $("#answer-body").removeClass("d-none");
    $("#answer-cg").css("color", "green");
    $("#answer-cg").text("Congratulations!")
    win++;
    $("#losses-count").html("Wins : " + (indexNow - losses) + "<br>Losses : " + losses);
}

function wrong() {
    $("#answers-body").addClass("d-none");
    $("#answer-body").removeClass("d-none");
    $("#answer-cg").css("color", "red");
    $("#answer-cg").text("Sorry....!")
    losses++;
    $("#losses-count").html("Wins : " + (indexNow - losses) + "<br>Losses : " + losses);
}

function gameOver() {
    $("#answer-cg").text("You are not a fan of The One Piece!");
    $("#answer-text").text("Refresh to restart!");
}

function showResult() {
    $("#answer-cg").css("color", "green");
    $("#answer-cg").text("You are a fan of The One Piece!");
    $("#answer-text").text("Correct = " + (10 - losses));
}