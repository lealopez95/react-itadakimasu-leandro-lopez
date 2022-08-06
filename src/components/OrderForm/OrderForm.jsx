import React from 'react';
import './OrderForm.css'

const OrderForm = ({onSubmit}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const fullname = e.target.elements.fullname.value;
        const dni = e.target.elements.dni.value;
        onSubmit({email, fullname, dni});
    }
    
    return <>
        <h2>Client Info</h2>
        <form onSubmit={handleSubmit} className={'Order-form'}>
            <div className='Order-form-input-group'>
                <label htmlFor='email' >Email</label>
                <input name='email' id='name' type='email' placeholder='email@somedomain.com' required/>
            </div>
            <div className='Order-form-input-group'>
                <label htmlFor='fullname' >Fullname</label>
                <input name='fullname' id='fullname' type='text' placeholder='fullname' required/>
            </div>
            <div className='Order-form-input-group'>
                <label htmlFor='dni' >DNI</label>
                <input name='dni' id='dni' type='text' placeholder='11.222.333' required/>
            </div>
            <button type='submit'>Place Order</button>
        </form>
    </>
}

export default OrderForm;