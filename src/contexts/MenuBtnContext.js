import { createContext, useState } from "react";

export const MenuBtnContext = createContext();

const MenuBtnContextProvider = (props) => {
    const [menuBtn, setMenuBtn] = useState(false);

    const closeMenuBtn = () => {
        setMenuBtn(false);
    };

    const openMenuBtn = () => {
        setMenuBtn(true);
    };

    return (
        <MenuBtnContext.Provider value={{ menuBtn, closeMenuBtn, openMenuBtn }}>
            {props.children}
        </MenuBtnContext.Provider>
    );
};

export default MenuBtnContextProvider;