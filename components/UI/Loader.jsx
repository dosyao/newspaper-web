import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className="inline-block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className={styles.animation}>
                <div className={styles.item} />
                <div className={styles.item} />
                <div className={styles.item} />
                <div className={styles.item} />
            </div>
        </div>
    );
}

export default Loader;
