import { useContext } from "react";
import { MobileContext } from "../contexts/MobileContext";
import Logo from "./Logo";
import "../styles/components/Navbar.scss";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import { MdMenu, MdClose } from "react-icons/md";
import { MenuBtnContext } from "../contexts/MenuBtnContext";

const Navbar = () => {
    const { mobile } = useContext(MobileContext);
    const { menuBtn, closeMenuBtn, openMenuBtn } = useContext(MenuBtnContext);

    window.addEventListener('resize', () => {
        if (!mobile) {
            closeMenuBtn();
        };
    });

    if (menuBtn) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }

    return (
        <div className="navbar">
            <div className="navbar-cont">
                <Logo />
                <nav className={menuBtn ? "nav active" : "nav"}>
                    <NavLink className="link" exact to="/">Home</NavLink>
                    <NavLink className="link" to="/shop">Shop</NavLink>
                    <NavLink className="link" to="/seller">Seller</NavLink>
                    <Link className="btnLink" to="/cart"><Button btnStyle={mobile ? "btn-outline--white" : "btn-outline--black"} btnSize={mobile ? "btn--mobile" : "btn--medium"}>Cart ()</Button></Link>
                </nav>
                <button className={mobile ? "menuBtn active" : "menuBtn"}>
                    {menuBtn ? (<MdClose className="menuIcon" onClick={closeMenuBtn} />) : (<MdMenu className="menuIcon" onClick={openMenuBtn} />)}
                </button>
            </div>
        </div>
    );
}

export default Navbar;