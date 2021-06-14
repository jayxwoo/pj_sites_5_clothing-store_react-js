import { useState } from "react";
import "../styles/components/ShopItem.scss";
import Button from "./Button";

const ShopItem = ({ data }) => {
    const [userQ, setUserQ] = useState(0);

    const handleMinusQ = () => {
        if (userQ > 0) {
            setUserQ(userQ - 1);
        } else {
            setUserQ(0);
        };
    };

    const handlePlusQ = () => {
        if (userQ < data.quantity) {
            setUserQ(userQ + 1);
        };
    };

    return (
        <li className="shop-item">
            <div className="img-cont">
                <img className="img" src={data.img} alt="" />
            </div>
            <div className="info-cont">
                <h2 className="title">{data.title}</h2>
                <h3 className="price">${data.price}</h3>
                <p className="gender">({data.gender})</p>
                <p className="desc">{data.desc}</p>
                <div className="quantity-input-cont">
                    <button className="minus-btn q-btn" onClick={handleMinusQ}>-</button>
                    <p className="user-q">{userQ}</p>
                    <button className="plus-btn q-btn" onClick={handlePlusQ}>+</button>
                </div>
                <Button btnStyle="btn-outline--blue">Add to Cart</Button>
            </div>
        </li>
    );
}

export default ShopItem;