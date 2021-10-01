import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, stock, price } = props.product
    return (
        <div className='product'>
            <div className="productImg">
                <img src={img} alt="img" />
            </div>
            <div className="productDetails">
                <h2>{name}</h2>
                <div>
                    <div className="prices">
                        <p>by: {seller}</p>
                        <h3>$ {price}</h3>
                        <p>only {stock} left in stock - order soon</p>
                        <button
                            onClick={() => props.addToCartHandle(props.product)}
                        ><img src="./shopping-cart-solid.svg" alt="" /><span>add to cart</span></button>
                    </div>
                    <div className="review"></div>
                </div>
            </div>
        </div>
    );
};
export default Product;