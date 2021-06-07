import Logo from "./Logo";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/components/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-cont">
                <Logo />
                <small className="copyrights">Copyrights © 2021</small>
                <ul className="icon-group">
                    <li className="icon-item">
                        <Link to="#" className="icon-link"><FaInstagram className="icon" /></Link>
                    </li>
                    <li className="icon-item">
                        <Link to="#" className="icon-link"><FaYoutube className="icon" /></Link>
                    </li>
                    <li className="icon-item">
                        <Link to="#" className="icon-link"><FaFacebook className="icon" /></Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;