import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import {CartContext} from "../CartContext";

function Header() {
    const {toggleShow} = useContext(CartContext);
    return (
            <header>
                <div id='logo'>
                    <h2>MY Webstore</h2>
                </div>
                <nav>
                    <NavLink className="link" to="/" exact>Home</NavLink>
                    <NavLink className="link" to="/about">About</NavLink>
                    <button className="link" onClick={toggleShow}>Cart</button>
                </nav>
            </header>
    )
}

export default Header;