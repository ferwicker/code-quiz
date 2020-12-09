//this document contains all the questions for the quiz

var allQuestions = [

    {
      "number": 1,
      question: 'What does HTML stand for?',
      answers: ['Hyper Text Markup Language', 
      'Hyperlinks and Text Markup Language', 
      'Home Tool Markup Language'],
      correctAnswer: 0,
    },

    {
        "number": 2,
        question: 'How do you insert a comment in a CSS file?',
        answers: ['// this is a comment //', 
        '/* this is a comment */', 
        '// this is a comment'],
        correctAnswer: 1,
      },

      {
        "number": 3,
        question: 'Choose the correct HTML element for the largest heading:',
        answers: ['<heading>', 
        '<h1>', 
        '<head>'],
        correctAnswer: 1,
      },

      {
        "number": 4,
        question: 'Where is the correct place to insert a JavaScript?',
        answers: ['The <body> section',
        'Both the <head> section and the <body> section are correct',
        'The <head> section'],
        correctAnswer: 1,
      },

      {
        "number": 5,
        question: 'Which is the correct CSS syntax?',
        answers: ['body {color: black;}',
        '{body:color=black;}',
        'body:color=black;'],
        correctAnswer: 0,
      },

      {
        "number": 6,
        question: 'What is the correct HTML element for inserting a line break?',
        answers: ['<br>',
        '<break>',
        '<lb>'],
        correctAnswer: 0,
      },

      {
        "number": 7,
        question: 'How can you make a numbered list?',
        answers: ['<ul>',
        '<dl>',
        '<ol>'],
        correctAnswer: 2,
      },

      {
        "number": 8,
        question: 'Which CSS property controls the text size?',
        answers: ['text-size',
        'text-style',
        'font-size'],
        correctAnswer: 2,
      },
      {
        "number": 9,
        question: 'Is JavaScript case-sensitive?',
        answers: ['False',
        'True'],
        correctAnswer: 1,
      },

      {
        "number": 10,
        question: 'Which CSS property is used to change the text colour of an element?',
        answers: ['color',
        'fgcolor',
        'text-color'],
        correctAnswer: 0,
      },

      {
        "number": 11,
        question: 'In CSS, how do you select an element with id "demo"?',
        answers: ['#demo',
        '.demo',
        'demo'],
        correctAnswer: 0,
      },

      {
        "number": 12,
        question: 'What is the correct HTML for inserting an image?',
        answers: ['<img src="image.gif" alt="MyImage">',
        '<image src="image.gif" alt="MyImage">',
        '<img alt="MyImage">image.gif</img>'],
        correctAnswer: 0,
      },

      {
        "number": 13,
        question: 'How do you create a function in JavaScript?',
        answers: ['function = myFunction()',
        'function myFunction()',
        'function:myFunction()'],
        correctAnswer: 1,
      },

      {
        "number": 14,
        question: 'What does CSS stand for?',
        answers: ['Cascading Style Sheets',
        'Creative Style Sheets',
        'Computer Style Sheets',
        'Correlated Style Sheets'],
        correctAnswer: 0,
      },

      {
        "number": 15,
        question: 'What is the correct HTML for making a text input field?',
        answers: ['<input type="text">',
        '<textfield>',
        '<input type="textfield">'],
        correctAnswer: 0,
      },

      {
        "number": 16,
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        answers: ['At the end of the document',
        'In the <body> section',
        'In the <head> section'],
        correctAnswer: 2,
      },

      {
        "number": 17,
        question: 'How does a FOR loop start?',
        answers: ['for (i = 0; i <= 5)',
        'for (i = 0; i <= 5; i++)',
        'for (i <= 5; i++)'],
        correctAnswer: 1,
      },

      {
        "number": 18,
        question: 'How do you write "Hello World" in an alert box?',
        answers: ['msg("Hello World");',
        'alert("Hello World");',
        'alertBox("Hello World");'],
        correctAnswer: 1,
      },

      {
        "number": 19,
        question: 'How do you select elements with class name "test"?',
        answers: ['.test',
        '*test',
        '#test'],
        correctAnswer: 0,
      },

      {
        "number": 20,
        question: 'What is the correct HTML for referring to an external style sheet?',
        answers: ['<stylesheet>mystyle.css</stylesheet>',
        '<style src="mystyle.css">',
        '<link rel="stylesheet" type="text/css" href="mystyle.css">'],
        correctAnswer: 2,
      },

      {
        "number": 21,
        question: 'How do you call a function named "myFunction"?',
        answers: ['call myFunction()',
        'call function myFunction()',
        'myFunction()'],
        correctAnswer: 2,
      },

      {
        "number": 22,
        question: 'How do you make each word in a text start with a capital letter?',
        answers: ["You can't do that with CSS",
        'text-transform:capitalize',
        'text-style:capitalize'],
        correctAnswer: 1,
      },

      {
        "number": 23,
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: ['<script>',
        '<javascript>',
        '<js>'],
        correctAnswer: 0,
      },

      {
        "number": 24,
        question: 'How do you select all p elements inside a div element?',
        answers: ['div + p',
        'div.p',
        'div p'],
        correctAnswer: 2,
      },

      {
        "number": 25,
        question: 'How can you add a comment in a JavaScript?',
        answers: ['//This is a comment',
        '<!--This is a comment-->',
        '"This is a comment"'],
        correctAnswer: 0,
      },

      {
        "number": 26,
        question: 'How does a WHILE loop start?',
        answers: ['while (i <= 10)',
        'while (i <= 10; i++)',
        'while i = 1 to 10'],
        correctAnswer: 0,
      },

      {
        "number": 27,
        question: 'Which character is used to indicate an end HTML tag?',
        answers: ['*',
        '/',
        '<'],
        correctAnswer: 1,
      },

      {
        "number": 28,
        question: 'What is the correct CSS syntax for making all the <p> elements bold?',
        answers: ['p {text-size:bold;}',
        'p {font-weight:bold;}',
        '<p style="font-size:bold;">'],
        correctAnswer: 1,
      },

      {
        "number": 29,
        question: 'What is the correct HTML for creating a hyperlink?',
        answers: ['<a>http://www.w3schools.com</a>',
        '<a url="http://www.w3schools.com">W3Schools.com</a>',
        '<a href="http://www.w3schools.com">W3Schools</a>'],
        correctAnswer: 2,
      },

      {
        "number": 30,
        question: 'What is the default value of the position property?',
        answers: ['static',
        'relative',
        'absolute'],
        correctAnswer: 0,
      },

      {
        "number": 31,
        question: 'How do you group selectors?',
        answers: ['Separate each selector with a comma',
        'Separate each selector with a space',
        'Separate each selector with a plus sign'],
        correctAnswer: 0,
      },

      {
        "number": 32,
        question: 'When using the padding property; are you allowed to use negative values?',
        answers: ['Always',
        'Sometimes',
        'Never'],
        correctAnswer: 2,
      },

      {
        "number": 33,
        question: 'How to write an IF statement in JavaScript?',
        answers: ['if i == 5 then',
        'if i = 5',
        'if (i == 5)'],
        correctAnswer: 2,
      },

      {
        "number": 34,
        question: 'What is the correct syntax for referring to an external script?',
        answers: ['<script name="xxx.js">',
        '<script src="xxx.js">',
        '<script href="xxx.js">'],
        correctAnswer: 1,
      },

      {
        "number": 35,
        question: 'Choose the correct HTML element to define emphasised text',
        answers: ['<italic>',
        '<I>',
        '<em>'],
        correctAnswer: 2,
      },
]