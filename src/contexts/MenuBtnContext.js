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

    const handleMenuBtn = () => {
        setMenuBtn(!menuBtn);
    };

    return (
        <MenuBtnContext.Provider value={{ menuBtn, closeMenuBtn, openMenuBtn, handleMenuBtn }}>
            {props.children}
        </MenuBtnContext.Provider>
    );
};

export default MenuBtnContextProvider;