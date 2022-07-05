import React from "react";
import './Item.css';

const Item = ({ item }) => {
    return (
        <li className="Item-box">
            <img className="Item-image" src={item.image} alt={item.name} />
            <h3 className="Item-title">{item.name}</h3>
            <p className="Item-text">{item.description}</p>
            <p className="Item-text">${item.price}</p>
            <button>Ver detalles</button>
        </li>
    )
};

export default Item;
