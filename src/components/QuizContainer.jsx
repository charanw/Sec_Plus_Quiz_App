import React, { useState, useCallback } from 'react';

import Quiz from './Quiz.jsx';
import Summary from './Summary.jsx';

export default function QuizContainer() {
  const [showQuiz, setShowQuiz] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);

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
        <Quiz onQuizComplete={handleQuizComplete} />
      ) : (
        <Summary onRetry={handleRetry} userAnswers = {userAnswers} />
      )}
    </div>
  );
}