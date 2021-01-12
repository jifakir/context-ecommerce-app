import React from 'react';

import './Cart.scss';
import CartItem from './CartItem/CartItem';




const Cart = () => {

    return (
        <div className="cart">
            <div className="cart-wrapper">
                <div className="cart-items-wrapper">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className="checkout-btn">
                    Checkout
                </div>
            </div>
        </div>
    )
};


export default Cart;