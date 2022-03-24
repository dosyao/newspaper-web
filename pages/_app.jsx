import DisplaySize from "../hocs/DisplaySize";
import dynamic from "next/dynamic";
import Head from "next/head";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { getCookie, setCookies } from "cookies-next";
import { USER_TOKEN } from "../constants/common";
import { createContext } from "react";
import { prepareApp } from "../utils";

const CookieModal = dynamic(() => import("../components/UI/CookieModal"), { ssr: false });

export const AppStore = createContext();

const App = ({ Component, pageProps }) => {
    const [cookieRead, setCookieRead] = useState(null);
    const appState = useState({
        isGuestUser: true,
        user: null,
        subscription: null
    });

    useEffect(() => {
        setCookieRead(getCookie('cookie_read'));
        prepareApp(appState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCookie = () => {
        setCookies('cookie_read', '1');
        setCookieRead("1");
    }

    return (
        <AppStore.Provider value={appState}>
            <DisplaySize>
                <Head>
                    <meta name="viewport" content="width=device-width" />
                </Head>
                <Component {...pageProps} />
                {!cookieRead && cookieRead !== null && <CookieModal onClick={handleCookie} />}
            </DisplaySize>
        </AppStore.Provider>
    );
}

export default App;
