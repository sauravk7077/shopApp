import React from "react";
import Button from "./Button";
import Fade from "react-reveal/Fade";

function CheckOut(props) {
    return (
        <div className={`checkOut ${props.className}`}>
            <Fade when={!props.className}>
                <h3>Success!</h3>
                <p>You have sucessfully bought the items.</p>
                <Button value="OK" click={props.click}/>
            </Fade>
        </div>
    )
}

export default CheckOut;