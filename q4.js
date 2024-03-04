const questions = [
    {
    question: "which of the following is an example of an unclosed tag ?",
    choices: ["A. <Br>", "B. <head>", "C. <div>", "D. <form>"],
    correctAnswer: "B"
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

    const questionContainer = document.getElementById("question-container");
const feedbackContainer = document.getElementById("feedback-container");

function displayQuestion(question) {
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>`;
    for (let i = 0; i < question.choices.length; i++) {
        questionContainer.innerHTML += `
            <li>
                <input type="radio" name="answer" id="choice-${i}" value="${i}">
                <label for="choice-${i}">${question.choices[i]}</label>
            </li>`;
    }
    questionContainer.innerHTML += `</ul>`;
}

function evaluateAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const selectedIndex = parseInt(selectedAnswer.value);
        if (selectedIndex === questions[0].correctAnswer) {
            feedbackContainer.textContent = "Correct! ";
        } else {
            feedbackContainer.textContent = "Incorrect. The correct answer is " + questions[0].choices[questions[0].correctAnswer];
        }
    } else {
        feedbackContainer.textContent = "Please select an answer.";
    }
}

displayQuestion(questions[0]);

const submitButton = document.createElement("button");
submitButton.textContent = "Submit Answer";
submitButton.addEventListener("click", evaluateAnswer);
questionContainer.appendChild(submitButton);
