import React from 'react';
import { Link } from 'react-router-dom';
import CartDetail from '../../components/CartDetail/CartDetail';


const CartView = ({items = [], onDeleteItem}) => {
    const cartIsNotEmpty = items.length !== 0;

    return <>
        <h1> {cartIsNotEmpty ? 'Cart Items' : 'There are no items in cart'} </h1>
        {
        ( cartIsNotEmpty && <CartDetail items={items} onDeleteItem={onDeleteItem} /> )
            || <Link to="/">See products</Link>
        }
        
    </>
}

export default CartView;