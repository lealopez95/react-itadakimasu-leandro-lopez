import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';

const CartWidget = () => (
    <div className="cart-wrapper">
        <button className="cart-button">
            <FontAwesomeIcon 
                icon={faCartShopping}
                color="white"
                size="2x" />
        </button>
        <p>0</p>
    </div>
);

export default CartWidget;