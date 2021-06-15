import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalQ, setTotalQ] = useState(0);
    const [totalP, setTotalP] = useState(0);

    const addToCart = (item) => {
        const checkSameItem = cartItems.find((cartItem) => {
            return cartItem.id === item.id;
        });

        if (checkSameItem) {
            alert("This item is already in your cart!")
        } else {
            setCartItems([...cartItems, item]);
            setTotalQ(totalQ + item.userQ);
            setTotalP(totalP + (item.price * item.userQ));
            console.log('item added to cart');
        };
    };

    const deleteFromCart = (item) => {
        const itemToDelete = cartItems.find((cartItem) => {
            return cartItem.id === item.id;
        });

        if (itemToDelete.userQ > 1) {
            itemToDelete.userQ -= 1;
            setTotalQ(totalQ - 1);
            setTotalP(totalP - item.price);
            console.log("item deleted from cart");
        } else {
            const update = cartItems.filter((cartItem) => {
                return cartItem.id !== item.id;
            });

            setCartItems(update);
            setTotalQ(totalQ - 1);
            setTotalP(totalP - item.price);
            console.log("item deleted from cart");
        };
    };

    return (
        <CartContext.Provider value={{ cartItems, totalQ, totalP, addToCart, deleteFromCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;