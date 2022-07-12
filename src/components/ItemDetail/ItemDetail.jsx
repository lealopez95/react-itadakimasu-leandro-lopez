import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    return <>
        <div className="Item-Detail-wrapper">
            <div className='Img-wrapper'>
                <img src={item.image} alt={item.title} />
            </div>
            <div className='Item-Detail'>
                <h3 className="Item-title">{item.title}</h3>
                <p className="Item-text">Description: {item.description}</p>
                <p className="Item-text">Price: ${item.price}</p>
            </div>
        </div>
    </>
}

export default ItemDetail;