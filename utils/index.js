import { getCookie, setCookies } from "cookies-next";
import jwt from "jsonwebtoken";
import { loadSubscription } from "../api/subscription";
import { JWT_SECRET, USER_TOKEN } from "../constants/common";

export async function prepareApp(appState) {
    const [state, setState] = appState;
    const token = getCookie(USER_TOKEN);

    if (!token) return;

    setCookies(USER_TOKEN, token);
    const user = await jwt.decode(token, JWT_SECRET);
    const subscription = await loadSubscription(user.id);

    setState({
        ...state,
        user,
        subscription: subscription ?? null,
        isGuestUser: false
    });
}
