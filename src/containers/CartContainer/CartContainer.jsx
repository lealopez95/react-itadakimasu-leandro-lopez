import React, { useContext }  from 'react';
import { CartContext } from '../../context/CartContext';
import CartView from '../../views/CartView/CartView';
import { db } from "../../firebase/firebase";


const CartContainer = () => {
    const { cart, removeItemFromCart, calcTotal } = useContext(CartContext);

    const handleSubmit = event  => {
        event.preventDefault();
        //continua aca para place order
    }
    return <>
        <CartView items={cart} onDeleteItem={removeItemFromCart} calcTotal={calcTotal} handleSubmit={handleSubmit} />
    </>
}

export default CartContainer;