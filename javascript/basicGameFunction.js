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
    $("#question").text(questionNow);  
    $("#answer-a").text(answerNowA);
    $("#answer-b").text(answerNowB);
    $("#answer-c").text(answerNowC);
    $("#answer-d").text(answerNowD);
}

function timerRestart(){

}