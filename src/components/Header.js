import React from "react";
import {Link} from "react-router-dom";

function Header() {
    const style={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '10px'
    }
    return (
        <header style={style}>
            <div id='logo'>
                <h2>MY Webstore</h2>
            </div>
            <div>
                <Link className="link" href="#">Home</Link>
                <Link className="link" href="#">About</Link>
            </div>
        </header>
    )
}

export default Header;