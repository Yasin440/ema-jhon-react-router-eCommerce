import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const GetCart = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const loadDbData = getStoredCart();
            const savedCart = [];
            for (const key in loadDbData) {
                const addedCart = products.find(product => product.key === key);
                if (addedCart) {
                    const quantity = loadDbData[key];
                    addedCart.quantity = quantity;
                    savedCart.push(addedCart);
                }
            }
            setCart(savedCart);
        }
    }, [products]);
    return [cart, setCart];
}
export default GetCart;