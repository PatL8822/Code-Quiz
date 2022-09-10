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
var question = document.getElementById("question")
var clicked = false;
var ans1 = document.getElementById("ansOne")
const ans2 = document.getElementById("ansTwo")
const ans3 = document.getElementById("ansThree")
const ans4 = document.getElementById("ansFour")
var hideH2 = document.getElementById("hide-two");
var container = document.getElementById("hide");
var h1 = document.querySelectorAll("h1");
var startButton = document.querySelector("#strBtn");
var countDown = document.getElementById("time");
var time = 100;
var confirm = document.getElementById("confirm")

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

function questionOne(){
    question.textContent = "What elements MUST you have in HTML ?"
    ans1.textContent = "body, html, title, head, DOCTYPE, header"
    ans2.textContent = "body, main, title, head, DOCTYPE, header"
    ans3.textContent = "head, html, DOCTYPE, body, title, meta"
    ans4.textContent = "title, html, body, head, link, footer"

    ans1.addEventListener("click", truee)
}

/* function questionTwo{
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

 function questionThree{
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

 //function truee and faulss are actions don by clicking on the quiz buttons
 function truee{

 }