import React,{useContext} from "react";
import Fade from "react-reveal/Fade";
import Button from "./Button";
import {CartContext} from "../CartContext";

function Item(props) {
    const cartContext = useContext(CartContext);
    const {name, price,image, mrp} = props;
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
                    <Button value={'Buy'} click={_=>cartContext.addToCart(props)}/>
                </div>
            </div>
        </Fade>
    )
}

export default Item;