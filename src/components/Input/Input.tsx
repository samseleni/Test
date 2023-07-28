import React from "react";

type Props = {
    handleClick : () => void,
    handleChange : () => void,
    value: string
}
const Input = ({handleClick, handleChange, value} : Props) => {
    return(
        <label>
            <input placeholder="add todo" type="text" value={value} onChange={e => handleChange(e.target.value)}/>
            <button onClick={handleClick}>Add Todo</button>
        </label>
    )
}

export default Input;