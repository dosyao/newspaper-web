import dynamic from "next/dynamic";
import classNames from "classnames/bind";
import styles from "./Button.module.css";

const Link = dynamic(() => import("next/link"));

const cn = classNames.bind(styles);

const Button = ({ href, onClick: handleClick, label, type, className, disabled, isSubmit }) => {
    const buttonStyles = cn({
        button: true,
        [`button_${type}`]: type,
        [className]: className,
        disabled
    });

    const onClick = () => {
        if (disabled) return;
        handleClick?.();
    }

    if (href) return (
        <Link href={href}>
            <a className={buttonStyles} onClick={onClick}>
                {label}
            </a>
        </Link>
    );

    return (
        <button type={isSubmit ? "submit" : "button"} className={buttonStyles} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
