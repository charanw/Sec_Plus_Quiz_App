import { useState } from 'react';

import QUESTIONS from '../questions.js';

import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';

export default function Question({questionIndex, onSelectAnswer, onSkipAnswer}) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].correct_answer === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000)
        }, 1000)
    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered'
    }

    return (
        <div id="question">
        <QuestionTimer 
        timeout={60000} 
        onTimeout={onSkipAnswer}
        />
        <h2>{QUESTIONS[questionIndex].question}</h2>
        <Answers
        answers={QUESTIONS[questionIndex].options} 
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
        />
        </div>
    )
}