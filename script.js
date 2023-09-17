const questions = [
    {
        question: "",
        choices: "",
        correctAnswer: 0
    },
];

var currentQuestion = 0;
var timeLeft = 60;
var timerInterval;

function startQuiz() {
    timerInterval = setInterval(function () {
        if (timeLeft <= 0) {
            gameOver();
        } else {
            document.getElementById("time-left").textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);

    loadQuestion();
}

function loadQuestion() {
    const question = document.getElementById("question");
    const choicesList = document.getElementById("choices");

    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "";

        questions[currentQuestionIndex].options.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.addEventListener("click", () => checkAnswer(index));
            choicesList.appendChild(li);
        });
    } else {
        gameOver();
    }
}

function checkAnswer(selectedOptionIndex) {
    if (selectedOptionIndex === questions[currentQuestionIndex].correctAnswer) {
    } else {
        timeLeft-= 5;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function gameOver() {
    clearInterval(timerInterval);
    document.getElementById("game-over").style.display = "block";
}

document.getElementById("score-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const initials = document.getElementById("initials").value;
    const score = timeLeft;
});