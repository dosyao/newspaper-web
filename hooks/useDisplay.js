import { useContext } from "react";
import { DisplayContext } from "../hocs/DisplaySize";

const useDisplay = () => {
    const display = useContext(DisplayContext);

    return display;
}

export default useDisplay;
