import React from "react";
import "./styles.scss";

type Props = {
    handleClick : () => void,
    handleChange : (str: string) => void,
    value: string
}
const Input = ({handleClick, handleChange, value} : Props) => {
    return(
        <label>
            <input className="input" placeholder="add todo" type="text" value={value} onChange={e => handleChange(e.target.value)}/>
            <button className="button" onClick={handleClick}>Add Todo</button>
        </label>
    )
}

export default Input;