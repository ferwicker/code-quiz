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
