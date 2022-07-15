import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return <div className='cart-wrapper'>
        <button className='cart-button'>
            <FontAwesomeIcon 
                icon={faCartShopping}
                color='white'
                size='2x' />
        </button>
        <p>{cart.length}</p>
    </div>
}
    
;

export default CartWidget;