import React from 'react';

import './NavItem.scss';



const NavItem = ({itemName, iconName, countToes}) => {

    return (
        <div className="nav-item">
            {
            itemName?<span className='item-name'>{itemName}</span>:
            iconName?<i className='icon'>{iconName} <span className='toes' >{countToes}</span> </i>:''
            }
        </div>
    )
};


export default NavItem;