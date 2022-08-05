import CartDetail from '../../components/CartDetail/CartDetail';
import { Link } from 'react-router-dom';
import OrderForm from '../../components/OrderForm/OrderForm'
import React from 'react';


const CartView = ({items = [], onDeleteItem, calcTotal, handleSubmit}) => {
    const cartIsNotEmpty = items.length !== 0;

    const renderCheckoutView = () => {
        return <>
            <CartDetail items={items} onDeleteItem={onDeleteItem} calcTotal={calcTotal} />
            <OrderForm handleSubmit={handleSubmit} />
        </>
    }

    return <>
        <h1> {cartIsNotEmpty ? 'Cart Items' : 'There are no items in cart'} </h1>
        {
        ( cartIsNotEmpty && renderCheckoutView() )
            || <Link to="/">See products</Link>
        }
        
    </>
}

export default CartView;