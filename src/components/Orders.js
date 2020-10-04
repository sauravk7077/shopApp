import React, {useContext} from "react";
import {CartContext} from "../CartContext";
import OrderItem from "./OrderItem";

function Orders() {
    const {cart} = useContext(CartContext);
    const items = cart.map(e=> (<OrderItem ob={e} />))
    return (
        <section>
            <h2>Your Orders</h2>
            <div>
                {items}
            </div>
        </section>
    )
}

export default Orders;