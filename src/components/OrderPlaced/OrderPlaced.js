import React from 'react';
import img from '../../images/giphy.gif';
const OrderPlaced = () => {
    return (
        <div style={{
            textAlign:'center',
        }}>
            <h1 style={{color:'tomato'}}>Congratulations...!</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default OrderPlaced;