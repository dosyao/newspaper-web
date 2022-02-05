import Link from "next/link";
import { ABOUT, CONTACT, TERMS, PRIVACY } from "../../../constants/routes";

const Footer = () => {
    return (
        <footer className="bg-black w-full">
            <div className="px-5 py-6 lg:py-10 max-w-7xl w-full mx-auto text-white flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:justify-between lg:items-center">
                <h3 className="text-2xl font-bold cursor-default justify-start">
                    Newspaper
                </h3>
                <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-4 text-sm">
                    <Link href={ABOUT}>
                        <a>
                            About us
                        </a>
                    </Link>
                    <Link href={CONTACT}>
                        <a>
                            Contact us
                        </a>
                    </Link>
                    <Link href={TERMS}>
                        <a>
                            Terms &#38; conditions
                        </a>
                    </Link>
                    <Link href={PRIVACY}>
                        <a>
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
