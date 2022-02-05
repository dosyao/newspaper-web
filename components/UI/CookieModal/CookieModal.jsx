import Button from "../Button";
import styles from "./CookieModal.module.css";

const CookieModal = ({ onClick }) => (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
            <span className="text-sm text-white">
                This website uses cookies to ensure you get the best experience on our website. Details can be found in our <a className="underline" href="https://test.com/privacy" target="_blank" rel="noreferrer noopener">Privacy Policy</a>
            </span>
            <Button
                className={styles.button}
                label="Go it"
                type="transparent"
                onClick={onClick}
            />
        </div>
    </div>
);

export default CookieModal;
