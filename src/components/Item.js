import React,{useContext, useState} from "react";
import Alert from "./Alert";
import Fade from "react-reveal/Fade";
import Button from "./Button";
import {CartContext} from "../CartContext";

function Item(props) {
    const cartContext = useContext(CartContext);
    const {name, price,image,id, mrp} = props;
    const currentItem = cartContext.findItem(cartContext.cart,id);
    const [show, setShow] = useState(false);
    const toggleShow = ()=>{
        setShow(!show);
    }
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
                    <Button value={currentItem ? "Add More" : 'Add To Cart'} click={_=>{cartContext.addToCart(props); toggleShow();}}/>
                    <Alert
                        title="Success"
                        className={!show ? 'hidden': ''}
                        click={toggleShow}
                        description="You have sucessfully added the items to the cart."
                    />
                </div>
            </div>
        </Fade>
    )
}

export default Item;