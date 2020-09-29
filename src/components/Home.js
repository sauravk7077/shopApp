import React from "react";
import Item from "./Item";

function Home() {
    return (
        <div id="home">
            <div className="items-container">
                <Item/>
                <Item/>
            </div>
        </div>
    )
}

export default Home;