// main screen elements
var screen1 = document.getElementById('start-screen');
var screen2 = document.getElementById('questions-screen');
var screen3 = document.getElementById('game-over-screen')
var screen4 = document.getElementById('score-screen');

//screen 1
var startButton = document.getElementById('start-button');

//screen 2
var scoreEl = document.getElementById('score-counter');
var timeEl = document.getElementById('time-left');

var quitButton = document.getElementById('quit-button');

//screen 3
var scoreTotalEl = document.getElementById('score-total');
var userName = document.getElementById('name');



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

// Create the main timer
var secondsLeft = 60;
var timeInterval;
//timeEl.textContent = secondsLeft //this is twice, which one is correct?

function gameTimer() {
    secondsLeft = 59;
    timeInterval = setInterval(function(){
    timeEl.textContent = secondsLeft
    secondsLeft--;
  
      if (secondsLeft < 0) {
        clearInterval(timeInterval);
        goToScreen3();
        scoreTotalEl.textContent = scoreCounter; 
      }
    }, 1000);
  };

 // start game (from screen 1 -> 2)

function startGame(){
    timeEl.textContent = '60';
    clearInterval(timeInterval);
    goToScreen2();
    gameTimer();
    displayQuestion();
}

// Screen 2

//question elements

var questionNumEl = document.getElementById('question-number');
var questionTextEl = document.getElementById('question-text');
var answersCont = document.querySelector('#answers-container');

let q = 0;
let scoreCounter = 0;
scoreEl.textContent = scoreCounter;

//increase score
function scoreIncrease(){
    scoreCounter++;
    return scoreCounter;
};

//display questions from object array // create and append elements for questions, do a loop inside?

function displayQuestion(){
    answersCont.textContent = '';
    if (q < allQuestions.length) {
        questionNumEl.textContent = allQuestions[q]['number'] + '. ';
        questionTextEl.textContent = allQuestions[q]['question'];

        for(var i = 0; i < allQuestions[q]['answers'].length; i++){
        var answerOp = document.createElement('div');
        answerOp.setAttribute('class', 'answer-option');
        answerOp.setAttribute('data-value', [i]);
        answerOp.textContent = allQuestions[q]['answers'][i];
        answersCont.appendChild(answerOp);
        };


    } else {
        clearInterval(timeInterval);
        goToScreen3();
        scoreTotalEl.textContent = scoreCounter;
    }    
};


//display correct/incorrect answer messages
var correctMessage = document.querySelector('#correct-message');
var wrongMessage = document.querySelector('#wrong-message');

function displayMessage(message) {
    var messageSecondsLeft = 1;
    message.setAttribute('class', '')
    var messageInterval = setInterval(function(){
    messageSecondsLeft--;
      if (messageSecondsLeft < 0) {
        clearInterval(messageInterval);
        message.setAttribute('class', 'd-none')
        }
    }, 500);
};

//checking answers - IMPORTANT!
// add the event listener to the answers container, use event target and value

answersCont.addEventListener('click', function(event){

    // get value of selected 'answer' 
    var selected = event.target;
    var val = parseInt(selected.getAttribute('data-value'));
        //check answer is correct
        if(val === allQuestions[q]['correctAnswer']){
            scoreIncrease();
            displayMessage(correctMessage);
        } else {
            secondsLeft = secondsLeft - 5;
            displayMessage(wrongMessage)
        };    
        q++;
        scoreEl.textContent = scoreCounter;
        displayQuestion();
}

);

// Screen 3
let highScores = JSON.parse(localStorage.getItem("high scores") || "[]"); //are the brackets needed?

var scoreForm = document.getElementById('score-form');
var nameInput = document.getElementById('name');


scoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var nameText = nameInput.value.trim();
    //add default name 
    if(nameText === ''){
        nameText = 'anonymous';
    }

    var savedScore = {'name':nameText, 'score':scoreCounter}

    // Add new saved score to scores array
    highScores.push(savedScore);
    //sort by highest scores
    highScores.sort(function(a, b) {
        return parseFloat(b.score) - parseFloat(a.score);
    });
    //save again to local storage
    localStorage.setItem("high scores", JSON.stringify(highScores));

    nameInput.value = ""; // this is not needed if page is refreshing
    goToScreen4();
    renderHighScores();
  });

  //screen 4

  //render high scores --how to make this into a loop instead?

    var scoreBoardName = [
        firstPlaceNameEl = document.getElementById('leaderboard-name1'), 
        secondPlaceNameEl = document.getElementById('leaderboard-name2'),
        thirdPlaceNameEl = document.getElementById('leaderboard-name3'), 
        fourthPlaceNameEl = document.getElementById('leaderboard-name4'),
        fifthPlaceNameEl = document.getElementById('leaderboard-name5'),
    ];

    var scoreBoardScore = [
        firstPlaceScoreEl = document.getElementById('leaderboard-score1'), 
        secondPlaceScoreEl = document.getElementById('leaderboard-score2'),
        thirdPlaceScoreEl = document.getElementById('leaderboard-score3'), 
        fourthPlaceScoreEl = document.getElementById('leaderboard-score4'),
        fifthPlaceScoreEl = document.getElementById('leaderboard-score5'),
    ];


    var index = 0;

    function renderHighScores(){
        highScores = JSON.parse(localStorage.getItem("high scores") || "[]");

        while (index < scoreBoardName.length) {
            if(highScores[index]){
            scoreBoardName[index].textContent = highScores[index]['name'];
            scoreBoardScore[index].textContent = highScores[index]['score'];
            index++;
            } else {
                return;
            }
        }
    }

    function clearScoreScreen(){ //why doesnt this work as a loop?
            scoreBoardName[0].textContent = ''; scoreBoardScore[0].textContent = '';
            scoreBoardName[1].textContent = ''; scoreBoardScore[1].textContent = '';
            scoreBoardName[2].textContent = ''; scoreBoardScore[2].textContent = '';
            scoreBoardName[3].textContent = ''; scoreBoardScore[3].textContent = '';
            scoreBoardName[4].textContent = ''; scoreBoardScore[4].textContent = '';
    }

  //screen 4 buttons

  var playAgainButton = document.getElementById('play-again');
  var clearScoresButton = document.getElementById('clear-scores');

  function clearScores(){
    highScores = [];
    localStorage.setItem("high scores", JSON.stringify(highScores));
    clearScoreScreen();
  }

// Button event listeners 
//screen 1
startButton.addEventListener('click', startGame);
//screen 2
quitButton.addEventListener('click', function(){location.reload(); return false;});

//screen 4
playAgainButton.addEventListener('click', function(){location.reload(); return false;});
clearScoresButton.addEventListener('click', clearScores);