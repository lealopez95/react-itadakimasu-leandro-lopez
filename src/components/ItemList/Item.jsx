import React from "react";
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    return (
        <li className="Item-card-wrapper">
            <div className="Item-card">
                <img className="Item-image"src={item.image} alt={item.title} />
                <h3 className="Item-title">{item.title}</h3>
                <p className="Item-text">${item.price}</p>
                <Link to={`/item/${item.id}`}>View Details</Link>
            </div>
        </li>
    )
};

export default Item;
