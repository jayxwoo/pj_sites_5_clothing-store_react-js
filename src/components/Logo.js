import { Link } from "react-router-dom";
import "../styles/components/Logo.scss";

const Logo = ({className}) => {
    return (
        <Link to="/" className={`logo ${className}`}>Clothing Store</Link>
    );
}

export default Logo;