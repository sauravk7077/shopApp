import React,{useContext} from "react";
import Fade from "react-reveal/Fade";
import Button from "./Button";
import {CartContext} from "../CartContext";

function Item(props) {
    const cartContext = useContext(CartContext);
    const {name, price,image,id, mrp} = props;
    const currentItem = cartContext.findItem(cartContext.cart,id);
    return (
        <Fade big cascade>
            <div className="item">
                <div className="image">
                    <img src={"./img/"+image} alt="Tomato Sauce" loading='lazy'/>
                </div>
                <div className="details">
                <div className="head">{name}</div>
                    <div >
                        <span>
                            <p>{price + "$"}</p>
                            <p>(MRP - {mrp + "$"})</p>
                        </span>
                    </div>
                    <Button value={currentItem ? 'Add One More' : 'Buy'} click={_=>cartContext.addToCart(props)}/>
                </div>
            </div>
        </Fade>
    )
}

export default Item;