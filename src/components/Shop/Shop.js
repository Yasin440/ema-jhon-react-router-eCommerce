import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToBD, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //get data from local Storage
    useEffect(() => {
        const loadDbData = getStoredCart();
        const savedCart = [];
        if (products.length) {
            for (const key in loadDbData) {
                const searchProductWithDbKey = products.find(product => product.key === key);
                if (searchProductWithDbKey) {
                    const quantity = loadDbData[key];
                    searchProductWithDbKey.quantity = quantity;
                    savedCart.push(searchProductWithDbKey);
                }
            }
            setCart(savedCart);
        }
    }, [products]);

    // const addToCartHandle = product => {
    //     let newCart = [...cart, product];
    //     setCart(newCart);
    //     addToBD(product.key);
    // }
    const addToCartHandle = product => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            product.quantity += 1;
            newCart = [...rest, product];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToBD(product.key);
    }

    return (
        <div className="shop">
            <div className="products">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        addToCartHandle={addToCartHandle}
                    ></Product>)
                }
            </div>
            <div className="cartWizard">
                <div className='cartHolder'>
                    <Cart cart={cart}>
                        <Link to="/order-review">
                            <button type='button'><span>Review Your Order</span></button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};
export default Shop;