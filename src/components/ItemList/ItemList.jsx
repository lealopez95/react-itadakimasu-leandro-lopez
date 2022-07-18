import React from "react";
import './ItemList.css';
import Item from "../Item/Item";


const ItemList = ({ items, category }) => {

    return <ul className="ItemList">
        {
            !!category && <p>{category}</p>
        }
        {
            items.map(item => 
                <Item key={item.id} item={item} />
            )
        }
    </ul>;



};

export default ItemList;