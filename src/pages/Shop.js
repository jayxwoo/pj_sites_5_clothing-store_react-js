import { useContext, useEffect } from "react";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import "../styles/pages/Shop.scss";

const Shop = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);

    useEffect(() => {
        closeMenuBtn();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="shop">
            <div className="shop-cont">
                <h1>Shop</h1>
            </div>
        </div>
    );
}

export default Shop;