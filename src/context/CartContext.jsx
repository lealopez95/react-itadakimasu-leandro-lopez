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
            //todo: generate a context for global error msgs
            console.log(`Can't duplicate item`);
        }
    }

    const removeItemFromCart = (itemId) => {
        const itemIndex = cart.findIndex(cartItem => cartItem.id === itemId);
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
        return cart.findIndex(cartItem => cartItem.id === itemId) !== -1;
    }

    return <Provider value={{cart, addItemToCart, removeItemFromCart, clearCart}}>
        {children}
    </Provider>
}

export default CartProvider;