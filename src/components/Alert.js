import React from "react";
import Button from "./Button";
import Fade from "react-reveal/Fade";

function Alert(props) {
    return (
        <div className={`alert ${props.className}`}>
            <Fade when={!props.className}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <Button value="OK" click={props.click}/>
            </Fade>
        </div>
    )
}

export default Alert;