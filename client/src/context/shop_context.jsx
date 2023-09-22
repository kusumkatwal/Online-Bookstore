import React, {createContext, useState} from "react";
import {product} from '../components/product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i=1; i<product.length + 1; i++)
    {
        cart[i]= 0;
    }
    return cart;
};

export const ShopContextProvider= (props) =>
{
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addTocart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1 }))
    };
    // when addTocart is called with an itemId, 
    //it will update the cartItems state by incrementing the quantity of the item with the given itemId by 1.
    const removeFromcart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1 }))
    };

    const contextValue = {cartItems, addTocart, removeFromcart};

    console.log(cartItems);
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}; 