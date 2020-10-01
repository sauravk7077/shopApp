import React,{useContext} from "react";
import {CartContext} from "../CartContext";

function CartBox() {
    const {cart, show} = useContext(CartContext);
    const items = cart.map(i=>(
        <div className="cartItem" key={i.id}>
            <div className="image">
                <img src={"./img/" + i.image} alt={i.name}/>
            </div>
            <div>
                <div>{i.name}</div>
                <div>{i.price}</div>
                <div>{i.mrp}</div>
            </div>
        </div>
    ))
    const empty = <div className="empty">Your cart is empty</div>
    return (
        <div className={"cartBox" + (!show?' hidden':'')}>
            {items.length>0 ? items : empty}
        </div>
    )
}

export default CartBox;