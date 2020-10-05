import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import {CartContext} from "../CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const {toggleShow} = useContext(CartContext);
    return (
            <header>
                <div id='logo'>
                    <h2>Shop App</h2>
                </div>
                <nav>
                    <NavLink className="link" to="/" exact>Home</NavLink>
                    <NavLink className="link" to="/about">About</NavLink>
                    <NavLink className="link" to="/orders">Orders</NavLink>
                    <button className="link" id="cartBtn" onClick={toggleShow}>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                        &nbsp;Cart
                    </button>
                </nav>
            </header>
    )
}

export default Header;