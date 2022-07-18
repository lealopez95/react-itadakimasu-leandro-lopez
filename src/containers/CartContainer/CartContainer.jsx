import React, { useContext }  from 'react';
import CartView from '../../views/CartView/CartView';
import { CartContext } from '../../context/CartContext';


const CartContainer = () => {
    const { cart, removeItemFromCart } = useContext(CartContext);
    return <>
        <CartView items={cart} onDeleteItem={removeItemFromCart} />
    </>
}

export default CartContainer;