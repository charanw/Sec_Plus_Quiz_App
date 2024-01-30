import { useState } from 'react';

import quizCompleteImg from '../assets/quiz-complete.svg'

import QUESTIONS from '../questions.js';

export default function Quiz() {
const [userAnswers, setUserAnswers] = useState([]);

const activeQuestionIndex = userAnswers.length;
const quizComplete = activeQuestionIndex === QUESTIONS.length;

function handleSelectAnswer(selectedAnswer) {
setUserAnswers((prevUserAnswers) => {return [...prevUserAnswers, selectedAnswer]});
}

if (quizComplete) {
    return <div id="summary">
        <img src={quizCompleteImg} alt="trophy icon" />
        <h2>Quiz Completed!</h2>
    </div>
}



const shuffledQuestions = QUESTIONS.sort(() => Math.random());

const shuffledOptions = [...shuffledQuestions[activeQuestionIndex].options];
shuffledOptions.sort(() => Math.random() - 0.5)

return <div id="quiz">
<div id="question">
    
    <ul id="answers">
    <h2>{shuffledQuestions[activeQuestionIndex].question}</h2>
        {shuffledOptions.map(option => <li key={option} className="answer"><button onClick={() => handleSelectAnswer(option)}>{option}</button></li>)}
    </ul>
    </div>
    </div>
}