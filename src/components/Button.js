import React from "react";

function Button(props) {
    return (
        <button className='btn' onClick={props.click}>{props.value}</button>
    )
}

export default Button;