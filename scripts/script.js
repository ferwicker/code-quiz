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
timeEl.textContent = secondsLeft

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
var questionFormEl = document.getElementById('question-form');
var questionNumEl = document.getElementById('question-number');
var questionTextEl = document.getElementById('question-text');
var answerAEl = document.getElementById('answerA-text');
var answerBEl = document.getElementById('answerB-text');
var answerCEl = document.getElementById('answerC-text');

let q = 0;
let scoreCounter = 0;

//increase score
function scoreIncrease(){
    scoreCounter++;
    return scoreCounter;
};

//display questions from object array
function displayQuestion(){
    if (q < allQuestions.length) {
        questionNumEl.textContent = allQuestions[q]['number'] + '. ';
        questionTextEl.textContent = allQuestions[q]['question'];
        answerAEl.textContent = allQuestions[q]['answers']['a'];
        answerBEl.textContent = allQuestions[q]['answers']['b'];
        answerCEl.textContent = allQuestions[q]['answers']['c'];
    } else {
        clearInterval(timeInterval);
        goToScreen3();
        scoreTotalEl.textContent = scoreCounter;
    }    
}

//get radio values
function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
    }

//uncheck radios
function uncheckAll(form, name){

    var radios = form.elements[name];
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            radios[i].checked = false;} //uncheck the radio
        }
    };

//display correct message
var correctMessage = document.getElementById('correct-message');

function displayCorrectMessage() {
    var messageSecondsLeft = 1;
    correctMessage.setAttribute('class', '')
    var messageInterval = setInterval(function(){
    messageSecondsLeft--;
      if (messageSecondsLeft < 0) {
        clearInterval(messageInterval);
        correctMessage.setAttribute('class', 'd-none')
        }
    }, 500);
};

//display Wrong message
var wrongMessage = document.getElementById('wrong-message');

function displayWrongMessage() {
    var messageSecondsLeft = 1;
    wrongMessage.setAttribute('class', '')
    var messageInterval = setInterval(function(){
    messageSecondsLeft--;
      if (messageSecondsLeft < 0) {
        clearInterval(messageInterval);
        wrongMessage.setAttribute('class', 'd-none')
        }
    }, 500);
};

//checking answers - IMPORTANT!
questionFormEl.addEventListener('submit', function(event){
    event.preventDefault();

    // get value of selected 'answer' radio button
    var val = getRadioVal( document.getElementById('question-form'), 'answers' );
        //check answer is correct
        if(val === allQuestions[q]['correctAnswer']){
            scoreIncrease();
            displayCorrectMessage()
        } else {
            secondsLeft = secondsLeft - 5;
            displayWrongMessage()
        }
     
        q++;
        scoreEl.textContent = scoreCounter;
        uncheckAll(document.getElementById('question-form'), 'answers');
        displayQuestion();
}

);

// Screen 3
let highScores = JSON.parse(localStorage.getItem("high scores") || "[]");

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

    nameInput.value = ""; 
    goToScreen4();
    renderHighScores();
  });

  //screen 4

  //render high scores

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
            index = index + 1;
            } else {
                return;
            }
        }
    }

    function clearScoreScreen(){ 
            scoreBoardName[0].textContent = ''; scoreBoardScore[0].textContent = '';
            scoreBoardName[1].textContent = ''; scoreBoardScore[1].textContent = '';
            scoreBoardName[2].textContent = ''; scoreBoardScore[2].textContent = '';
            scoreBoardName[3].textContent = ''; scoreBoardScore[3].textContent = '';
            scoreBoardName[4].textContent = ''; scoreBoardScore[4].textContent = '';
    }

  //scree 4 buttons

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