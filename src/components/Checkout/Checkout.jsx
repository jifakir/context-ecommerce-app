import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckItem from './CheckItem/CheckItem';

import './Checkout.scss';


const Checkout = () => {

    const {cart} = useContext(CartContext);

    return (
        <div className="check-out">
            <div className="checkout-container">
                <div className="checkout-heading">
                    <h1>Checkout</h1>
                </div>
                <div className="product-lists">
                    <div className="list-title-wrapper">
                        <div className="list-header">
                            <div className="list-left">
                                <p>Products</p>
                            </div>
                            <div className="list-right">
                                <p className='left-item'>Price</p>
                                <p className='left-item'>Quantity</p>
                                <p className='left-item'>Total</p>
                            </div>
                        </div>
                        {
                            cart.map((item, index) => <CheckItem item={item} />)
                        }
                    </div>
                </div>
                <div className="sub-total">
                    <div className="cart-subtotal">
                        <p className="cart-total">
                            Total:  ${cart.reduce((a,s) => a + (s.price*s.quantity),0)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Checkout;