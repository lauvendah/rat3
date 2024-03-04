const questionContainer = document.getElementById('question-container');

// Sample question data (replace with actual questions and exercises)
const questions = [
    {
        type: 'text',
        text: 'What is the capital of France?',
        answer: 'Paris'
    },
    {
        type: 'code',
        text: 'Write a function that reverses a string.',
        code: '' // user will input the code here
    }
];

function renderQuestion(question) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    if (question.type === 'text') {
        const questionText = document.createElement('p');
        questionText.classList.add('question-text');
        questionText.textContent = question.text;

        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.classList.add('answer-input');

        questionElement.appendChild(questionText);
        questionElement.appendChild(answerInput);
    } else if (question.type === 'code') {
        const questionText = document.createElement('p');
        questionText.classList.add('question-text');
        questionText.textContent = question.text;

        const codeEditor = document.createElement('textarea');
        codeEditor.classList.add('code-editor');
        codeEditor.value = question.code; // pre-fill if needed

        questionElement.appendChild(questionText);
        questionElement.appendChild(codeEditor);
    }

    questionContainer.appendChild(questionElement);
}

questions.forEach(renderQuestion);