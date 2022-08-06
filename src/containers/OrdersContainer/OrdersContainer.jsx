import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import OrderDetailView from '../../views/OrderDetailView/OrderDetailView.jsx';
import SyncLoader from 'react-spinners/SyncLoader';
import { db } from "../../firebase/firebase";

const OrdersContainer = () => {
    const { orderId } = useParams();
    const [ order, setOrder ] = useState([]);
    const [ user, setUser ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getOrder = () => {
        const orderRef = doc(db, 'orders', orderId);
        getDoc(orderRef).then( snapshot => {
            if(snapshot.exists()) {
                setOrder({
                    id: snapshot.id,
                    ...snapshot.data()
                });
                const userRef = doc(db, 'users', order.userId);
                getDoc(userRef).then( snapshot => {
                    if(snapshot.exists()) {
                        setUser({
                            id: snapshot.id,
                            ...snapshot.data()
                        });
                        setIsLoading(false);
                    }
                });
            }
        });
    }

    useEffect(getOrder);

    return <>
        <SyncLoader 
                color={'#fd644c'}
                loading={isLoading}
                margin={5}
        />
        {
            !isLoading
            && <OrderDetailView order={order} user={user} />
        }
    </>
}

export default OrdersContainer;