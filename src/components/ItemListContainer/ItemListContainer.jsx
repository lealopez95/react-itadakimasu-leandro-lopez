import React, { useState, useEffect } from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import SyncLoader from "react-spinners/SyncLoader"

const ItemListContainer = () => {

    const [ items, setItems ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setTimeout(async () => {
            const productsResponse = await fetch(
                'data/products.json', 
                {
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            if(productsResponse.status === 200) {
                const products = await productsResponse.json();                
                setItems(products);
                setIsLoading(false);
            }
        }, 2000);
    }, []);
    
    return (
        <div className="itemListContainer">
            <SyncLoader 
                color={"#fd644c"}
                loading={isLoading}
                margin={5}
            />
            {
                !isLoading
                && <ItemList items={items} />
            }
            
        </div>
    );
};

export default ItemListContainer;