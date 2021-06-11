import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import { headerData } from "../data/headerData";
import "../styles/pages/Shop.scss";

const Shop = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);

    useEffect(() => {
        closeMenuBtn();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="shop">
            <Header data={headerData.shop} />
            <div className="shop-cont">
            </div>
        </div>
    );
}

export default Shop;