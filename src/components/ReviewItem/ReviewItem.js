import React from 'react';

const ReviewItem = (props) => {
    const { img, quantity, name, seller, price, stock, key } = props.product;
    const { handleRemove } = props;
    return (
        <div>
            <div className='product'>
                <div className="productImg">
                    <img src={img} alt="img" />
                </div>
                <div className="productDetails">
                    <h2>{name}</h2>
                    <div>
                        <div className="prices">
                            <p>by: {seller}</p>
                            <p>Quantity: {quantity}</p>
                            <h3>$ {price}</h3>
                            <p>only {stock} left in stock - order soon</p>
                            <button
                                onClick={() => handleRemove(key)}
                            ><span>Remove From cart</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;