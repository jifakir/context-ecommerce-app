import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import './Cart.scss';
import CartItem from './CartItem/CartItem';




const Cart = () => {

    const {cart} = useContext(CartContext);

    return (
        <div className="cart">
            <div className="cart-wrapper">
                <div className="cart-items-wrapper">
                    {
                        cart.length <= 0 ? <h4>!Cart is Empty.</h4> : cart.map(item => <CartItem key={item.id} item={item} />)
                    }
                </div>
                <div className="checkout-btn">
                    Checkout
                </div>
            </div>
        </div>
    )
};


export default Cart;