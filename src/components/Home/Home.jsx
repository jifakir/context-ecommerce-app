import React, { useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import data from '../../data';
import './Home.scss';


const Home = () => {
    const [filter, setFilter] = useState('all');

    
    const filterHanlder = (e) => {
        const value = e.target.textContent;
        setFilter(value.toLowerCase());
    };

    const products = data.map(items => items.title.toLowerCase() === filter ? items.items : null ).filter(a => a);


    return (
        <div className="home">
            <Header />
            <div className="container">
                <h1 className="home-heading"><span className="featured-title">Featured</span></h1>
                <div className="filtering-section">
                    <div className="filtering-wrapper">
                        <p className={filter==="all"?"filter active":"filter"} onClick={filterHanlder}>All</p>
                        {
                            data.map((item, index) => <p key={index} className={item.title.toLowerCase() === filter?"filter active":"filter"} onClick={filterHanlder}>{item.title}</p>)
                        }
                    </div>
                </div>
                <div className="products-container">
                   {    
                        filter === 'all' ?
                       data.map(items => items.items.map((item,index)=> <Product item={item} key={index}/>)):
                       products[0].map((item, index) =>  <Product item={item} key={index}/>)
                       
                   }
                </div>
            </div>
        </div>
    )
};

export default Home;