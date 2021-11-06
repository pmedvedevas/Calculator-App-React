import React, {useState, useEffect} from "react";
//importing components
import CurrentInput from "./CurrentInput";
import AnswerScreen from "./AnswerScreen";

const DisplayArea = ({inputValue, showResult}) => {
    const [result, setResult] = useState('0');
    const lastInputValue = inputValue[inputValue.length-1];

    //Reevaluates result every time any NUMBER button (num_btn) is pressed
    useEffect(() => {
        if(lastInputValue >= "0" && lastInputValue <= "9"){
            setResult(eval(inputValue.join('')));
        }
        if(inputValue.length === 0) {
            setResult("0");
        }
    },[lastInputValue, inputValue]);


    return (
        <section id="display-area">
            <CurrentInput inputValue={inputValue} showResult={showResult} />
            <AnswerScreen result={result} showResult={showResult}/>
        </section>
    )
}

export default DisplayArea;