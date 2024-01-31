import { useState, useCallback } from 'react';

import quizCompleteImg from '../assets/quiz-complete.svg'

import QUESTIONS from '../questions.js';

import QuestionTimer from './QuestionTimer.jsx'

export default function Quiz() {
const [userAnswers, setUserAnswers] = useState([]);

const activeQuestionIndex = userAnswers.length;

const quizComplete = activeQuestionIndex === QUESTIONS.length;

const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
setUserAnswers((prevUserAnswers) => {
    return [...prevUserAnswers, selectedAnswer]
});
}, []);

const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

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
<QuestionTimer
key={activeQuestionIndex} 
timeout={5000} 
onTimeout={handleSkipAnswer}
/>
    <h2>{shuffledQuestions[activeQuestionIndex].question}</h2>
    <ul id="answers">
        {shuffledOptions.map(option => <li key={option} className="answer"><button onClick={() => handleSelectAnswer(option)}>{option}</button></li>)}
    </ul>
    </div>
    </div>
}