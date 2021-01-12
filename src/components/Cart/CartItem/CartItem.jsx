import React from 'react';

import './CartItem.scss';





const CartItem = ({name, price, quantity, total}) => {

    return (
        <div className="cart-item">
            <div className="cart-item-wrapper">
                    <div className="product-image-wrapper">
                        <img src='https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60' alt={`${name} photos`} className="product-image"/>
                    </div>
                    <div className="description">
                        <p className="name">{name}T-Shirt</p>
                        <p className="price">{price}3 X {quantity}$150</p>
                    </div>
            </div>
        </div>
    )
};


export default CartItem;