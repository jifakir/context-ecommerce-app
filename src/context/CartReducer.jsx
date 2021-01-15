import React from 'react';



const addItemToCart = (product, state) => {
    const cartItems = [...state.cart];
    const cartItemIndex = cartItems.findIndex(item => item.id === product.id);
    if(cartItemIndex<0){
        cartItems.push({...product, quantity: 1})
    }else{
        const updatedItem = {...cartItems[cartItemIndex]}
        updatedItem.quantity++;
        cartItems[cartItemIndex] = updatedItem;
    };

    return {...state, cart: cartItems};
    
}
const removeItemFromCart = (productId, state) => {

    const cartItems = [...state.cart];
    const cartItemIndex = cartItems.findIndex(item => item.id === productId);

    const updatedItem = {...cartItems[cartItemIndex]}
        updatedItem.quantity--;

    if(updatedItem.quantity <= 0){
        cartItems.splice(cartItemIndex,1);
    }else{
        cartItems[cartItemIndex] = updatedItem;
    };

    return {...state, cart: cartItems};
    
}







const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM":
            return addItemToCart(action.product, state);
        case "REMOVE_ITEM":
            return removeItemFromCart(action.product, state);
        default :
            return state;
    }
};


export default cartReducer;