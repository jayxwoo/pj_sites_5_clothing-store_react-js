import { useContext, useEffect } from "react";
import "../styles/pages/Cart.scss";
import { MenuBtnContext } from "../contexts/MenuBtnContext";

const Cart = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);

    useEffect(() => {
        closeMenuBtn();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="cart">
            <div className="cart-cont">
                <h1>Cart</h1>
            </div>
        </div>
    );
}

export default Cart;