import { useContext, useEffect, useRef } from "react";
import "../styles/pages/Cart.scss";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import Header from "../components/Header";
import { headerData } from "../data/headerData";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);
    const { cartItems, totalQ, totalP, deleteFromCart } = useContext(CartContext);
    
    const cartInfo = useRef();

    // Close menu btn and scroll to top on load
    useEffect(() => {
        closeMenuBtn();
        window.scrollTo(0, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (totalQ === 0) {
            cartInfo.current.style.margin = "1rem auto 0 auto";
        } else {
            cartInfo.current.style.margin = "1rem 0 0 auto";
        }
    }, [totalQ])

    return (
        <div className="cart">
            <Header data={headerData.cart} />
            <div className="cart-cont">
                <ul className="cart-group">
                    {cartItems.map((cartItem) => {
                        return (
                            <CartItem className="cart-item" cartItem={cartItem} deleteFromCart={deleteFromCart} key={cartItem.id}></CartItem>
                        );
                    })}
                </ul>
                <div className="cart-info" ref={cartInfo}>
                    <p className="total-quantity total"><span>Total Quantity </span>{totalQ}</p>
                    <p className="total-price total"><span>Total Price </span>${totalP}</p>
                </div>
            </div>
        </div>
    );
}

export default Cart;