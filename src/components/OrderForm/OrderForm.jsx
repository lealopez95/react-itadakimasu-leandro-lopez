import React from 'react';

const OrderForm = ({handleSubmit}) => {
    
    return <form onSubmit={handleSubmit}>
        <label for='email' >Email</label>
        <input name='email' id='name' type='email' placeholder='email@somedomain.com' required/>
        <button type='submit'>Place Order</button>
    </form>
}

export default OrderForm;