import React from "react";
import Item from "./Item";
import Fade from "react-reveal/Fade";

function Home() {
    return (
        <section id="home">
            <Fade big cascade>
            <div className="items-container">
                <Item id="dfl4" name="Koda Camera" price={500} mrp={800} image="cam.jpg"/>
                <Item id="dfl3" name="Tomato" price={400} mrp={700} image="tomato.jpg"/>
                <Item id="dfl8" name="Yellow Potato" price={400} mrp={700} image="Potato.jpg"/>
                <Item id="dfl5" name="Bluetooth Speaker" price={400} mrp={700} image="bSpeaker.jpg"/>
                <Item id="dfl3" name="Tomato" price={400} mrp={700} image="tomato.jpg"/>
                <Item id="dgl8" name="Yellow Potato" price={400} mrp={700} image="Potato.jpg"/>
                <Item id="dil8" name="Bluetooth Speaker" price={400} mrp={700} image="bSpeaker.jpg"/>
                <Item id="drl7" name="Koda Camera" price={500} mrp={800} image="cam.jpg"/>
                
                
            </div>
            </Fade>
        </section>
    )
}

export default Home;