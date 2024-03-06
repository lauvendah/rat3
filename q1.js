const questions = [
    {
    question: "which of the following is an example of an unclosed tag ?",
    choices: ["A. <Br>", "B. <head>", "C. <div>", "D. <form>"],
    correctAnswer: "A"
    },
    {
    question: "what property do we use to change color of a page background?",
    choices: ["A. height", "B.background color ", "C. width", "D. padding"],
    correctAnswer: "B"
    },
    {
    question: "which tag defines the use of forms in html?",
    choices: ["A. Form", "B. div", "C. head", "D. tail"],
    correctAnswer: "A"
    }
    ];
    const quizForm = document.getElementById("quizForm");
    const feedback =document.getElementById("feedback");
    let currentQuestionIndex = 0;
    laodQuestion();
    function laodQuestion(){
        const currentQuestion =questions[currentQuestionIndex];
        document.getElementById("question").textContent =currentQuestion.question;
        document.getElementById("choiceA").textContent =currentQuestion.choices[0];
        document.getElementById("choiceB").textContent =currentQuestion.choices[1];
        document.getElementById("choiceC").textContent =currentQuestion.choices[2];    
    }
    quizForm.addEventListener("submit",function(event){
        event.preventDefault();
        const selectedAnswer=document.querySelector( 'input [name="answer"]:checked');

        if(!selectedAnswer){
            feedback.textContent="please select an answer";
            return;
        }
        const answer = selectedAnswer.ariaValueMax;if(answer===[currentQuestionIndex].correctAnswer)
        {
            feedback.textContent ="correct";
        }
        else{
            feedback.textContent ='Incorrect.The correct answer is' +question[currentQuestionIndex].correctAnswer;
        }
        currentQuestionIndex++;
        if(currentQuestionIndex <questions.length){
            setTimeout(function()
            {
                laodQuestion();
                feedback.textContent ="";
            },1500);
        }else
        {
            setTimeout(function()
            {
                laodQuestion();
                feedback.textContent ="Quiz Completed";
            },1500); 
        }
        selectedAnswer.checked = false;

    });
    
 
 
