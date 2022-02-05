import { useEffect, useState } from "react";
import { createContext } from "react";
import { endpoints } from "../constants/common";

export const DisplayContext = createContext();

const DisplaySize = ({ children }) => {
    const [display, setDisplay] = useState({
        sm: false,
        md: false,
        lg: false,
        xl: false,
        twoXl: false,
    });

    useEffect(() => {
        const handleResize = () => {
            setDisplay({
                sm: window.innerWidth >= endpoints.smWidth,
                md: window.innerWidth >= endpoints.mdWidth,
                lg: window.innerWidth >= endpoints.lgWidth,
                xl: window.innerWidth >= endpoints.xlWidth,
                twoXl: window.innerWidth >= endpoints.twoXlWidth,
            });
        }

        handleResize();
        window.onresize = handleResize;
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <DisplayContext.Provider value={display}>
            {children}
        </DisplayContext.Provider>
    );
}

export default DisplaySize;
