import "../styles/pages/Edit.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import Button from "../components/Button";
import { database, storage } from "../firebase/config";
import { headerData } from "../data/headerData";
import Header from "../components/Header";
import { AiOutlineLeft } from "react-icons/ai";
import { MenuBtnContext } from "../contexts/MenuBtnContext";

const Edit = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [gender, setGender] = useState('');
    const [quantity, setQuantity] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [mssg, setMssg] = useState('');
    const [img, setImg] = useState('');

    const fileInput = useRef();
    const genderInput = useRef();
    const types = ["image/png", "image/jpeg"];
    const history = useHistory();

    const { id } = useParams();

    // Close menu btn and scroll to top on load
    useEffect(() => {
        closeMenuBtn();
        window.scrollTo(0, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const collectionRef = database.collection('products');

        collectionRef.doc(id).get().then((doc) => {
            setTitle(doc.data().title);
            setPrice(doc.data().price);
            setGender(doc.data().gender);
            setQuantity(doc.data().quantity);
            setDesc(doc.data().desc);
            setImg(doc.data().img);
        });
    }, [id]);

    const handleFile = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setError('');
            setFile(selected);
        } else {
            setFile(null);
            setError("Please select an image file (png or jpeg) or leave it empty to use the image uploaded previously!");
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const collectionRef = database.collection('products');
        setMssg('Processing... Please wait!');

        if (file) {
            const storageRef = storage.ref(`product-imgs/${file.name}`);

            // Upload an image to firebase storage
            storageRef.put(file).on('state_changed', (snap) => {
                const p = (snap.bytesTransferred / snap.totalBytes) * 100;
                console.log(p);
            }, (err) => {
                setError(err.message);
                setMssg('');
            }, async () => {
                // Get url of the image stored on firebase storage
                const url = await storage.ref('product-imgs').child(file.name).getDownloadURL();

                // Add product to firebase firestore(database)
                collectionRef.doc(id).update({
                    title: title,
                    price: price,
                    gender: gender,
                    quantity: quantity,
                    desc: desc,
                    img: url,
                }).then(() => {
                    setTitle('');
                    setPrice('');
                    setGender('');
                    setQuantity('');
                    setDesc('');
                    setImg('');
                    setFile(null);
                    setError('');
                    setMssg('');
                    fileInput.current.value = '';
                    genderInput.current.value = '';
                    history.go(-1);
                }).catch((err) => {
                    setError(err.message);
                    setMssg('');
                });
            });
        } else {
            // Add product to firebase firestore(database)
            collectionRef.doc(id).update({
                title: title,
                price: price,
                gender: gender,
                quantity: quantity,
                desc: desc,
                img: img,
            }).then(() => {
                setTitle('');
                setPrice('');
                setGender('');
                setQuantity('');
                setDesc('');
                setImg('');
                setFile(null);
                setError('');
                fileInput.current.value = '';
                genderInput.current.value = '';
                history.go(-1);
            }).catch((err) => {
                setError(err.message);
                setMssg('');
            });
        };
    };

    return (
        <div className="edit">
            <Header data={headerData.edit} />
            <Button btnStyle="btn-outline--black" btnSize="btn--medium" className="backBtn" onClick={() => { history.go(-1) }}><AiOutlineLeft /></Button>
            <form className="form" onSubmit={handleSubmit}>
                <label className="a11y-hidden">Title</label>
                <input type="text" className="title input" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} required />

                <label className="a11y-hidden">Price</label>
                <input type="number" className="price input" placeholder="Price in NZD" value={price} onChange={(e) => { setPrice(e.target.value) }} required />

                <label className="a11y-hidden">Gender</label>
                <select className="gender input" value={gender} ref={genderInput} onChange={(e) => { setGender(e.target.value) }} required>
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
                <input type="file" className="file input" onChange={handleFile} ref={fileInput} />
                <small className="file-notice">*Previous image file will be used automatically, if no file is newly selected.</small>

                <div className={error ? "error active" : "error a11y-hidden"}>{error}</div>
                <div className={mssg ? "mssg active" : "mssg a11y-hidden"}>{mssg}</div>

                <Button btnStyle="btn-outline--black">Edit</Button>
            </form>
        </div>
    );
}

export default Edit;