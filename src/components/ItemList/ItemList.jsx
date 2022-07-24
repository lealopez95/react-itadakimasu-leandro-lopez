import React from "react";
import './ItemList.css';
import Item from "../Item/Item";


const ItemList = ({ items, category }) => {
    return <ul className="ItemList">
        {
            !!category && <p>{category}</p>
        }
        {
            (items.length > 0 && items.map(item => 
                <Item key={item.id} item={item} />
            )) || <li>No Products</li>
        }
    </ul>;



};

export default ItemList;