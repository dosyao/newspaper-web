import { createContext } from "react";
import { JWT_SECRET, USER_TOKEN } from "../constants/common";
import jwt from "jsonwebtoken";
import { UPGRADE } from "../constants/routes";
import { subscribe } from "../api/subscription";
import UpgradeComponent from "../components/UpgareComponent";
import { loadProduct, loadPrice } from "../api/subscription";

export const UpgradeContext = createContext();

const Upgrade = ({ subscription, upgradeState }) => (
    <UpgradeContext.Provider value={upgradeState}>
        <UpgradeComponent subscription={subscription} />
    </UpgradeContext.Provider>
);

export const getServerSideProps = async ({ req, res, query }) => {
    const token = req.cookies[USER_TOKEN];
    const sessionId = query.session_id;

    const product = await loadProduct();
    const price = await loadPrice();

    const upgradeState = {
        product,
        price
    }

    if (token && sessionId) {
        const userId = await jwt.decode(token, JWT_SECRET).id;
        const subscription = await subscribe({ sessionId, userId });

        if (subscription) {
            return {
                props: {
                    subscription,
                    upgradeState
                }
            }
        }
    }

    if (sessionId) {
        res.writeHead(302, {
            Location: UPGRADE
        });
        res.end();
    }

    return {
        props: {
            upgradeState
        }
    }
}

export default Upgrade;
