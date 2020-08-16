// Quiz Questions & Answers
var quiz = [
    {
    question: "Which of the following is a disadvantage of using JavaScript?",
    choices: ["Client-side Javascript does not allow the reding or writing of files.", "JavaScript can not be used for Networking applications because there is no such support available.", "JavaScript doesn't have any multithreading or multiprocess capabilites.", "All of the above."],
    answer: "All of the above."
},  {
    question: "Banana",
    choices: ["blue", "red", "yellow", "green"],
    answer: "yellow"
},  {
    question: "Blueberry",
    choices: ["blue", "red", "yellow", "green"],
    answer: "blue"
},  {
    question: "Kiwi",
    choices: ["blue", "red", "yellow", "green"],
    answer: "green"
},  {
    question: "Strawberry",
    choices: ["blue", "red", "yellow", "green"],
    answer: "red"
},  {
    question: "Grape",
    choices: ["blue", "red", "yellow", "green"],
    answer: "green"
},  {
    question: "Lemon",
    choices: ["blue", "red", "yellow", "green"],
    answer: "yellow"
},  {
    question: "Watermelon",
    choices: ["blue", "red", "yellow", "green"],
    answer: "red"
},  {
    question: "Lime",
    choices: ["blue", "red", "yellow", "green"],
    answer: "green"
},  {
    question: "Raspberry",
    choices: ["blue", "red", "yellow", "green"],
    answer: "red"
},
]
console.log(quiz.length);

// Handle on HTML Elements
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var questionsContainer = document.getElementById("questions-container")
var questionEl = document.getElementById("question");
var optionA = document.getElementById("optA");
var optionB = document.getElementById("optB");
var optionC = document.getElementById("optC");
var optionD = document.getElementById("optD");
var validityEl = document.getElementById("validity");
var startBtn = document.getElementById("start-btn");



// Clock
var secondsLeft = 60;
// Progress of questions during quiz
var quizProgress = 0;

startBtn.addEventListener("click", startGame);



// Timer function
function startGame() {
    startBtn.classList.add("hide");
    quizProgress = 0;
    questionsContainer.classList.remove("hide");
    renderQuestions();

}



// Quiz
function renderQuestions () {
    if (quizProgress === quiz.length) {
        console.log("game complete");
    } else {
            questionEl.textContent = quiz[quizProgress].question;
        for (var i = 0; i < quiz[quizProgress].choices.length; i++); {
    
            optionA.textContent = quiz[quizProgress].choices[0];
            optionB.textContent = quiz[quizProgress].choices[1];
            optionC.textContent = quiz[quizProgress].choices[2];
            optionD.textContent = quiz[quizProgress].choices[3];

            $(".choice-btn").on("click", function() {
                if($(this).text()=== quiz[quizProgress].answer) {
                    validityEl.textContent = ("Correct");
                    quizProgress++;
                    renderQuestions;
                } else {
                    validityEl.textContent = ("Wrong");
                    secondsLeft = secondsLeft - 10;
                }
            })
            
            var timerInterval = setInterval(function() {
                secondsLeft--;
                timer.textContent = secondsLeft + " seconds";
    
            }, 1000)

            function endGame () {

                if (secondsLeft === 0 || quizProgress === quiz.length) {
                    clearInterval(timerInterval);
                    }
            }
            
            endGame();
            
        }

    }
 
   
}







// Set up a link to high scores in nav.
// Create timer.
// Create Welcome/Instructions with 'Start' button belower.
// Create questions/answers.
// Display when correct or wrong answer selected.
// Deduct time from clock when wrong answer selected.
// End game upon timer reaching 0 or all questions being answered.
// Display score and prompt box to enter initials and 'save'button to save highscore.
// Return