var story = document.getElementById("story");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");
var answers = [];

submit.addEventListener("click", getAnswer);
askQuestion(0);

function askQuestion(questionNumber) {
    answer.style.display = "block";
    answers.length = questionNumber;

    switch (questionNumber) {
        case 0:
            question.innerHTML = "A distress signal appears. Investigate? (Yes / No)";
            break;
        case 1:
            question.innerHTML = "Where do you go? (Control Room / Crew Quarters)";
            break;
    }
}

function getAnswer() {
    var cleanInput = yourAnswer.value.toUpperCase();
    answers.push(cleanInput);
    yourAnswer.value = "";
    continueStory(answers.length - 1);
}

function continueStory(answerNumber) {
    switch (answerNumber) {
        case 0:
            if (answers[0] === "YES") {
                story.innerHTML = document.getElementById("answer01").innerHTML;
                askQuestion(1);
            } else if (answers[0] === "NO") {
                story.innerHTML = document.getElementById("answer12").innerHTML;
                theEnd();
            } else {
                story.innerHTML = document.getElementById("err0").innerHTML;
                askQuestion(0);
            }
            break;

        case 1:
            if (answers[1] === "CONTROL ROOM") {
                story.innerHTML = document.getElementById("answer21").innerHTML;
                theEnd();
            } else if (answers[1] === "CREW QUARTERS") {
                story.innerHTML = document.getElementById("answer22").innerHTML;
                theEnd();
            } else {
                story.innerHTML = document.getElementById("err1").innerHTML;
                askQuestion(1);
            }
            break;
    }
}

function theEnd() {
    story.innerHTML += "<p><strong>The End.</strong></p>";
    question.innerHTML = "";
    answer.style.display = "none";
}
