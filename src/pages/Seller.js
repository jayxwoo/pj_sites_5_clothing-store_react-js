import "../styles/pages/Seller.scss";
import { useContext, useEffect } from "react";
import Button from "../components/Button";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { headerData } from "../data/headerData";
import ProductItem from "../components/ProductItem";
import useFirestore from "../hooks/useFirestore";

const Seller = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);
    const { products } = useFirestore('products');

    // Close menu btn and scroll to top on load
    useEffect(() => {
        closeMenuBtn();
        window.scrollTo(0, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="seller">
            <Header data={headerData.seller} />
            <Link to="/add" className="addLink"><Button btnStyle="btn-outline--black" btnSize="btn--medium" className="addBtn"><AiOutlinePlus /></Button></Link>
            <div className="seller-cont">
                <ul className="product-group">
                    {products.map((product) => {
                        return (<ProductItem data={product} key={product.id} />);
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Seller;