function createQuestionHtml(randomIndex, buttonClass, buttonLabel){
    const question =  QUESTIONS[randomIndex];
    const options = question.options;
    const newQuestion = 
        `<div class="image-container">\
        <img class="question-image" src=${question.imageSrc} alt=${question.imageAlt}>\
        </div>\
        <h2 class="question">${question.question}</h2>\
        <form class="active" data-question-id="${question.id}">\
            <input class="option" data-answer-id=0 type="button" value="${options[0]}">
            <input class="option" data-answer-id=1 type="button" value="${options[1]}">
            <input class="option" data-answer-id=2 type="button" value="${options[2]}">
            <input class="option" data-answer-id=3 type="button" value="${options[3]}">
        </form>\
        <button type="button" class="game-button next-button ${buttonClass} hidden">${buttonLabel}</button>`;
    return newQuestion;
}

function createFinishHtml(){
    let feedback;
    if (correctCount/maxQuestions >= 0.8){
        feedback = "Nice job! You're a seasoned traveller! Keep up the great work.";
    }
    else if (correctCount/maxQuestions >= 0.5){
        feedback = "Not bad at all. A few more trips and you'll be a world culture expert!";
    }
    else {
        feedback = "You've still got some work to do. Keep practising.";
    }

    return `<img class="world-image" src="https://travel-quiz.s3-us-west-1.amazonaws.com/world2.jpg" \
        alt="FINAL SCORE">\
        <h1 class="score">${correctCount} out of ${maxQuestions}</h1>\
        <h2 class="feedback">${feedback}</h2>\
        <button type="button" class="play-again-button js-new-game-button">PLAY AGAIN</button>`;
}

function createWelcomeHtml(){
    return '<h1>Welcome to the travel and culture quiz!</h1>\
    <img class="earth-image" src="https://travel-quiz.s3-us-west-1.amazonaws.com/earth.png" alt="Planet Earth">\
    <button type="button" class="start-button game-button js-start-button">START QUIZ</button>';
}
