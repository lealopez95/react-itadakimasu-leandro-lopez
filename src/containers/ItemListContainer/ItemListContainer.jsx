import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from "../../components/ItemList/ItemList";
import SyncLoader from "react-spinners/SyncLoader"
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
    const { categoryName } = useParams();
    const [ items, setItems ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        const db = getFirestore();
        let itemsCollection = collection(db, 'products');
        if (categoryName) {
            itemsCollection = query(itemsCollection, where("category", "==", categoryName));
        }
        getDocs(itemsCollection).then( snapshot => {
            let products = [];
            if(snapshot.size > 0) {
                products = snapshot.docs.map( doc => ({
                        id: doc.id,
                        ...doc.data()
                    })
                );
            }
            setItems(products);
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