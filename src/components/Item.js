import React,{useContext, useState} from "react";
import Alert from "./Alert";
import Fade from "react-reveal/Fade";
import Button from "./Button";
import {CartContext} from "../CartContext";
import {AlertContext} from "../AlertContext";

function Item(props) {
    const cartContext = useContext(CartContext);
    const alertContext = useContext(AlertContext);
    const {name, price,image,id, mrp} = props;
    const currentItem = cartContext.findItem(cartContext.cart,id);
    return (
        <Fade big>
            <div className="item">
                <div className="image">
                    <img src={"/shopApp/img/"+image} alt="Tomato Sauce" loading='lazy'/>
                </div>
                <div className="details">
                <div className="name">{name}</div>
                    <div >
                        <span>
                            <p>{price + "$"}</p>
                            <p> (MRP - {mrp + "$"}) </p>
                        </span>
                    </div>
                    <Button value={currentItem ? "Add More" : 'Add To Cart'} 
                      click={e=>{
                          cartContext.addToCart(props);
                          alertContext.setDetails("Success", `You have successfully added ${name} to your cart`)
                          alertContext.toggleAlert();
                        }}/>
                </div>
            </div>
        </Fade>
    )
}

export default Item;