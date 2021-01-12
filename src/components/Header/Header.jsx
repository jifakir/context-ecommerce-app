import React from 'react';

import './Header.scss';



const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <div className="image-wrapper">
                    <img src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                    alt='Header Image' className="header-image"/>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <h4 className="pre-heading">
                            fully fresh
                        </h4>
                        <h1 className="heading">
                            Clothes <br/>
                            100% Cotton
                        </h1>
                        <p className="sub-heading">
                            Free Pickup and Delivery Available
                        </p>
                        <button className='btn'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Header;