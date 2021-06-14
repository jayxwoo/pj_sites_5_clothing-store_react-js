import { useContext, useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import "../styles/pages/Add.scss";
import { storage, database, timestamp } from "../firebase/config";
import Header from "../components/Header";
import { headerData } from "../data/headerData";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MenuBtnContext } from "../contexts/MenuBtnContext";

const Add = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [gender, setGender] = useState('');
    const [quantity, setQuantity] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [mssg, setMssg] = useState('');
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const fileInput = useRef();
    const genderInput = useRef();
    const types = ["image/png", "image/jpeg"];

    // Close menu btn and scroll to top on load
    useEffect(() => {
        closeMenuBtn();
        window.scrollTo(0, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handle file
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

    // Handle form submit event
    const handleSubmit = (e) => {
        e.preventDefault();

        if (file) {
            const storageRef = storage.ref(`product-imgs/${file.name}`);
            const collectionRef = database.collection('products');

            // Upload an image to firebase storage
            storageRef.put(file).on('state_changed', (snap) => {
                setUploading(true);
                const p = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(p);
            }, (err) => {
                setError(err.message);
                setUploading(false);
            }, async () => {
                // Get url of the image stored on firebase storage
                const url = await storage.ref('product-imgs').child(file.name).getDownloadURL();

                // Add product to firebase firestore(database)
                collectionRef.add({
                    title: title,
                    price: price,
                    gender: gender,
                    quantity: quantity,
                    desc: desc,
                    img: url,
                    createdAt: timestamp(),
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
                    }, 2000);
                    setUploading(false);
                    setProgress(0);
                }).catch((err) => {
                    setError(err.message);
                    setUploading(false);
                });
            });
        } else {
            alert("Please select an image file (png or jpeg)!");
        };
    };

    return (
        <div className="add">
            <Header data={headerData.add} />
            {!mssg && <Link to="/seller" className="backLink"><Button btnStyle="btn-outline--black" btnSize="btn--medium" className="backBtn"><AiOutlineLeft /></Button></Link>}
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
                <div className={uploading ? "progress-cont active" : "progress-cont a11y-hidden"}>
                    <p className="text">Uploading..</p>
                    <div className="progress-bar" style={{width: `${progress}%`}}></div>
                </div>

                <Button btnStyle="btn-outline--black">Add</Button>
            </form>
        </div>
    );
}

export default Add;