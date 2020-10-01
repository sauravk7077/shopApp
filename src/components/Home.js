import React from "react";
import Item from "./Item";
import Fade from "react-reveal/Fade";

function Home() {
    return (
        <div id="home">
            <Fade big cascade>
            <div className="items-container">
                <Item id="dfl4" name="Tomato Sauce" price={500} mrp={800} image="cam.jpg"/>
                <Item id="dfl3" name="Tomato Sauce" price={400} mrp={700} image="cam.jpg"/>
                
            </div>
            </Fade>
        </div>
    )
}

export default Home;