import React, { useContext } from 'react';
import {ImCart, ImHeart, ImLoop} from 'react-icons/im';
import { CartContext } from '../../context/CartContext';
import './Product.scss';



const Product = ({item}) => {

    const {imageUrl, name, price} = item;
    const {addItem} = useContext(CartContext);
    return (
        <div className="product-wrapper">
            <div className="product">
                <div className="product-image-wrapper">
                    <img src={imageUrl} alt={`${name}-photos`} className="product-image"/>
                    <div className="product-icons">
                        <i className="icon"><ImHeart/></i>
                        <i className="icon"><ImLoop/></i>
                        <i className="icon" onClick={()=> addItem(item)}><ImCart/></i>
                    </div>
                </div>
                <div className="description">
                    <p className="name">{name}</p>
                    <h4 className="price">${price}</h4>
                </div>
            </div>
        </div>
    )
}

export default Product;