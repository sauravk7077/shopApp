import React,{useContext} from "react";
import Fade from "react-reveal/Fade";
import Button from "./Button";
import {CartContext} from "../CartContext";

function OrderItem(props) {
    const cartContext = useContext(CartContext);
    const {name, price,image,id, mrp} = props.ob;
    console.log(props);
    return (
        <Fade big cascade>
            <div className="orderItem">
                <div className="image">
                    <img src={"./img/"+image} alt="Tomato Sauce" loading='lazy'/>
                </div>
                <div className="details">
                <div className="head">{name}</div>
                    <div >
                            <p>{price + "$"}</p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default OrderItem;