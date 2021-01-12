import React from 'react';
import {ImCart, ImHeart, ImLoop} from 'react-icons/im';
import './Product.scss';



const Product = ({source, name, price}) => {


    return (
        <div className="product-wrapper">
            <div className="product">
                <div className="product-image-wrapper">
                    <img src='https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60' alt={`${name} photos`} className="product-image"/>
                    <div className="product-icons">
                        <i className="icon"><ImHeart/></i>
                        <i className="icon"><ImLoop/></i>
                        <i className="icon"><ImCart/></i>
                    </div>
                </div>
                <div className="description">
                    <p className="name">{name} T-Shirt</p>
                    <h4 className="price">{price}$150.00</h4>
                </div>
            </div>
        </div>
    )
}

export default Product;