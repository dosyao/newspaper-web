import MainLayout from "../../layouts/MainLayout";
import styles from "./styles.module.css";

const AboutComponent = () => (
    <MainLayout>
        <div className={styles.container}>
            <h1 className={styles.infoH1}>About us</h1>
            <p className={styles.infoP}>
                Newspaper is a simple and accessible online resource for news, ads and job search that keeps you up to date. We make every effort to prepare fresh and accurate information for you.
            </p>
        </div>
    </MainLayout>
);

export default AboutComponent;
