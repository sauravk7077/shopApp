import React,{useContext} from "react";
import Fade from "react-reveal/Fade";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import {CartContext} from "../CartContext";

function OrderItem(props) {
    const {updateCount} = useContext(CartContext);
    const {name, price,image,id, mrp,count} = props.ob;
    console.log(props);
    return (
        <Fade big cascade>
            <div className="orderItem">
                <div className="image">
                    <img src={"./img/"+image} alt="Tomato Sauce" loading='lazy'/>
                </div>
                <div className="details">
                    <div className="name">{name}</div>
                    <div >{price + "$"}</div>
                    <div>Quantity: {count}</div>
                    <div className="incrementBox">
                        <Button
                        className="slim"
                        value={<FontAwesomeIcon icon={faPlus}/>}
                        click={_=>updateCount(id, 1)}
                        />
                        <Button className="slim" value={
                            <FontAwesomeIcon icon={faMinus}/>
                        } click={_=>updateCount(id, -1)}
                        />
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default OrderItem;