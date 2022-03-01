import Link from "next/link";
import { ABOUT, CONTACT, TERMS, PRIVACY } from "../../../constants/routes";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className="bg-black w-full">
            <div className="px-5 py-6 lg:py-10 max-w-7xl w-full mx-auto text-white flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:justify-between lg:items-center">
                <span className="text-2xl font-bold cursor-default justify-start">
                    Newspaper
                </span>
                <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-4 text-sm">
                    <Link href={ABOUT}>
                        <a className={styles.footerLink}>
                            About us
                        </a>
                    </Link>
                    <Link href={CONTACT}>
                        <a className={styles.footerLink}>
                            Contact us
                        </a>
                    </Link>
                    {/* TODO: Add terms and privacy pages */}
                    <Link href={TERMS}>
                        <a className={styles.footerLink}>
                            Terms &#38; conditions
                        </a>
                    </Link>
                    <Link href={PRIVACY}>
                        <a className={styles.footerLink}>
                            Privacy policy
                        </a>
                    </Link>
                </div>
                <span className="justify-end text-sm">
                    ©{new Date().getFullYear()} Copyright
                </span>
            </div>
        </footer>
    );
}

export default Footer;
