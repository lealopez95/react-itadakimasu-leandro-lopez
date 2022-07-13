import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetailView from '../../views/ItemDetailView/ItemDetailView';
import SyncLoader from 'react-spinners/SyncLoader';

const ItemDetailContainer = () => {

    const stock = 5; // hardcode stock 'cause it does not come from the test API
    const { itemId } = useParams();
    const [ item, setItem ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getItem = () => {
        fetch(`https://fakestoreapi.com/products/${itemId}`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(product => {
                setItem(product)
                setIsLoading(false);
            });
    }

    useEffect(getItem, [ itemId ]);
    
    return (
        <div className='ItemDetailContainer'>
            <SyncLoader 
                color={'#fd644c'}
                loading={isLoading}
                margin={5}
            />
            {
                !isLoading
                && <ItemDetailView item={item} stock={stock} />
            }
            
        </div>
    );
};

export default ItemDetailContainer;