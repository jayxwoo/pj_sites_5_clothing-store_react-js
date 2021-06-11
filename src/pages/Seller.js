import { useContext, useEffect } from "react";
import Button from "../components/Button";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import "../styles/pages/Seller.scss";
import { AiOutlinePlus } from "react-icons/ai";
import productImg_01 from "../assets/imgs/productImgs/productImg_01.jpeg";
import productImg_02 from "../assets/imgs/productImgs/productImg_02.jpeg";
import productImg_03 from "../assets/imgs/productImgs/productImg_03.jpeg";
import productImg_04 from "../assets/imgs/productImgs/productImg_04.jpeg";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { headerData } from "../data/headerData";

const Seller = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);

    useEffect(() => {
        closeMenuBtn();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="seller">
            <Header data={headerData.seller} />
                <Link to="/add" className="addLink"><Button btnStyle="btn-outline--black" btnSize="btn--medium" className="addBtn"><AiOutlinePlus /></Button></Link>
            <div className="seller-cont">
                <ul className="product-group">
                    <li className="product-item">
                        <div className="img-cont">
                            <img className="img" src={productImg_01} alt="" />
                        </div>
                        <div className="info-cont">
                            <h2 className="title">T-shirt</h2>
                            <h3 className="price">$20</h3>
                            <p className="gender">Women</p>
                            <p className="quantity">Quantity: 50</p>
                            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias ea pariatur veniam libero corrupti doloribus mollitia porro facere modi?</p>
                            <Button btnStyle="btn-outline--black">Edit</Button>
                            <Button btnStyle="btn-outline--red">Delete</Button>
                        </div>
                    </li>
                    <li className="product-item">
                        <div className="img-cont">
                            <img className="img" src={productImg_02} alt="" />
                        </div>
                        <div className="info-cont">
                            <h2 className="title">Traning pants</h2>
                            <h3 className="price">$40</h3>
                            <p className="gender">Men</p>
                            <p className="quantity">Quantity: 30</p>
                            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias ea pariatur veniam libero corrupti doloribus mollitia porro facere modi?</p>
                            <Button btnStyle="btn-outline--black">Edit</Button>
                            <Button btnStyle="btn-outline--red">Delete</Button>
                        </div>
                    </li>
                    <li className="product-item">
                        <div className="img-cont">
                            <img className="img" src={productImg_03} alt="" />
                        </div>
                        <div className="info-cont">
                            <h2 className="title">Levis T-shirt</h2>
                            <h3 className="price">$30</h3>
                            <p className="gender">Men</p>
                            <p className="quantity">Quantity: 70</p>
                            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias ea pariatur veniam libero corrupti doloribus mollitia porro facere modi?</p>
                            <Button btnStyle="btn-outline--black">Edit</Button>
                            <Button btnStyle="btn-outline--red">Delete</Button>
                        </div>
                    </li>
                    <li className="product-item">
                        <div className="img-cont">
                            <img className="img" src={productImg_04} alt="" />
                        </div>
                        <div className="info-cont">
                            <h2 className="title">Jeans</h2>
                            <h3 className="price">$90</h3>
                            <p className="gender">Women</p>
                            <p className="quantity">Quantity: 80</p>
                            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias ea pariatur veniam libero corrupti doloribus mollitia porro facere modi?</p>
                            <Button btnStyle="btn-outline--black">Edit</Button>
                            <Button btnStyle="btn-outline--red">Delete</Button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Seller;