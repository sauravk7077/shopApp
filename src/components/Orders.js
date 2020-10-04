import React, {useContext} from "react";
import {CartContext} from "../CartContext";
import OrderItem from "./OrderItem";

function Orders() {
    const {cart, totalAmount} = useContext(CartContext);
    const items = cart.map(e=> (<OrderItem ob={e} />))
    let display = <>Your cart is empty</>;
    if(items.length>0){
    const totalPrice = cart.reduce((a,b)=>a+ b.price* b.count, 0);
    const totalItems = cart.reduce((a,b)=> a + b.count, 0);
    display = 
        <>
            <h2>Your Orders</h2>
            <div className="ordersPage">
            <div className="ordersContainer">
                {items}
            </div>
            <div>
                <h2>Total Items</h2>
                <p>{totalItems}</p>
                <h2>Total</h2>
                <p>${totalPrice}</p>
                
            </div>
            </div>
        </>;
    }
    return (
        <section>
            {display}
        </section>
    )
}

export default Orders;