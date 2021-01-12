import React from 'react';
import { MdDelete } from 'react-icons/md';
import './CheckItem.scss';




const CheckItem = ({productName, price, total }) => {

    return (
        <div className="checkout-item">
            <div className="item-container">
                <div className="item-left">
                    <div className="image-wrapper">
                        <img src="//#endregion" alt={productName}/>
                    </div>
                    <div className="product-name">
                        <p className="name">Name</p>
                    </div>
                </div>
                <div className="item-right">
                    <div className="item">
                        <p className="price-wrapper">
                            {price}
                        </p>
                    </div>
                    <div className="item quantity-wrapper">
                        <button className="btn-minus">-</button>
                        <input type="number" name="quantity" id="quantity" className='quantity'/>
                        <button className="btn-plus">+</button>
                    </div>
                    <div className="item last-item">
                        <p className="total-wrapper">
                            ${total}
                        </p>
                        <div className="delete-icon">
                            <MdDelete />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default CheckItem;