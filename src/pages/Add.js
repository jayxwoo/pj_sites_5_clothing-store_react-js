import "../styles/pages/Add.scss";

const Add = () => {
    return (
        <div className="addForm-cont">
            <form className="form">
                <label className="a11y-hidden">Title</label>
                <input type="text" className="title" placeholder="title" required />
                <label className="a11y-hidden">Price</label>
                <input type="text" className="title" placeholder="price in NZD" required />
                <label className="a11y-hidden">Gender</label>
                <select name="gender" id="gender" required>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Unisex">Unisex</option>
                </select>
                <label className="a11y-hidden">Quantity</label>
                <input type="number" />
                <label className="a11y-hidden"></label>
            </form>
        </div>
    );
}
 
export default Add;