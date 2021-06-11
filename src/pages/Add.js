import { useRef, useState } from "react";
import Button from "../components/Button";
import "../styles/pages/Add.scss";
import { storage, database } from "../firebase/config";
import Header from "../components/Header";
import { headerData } from "../data/headerData";
import { useHistory } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

const Add = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [gender, setGender] = useState('');
    const [quantity, setQuantity] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [mssg, setMssg] = useState('');

    const fileInput = useRef();
    const genderInput = useRef();
    const types = ["image/png", "image/jpeg"];
    const history = useHistory();

    const handleFile = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setError('');
            setFile(selected);
        } else {
            setFile(null);
            setError("Please select an image file (png or jpeg)!");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (file) {
            const storageRef = storage.ref(`product-imgs/${file.name}`);

            storageRef.put(file).on('state_changed', (snap) => {
                const progress = (snap.bytesTransferred / snap.totalBytes) * 100;
                console.log(progress);
            }, (err) => {
                setError(err.message);
            }, () => {
                storage.ref('product-imgs').child(file.name).getDownloadURL().then((url) => {
                    database.collection('product').add({
                        title: title,
                        price: price,
                        gender: gender,
                        quantity: quantity,
                        desc: desc,
                        img: url,
                        createdAt: new Date(),
                    }).then(() => {
                        setTitle('');
                        setPrice('');
                        setGender('');
                        setQuantity('');
                        setDesc('');
                        setFile(null);
                        setError('');
                        fileInput.current.value = '';
                        genderInput.current.value = '';
                        setMssg('Your product has been uploaded successfully!');
                        setTimeout(() => {
                            setMssg('');
                        }, 3000);
                    }).catch((err) => {
                        setError(err.message);
                    });
                });
            });
        } else {
            alert("Please select an image file (png or jpeg)!");
        };
    };
    
    const handleBackBtn = () => {
        history.go(-1);
    };

    return (
        <div className="add">
            <Header data={headerData.add} />
            <Button btnStyle="btn-outline--black" btnSize="btn--medium" className="backBtn" onClick={handleBackBtn}><AiOutlineLeft /></Button>
            <form className="form" onSubmit={handleSubmit}>
                <label className="a11y-hidden">Title</label>
                <input type="text" className="title input" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} required />

                <label className="a11y-hidden">Price</label>
                <input type="number" className="price input" placeholder="Price in NZD" value={price} onChange={(e) => { setPrice(e.target.value) }} required />

                <label className="a11y-hidden">Gender</label>
                <select className="gender input" defaultValue="" ref={genderInput} onChange={(e) => { setGender(e.target.value) }} required>
                    <option value="" disabled>Select Gender..</option>
                    <option value="women">women</option>
                    <option value="men">men</option>
                    <option value="unisex">unisex</option>
                </select>

                <label className="a11y-hidden">Quantity</label>
                <input type="number" className="quantity input" placeholder="Quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} required />

                <label className="a11y-hidden">Description</label>
                <textarea className="desc input" placeholder="Description" value={desc} onChange={(e) => { setDesc(e.target.value) }} required></textarea>

                <label className="a11y-hidden">File</label>
                <input type="file" className="file input" onChange={handleFile} ref={fileInput} required />
                <div className={error ? "error active" : "error a11y-hidden"}>{error}</div>
                <div className={mssg ? "mssg active" : "mssg a11y-hidden"}>{mssg}</div>

                <Button btnStyle="btn-outline--black">Add</Button>
            </form>
        </div>
    );
}

export default Add;