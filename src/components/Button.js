import "../styles/components/Button.scss";

const Button = ({ children, btnStyle, btnSize, className, onClick, type }) => {
    const STYLES = ['btn-outline--black', 'btn-outline--white', 'btn-outline--red', 'btn-outline--green', 'btn-outline-blue'];
    const SIZES = ['btn--medium', 'btn--large', 'btn--mobile'];

    const checkBtnStyle = btnStyle ? btnStyle : STYLES[0];
    const checkBtnSize = btnSize ? btnSize : SIZES[0];

    return (
        <button className={`btn ${checkBtnStyle} ${checkBtnSize} ${className}`} onClick={onClick} type={type}>{children}</button>
    );
}

export default Button;