import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import SyncLoader from "react-spinners/SyncLoader";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getItem = () => {
        setTimeout(async () => {
            const productResponse = await fetch(
                'data/mockProduct.json',
                {
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            if(productResponse.status === 200) {
                const product = await productResponse.json();                
                setItem(product);
                setIsLoading(false);
            }
        }, 2000);
    }

    useEffect(getItem, []);
    
    return (
        <div className="ItemDetailContainer">
            <SyncLoader 
                color={"#fd644c"}
                loading={isLoading}
                margin={5}
            />
            {
                !isLoading
                && <ItemDetail item={item} />
            }
            
        </div>
    );
};

export default ItemDetailContainer;