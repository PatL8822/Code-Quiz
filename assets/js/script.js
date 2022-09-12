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
var questionEl = document.getElementById("question");
const answerBtn = document.getElementById('answer-buttons');
var hideH2 = document.getElementById("hide-two");
var containerEl = document.getElementById("question-container");
var h1 = document.querySelectorAll("h1");
var startButton = document.querySelector("#strBtn");
var countDown = document.getElementById("time");
var confirmMsg = document.getElementById("confirm");
var highScore = document.getElementById('highScor');
var timerText = document.getElementById('timerText');
const span = document.getElementById('span');
const localStorageInput = document.getElementById('localStorageInput');
const setScore = document.getElementById('quizeScore');
const localSubmit = document.getElementById('localSubmit');
const nameInput = document.getElementById('nameInput');
const results = document.getElementById('results');
const viweLocalStorage = document.getElementById('viweLocalStorage');
// the (let questionIndex) is undefined, need the cotainer so it can be redefined later in the code.
let questionIndex, currentQuestionIndex;
var time = 100;
var timeTwo = 1;
var quizeScore = 0;


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
    }, 1000);
    quize()
}

// this function shows the quiz questions and hides the str btn and high scors btn and ulilising the .classList()
function quize() {
    questionIndex = questions;
    currentQuestionIndex = 0
    timerText.classList.remove('hide');
    highScore.classList.add('hide')
    hideH2.classList.add('hide');
    startButton.classList.add('hide');
    containerEl.classList.remove('hide');
    setQuestion()
}

function setQuestion() {
    btnswap()
    showQuestions(questionIndex[currentQuestionIndex])

}

function showQuestions(questions) {
    // questionEl.innerText is grabbing the question in the objec array
    questionEl.innerText = questions.question
    // for the rest of the code in this function, the answers are called, 
    //then a button is created for each answer in the answer array, 
    //the button is then equped with a listener,
    //finally it is appended to the answers.
    questions.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('qbtn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click', selectAnswer);
        answerBtn.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const correct = selectBtn.dataset.correct;
    if (correct) {
        quizeScore = quizeScore + 20;
        currentQuestionIndex++
        turee()
    } else {
        time -= 5
        currentQuestionIndex++
        falsee()
    };
    if (currentQuestionIndex >= 5){
        thatsIt()
    }
}

function turee() {
    document.getElementById("confirm").innerHTML = confirmMsg.textContent = "Correct!!!";
    setTimeout(function () {
        document.getElementById("confirm").innerHTML = '';
    }, 800);
    setQuestion()
}

function falsee() {
    document.getElementById("confirm").innerHTML = confirmMsg.textContent = "Wrong";
    setTimeout(function () {
        document.getElementById("confirm").innerHTML = '';
    }, 800);
    setQuestion()
}

// this function eleminates the previous buttins from the HTML id answer-buttons as the new buttons were
// created in the previous showQuestions  function
function btnswap() {
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

// This is where im making an array list of objecs for the questions.
const questions = [
    {
        question: 'What is a variable?',
        answers: [
            { text: 'A. Event', correct: false },
            { text: 'B. Container', correct: false },
            { text: 'C. Element', correct: false },
            { text: 'D. Both B and C', correct: true },
        ]
    },
    {
        question: "How do you call an HTML id='tag' IN css?",
        answers: [
            { text: 'A. #tag', correct: true },
            { text: 'B. .tag', correct: false },
            { text: 'C. tag', correct: false },
            { text: 'D. None of the above', correct: false },
        ]
    },
    {
        question: "What is the value of  a boolean ?",
        answers: [
            { text: 'A. Undefined', correct: false },
            { text: 'B. NaN', correct: false },
            { text: 'C. Number', correct: false },
            { text: 'D. true / false', correct: true },
        ]
    },
    {
        question: "How do you select ALL tag elements using Js. ?",
        answers: [
            { text: 'A. getElementById()', correct: false },
            { text: 'B. querySelectorAll()', correct: true },
            { text: 'C. querySelector()', correct: false },
            { text: 'D. None of the above', correct: false },
        ]
    },
    {
        question: "What elements MUST you have in HTML ?",
        answers: [
            { text: "A. body, html, title, head, DOCTYPE, header", correct: false },
            { text: "B. body, main, title, head, DOCTYPE, header", correct: false },
            { text: "C. head, html, DOCTYPE, body, title, meta", correct: true },
            { text: "D. title, html, body, head, link, footer", correct: false },
        ]
    },
    {
        question: "What elements MUST you have in HTML ?",
        answers: [
            { text: "A. body, html, title, head, DOCTYPE, header", correct: false },
            { text: "B. body, main, title, head, DOCTYPE, header", correct: false },
            { text: "C. head, html, DOCTYPE, body, title, meta", correct: true },
            { text: "D. title, html, body, head, link, footer", correct: false },
        ]
    },
];

function thatsIt() {
    countDown.classList.add('hide')
    timerText.classList.add('hide')
    questionEl.classList.add('hide')
    answerBtn.classList.add('hide')
    var startTimeTwo = setInterval(function () {
        timeTwo--;
        countDown.innerHTML = timeTwo
        if (time === 0) {
            clearInterval(startTimeTwo);
        }
        quizScor()
    }, 1000);
    
}

function quizScor(){
    highScore.classList.remove('hide')
    localSubmit.classList.remove('hide')
    localSubmit.addEventListener('click', ()=> {
        localStorage.setItem('name',nameInput.value)
    });
    viweLocalStorage.addEventListener('submit', viewHighScores,function(e){e.preventDefault});
    setScore.classList.remove('hide')
    localStorageInput.classList.remove('hide')
    span.innerText = quizeScore;
}

function addToLocalSotage(){
   
}

function viewHighScores(){

    setScore.classList.add('hide')
    highScore.classList.add('hide')
    localSubmit.classList.add('hide')
    localStorageInput.classList.add('hide')
}