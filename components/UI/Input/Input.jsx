import classNames from "classnames/bind";
import styles from "./Input.module.css";

const cn = classNames.bind(styles);

const Input = ({ label, state, type, error }) => {
    const inputStyles = cn({
        input: true,
        error
    });

    return (
        <div className="relative">
            <input
                className={inputStyles}
                placeholder={label}
                value={state.value}
                onChange={state.onChange}
                type={type}
            />
            <label className={styles.label}>{label}</label>
        </div>
    );
}

export default Input;
