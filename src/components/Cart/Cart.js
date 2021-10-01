import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        quantity = quantity + product.quantity;
    }
    const shipping = total * .05;
    const beforeTax = total + shipping;
    const tax = (total + shipping) * .1;
    const gTotal = (total + shipping + tax);
    return (
        <div className='cart'>
            <div className="cartTitle">
                <h2>Order Summary</h2>
                <p>Item Ordered: <span>{quantity}</span></p>
            </div>
            <div className="cartCal">
                <div className="cartCalItem"><p>Total:</p><p>${total.toFixed(2)}</p></div><hr />
                <div className="cartCalItem"><p>Shipping:</p><p>${shipping.toFixed(2)}</p></div><hr />
                <div className="cartCalItem"><p>Total Before Tax:</p><p>${beforeTax.toFixed(2)}</p></div><hr />
                <div className="cartCalItem"><p>Tax:</p><p>${tax.toFixed(2)}</p></div><hr className='lastHr' />
                <div className="cartCalItem"><p>Grand Total:</p><p>${gTotal.toFixed(2)}</p></div>
            </div>
            <button type='button'><span>Review Your Order</span></button>
        </div>
    );
};
export default Cart;
