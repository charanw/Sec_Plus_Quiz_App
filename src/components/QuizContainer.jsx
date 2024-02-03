import React, { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';
import Quiz from './Quiz.jsx';
import Summary from './Summary.jsx';

export default function QuizContainer() {
  const [showQuiz, setShowQuiz] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const shuffledQUESTIONS = [...QUESTIONS].sort(() => Math.random());

  const handleRetry = useCallback(() => {
    setShowQuiz(true);
  }, [setShowQuiz]);

  const handleQuizComplete = useCallback((answers) => {
    setUserAnswers(answers);
    setShowQuiz(false);
  }, [setShowQuiz]);

  return (
    <div>
      {showQuiz ? (
        <Quiz onQuizComplete={handleQuizComplete} QUESTIONS = { shuffledQUESTIONS }/>
      ) : (
        <Summary QUESTIONS = { shuffledQUESTIONS } onRetry={handleRetry} userAnswers = {userAnswers} />
      )}
    </div>
  );
}