import React from 'react';
import GetProducts from '../../Hook/getProducts';

const OrderReview = () => {
    const [products] = GetProducts();
    return (
        <div>
            <h2>{products.length}</h2>
            <h1>OrderReview</h1>
        </div>
    );
};

export default OrderReview;