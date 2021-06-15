import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalNum, setTotalNum] = useState(0);

    return (
        <CartContext.Provider value={{ cartItems, totalNum }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;