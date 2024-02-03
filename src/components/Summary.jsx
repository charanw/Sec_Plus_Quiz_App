import quizCompleteImg from '../assets/quiz-complete.svg'
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers, onRetry }) {

    const skippedAnswers = userAnswers.filter(answer => answer == null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].correct_answer);

    const skippedAnswersRatio = Math.round((skippedAnswers.length / userAnswers.length) * 100);

    const correctAnswersRatio = Math.round((correctAnswers.length / userAnswers.length) * 100);

    const wrongAnswersRatio = 100 - skippedAnswersRatio - correctAnswersRatio;

    function handleRetryButtonClick() {
        onRetry();
      }


    return (
        <div id="summary">
        <img src={quizCompleteImg} alt="trophy icon" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className="number correct">{correctAnswersRatio}%</span>
                <span className="text correct">Correct</span>
            </p>
            <p>
                <span className="number wrong">{wrongAnswersRatio}%</span>
                <span className="text wrong">Wrong</span>
            </p>
            <p>
                <span className="number skipped">{skippedAnswersRatio}%</span>
                <span className="text skipped">Skipped</span>
            </p>
        </div>
        <ol className='results'>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer';

                if (answer === null) {
                    cssClass += ' skipped';
                } else if (answer === QUESTIONS[index].correct_answer) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }

                return (
                <li key={index}>
                <h3>{index + 1}</h3> <p className="question">{QUESTIONS[index].question}</p>
                <p className={cssClass}>Your answer: {answer ?? 'Skipped'}</p>
                <p className="user-answer correct">Correct answer: {QUESTIONS[index].correct_answer}</p>
                <p className="question explanation">{QUESTIONS[index].explanation}</p>
            </li>
                )
            })}
            
        </ol>
        <button onClick={handleRetryButtonClick}>Retry</button>
        </div>
        )
}