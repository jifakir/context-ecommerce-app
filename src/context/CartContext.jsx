import React, { useEffect, createContext, useReducer } from 'react';

import cartReducer from './CartReducer';
import data from '../data';


export const CartContext = createContext();

const CartProvider = ({children}) => {


    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const localData = localStorage.getItem('contextCart');
        return localData ? JSON.parse(localData) : [];
    });

    const addItem = product => {
        dispatch({type: "ADD_ITEM", product})
    };

    const removeItem = productId => {
        dispatch({type: "REMOVE_ITEM", productId})
    }
    const deleteItem = productId => {
        dispatch({type: "DELETE_ITEM", productId})
    }
    // Storing the cart into the localStorage
    useEffect(()=> {
        localStorage.setItem('contextCart', JSON.stringify(cart))
    },[cart]);
    
    return (
        <CartContext.Provider value={{
            products: data,
            cart: cart,
            addItem,
            removeItem,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
};


export default CartProvider;
