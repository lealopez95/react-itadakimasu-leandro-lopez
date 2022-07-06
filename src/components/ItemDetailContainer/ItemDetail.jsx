import React from "react";
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    return (
        <div className="Item-Detail">
            <img className="Item-image" src={item.image} alt={item.name} />
            <h3 className="Item-title">{item.name}</h3>
            <p className="Item-text">Descripción: {item.description}</p>
            <p className="Item-text">Precio: ${item.price}</p>
            <p className="Item-text">Cateoría: {item.categoryName}</p>
            <p className="Item-text">Stock: {item.stock}</p>
        </div>
    )
};

export default ItemDetail;
