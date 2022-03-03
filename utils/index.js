import { getCookie, setCookies } from "cookies-next";
import jwt from "jsonwebtoken";
import { validate } from "../api/session";
import { JWT_SECRET, USER_TOKEN } from "../constants/common";

export async function prepareApp(appState) {
    const [state, setState] = appState;
    const token = getCookie(USER_TOKEN);

    if (!token) return;

    // const isValid = await validate(token);

    // if (!isValid) {
    //     setCookies(USER_TOKEN, "");
    //     setState({ ...state, user: null, isGuest: true });
    //     return;
    // }

    setCookies(USER_TOKEN, token);
    const user = await jwt.decode(token, JWT_SECRET);

    setState({
        ...state,
        user,
        isGuestUser: false
    });
}
