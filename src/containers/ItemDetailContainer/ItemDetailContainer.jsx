import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import SyncLoader from "react-spinners/SyncLoader";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [ item, setItem ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getItem = () => {
        console.log("ItemDetailContainer")
        setTimeout(async () => {
            const productResponse = await fetch(
                '/data/products.json',
                {
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            if(productResponse.status === 200) {
                const product = await productResponse.json();
                setItem(product.find(item => parseInt(item.id) === parseInt(itemId)));
                setIsLoading(false);
            }
        }, 2000);
    }

    useEffect(getItem, [ itemId ]);
    
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