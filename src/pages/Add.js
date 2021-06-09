import { useState } from "react";
import Button from "../components/Button";
import "../styles/pages/Add.scss";

const Add = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [gender, setGender] = useState('');
    const [quantity, setQuantity] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState();
    // const [product, setProduct] = useState({});

    const handleSubmit = (e) => {
        console.log(title, price, gender, quantity, desc);
        e.preventDefault();
    };

    return (
        <div className="add">
            <form className="form" onSubmit={handleSubmit}>
                <label className="a11y-hidden">Title</label>
                <input type="text" className="title" placeholder="title" value={title} onChange={(e) => { setTitle(e.target.value) }} required />
                <label className="a11y-hidden">Price</label>
                <input type="number" className="title" placeholder="price in NZD" value={price} onChange={(e) => { setPrice(e.target.value) }} required />
                <label className="a11y-hidden">Gender</label>
                <select className="gender" defaultValue="" onChange={(e) => { setGender(e.target.value) }} required>
                    <option value="" disabled>Select Gender..</option>
                    <option value="women">women</option>
                    <option value="men">men</option>
                    <option value="unisex">unisex</option>
                </select>
                <label className="a11y-hidden">Quantity</label>
                <input type="number" className="quantity" placeholder="quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} required />
                <label className="a11y-hidden">Description</label>
                <textarea className="description" value={desc} onChange={(e) => { setDesc(e.target.value) }} required></textarea>
                <label className="a11y-hidden">Image</label>
                <input type="file" className="img" value={img} onChange={(e) => { setImg(e.target.value) }} required />
                <Button>Add</Button>
            </form>
        </div>
    );
}

export default Add;