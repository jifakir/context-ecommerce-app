import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {MdRemoveShoppingCart} from 'react-icons/md';
import { CartContext } from '../../context/CartContext';

import './Cart.scss';
import CartItem from './CartItem/CartItem';




const Cart = () => {
    
    const history = useHistory();
    const {cart} = useContext(CartContext);

    return (
        <div className="cart" >
            <div className="cart-wrapper">
                <div className="cart-items-wrapper">
                    {
                        cart.length <= 0 ? <h4 className="empty-cart"><MdRemoveShoppingCart/> Cart is Empty.</h4> : cart.map(item => <CartItem key={item.id} item={item} />)
                    }
                </div>
                <div style={{display: `${cart.length <= 0 ? 'none' : 'block'}`}} className="checkout-btn" onClick={() => history.push('/checkout')}>
                    Checkout
                </div>
            </div>
        </div>
    )
};


export default Cart;