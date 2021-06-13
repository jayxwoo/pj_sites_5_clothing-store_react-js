import { createContext, useEffect, useState } from "react";

export const MobileContext = createContext();

const MobileContextProvider = (props) => {
    const [mobile, setMobile] = useState(null);

    const checkMobile = () => {
        if (window.innerWidth <= 750) {
            setMobile(true);
        } else {
            setMobile(false);
        };
    };

    useEffect(() => {
        checkMobile();

        window.addEventListener('resize', () => {
            checkMobile();
       });
    }, []);

    

    return (
        <MobileContext.Provider value={{mobile}}>
            {props.children}
        </MobileContext.Provider>
    );
};

export default MobileContextProvider;