import { useState } from "react";
import Button from "../components/Button";
import "../styles/pages/Add.scss";

const Add = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [gender, setGender] = useState('');
    const [quantity, setQuantity] = useState('');
    const [desc, setDesc] = useState('');
    // const [product, setProduct] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(title, price, gender, quantity, desc);
    };

    return (
        <div className="add">
            <form className="form" onSubmit={handleSubmit}>
                <label className="a11y-hidden">Title</label>
                <input type="text" className="title" placeholder="title" value={title} onChange={(e) => {setTitle(e.target.value)}} required />
                <label className="a11y-hidden">Price</label>
                <input type="text" className="title" placeholder="price in NZD" value={price} onChange={(e) => {setPrice(e.target.value)}} required />
                <label className="a11y-hidden">Gender</label>
                <select name="gender" id="gender" value={gender} onChange={(e) => {setGender(e.target.value)}} required>
                    <option value="women">women</option>
                    <option value="men">men</option>
                    <option value="unisex">unisex</option>
                </select>
                <label className="a11y-hidden">Quantity</label>
                <input type="number" className="quantity" placeholder="quantity" value={quantity} onChange={(e) => {setQuantity(e.target.value)}} required />
                <label className="a11y-hidden">Description</label>
                <textarea className="description" value={desc} onChange={(e) => {setDesc(e.target.value)}} required></textarea>
                <Button>Add</Button>
            </form>
        </div>
    );
}
 
export default Add;