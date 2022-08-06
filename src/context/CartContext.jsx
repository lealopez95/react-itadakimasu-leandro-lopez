import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);
const { Provider } = CartContext;

const CartProvider = ({ defaultValue, children }) => {
    const [ cart, setCart ] = useState(defaultValue);

    const addItemToCart = (item, qty) => {
        if(!isItemInCart(item.id)) {
            setCart([
                ...cart,
                {
                    ...item,
                    qty,
                }
            ]);
        } else {
            const itemIndex = getItemIndex(item.id);
            if((cart[itemIndex].qty + qty) <= cart[itemIndex].stock) {
                const aux = [...cart];
                aux[itemIndex].qty += qty;
                setCart(aux);
            } else {
                console.log("Cant add item")
            }
        }
    }

    const removeItemFromCart = (itemId) => {
        const itemIndex = getItemIndex(itemId);
        if(itemIndex !== -1) {
            const aux = [...cart];
            const [ removedItem ] = aux.splice(itemIndex, 1);
            console.log(`removed "${removedItem.title}" from cart`);
            setCart(aux);
            
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const isItemInCart = (itemId) => {
        return getItemIndex(itemId) !== -1;
    }

    const calcTotal = () => {
        return cart.reduce( (acum, item) => {
            return acum += (item.price * item.qty);
        }, 0);
    }

    const getItemIndex = itemId => cart.findIndex(cartItem => cartItem.id === itemId);

    return <Provider value={{cart, addItemToCart, removeItemFromCart, clearCart, calcTotal}}>
        {children}
    </Provider>
}

export default CartProvider;