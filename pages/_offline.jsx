import Head from "next/head";
import styles from "../components/HomeComponent/HomeComponent.module.css";

const Offline = () => {
    return (
        <div className="w-screen h-screen flex">
            <Head>
                <title>Newspaper</title>
            </Head>
            <div className="w-auto flex-1">
                <h1 className={styles.title}>
                    Always be<br /> aware of events.
                </h1>
            </div>
        </div>
    );
}

export default Offline;
