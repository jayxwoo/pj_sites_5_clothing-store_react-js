import { useContext, useEffect } from "react";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import "../styles/pages/Seller.scss";

const Seller = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);

    useEffect(() => {
        closeMenuBtn();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="seller">
            <div className="seller-cont">
                <h1>Seller</h1>
            </div>
        </div>
    );
}

export default Seller;