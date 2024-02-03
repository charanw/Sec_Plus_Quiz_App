import { useState, useCallback } from 'react';

import Question from './Question.jsx';

export default function Quiz({ QUESTIONS, onQuizComplete }) {
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
        onQuizComplete(userAnswers);
      }

return (
    <div id="quiz">
        <Question 
        key={activeQuestionIndex}
        questionIndex= {activeQuestionIndex}
        onSelectAnswer = {handleSelectAnswer}
        onSkipAnswer = {handleSkipAnswer}
        QUESTIONS = {QUESTIONS}
        />
    </div>
    );
}