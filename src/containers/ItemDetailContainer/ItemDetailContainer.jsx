import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetailView from '../../views/ItemDetailView/ItemDetailView';
import SyncLoader from 'react-spinners/SyncLoader';
import { getFirestore, getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [ item, setItem ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getItem = () => {
        const db = getFirestore();
        const productRef = doc(db, 'products', itemId);
        getDoc(productRef).then( snapshot => {
            if(snapshot.exists()) {
                setItem({
                    id: snapshot.id,
                    ...snapshot.data()
                });
                setIsLoading(false);
            }
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
                && <ItemDetailView item={item} />
            }
            
        </div>
    );
};

export default ItemDetailContainer;