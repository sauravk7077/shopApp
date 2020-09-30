import React from "react";
import Item from "./Item";
import Fade from "react-reveal/Fade";

function Home() {
    return (
        <div id="home">
            <Fade big cascade>
            <div className="items-container">
                <Item/>
                <Item/>
            </div>
            </Fade>
        </div>
    )
}

export default Home;