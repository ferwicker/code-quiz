// main screen elements
var screen1 = document.querySelector('#start-screen');
var screen2 = document.querySelector('#questions-screen');
var screen3 = document.querySelector('#game-over-screen')
var screen4 = document.querySelector('#score-screen');

//screen 1
var startButton = document.querySelector('#start-button');

//screen 2
var scoreEl = document.querySelector('#score-counter');
var timeEl = document.querySelector('#time-left');

var quitButton = document.querySelector('#quit-button');

//screen 3
var scoreTotalEl = document.querySelector('#score-total');
var userName = document.querySelector('#name');

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

var questionNumEl = document.querySelector('#question-number');
var questionTextEl = document.querySelector('#question-text');
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
    answersCont.textContent = ''; //clearing previous answers
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
    };   
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

        //check answer is correct
        if (parseInt(event.target.getAttribute('data-value')) === allQuestions[q]['correctAnswer']) {
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
let highScores = JSON.parse(localStorage.getItem("high scores") || '[]'); 

var scoreForm = document.querySelector('#score-form');
var nameInput = document.querySelector('#name');


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

    goToScreen4();
    renderHighScores();
  });

  //screen 4

  //render high scores --how to make this into a loop instead?

    var scoreBoardName = [
        firstPlaceNameEl = document.querySelector('#leaderboard-name1'), 
        secondPlaceNameEl = document.querySelector('#leaderboard-name2'),
        thirdPlaceNameEl = document.querySelector('#leaderboard-name3'), 
        fourthPlaceNameEl = document.querySelector('#leaderboard-name4'),
        fifthPlaceNameEl = document.querySelector('#leaderboard-name5'),
    ];

    var scoreBoardScore = [
        firstPlaceScoreEl = document.querySelector('#leaderboard-score1'), 
        secondPlaceScoreEl = document.querySelector('#leaderboard-score2'),
        thirdPlaceScoreEl = document.querySelector('#leaderboard-score3'), 
        fourthPlaceScoreEl = document.querySelector('#leaderboard-score4'),
        fifthPlaceScoreEl = document.querySelector('#leaderboard-score5'),
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

    function clearScoreScreen(){ 

        for(i=0; i<5; i++){
            scoreBoardName[i].textContent = ''; scoreBoardScore[i].textContent = '';
        }
    }

  //screen 4 buttons

  var playAgainButton = document.querySelector('#play-again');
  var clearScoresButton = document.querySelector('#clear-scores');

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