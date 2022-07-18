import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const calcTotalQty = () => {
        return cart.reduce( (acum, item) => {
            return acum += item.qty;
        }, 0);
    }

    return <div className='cart-wrapper'>
        <button className='cart-button'>
            <Link to='/cart'>
                <FontAwesomeIcon 
                    icon={faCartShopping}
                    color='white'
                    size='2x' />
            </Link>
        </button>
        {cart.length!==0 && <p>{calcTotalQty()}</p>}
    </div>
}
    
;

export default CartWidget;