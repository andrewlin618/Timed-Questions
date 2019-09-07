function checkAnswer(answerChosen){
    if(answerChosen == qaBank[indexNow].correctAnswer){
        return true;
    }
    return false;
}

function setGame(index){
    $("#answer-body").addClass("d-none");
    $("#answers-body").removeClass("d-none");
    timerRestart();
    questionNow = qaBank[index].question;
    answerNowA = qaBank[index].answer[0];
    answerNowB = qaBank[index].answer[1];
    answerNowC = qaBank[index].answer[2];
    answerNowD = qaBank[index].answer[3];  
    answerText = qaBank[index].correctAnswer[1]

    $("#question-number").text("Question " + indexNow + ":")
    $("#question").text(questionNow);  
    $("#answer-a").text(answerNowA);
    $("#answer-b").text(answerNowB);
    $("#answer-c").text(answerNowC);
    $("#answer-d").text(answerNowD);
    $("#answer-text").text(answerText);
}

function timerRestart(){

}

function correct(){
    $("#answers-body").addClass("d-none");
    $("#answer-body").removeClass("d-none");
    $("#answer-cg").text("congratulations!")
    win ++;
}

function wrong(){
    $("#answers-body").addClass("d-none");
    $("#answer-body").removeClass("d-none");
    $("#answer-cg").text("sorry....!")
    losses++;
    $("#losses-count").text("Losses : " + losses);
}

function gameOver(){
    $("#answer-cg").text("You are not a fan of The One Piece!");
    $("#answer-text").text("Refresh to restart!");   
}

function showResult(){
    $("#answer-cg").text("You are a fan of The One Piece!");
    $("#answer-text").text("Correct = " + (10-losses));
}