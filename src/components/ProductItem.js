import { database } from "../firebase/config";
import "../styles/components/ProductItem.scss";
import Button from "./Button";

const ProductItem = ({ data }) => {
    const handleDelete = (id) => {
        console.log(id);
        if (window.confirm("Do you want to delete this product?")) {
            const collectionRef = database.collection('products');

            collectionRef.doc(id).delete().then(() => {
                console.log('product deleted');
            }).catch((err) => {
                console.log(err.message);
            });
        };
    };

    return (
        <li className="product-item">
            <div className="img-cont">
                <img className="img" src={data.img} alt="" />
            </div>
            <div className="info-cont">
                <h2 className="title">{data.title}</h2>
                <h3 className="price">{data.price}</h3>
                <p className="gender">{data.gender}</p>
                <p className="quantity">{`Quantity: ${data.quantity}`}</p>
                <p className="desc">{data.desc}</p>
                <Button btnStyle="btn-outline--black">Edit</Button>
                <Button btnStyle="btn-outline--red" onClick={(e) => { handleDelete(data.id) }}>Delete</Button>
            </div>
        </li>
    );
}

export default ProductItem;