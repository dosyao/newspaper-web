import DisplaySize from "../hocs/DisplaySize";
import dynamic from "next/dynamic";
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
            <Component {...pageProps} />
            {!cookieRead && <CookieModal onClick={handleCookie} />}
        </DisplaySize>
    );
}

export default App;
