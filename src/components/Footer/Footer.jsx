import React, { useState } from 'react';
import {
    FaHeart, 
    FaPaypal, 
    FaCcMastercard, 
    FaCcVisa, 
    FaBitcoin, 
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterest } from 'react-icons/fa';
import './Footer.scss';





const Footer = () => {
    const [state, setState] = useState('');
    const [subscribe, setSubscribed] = useState('Subscribe');
    const onChangeHandler = (e) => {
        const value = e.target.value;
        if(!value){setSubscribed('Subscribe')};
        setState(value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const match = /\w+@\w/g;
        if(!state.match(match)) return;
        if(!state) return;
        setSubscribed('Subscribed');
    }
    return (
        <div className="footer">
            <div className="container">
                <div className="news-letter-subscribing-div">
                    <div className="joining-description">
                        <h2 className="newsletter-header">Join Our Newsletter Now</h2>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                    </div>
                    <div className="subscribing-box">
                        <form onSubmit={onSubmitHandler} className="subscribing-wrapper">
                            <input onChange={onChangeHandler} value={state} type="email" placeholder='Enter Your Email' name="input-box" id="email" className="input-box"/>
                            <button className="submit-btn">
                                {subscribe}
                            </button>
                        </form>
                    </div>
                    <div className="social-media-wrapper">
                        <div className="social-media"><FaFacebookF/></div>
                        <div className="social-media"><FaInstagram/></div>
                        <div className="social-media"><FaTwitter/></div>
                        <div className="social-media"><FaPinterest/></div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="left">
                        <p>&copy; Copyright 2021 All rights reserved | This template is made with <i className='love-icon'><FaHeart/></i> by jifakir.</p>
                    </div>
                    <div className="right">
                        <p>
                            <i className='payment-icon'>Accepted:</i> 
                            <i className='payment-icon'><FaPaypal/></i>
                            <i className='payment-icon'><FaCcMastercard/></i>
                            <i className='payment-icon'><FaCcVisa/></i>
                            <i className='payment-icon'><FaBitcoin/></i>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Footer;