import React, { createContext, useReducer } from 'react';

import cartReducer from './CartReducer';
import data from '../data';


export const CartContext = createContext();

const CartProvider = ({children}) => {


    const [cartState, dispatch] = useReducer(cartReducer, {cart: []});

    const addItem = product => {
        dispatch({type: "ADD_ITEM", product})
    };

    const removeItem = productId => {
        dispatch({type: "REMOVE_ITEM", productId})
    }

    return (
        <CartContext.Provider value={{
            products: data,
            cart: cartState.cart,
            addItem,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
};


export default CartProvider;
