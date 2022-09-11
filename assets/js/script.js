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
var question = document.getElementById("question");
var ans1 = document.getElementById("ansOne");
var hideH2 = document.getElementById("hide-two");
var container = document.getElementById("hide");
var h1 = document.querySelectorAll("h1");
var startButton = document.querySelector("#strBtn");
var countDown = document.getElementById("time");
var confirmMsg = document.getElementById("confirm");
var time = 100;
var score = [];
var ifTimeEnds = [];
ifTimeEnds * 20

// setting the text h1 tag
h1[0].textContent = "~ Quiz ~";

//setting text to str btn & style
startButton.textContent = "Start";
startButton.setAttribute("style", "font-size: 70px; background-color: black; color: white; border-radius: 15px; cursor: pointer;");

//adding eventlistener to star quiz
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

// this function is hiding the str btn and then presents the quize
function quize() {
    hideH2.setAttribute("style", "display: none;")
    startButton.setAttribute("style", "display: none;")
    container.setAttribute("style", "display: flex;")
    questionOne()
}

function questionOne() {

    question.textContent = "What elements MUST you have in HTML ?"

    ans1.textContent = "A. body, html, title, head, DOCTYPE, header"
    ans2.textContent = "B. body, main, title, head, DOCTYPE, header"
    ans3.textContent = "C. head, html, DOCTYPE, body, title, meta"
    ans4.textContent = "D. title, html, body, head, link, footer"

    ans1.addEventListener("click", falsee)
    ans2.addEventListener("click", falsee)
    ans3.addEventListener("click", truee)
    ans4.addEventListener("click", falsee)

    setTimeout(function () {
        questionTwo()
    }, 810);

}

function questionTwo(){

    question.textContent = "What is a variable?"

    ans1.textContent = "A. Event"
    ans2.textContent = "B. Container"
    ans3, textContent = "C. Element"
    ans4.textContent = "D. Both B and C"

    ans1.addEventListener("click", falsee)
    ans2.addEventListener("click", falsee)
    ans3.addEventListener("click", falsee)
    ans4.addEventListener("click", truee)

}

/*function questionThree{
   question.textContent = ""
   ans1.textContent = ""
   ans1 = false
   ans2.textContent = ""
   ans2 = false
   ans3,textContent = ""
   ans3 = true
   ans4.textContent = ""
   ans4 = false
}

function questionFour{
   question.textContent = ""
   ans1.textContent = ""
   ans1 = false
   ans2.textContent = ""
   ans2 = false
   ans3,textContent = ""
   ans3 = true
   ans4.textContent = ""
   ans4 = false
}

function questionFive{
   question.textContent = ""
   ans1.textContent = ""
   ans1 = false
   ans2.textContent = ""
   ans2 = false
   ans3,textContent = ""
   ans3 = true
   ans4.textContent = ""
   ans4 = false
}*/

//function truee and falsee are actions done by clicking on the quiz buttons
function truee() {
    score.push(20)
    document.getElementById("confirm").innerHTML = confirmMsg.textContent = "Correct!!!";
    setTimeout(function () {
        document.getElementById("confirm").innerHTML = '';
    }, 800);
}

function falsee() {
    ifTimeEnds.push(1)
    time -= 5;
    document.getElementById("confirm").innerHTML = confirmMsg.textContent = "Wrong";
    setTimeout(function () {
        document.getElementById("confirm").innerHTML = '';
    }, 800);
    setTimeout(function () {
    }, 800);
}