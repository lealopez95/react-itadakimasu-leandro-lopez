import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from "../../components/ItemList/ItemList";
import SyncLoader from "react-spinners/SyncLoader"
import CategoryFilters from "../../components/CategoryFilters/CategoryFilters";

const ItemListContainer = () => {
    const { categoryName } = useParams();
    const [ items, setItems ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(async () => {
            const categoriesResponse = await fetch(
                '/data/categories.json', 
                {
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            if(categoriesResponse.status === 200) {
                let categories = await categoriesResponse.json();
                setCategories(categories);
            }

            const productsResponse = await fetch(
                '/data/products.json', 
                {
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            if(productsResponse.status === 200) {
                let products = await productsResponse.json();
                if(categoryName) {
                    products = products.filter( item => item.categoryName.toUpperCase() === categoryName.toUpperCase())
                }
                setItems(products);
                setIsLoading(false);
            }
        }, 2000);
    }, [ categoryName ]);
    
    return (
        <div className="itemListContainer">
            {
                categories.length > 0
                && <CategoryFilters categories={categories} />
            }
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