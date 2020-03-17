'use-strict';

let questionCount = 0;
let correctCount = 0;
let questionSet;
const maxQuestions = 5;

//  EVENT LISTENER FUNCTIONS
function getNewQuestion(){
    $('main').on('click', '.js-next-button', function() {
        renderQuestion();
    });
    $('main').on('click', '.js-start-button', function()  {
        renderQuestion();
        $("main").removeClass("hidden-background");
        $("header").removeClass("hidden");
    });
};

function clickSeeScore(){
    $('main').on('click', '.js-final-button', function()  {
        renderFinishScreen();
    });    
};

function clickNewGame(){
    $('main').on('click', '.js-new-game-button', function()  {
        initialiseQuestions();
        renderWelcomeScreen();
    });   
};

function handleUserAnswer(){
    $('main').on('click', 'input[type="button"]', (event) => {
        // Remove hover and clicking functionality on answered question
        $("main input[type='button']").css("pointer-events","none");
        $("main input[type='button']").prop("disabled",true);

        const selectedAnswerId = $(event.currentTarget).data("answerId");
        const questionId = $(event.currentTarget).parent().data("questionId");
        const correctAnswerId = getCorrectAnswer(questionId);
        const answerCorrect = correctAnswerId === selectedAnswerId;; 

        if (answerCorrect){
            console.log("User answer was correct.");
            handleCorrectAnswer(correctAnswerId);
            correctCount++;
            updateHeader();
        }
        else {
            console.log("User answer was incorrect.");
            handleIncorrectAnswer(selectedAnswerId, correctAnswerId);
        }
    });
}   

// NON-EVENT LISTENER FUNCTIONS
function getCorrectAnswer(questionId){
    const curQuestion = QUESTIONS.find(item => item.id === questionId);
    return curQuestion.correctAnswerIndex;
}

function initialiseQuestions(){
    questionCount = 0;
    correctCount = 0;
    questionSet = [...QUESTIONS];
}

function handleCorrectAnswer(correctAnswerId){
    $("input[type='button']").each(function() {
        const currentId = $(this).data("answerId");
        if (currentId === correctAnswerId){
            $(this).addClass("correct-answer");
        }
        else {
            $(this).addClass("grey-out");
        }
        $("button[type='button'").removeClass("hidden");
        $(".question-image").attr("src", "https://travel-quiz.s3-us-west-1.amazonaws.com/correct.jpg");
        $(".question-image").attr("alt", "Correct");
      });
}

function handleIncorrectAnswer(selectedAnswerId, correctAnswerId){
    $("input[type='button']").each(function() {
        const currentId = $(this).data("answerId");
        if (currentId === selectedAnswerId){
            $(this).addClass("incorrect-answer");
        }
        else if (currentId === correctAnswerId){
            $(this).addClass("correct-answer");
        }
        else {
            $(this).addClass("grey-out");
        }
        $("button[type='button'").removeClass("hidden");
        $(".question-image").attr("src", "https://travel-quiz.s3-us-west-1.amazonaws.com/incorrect.jpg");
        $(".question-image").attr("alt", "Incorrect");
    });
}

function renderQuestion(){
    console.log("Rendering a question");
    const curQuestion = getRandomQuestion();
    let questionHtml;
    questionCount ++;
    if (questionCount < maxQuestions){
        questionHtml = createQuestionHtml(curQuestion, "js-next-button", "NEXT");
    }
    else {
        questionHtml = createQuestionHtml(curQuestion, "js-final-button", "SEE SCORE");
    }

    $("main").html(questionHtml);
    updateHeader();
    
};

function getRandomQuestion(){
    // Select random question and then remove it from array so it cannot be repeated
    const randomIndex = Math.floor(Math.random() * questionSet.length)
    const curQuestion = questionSet[randomIndex];
    questionSet.splice(randomIndex,1);
    return curQuestion;
}

function updateHeader(){
    $(".js-question-progress").text(`${questionCount} of ${maxQuestions}`);
    $(".js-current-score").text(`${correctCount}`);
}

function renderWelcomeScreen(){
    $("main").html(createWelcomeHtml());
    $("main").addClass("hidden-background");
    $("header").addClass("hidden");
    updateHeader();
};

function renderFinishScreen(){
    $("main").html(createFinishHtml());
    $("main").addClass("hidden-background");
    $("header").addClass("hidden");
};

// Main handler
function initialise(){
    $(initialiseQuestions);
    $(getNewQuestion);
    $(clickSeeScore);
    $(clickNewGame);
    $(handleUserAnswer);
    $(renderWelcomeScreen);
}

$(initialise);






