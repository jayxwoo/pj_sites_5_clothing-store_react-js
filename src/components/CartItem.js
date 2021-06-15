import "../styles/components/CartItem.scss";
import Button from "./Button";

const CartItem = ({ cartItem, deleteFromCart }) => {
    return (
        // <li className="cart-item">
        //     <img className="img" src={cartItem.img} alt="#" />
        //     <div className="cont">
        //         <h3 className="title">{cartItem.title}</h3>
        //         <p className="price-quantity">${cartItem.price} x {cartItem.userQ}</p>
        //         <Button btnStyle="btn-outline--red" onClick={() => { deleteFromCart(cartItem) }}>Delete</Button>
        //     </div>
        // </li>

        <li className="cart-item">
            <div className="img-cont">
                <img className="img" src={cartItem.img} alt="" />
            </div>
            <div className="info-cont">
                <h2 className="title">{cartItem.title}</h2>
                <h3 className="price">${cartItem.price}</h3>
                <p className="gender">({cartItem.gender})</p>
                <p className="price-quantity">${cartItem.price} x {cartItem.userQ}</p>
                <Button btnStyle="btn-outline--red" onClick={() => { deleteFromCart(cartItem) }}>Delete</Button>
            </div>
        </li>
    );
}

export default CartItem;