import React from 'react';

const AnswerScreen = ({result,showResult}) => {
    return (
        <div className={showResult ? "currentInput" : "answerScreen"}>{result}</div>
    )
}

export default AnswerScreen;