import { useContext, useEffect } from "react";
import "../styles/pages/Cart.scss";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import Header from "../components/Header";
import { headerData } from "../data/headerData";

const Cart = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);

    // Close menu btn and scroll to top on load
    useEffect(() => {
        closeMenuBtn();
        window.scrollTo(0, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="cart">
            <Header data={headerData.cart} />
            <div className="cart-cont">
            </div>
        </div>
    );
}

export default Cart;