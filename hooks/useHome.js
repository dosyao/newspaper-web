import { useContext } from "react";
import { HomeStore } from "../pages/index";

const useHome = () => {
    const state = useContext(HomeStore);

    return state;
}

export default useHome;
