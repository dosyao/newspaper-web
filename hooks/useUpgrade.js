import { useContext } from "react";
import { UpgradeContext } from "../pages/upgrade";

const useUpgrade = () => {
    const upgradeState = useContext(UpgradeContext);

    return upgradeState;
}

export default useUpgrade;
