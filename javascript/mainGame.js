var questionNow = "";
var answerNowA = "";
var answerNowB = "";
var answerNowC = "";
var answerNowD = "";
var started = false;
var sasd = true;

var indexNow = 1;

//Game instruction page;
$("#congratulation").text("Press to start")
$("#correctAnswer").text(qaBank[0]);


setGame(1);

$(".answers").on("click", function () {
    if ($(this).answerName() == qaBank[indexNow].correctAnswer[0]) {
        correct();
    } else {
        wrong();
    }
    indexNow++;
    setTimeout(function () {
        setGame(indexNow);
    }, 5000);

});