import React from "react";
import Button from "./Button";

const Keypad = ({arrayOfButtons, setInputValue, setShowResult}) => {
    //Event handler sets numbers and operation symbols into inputValue array
    //If event target is = C or <- then it acts accordingly
    const handleClick = (e) => {
        if(e.target.classList.contains('evaluate')){
            return setShowResult(prevValue => !prevValue);
        }
        if(e.target.classList.contains('erase')){
            return setInputValue(prevInputs => [
                ...prevInputs.slice(0,-1)
            ]);
        }
        if(e.target.classList.contains('clear')) {
            setShowResult(prevValue => !prevValue);
            return setInputValue([]);
        }
        setInputValue(prevInputs => [
            ...prevInputs,
            e.target.value
        ]);
    }

    return (
    <section className="keypad-btns">
        {arrayOfButtons.map((item, index) => {
            return <Button btn={item} key={index} setInputValue={setInputValue} handleClick={handleClick} />
        })}
    </section>
    )
}

export default Keypad;