import React from "react";
import {Link, useLocation } from "react-router-dom";

function Header() {
    const loc = useLocation;
    console.log(loc);
    return (
            <header>
                <div id='logo'>
                    <h2>MY Webstore</h2>
                </div>
                <div>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                </div>
            </header>
    )
}

export default Header;