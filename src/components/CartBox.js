import React,{useContext, useEffect, useRef} from "react";
import {CartContext} from "../CartContext";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTimes} from '@fortawesome/free-solid-svg-icons'

function CartBox() {
    const {cart, show, updateCount, toggleShow} = useContext(CartContext);
    const cartBox = useRef();
    const handleClick = (e)=>{
        if(!cartBox.current.contains(e.target) && show){
            toggleShow()
        }
    }
    
    useEffect(()=>{
        document.addEventListener("mousedown", handleClick);  // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
    })
    const items = cart.map(i=>(
        <div className="cartItem" key={i.id}>
            <div className="image">
                <img src={"./shopApp/img/" + i.image} alt={i.name}/>
            </div>
            <div>
                <div className="name">{i.name}</div>
                <div>Price - ${i.price}</div>
                <div>Quantity: {i.count}</div>
                <div className="incrementBox">
                        <Button
                        className="slim"
                        value={<FontAwesomeIcon icon={faPlus}/>}
                        click={_=>updateCount(i.id, 1)}
                        />
                        <Button className="slim" value={
                            <FontAwesomeIcon icon={faMinus}/>
                        } click={_=>updateCount(i.id, -1)}
                        />
                </div>
                
            </div>
        </div>
    ));
    const empty = <div className="empty">Your cart is empty.</div>
    return (
        <div ref={cartBox} className={"cartBox" + (!show?' hidden':'')} tabIndex="1">
            <div className="cartTop">
                <h3>Cart</h3>
            </div>
            {items.length>0 ? items.concat(<a href="./orders"><Button value={"Buy"}/></a>) : empty}
            <Button className="close subtle" click={toggleShow} value={<FontAwesomeIcon icon={faTimes}/>}/>
            
        </div>
    )
}

export default CartBox;