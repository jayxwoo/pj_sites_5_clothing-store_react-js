import { Link, useHistory } from "react-router-dom";
import { database } from "../firebase/config";
import "../styles/components/ProductItem.scss";
import Button from "./Button";

const ProductItem = ({ data }) => {
    const history = useHistory();

    const handleDelete = () => {
        if (window.confirm("Do you want to delete this product?")) {
            const collectionRef = database.collection('products');

            collectionRef.doc(data.id).delete().then(() => {
                history.go(0);
                console.log('product deleted!');
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
                <h3 className="price">${data.price}</h3>
                <p className="quantity">{`Quantity: ${data.quantity}`}</p>
                <p className="gender">({data.gender})</p>
                <p className="desc">{data.desc}</p>
                <Link to={`/edit/${data.id}`}><Button btnStyle="btn-outline--black">Edit</Button></Link>
                <Button btnStyle="btn-outline--red" onClick={handleDelete}>Delete</Button>
            </div>
        </li>
    );
}

export default ProductItem;