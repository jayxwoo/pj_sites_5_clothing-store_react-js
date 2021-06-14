import { useContext, useEffect } from "react";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import "../styles/pages/Home.scss";
import { homeImgs } from "../data/homeImgData";
import Masonry from 'react-masonry-css';

const Home = () => {
    const { closeMenuBtn } = useContext(MenuBtnContext);

    // Close menu btn and scroll to top on load
    useEffect(() => {
        closeMenuBtn();
        window.scrollTo(0, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const breakpoints = {
        default: 3,
        900: 2,
        600: 1,
    }

    return (
        <div className="home">
            <div className="home-cont">
                <Masonry
                    breakpointCols={breakpoints
                    }
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {homeImgs.map(img => {
                        return (
                            <div className="img-cont" key={img.id}>
                                <img src={img.img} alt="" />
                            </div>
                        )
                    })}
                </Masonry>
            </div>
        </div>
    );
}

export default Home;