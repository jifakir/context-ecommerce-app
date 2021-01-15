import React from 'react';

import './CartItem.scss';





const CartItem = ({item}) => {
    const {imageUrl, name, price, quantity} = item;
    return (
        <div className="cart-item">
            <div className="cart-item-wrapper">
                    <div className="product-image-wrapper">
                        <img src={imageUrl} alt={`${name}-photos`} className="product-image"/>
                    </div>
                    <div className="description">
                        <p className="name">{name}</p>
                        <p className="price">{quantity} X ${price}</p>
                    </div>
            </div>
        </div>
    )
};


export default CartItem;