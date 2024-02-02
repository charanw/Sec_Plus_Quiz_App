import { useRef } from 'react';

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledOptions = useRef();

    if (!shuffledOptions.current) {
        shuffledOptions.current = [...answers];
        shuffledOptions.current.sort(() => Math.random() - 0.5)
    }

    return (
    <ul id="answers">
    {shuffledOptions.current.map(option => { 
        const isSelected = selectedAnswer === option;
        let cssClass = '';

        if (answerState === 'answered' && isSelected){
            cssClass = 'selected'
        }

        if((answerState === 'correct' || answerState === 'wrong') && isSelected) {
            cssClass = answerState;
        }

        return (
        <li key={option} className="answer">
            <button 
            onClick={() => onSelect(option)} className={cssClass} disabled={answerState !== ''}
            >{option}
            </button>
        </li>
        );
    })}
</ul>)
}