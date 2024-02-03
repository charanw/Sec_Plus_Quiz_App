import { useState } from 'react';

import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';

export default function Question({QUESTIONS, questionIndex, onSelectAnswer, onSkipAnswer}) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 60000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

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
        <span>Question {questionIndex + 1}/{QUESTIONS.length}</span>
        <h2>{QUESTIONS[questionIndex].question}</h2>
        <Answers
        answers={QUESTIONS[questionIndex].options} 
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
        />
        <QuestionTimer
        key={timer} 
        timeout={timer} 
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
        mode={answerState}
        />
        </div>
    )
}