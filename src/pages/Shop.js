import "../styles/pages/Shop.scss";
import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import { headerData } from "../data/headerData";
import ShopItem from "../components/ShopItem";
import useFirestore from "../hooks/useFirestore";

const Shop = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);
    const { products } = useFirestore('products');

    // Close menu btn and scroll to top on load
    useEffect(() => {
        closeMenuBtn();
        window.scrollTo(0, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="shop">
            <Header data={headerData.shop} />
            <div className="shop-cont">
                <ul className="product-group">
                    {products.map((product) => {
                        return (<ShopItem data={product} key={product.id} />);
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Shop;