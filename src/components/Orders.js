import React, {useContext} from "react";
import {CartContext} from "../CartContext";
import OrderItem from "./OrderItem";

function Orders() {
    const {cart, totalAmount} = useContext(CartContext);
    const items = cart.map(e=> (<OrderItem ob={e} />))
    let display = <div className="empty">Your cart is empty</div>;
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
            <div className='checkoutBox'>
                <p>Total Items</p>
                <h2>{totalItems}</h2>
                <p>Total Payment</p>
                <h2>${totalPrice}</h2>
                
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