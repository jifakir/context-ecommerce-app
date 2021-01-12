import React, {useState} from 'react';
import { ImHeart, ImCart } from 'react-icons/im';
import Cart from '../Cart/Cart';

import './Nav.scss';
import NavItem from './NavItem/NavItem';


const Nav = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    console.log(dropdownOpen);
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
                        <NavItem iconName={<ImCart onClick={()=> setDropdownOpen(prev => !prev)} />} countToes='5' />
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