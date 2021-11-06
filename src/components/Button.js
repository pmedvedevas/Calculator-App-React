import React from "react";

const Button = ({btn, handleClick}) => {

    return (
        <button type="button" className={btn.class} value={btn.value} onClick={handleClick}>{btn.symbol ? btn.symbol : btn.value}</button>
    )
}

export default Button;