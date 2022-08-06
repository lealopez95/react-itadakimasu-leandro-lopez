import React, { useContext, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartView from '../../views/CartView/CartView';
import SyncLoader from 'react-spinners/SyncLoader';
import { db } from "../../firebase/firebase";
import { doc, writeBatch, serverTimestamp, increment, collection } from 'firebase/firestore';


const CartContainer = () => {
    const { cart, removeItemFromCart, calcTotal, clearCart } = useContext(CartContext);
    const [ isLoading, setIsLoading ] = useState(false);

    const navigate = useNavigate();

    const placeOrder = async formData  => {
            setIsLoading(true);
            const {email, dni, fullname } = formData;
            const batch = writeBatch(db);
            const userRef = doc(db, "users", dni);
            batch.set(userRef, {email, fullname, dni});

            const order = {
                items: [],
                total: calcTotal(),
                userId: dni,
                created: serverTimestamp()
            }
            for (const item of cart) {
                const productRef = doc(db, 'products', item.id);
                batch.update(productRef, { stock: increment(item.qty*-1) });
                order.items.push({
                    id: item.id,
                    title: item.title,
                    qty: item.qty,
                    unitPrice: item.price
                });
            }

            const orderRef = doc(collection(db, "orders"));
            batch.set(orderRef, order);
            await batch.commit();
            clearCart();
            navigate(`/orders/${orderRef.id}`);
            
    }
    return <>
        <SyncLoader 
                color={'#fd644c'}
                loading={isLoading}
                margin={5}
        />
        {
            !isLoading
            && <CartView items={cart} onDeleteItem={removeItemFromCart} calcTotal={calcTotal} onSubmit={placeOrder} />
        }
    </>
}

export default CartContainer;