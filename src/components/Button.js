import React from "react";

function Button(props) {
    return (
        <button
         disabled={props.disabled}
         className={'btn ' + props.className}
         onClick={props.click}>
             {props.value}
        </button>
    )
}

export default Button;