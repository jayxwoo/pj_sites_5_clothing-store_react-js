import "../styles/components/ShopItem.scss";
import Button from "./Button";

const ShopItem = ({ data }) => {
    return (
        <li className="shop-item">
            <div className="img-cont">
                <img className="img" src={data.img} alt="" />
            </div>
            <div className="info-cont">
                <h2 className="title">{data.title}</h2>
                <h3 className="price">{data.price}</h3>
                <p className="gender">{data.gender}</p>
                <p className="quantity">{`Quantity: ${data.quantity}`}</p>
                <p className="desc">{data.desc}</p>
                <Button btnStyle="btn-outline--blue">Add to Cart</Button>
            </div>
        </li>
    );
}

export default ShopItem;