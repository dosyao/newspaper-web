import DisplaySize from "../hocs/DisplaySize";
import dynamic from "next/dynamic";
import Head from "next/head";
import "../styles/globals.css";
import { useEffect, useState } from "react";

const CookieModal = dynamic(() => import("../components/UI/CookieModal"), { ssr: false });

const App = ({ Component, pageProps }) => {
    const [cookieRead, setCookieRead] = useState("");

    useEffect(() => {
        if (document.cookie.includes("cookie_read=1")) {
            setCookieRead("1");
        }
    }, []);

    const handleCookie = () => {
        document.cookie = "cookie_read=1";
        setCookieRead("1");
    }

    return (
        <DisplaySize>
            <Head>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" />
            </Head>
            <Component {...pageProps} />
            {!cookieRead && <CookieModal onClick={handleCookie} />}
        </DisplaySize>
    );
}

export default App;
