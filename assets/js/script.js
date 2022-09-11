/*
1. take a code quiz
2. WHEN I click the start button
3. THEN a timer starts and I am presented with a question
4. WHEN I answer a question
5. THEN I am presented with another question
6. WHEN I answer a question incorrectly
7. THEN time is subtracted from the clock
8. WHEN all questions are answered or the timer reaches 0
9. THEN the game is over
10. WHEN the game is over
11. THEN I can save my initials and my score*/

// below are all the containers needed for JS
const ans2 = document.getElementById("ansTwo");
const ans3 = document.getElementById("ansThree");
const ans4 = document.getElementById("ansFour");
const questionEl = document.getElementById("questionEl");
var ans1 = document.getElementById("ansOne");
var hideH2 = document.getElementById("hide-two");
var containerEl = document.getElementById("question-container");
var h1 = document.querySelectorAll("h1");
var startButton = document.querySelector("#strBtn");
var countDown = document.getElementById("time");
var confirmMsg = document.getElementById("confirm");
var highScore = document.getElementById('highScor');
var timerText = document.getElementById('timerText');
var time = 100;
var score = [];
var ifTimeEnds = [];
ifTimeEnds * 20

// setting the text h1 tag
h1[0].textContent = "~ Quiz ~";

//setting text to str btn & style
startButton.textContent = "Start";
startButton.setAttribute("style", "font-size: 70px; background-color: black; color: white; border-radius: 15px; cursor: pointer;");

//adding eventlistener to star quiz and timer
startButton.addEventListener("click", quiztime);

// this function deals with the timer
function quiztime() {
    var startTime = setInterval(function () {
        time--;
        countDown.innerHTML = time
        if (time === 0) {
            clearInterval(startTime);
        }
        quize()
    }, 1000);
}

// this function shows the quiz questions and hides the str btn and high scors btn and ulilising the .classList()
function quize() {
    timerText.classList.remove('hide');
    highScore.classList.add('hide')
    hideH2.setAttribute("style", "display: none;");
    startButton.setAttribute("style", "display: none;");
    containerEl.classList.remove('hide');
    selectFirstQuestion()
}

function selectFirstQuestion(){
    showQuestions()

}

function showQuestions(question){

}

// This is where im making an array list of objecs for the questions.
const questions = [
    {
        question: "What is a variable?",
        answer:[
            {text: 'A. Event', correct: false },
            {text: 'B. Container', correct: false },
            {text: 'C. Element', correct: false },
            {text: 'D. Both B and C', correct: true },
        ]
    },
    {
        question: "How do you call an HTML id IN css?",
        answer:[
            {text:'A. #tag', correct: true },
            {text:'B. .tag', correct: false },
            {text:'C. tag', correct: false },
            {text:'D. None of the above', correct: false },
        ]
    },
    {
        question: "What is the value of  a boolean ?",
        answer:[
            {text: 'A. Undefined', correct: false },
            {text: 'B. NaN', correct: false },
            {text: 'C. Number', correct: false },
            {text: 'D. true / false', correct: true },
        ]
    },
    {
        question: "How do you select all tag elements using Js. ?",
        answer:[
            {text:'A. getElementById()', correct: false },
            {text:'B. querySelectorAll()', correct: true },
            {text:'C. querySelector()', correct: false },
            {text:'D. None of the above', correct: false },
        ]
    },
    {
        question: "What elements MUST you have in HTML ?",
        answer:[
            {text:"A. body, html, title, head, DOCTYPE, header", correct: false },
            {text:"B. body, main, title, head, DOCTYPE, header", correct: false },
            {text:"C. head, html, DOCTYPE, body, title, meta", correct: true },
            {text:"D. title, html, body, head, link, footer", correct: false },
        ]
    },
];