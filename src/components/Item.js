import React from "react";


function Item(props) {
    return (
        <div className="item">
            <div className="image">
                <img src="img/cam.jpg" alt="Tomato Sauce" loading='lazy'/>
            </div>
            <div className="details">
                <div className="head">Tomato Sauce</div>
                <div >
                    <span>
                    <p>500$</p>
                    <p>(MRP - 800$)</p>
                    </span>
                </div>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default Item;