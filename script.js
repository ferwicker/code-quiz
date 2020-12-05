console.log ('connected');

// main screen elements
var screen1 = document.getElementById('start-screen');
var screen2 = document.getElementById('questions-screen');
var screen3 = document.getElementById('game-over-screen')
var screen4 = document.getElementById('score-screen');

//screen 1
var startButton = document.getElementById('start-button');

//screen 2
var scoreEl = document.getElementById('score');
var timeEl = document.getElementById('time-left');

var questionEl = document.getElementById('question-text');
var answer1El = document.getElementById('answer-option-1');
var answer2El = document.getElementById('answer-option-2');
var answer3El = document.getElementById('answer-option-3');

var wrongMessage = document.getElementById('wrong-message');
var correctMessage = document.getElementById('correct-message');

var quitButton = document.getElementById('quit-button');


// basic switching between screens
function goToScreen1(){
    screen1.setAttribute('class', '');
    screen2.setAttribute('class', 'd-none');
    screen3.setAttribute('class', 'd-none');
    screen4.setAttribute('class', 'd-none');
}

function goToScreen2(){
    screen1.setAttribute('class', 'd-none');
    screen2.setAttribute('class', '');
    screen3.setAttribute('class', 'd-none');
    screen4.setAttribute('class', 'd-none');
}

function goToScreen3(){
    screen1.setAttribute('class', 'd-none');
    screen2.setAttribute('class', 'd-none');
    screen3.setAttribute('class', '');
    screen4.setAttribute('class', 'd-none');
}

function goToScreen4(){
    screen1.setAttribute('class', 'd-none');
    screen2.setAttribute('class', 'd-none');
    screen3.setAttribute('class', 'd-none');
    screen4.setAttribute('class', '');
}

// Screen 1

function startGame(){
    timeEl.textContent = '60';
    clearInterval(timeInterval);
    goToScreen2();
    gameTimer();
}

startButton.addEventListener('click', startGame);



// Screen 2

// Create the countdown timer.
var timeInterval;

timeEl.textContent = '60';

function gameTimer() {

    var secondsLeft = 59;
    timeInterval = setInterval(function(){
    timeEl.textContent = secondsLeft
    secondsLeft--;
  
      if (secondsLeft === -1) {
        clearInterval(timeInterval);
        //save score and go to screen 3.
        goToScreen3();
      }
    }, 1000);

  };

quitButton.addEventListener('click', goToScreen1);

/* PSEUDO CODING
when user clicks START button:

    hide screen 1
    show screen 2

    set timer - 60 seconds
    start timer interval

    display questions with a for loop
        display question 1
        display possible answers
        user clicks an answer
        if answer matches - score + 1(save, display), display 'correct' message
        else - time minus 5, display 'wrong' message
        
        repeat for rest of questions 
        (questions are objects in an array with three properties: 
            question, possible answers (another array?) and correct answer.)
    if answered all questions - stop timer, go to screen 3
    if timer runs out - stop all, hide screen 2, go to screen 3

    if user clicks QUIT button, stop all and go to screen 1

    screen 3-
    display final score
    user enters name, submits(save to leaderboard with score -how?)
    when user submits name, hide screen 3, go to screen 4

    screen 4-
    display all high scores
    if user clicks play again, reset questions, timer, score, hide screen 4, show screen 1
    if user clicks clear scores, clear all scores from memory (how)

    -- functions:
    go to screen 1
    go to screen 2
    go to screen 3
    go to screen 4

    timer interval start timer, display time

    separate variables by screen

    do questions array

    questions function with for loop

    form function, on submit, match name with score

    screen 4 - organise the scores by highest, display (how to delete lower ones?)
    clearing scores from memory
    resetting everything to go to screen 1
*/