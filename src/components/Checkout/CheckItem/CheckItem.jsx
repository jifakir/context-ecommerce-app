import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { CartContext } from '../../../context/CartContext';
import './CheckItem.scss';




const CheckItem = ({item }) => {
        const {id, imageUrl, name, price, quantity} = item;
        const {addItem, removeItem, deleteItem} = useContext(CartContext);
    return (
        <div className="checkout-item">
            <div className="item-container">
                <div className="item-left">
                    <div className="image-wrapper">
                        <img src={imageUrl} alt={name}/>
                    </div>
                    <div className="product-name">
                        <p className="name">{name}</p>
                    </div>
                </div>
                <div className="item-right">
                    <div className="item">
                        <p className="price-wrapper">
                            ${price}
                        </p>
                    </div>
                    <div className="item quantity-wrapper">
                        <button className="btn-minus" onClick={() => removeItem(id)}>-</button>
                        <input readOnly type="number" value={quantity} name="quantity" id="quantity" className='quantity'/>
                        <button className="btn-plus" onClick={() => addItem(item)}>+</button>
                    </div>
                    <div className="item last-item">
                        <p className="total-wrapper">
                            ${price*quantity}
                        </p>
                        <div className="delete-icon">
                            <MdDelete onClick={()=> deleteItem(id)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default CheckItem;