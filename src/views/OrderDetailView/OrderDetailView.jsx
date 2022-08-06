import React from 'react';

const OrderDetailView = ({order, user}) => {
    console.dir(order);

    return <>
        <h1>Order Details</h1>
        <h2>#{order.id}</h2>
        <h3>Items:</h3>
        <ul>
            {order.items.map( item => <li>{item.title}: ${item.unitPrice} x {item.qty}</li>)}
        </ul>
        <p>total: ${order.total}</p>
        <h3>Client: {user.fullname}</h3>
        <p>email: {user.email}</p>
        <p>dni: {user.dni}</p>

    </>
}

export default OrderDetailView;