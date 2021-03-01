import React, {useContext, useEffect, useState} from 'react';
import { ImHeart, ImCart } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';

import './Nav.scss';
import NavItem from './NavItem/NavItem';


const Nav = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const {cart} = useContext(CartContext);
    const history = useHistory();
    
    const dropDownHandler = () => {
        setDropdownOpen(prev => !prev);
    };

    return (
        <div className="nav">
            <div className="container">
                <div className="logo-wrapper" onClick={()=> history.push('/')}>
                    ecommerce
                </div>
                <div className="nav-wrapper">
                    <div className="items-wrapper">
                        <NavItem itemName='Shop' />
                        <NavItem itemName='Contact' />
                        <NavItem iconName={<ImHeart/>} countToes='8' />
                    </div>
                    <div className="cart-container">
                        <NavItem iconName={<ImCart onClick={dropDownHandler} />} countToes={`${cart.length > 0 ? cart.reduce((a,s) => a + s.quantity,0): 0}`} />
                        <div className="cart-dropdown" style={{display: `${dropdownOpen?'block':'none'}`}}>
                            <Cart clicked={dropDownHandler} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Nav;