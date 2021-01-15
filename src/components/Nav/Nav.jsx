import React, {useContext, useState} from 'react';
import { ImHeart, ImCart } from 'react-icons/im';
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';

import './Nav.scss';
import NavItem from './NavItem/NavItem';


const Nav = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const {cart} = useContext(CartContext);
    
    return (
        <div className="nav">
            <div className="container">
                <div className="logo-wrapper">
                    ecommerce
                </div>
                <div className="nav-wrapper">
                    <NavItem itemName='Shop' />
                    <NavItem itemName='Contact' />
                    <NavItem iconName={<ImHeart/>} countToes='8' />
                    <div className="cart-container">
                        <NavItem iconName={<ImCart onClick={()=> setDropdownOpen(prev => !prev)} />} countToes={`${cart.reduce((a,s) => a + s.quantity,0)}`} />
                        <div className="cart-dropdown" style={{display: `${dropdownOpen?'block':'none'}`}}>
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Nav;