import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({items}) => {
    
    const onAdd = itemName => {
        console.log(`Agregaste ${itemName}`);
    }
    const onSubstract = itemName => {
        console.log(`Sacaste ${itemName}`);
    }
    
    return (
        <div className="itemListContainer">
            {
                items.map( item => 
                    <ItemCount 
                        key={item.id}
                        initial={1}
                        name={item.name}  
                        stock={item.stock}
                        onAdd={onAdd}
                        onSubstract={onSubstract}
                    />
                )
            }
        </div>
    );
};

export default ItemListContainer;