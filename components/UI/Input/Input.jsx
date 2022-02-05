import styles from "./Input.module.css";

const Input = ({ label, state, type }) => {
    return (
        <div className="relative">
            <input
                className={styles.input}
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
