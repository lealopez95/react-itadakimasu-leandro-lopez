import React, { useState } from "react";
import './ItemCount.css';


const ItemCount = ({ stock, initial, onAdd, onSubstract, name }) => {
    const [ count, setCount ] = useState(initial);
    const onAddHandler = () => {
        if(count < stock) {
            setCount(count+1)
            onAdd(name)
        } else{
            console.log(`Alcanzó el limite de stock, no se puede seguir agregando ${name}`);
        }
    }

    const onSubstractHandler = () => {
        if(count > initial) {
            setCount(count-1)
            onSubstract(name)
        } else{
            console.log(`El minimo de items de ${name} es ${initial}`);
        }
    }

    return (
        <div className="itemCount-wrapper">
            <p className="itemCount-name">{name}</p>
            <button onClick={onSubstractHandler}>-</button>
            <input className="itemCount-counter" type="number" value={count} readOnly={true} />
            <button onClick={onAddHandler}>+</button>
        </div>
    )
};

export default ItemCount;