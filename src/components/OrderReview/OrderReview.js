import React from 'react';
import { useHistory } from 'react-router';
import GetCart from '../../Hook/getCart';
import GetProducts from '../../Hook/getProducts';
import { clearCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = GetProducts();
    const [cart, setCart] = GetCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const history = useHistory();
    const orderPlaced = () => {
        history.push('/order-placed');
        setCart([]);
        clearCart();

    }
    return (
        <div className="shop">
            <div className="products">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cartWizard">
                <div className='cartHolder'>
                    <Cart cart={cart}>
                        <button
                            onClick={orderPlaced}
                            type='button'>
                            <span>Place Order</span></button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;