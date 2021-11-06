import React from 'react';

const CurrentInput = ({inputValue, showResult}) => {
    return (
        <div className={showResult ? "answerScreen" : "currentInput"}>{inputValue.join('')}</div>
    )
}

export default CurrentInput;