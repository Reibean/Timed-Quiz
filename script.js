// Array of quiz questions with questions, choices, and correct answers
const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["He That Must Live", "Hyperlink Text Maturing Language", "HyperText Makup Language", "Hey That Man Lied!"],
        correctAnswer: 2
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Code Sample Searching", "Closed Super Source", "Clean Style Sheets"],
        correctAnswer: 0
    },
    {
        question: "If HTML is thought of as a noun, what part of speech would javascript be?",
        choices: ["Adverb", "Verb", "Punctuation", "Adjective"],
        correctAnswer: 1
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

var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;

//Function to start the quiz
function startQuiz() {
    // Starts countdown
    timerInterval = setInterval(function () {
        if (timeLeft <= 0) {
            // game over when timer hits 0
            gameOver();
        } else {
            document.getElementById("time-left").textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);

    // Loads first question
    loadQuestion();
}
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    startQuiz();
});

function gameOver() {
    clearInterval(timerInterval);
    const gameOverScreen= document.getElementById("game-over");
    const retryButton = document.getElementById("retry-button");
    const scoreDisplay = document.getElementById("score");
    const score = timeLeft;
    scoreDisplay.textContent = 'Your Score: ' + score;
    console.log(score);
    retryButton.style.display = "block"
    gameOverScreen.style.display = "block";
};

function loadQuestion() {
    const question = document.getElementById("question");
    const choicesList = document.getElementById("choices");

    if (currentQuestionIndex < questions.length) {
        question.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "";

        questions[currentQuestionIndex].choices.forEach((option, index) => {
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
        timeLeft-= 10;
    }
    currentQuestionIndex++;
    loadQuestion();
}

const retryButton = document.getElementById("retry-button");
retryButton.addEventListener("click", function () {
    currentQuestionIndex = 0;
    timeLeft = 60;
    loadQuestion();
    document.getElementById("game-over").style.display = "none";
    startQuiz();
});

document.getElementById("score").addEventListener("submit", function (e) {
    e.preventDefault();
    const initials = document.getElementById("initials").value;
    let score = timeLeft;
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({ initials, score });
    localStorage.setItem("scores", JSON.stringify(scores));
    const highScoresDiv = document.getElementById("high-scores");
    highScoresDiv.innerHTML = "";
    scores.forEach((item, index) => {
        const scoreItem = document.createElement("div");
        scoreItem.textContent = `${index + 1}. ${item.initials}: ${item.score}`;
        highScoresDiv.appendChild(scoreItem);
});
});