import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './CartItem.css'

const CartItem = ({item, showAsList = false, onDeleteItem}) => {

    const onDeleteHandler = () => {
        onDeleteItem(item.id)
    }

    const liStyle = showAsList ? 'Cart-Item-card--list' : '';
    return (
        <li className={`Cart-Item-card-wrapper`}>
            <div className={`Cart-Item-card ${liStyle}`}>
                <img className='Cart-Item-image'src={item.image} alt={item.title} />
                <h3 className='Cart-Item-title'>{item.title}</h3>
                <p className='Cart-Item-text'>${item.price}</p>
                <p className='Cart-Item-text'>x {item.qty}</p>
                <button className='Cart-Item-button' onClick={onDeleteHandler}>
                    <FontAwesomeIcon 
                        icon={faTrashCan}
                        color='black'
                        size='2x' />
                </button>
                <Link to={`/item/${item.id}`}>View Details</Link>
            </div>
        </li>
    )
}

export default CartItem;