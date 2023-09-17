const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["He That Must Live", "Hyperlink Text Maturing Language", "HyperText Makup Language", "Hey That Man Lied!"],
        correctAnswer: 2
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Code Sample Searching", "Closed Super Source", "CLean Style Sheets"],
        correctAnswer: 0
    },
    {
        question: "If HTML is thought of as a noun, what part of speech would javascript be?",
        choices: ["Adverb", "Verb", "Punctuation", "Adjective"],
        correctAnswer: 2
    },
    {
        question: "What is the best way to study coding?",
        choices: ["Live coding practice", "Watching videos on Youtube", "W3Schools and other resources", "All of the Above"],
        correctAnswer: 3
    },
    {
        question: "Coding is?",
        choices: ["Impossible", "Lacking Resources", "Insignificant", "None of the Above"],
        correctAnswer: 3
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
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    startQuiz();
});

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