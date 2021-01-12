import React from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';

import './Home.scss';



const Home = () => {

    return (
        <div className="home">
            <Header />
            <div className="container">
                <h1 className="home-heading">Featured</h1>
                <div className="filtering-section">
                    <div className="filtering-wrapper">
                        <p className="filter active">Hats</p>
                        <p className="filter">Maflat</p>
                        <p className="filter">Tar</p>
                        <p className="filter">React</p>
                        <p className="filter">All</p>
                    </div>
                </div>
                <div className="products-container">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
};

export default Home;