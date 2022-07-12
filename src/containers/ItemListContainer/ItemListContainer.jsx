import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from "../../components/ItemList/ItemList";
import SyncLoader from "react-spinners/SyncLoader"

const ItemListContainer = () => {
    const { categoryName } = useParams();
    const [ items, setItems ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        let url = 'https://fakestoreapi.com/products/';
        if ( categoryName!== 'all') {
            url += `category/${categoryName}`;
        }
        fetch(url, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(products => {
                setItems(products)
                setIsLoading(false);
            });
    }, [ categoryName ]);
    
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