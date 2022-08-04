import React from 'react';
import CartItem from '../CartItem/CartItem.jsx';


const CartDetail = ({items = [], onDeleteItem}) => {
    const calcTotal = () => {
        return items.reduce( (acum, item) => {
            return acum += (item.price * item.qty);
        }, 0);
    }
    return <>
        {items.map( item => <CartItem key={item.id} item={item} showAsList={true} onDeleteItem={onDeleteItem} />)}
        <p>Total: {items.length > 0 && calcTotal()}</p>
        
    </>;
}

export default CartDetail;