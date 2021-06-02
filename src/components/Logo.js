import { Link } from "react-router-dom";
import "../styles/components/Logo.scss";

const Logo = () => {
    return (
        <Link to="/" className="logo">Clothing Store</Link>
    );
}
 
export default Logo;