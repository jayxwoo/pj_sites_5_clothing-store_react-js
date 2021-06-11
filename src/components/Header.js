import "../styles/components/Header.scss"

const Header = ({data}) => {
    return (
        <header className="header">
            <img className="img" src={data.img} alt="" />
            <h1 className="title">{data.title}</h1>
        </header>
    );
}
 
export default Header;