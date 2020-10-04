import React,{useContext} from "react";
import {CartContext} from "../CartContext";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

function CartBox() {
    const {cart, show, removeFromCart, updateCount, toggleShow} = useContext(CartContext);
    const items = cart.map(i=>(
        <div className="cartItem" key={i.id}>
            <div className="image">
                <img src={"./img/" + i.image} alt={i.name}/>
            </div>
            <div>
                <div className="name">{i.name}</div>
                <div>{i.price}</div>
                <div>{i.mrp}</div>
                <div>Quantity: {i.count}</div>
                <div className="incrementBox">
                    <Button
                     className="slim"
                     value={<FontAwesomeIcon icon={faPlusSquare}/>}
                     click={_=>updateCount(i.id, 1)}
                    />
                    <Button className="slim" value={
                        <FontAwesomeIcon icon={faMinusSquare}/>
                    } click={_=>updateCount(i.id, -1)}
                    />
                </div>
                
            </div>
        </div>
    ));
    const empty = <div className="empty">Your cart is empty</div>
    return (
        <div className={"cartBox" + (!show?' hidden':'')} tabIndex="1" onBlur={e=>{console.log('hey there')}}>
            {items.length>0 ? items : empty}
        </div>
    )
}

export default CartBox;