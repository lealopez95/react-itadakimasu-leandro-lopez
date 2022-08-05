import CartItem from '../CartItem/CartItem.jsx';
import React from 'react';
import { Link } from 'react-router-dom';


const CartDetail = ({items = [], onDeleteItem, calcTotal}) => {
    return <>
        {items.map( item => <CartItem key={item.id} item={item} showAsList={true} onDeleteItem={onDeleteItem} />)}
        <p>Total: {items.length > 0 && calcTotal()}</p>
    </>;
}

export default CartDetail;