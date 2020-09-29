import React from "react";
import {NavLink, useLocation } from "react-router-dom";

function Header() {
    const loc = useLocation;
    console.log(loc);
    return (
            <header>
                <div id='logo'>
                    <h2>MY Webstore</h2>
                </div>
                <nav>
                    <NavLink className="link" to="/" exact>Home</NavLink>
                    <NavLink className="link" to="/about">About</NavLink>
                </nav>
            </header>
    )
}

export default Header;