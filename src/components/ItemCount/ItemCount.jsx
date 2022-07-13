import React from "react";
import './ItemCount.css';


const ItemCount = ({ onAdd, onSubstract, count }) => {
    return (
        <div className="itemCount-wrapper">
            <button onClick={onSubstract}>-</button>
            <input className="itemCount-counter" type="number" value={count} readOnly={true} />
            <button onClick={onAdd}>+</button>
        </div>
    )
};

export default ItemCount;