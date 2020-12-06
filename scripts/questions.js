//this document contains all the questions for the quiz

var allQuestions = [

    {
      "number": 1,
      question: 'What does HTML stand for?',
      answers: {
      a: 'Hyper Text Markup Language',
      b: 'Hyperlinks and Text Markup Language',
      c: 'Home Tool Markup Language',
    },
      correctAnswer: 'a',
    },

    {
        "number": 2,
        question: 'How do you insert a comment in a CSS file?',
        answers: {
        a: '// this is a comment //',
        b: '/* this is a comment */',
        c: '// this is a comment',
      },
        correctAnswer: 'b',
      },

      {
        "number": 3,
        question: 'Choose the correct HTML element for the largest heading:',
        answers: {
        a: '<heading>',
        b: '<h1>',
        c: '<head>',
      },
        correctAnswer: 'b',
      },

      {
        "number": 4,
        question: 'Where is the correct place to insert a JavaScript?',
        answers: {
        a: 'The <body> section',
        b: 'Both the <head> section and the <body> section are correct',
        c: 'The <head> section',
      },
        correctAnswer: 'b',
      },

      {
        "number": 5,
        question: 'Which is the correct CSS syntax?',
        answers: {
        a: 'body {color: black;}',
        b: '{body:color=black;}',
        c: 'body:color=black;',
      },
        correctAnswer: 'a',
      },

      {
        "number": 6,
        question: 'What is the correct HTML element for inserting a line break?',
        answers: {
        a: '<br>',
        b: '<break>',
        c: '<lb>',
      },
        correctAnswer: 'b',
      },

      {
        "number": 7,
        question: 'How can you make a numbered list?',
        answers: {
        a: '<ul>',
        b: '<dl>',
        c: '<ol>',
      },
        correctAnswer: 'c',
      },

      {
        "number": 8,
        question: 'Which CSS property controls the text size?',
        answers: {
        a: 'text-size',
        b: 'text-style',
        c: 'font-size',
      },
        correctAnswer: 'c',
      },
      {
        "number": 9,
        question: 'Is JavaScript case-sensitive?',
        answers: {
        a: 'No',
        b: 'Yes',
        c: 'Only sometimes',
      },
        correctAnswer: 'b',
      },

      {
        "number": 10,
        question: 'Which CSS property is used to change the text colour of an element?',
        answers: {
        a: 'color',
        b: 'fgcolor',
        c: 'text-color',
      },
        correctAnswer: 'a',
      },

      {
        "number": 11,
        question: 'In CSS, how do you select an element with id "demo"?',
        answers: {
        a: '#demo',
        b: '.demo',
        c: 'demo',
      },
        correctAnswer: 'a',
      },

      {
        "number": 12,
        question: 'What is the correct HTML for inserting an image?',
        answers: {
        a: '<img src="image.gif" alt="MyImage">',
        b: '<image src="image.gif" alt="MyImage">',
        c: '<img alt="MyImage">image.gif</img>',
      },
        correctAnswer: 'a',
      },

      {
        "number": 13,
        question: 'How do you create a function in JavaScript?',
        answers: {
        a: 'function = myFunction()',
        b: 'function myFunction()',
        c: 'function:myFunction()',
      },
        correctAnswer: 'b',
      },

      {
        "number": 14,
        question: 'What does CSS stand for?',
        answers: {
        a: 'Cascading Style Sheets',
        b: 'Creative Style Sheets',
        c: 'Computer Style Sheets',
      },
        correctAnswer: 'a',
      },

      {
        "number": 15,
        question: 'What is the correct HTML for making a text input field?',
        answers: {
        a: '<input type="text">',
        b: '<textfield>',
        c: '<input type="textfield">',
      },
        correctAnswer: 'a',
      },

      {
        "number": 16,
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        answers: {
        a: 'At the end of the document',
        b: 'In the <body> section',
        c: 'In the <head> section',
      },
        correctAnswer: 'c',
      },

      {
        "number": 17,
        question: 'How does a FOR loop start?',
        answers: {
        a: 'for (i = 0; i <= 5)',
        b: 'for (i = 0; i <= 5; i++)',
        c: 'for (i <= 5; i++)',
      },
        correctAnswer: 'b',
      },

      {
        "number": 18,
        question: 'How do you write "Hello World" in an alert box?',
        answers: {
        a: 'msg("Hello World");',
        b: 'alert("Hello World");',
        c: 'alertBox("Hello World");',
      },
        correctAnswer: 'b',
      },

      {
        "number": 19,
        question: 'How do you select elements with class name "test"?',
        answers: {
        a: '.test',
        b: '*test',
        c: '#test',
      },
        correctAnswer: 'a',
      },

      {
        "number": 20,
        question: 'What is the correct HTML for referring to an external style sheet?',
        answers: {
        a: '<stylesheet>mystyle.css</stylesheet>',
        b: '<style src="mystyle.css">',
        c: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      },
        correctAnswer: 'c',
      },

      {
        "number": 21,
        question: 'How do you call a function named "myFunction"?',
        answers: {
        a: 'call myFunction()',
        b: 'call function myFunction()',
        c: 'myFunction()',
      },
        correctAnswer: 'c',
      },

      {
        "number": 22,
        question: 'How do you make each word in a text start with a capital letter?',
        answers: {
        a: "You can't do that with CSS",
        b: 'text-transform:capitalize',
        c: 'text-style:capitalize',
      },
        correctAnswer: 'b',
      },

      {
        "number": 23,
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: {
        a: '<script>',
        b: '<javascript>',
        c: '<js>',
      },
        correctAnswer: 'a',
      },

      {
        "number": 24,
        question: 'How do you select all p elements inside a div element?',
        answers: {
        a: 'div + p',
        b: 'div.p',
        c: 'div p',
      },
        correctAnswer: 'c',
      },

      {
        "number": 25,
        question: 'How can you add a comment in a JavaScript?',
        answers: {
        a: '//This is a comment',
        b: '<!--This is a comment-->',
        c: '"This is a comment',
      },
        correctAnswer: 'a',
      },

      {
        "number": 26,
        question: 'How does a WHILE loop start?',
        answers: {
        a: 'while (i <= 10)',
        b: 'while (i <= 10; i++)',
        c: 'while i = 1 to 10',
      },
        correctAnswer: 'a',
      },

      {
        "number": 27,
        question: 'Which character is used to indicate an end HTML tag?',
        answers: {
        a: '*',
        b: '/',
        c: '<',
      },
        correctAnswer: 'b',
      },

      {
        "number": 28,
        question: 'What is the correct CSS syntax for making all the <p> elements bold?',
        answers: {
        a: 'p {text-size:bold;}',
        b: 'p {font-weight:bold;}',
        c: '<p style="font-size:bold;">',
      },
        correctAnswer: 'b',
      },

      {
        "number": 29,
        question: 'What is the correct HTML for creating a hyperlink?',
        answers: {
        a: '<a>http://www.w3schools.com</a>',
        b: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        c: '<a href="http://www.w3schools.com">W3Schools</a>',
      },
        correctAnswer: 'c',
      },

      {
        "number": 30,
        question: 'What is the default value of the position property?',
        answers: {
        a: 'static',
        b: 'relative',
        c: 'absolute',
      },
        correctAnswer: 'a',
      },

      {
        "number": 31,
        question: 'How do you group selectors?',
        answers: {
        a: 'Separate each selector with a comma',
        b: 'Separate each selector with a space',
        c: 'Separate each selector with a plus sign',
      },
        correctAnswer: 'a',
      },

      {
        "number": 32,
        question: 'When using the padding property; are you allowed to use negative values?',
        answers: {
        a: 'Always',
        b: 'Sometimes',
        c: 'Never',
      },
        correctAnswer: 'c',
      },

      {
        "number": 33,
        question: 'How to write an IF statement in JavaScript?',
        answers: {
        a: 'if i == 5 then',
        b: 'if i = 5',
        c: 'if (i == 5)',
      },
        correctAnswer: 'c',
      },

      {
        "number": 34,
        question: 'What is the correct syntax for referring to an external script?',
        answers: {
        a: '<script name="xxx.js">',
        b: '<script src="xxx.js">',
        c: '<script href="xxx.js">',
      },
        correctAnswer: 'b',
      },

      {
        "number": 35,
        question: 'Choose the correct HTML element to define emphasised text',
        answers: {
        a: '<italic>',
        b: '<I>',
        c: '<em>',
      },
        correctAnswer: 'c',
      },
]