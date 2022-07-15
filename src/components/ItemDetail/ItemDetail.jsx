import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item, stock, initial = 1}) => {
    const { addItemToCart } = useContext(CartContext);
    const [ shouldGoToCart, setShouldGoToCart ] = useState(false);
    const [ amount, setAmount ] = useState(1);
    const [ errorMsg, setErrorMsg ] = useState('');

    const errorMsgHandler = (msg, timeout = 3000) => {
        setErrorMsg(msg);
        setTimeout(() => {
            setErrorMsg('');
        }, timeout);
    }

    const onAddHandler = () => {
        if(amount < stock) {
            setAmount(amount+1);
        } else{
            errorMsgHandler(`Could not add to cart, reached out the max stock for ${item.title}`)
        }
    }

    const onSubstractHandler = () => {
        if(amount > initial) {
            setAmount(amount-1);
        } else{
            errorMsgHandler(`The mimimun amount of "${item.title}" is ${initial}`);
        }
    }

    const onAddToCart = () => {
        addItemToCart(item, amount);
        setShouldGoToCart(true);
    }

    const renderActionButton = () => {
        if (shouldGoToCart) {
            return <Link to={`/cart`}>Proceed to checkout</Link>;
        }
        return <button onClick={onAddToCart}>Add to cart</button>
    }


    return <>
        <div className="Item-Detail-wrapper">
            <div className='Img-wrapper'>
                <img src={item.image} alt={item.title} />
            </div>
            <div className='Item-Detail'>
                <h3 className="Item-title">{item.title}</h3>
                <p className="Item-text">Description: {item.description}</p>
                <p className="Item-text">Price: ${item.price}</p>
                {!shouldGoToCart 
                    && <ItemCount 
                        onAdd={onAddHandler}
                        onSubstract={onSubstractHandler}
                        count={amount}
                         />
                }
                { !!errorMsg && <span>{errorMsg}</span> }
                {renderActionButton()}
                
            </div>
        </div>
    </>
}

export default ItemDetail;