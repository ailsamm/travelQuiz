'use-strict';

let questionCount = 0;
let correctCount = 0;
let questionSet;
const maxQuestions = 5;
const welcomeScreen = $("main").clone();

//  EVENT LISTENERS
function handleGetNewQuestion(){
    $('main').on('click', '.js-next-button', (event) => {
        renderQuestion();
    });
    $('main').on('click', '.js-start-button', (event) => {
        renderQuestion();
        $("main").removeClass("hidden-background");
    });
};

function handleClickSeeScore(){
    $('main').on('click', '.js-final-button', (event) => {
        renderFinishScreen();
    });    
};

function handleClickNewGame(){
    $('main').on('click', '.js-new-game-button', (event) => {
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
        console.log(`answerId is: ${selectedAnswerId}`);
        const correctAnswerId = getCorrectAnswer(questionId);
        const answerCorrect = correctAnswerId === selectedAnswerId;; 
        console.log(`correct answer is: ${correctAnswerId}`);
        console.log(`selected answer is: ${selectedAnswerId}`);
        console.log(typeof selectedAnswerId);
        console.log(typeof correctAnswerId);
        if (answerCorrect){
            console.log("User answer was correct.");
            handleCorrectAnswer(correctAnswerId);
            correctCount ++;
            updateHeader();
        }
        else {
            console.log("User answer was incorrect.");
            handleIncorrectAnswer(selectedAnswerId, correctAnswerId);
        }
    });
}   

// NON-EVENT LISTENERS
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
    console.log("I am here");
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

function renderWelcomeScreen(){
    $("main").html(createWelcomeHtml());
    $("main").addClass("hidden-background");
    updateHeader();
};

function renderQuestion(){
    console.log("Rendering a question");
    const curQuestion = getRandomQuestion();
    let questionHtml;
    questionCount ++;
    if (questionCount < maxQuestions){
        questionHtml = createQuestionHtml(curQuestion);
    }
    else {
        questionHtml = createFinalQuestionHtml(curQuestion);
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

function renderFinishScreen(){
    $("main").html(createFinishHtml());
    $("main").addClass("hidden-background");
};

function updateHeader(){
    $(".js-question-progress").text(`${questionCount} of ${maxQuestions}`);
    $(".js-current-score").text(`${correctCount}`);
}

// MAIN HANDLER
function initialise(){
    $(initialiseQuestions);
    $(handleGetNewQuestion);
    $(handleClickSeeScore);
    $(handleClickNewGame);
    $(handleUserAnswer);
    $(renderWelcomeScreen);
}

$(initialise);






