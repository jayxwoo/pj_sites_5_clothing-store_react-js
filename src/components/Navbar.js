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

    return (
        <div className="navbar">
            <div className="navbar-cont">
                <Logo />
                <nav className={menuBtn ? "nav active" : "nav"}>
                    <NavLink className="link" exact to="/">Home</NavLink>
                    <NavLink className="link" to="/shop">Shop</NavLink>
                    <NavLink className="link" to="/sellers">Sellers</NavLink>
                    <Button btnStyle={mobile ? "btn-outline--white" : "btn-outline--black"} btnSize={mobile ? "btn--mobile" : "btn--medium"}><Link className="btnLink" to="/signup">Cart</Link></Button>
                </nav>
                <button className={mobile ? "menuBtn active" : "menuBtn"}>
                    {menuBtn ? (<MdClose className="menuIcon" onClick={closeMenuBtn} />) : (<MdMenu className="menuIcon" onClick={openMenuBtn} />)}
                </button>
            </div>
        </div>
    );
}

export default Navbar;