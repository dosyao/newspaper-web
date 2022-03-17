import { JWT_SECRET, USER_TOKEN } from "../constants/common";
import jwt from "jsonwebtoken";
import cs from "./terms";
import { UPGRADE } from "../constants/routes";
import { subscribe } from "../api/subscription";

export const getServerSideProps = async ({ req, res, query }) => {
    const token = req.cookies[USER_TOKEN];
    const sessionId = query.session_id;
    const payment = query.payment;

    if (token && sessionId) {
        const userId = await jwt.decode(token, JWT_SECRET).id;
        await subscribe({ sessionId, userId });
    }

    if (sessionId) {
        res.writeHead(302, {
            Location: UPGRADE
        });
        res.end();
    }

    return {
        props: { }
    }
}

export default cs;
