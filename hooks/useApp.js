import { useContext } from "react";
import { AppStore } from "../pages/_app";

const useApp = () => {
    const state = useContext(AppStore);

    return state;
}

export default useApp;
