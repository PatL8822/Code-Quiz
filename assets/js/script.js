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


var h1 = document.querySelector("h1");
h1.textContent = "Quiz";
h1.setAttribute("style","display: grid; place-items: center; margin:auto auto; height: 100px; border: 2px solid black; font-size: 50px;");