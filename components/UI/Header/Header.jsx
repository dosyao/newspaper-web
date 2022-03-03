import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Link from "next/link";
import useDisplay from "../../../hooks/useDisplay";
import Button from "../Button";
import { HOME, BLOG_POST } from "../../../constants/routes";
import { useRouter } from "next/router";
import useApp from "../../../hooks/useApp";
import AuthBtns from "./AuthBtns";
import UserIcon from "./UserIcon";

const Header = ({ setOpenModal }) => {
    const [appState] = useApp();
    const { pathname } = useRouter();
    const [isOpen, setOpen] = useState(false);
    const Icon = isOpen ? XIcon : MenuIcon;
    const { lg } = useDisplay();
    const shouldHeaderSticky = pathname !== BLOG_POST || !lg;

    const handleOpenModal = () => {
        setOpen(false);
        setOpenModal();
    }

    return <>
        <header className={`${shouldHeaderSticky && "sticky top-0"} bg-white z-20 border-b-2`}>
            <div className="flex justify-between px-4 py-4 lg:items-middle max-w-7xl w-full mx-auto">
                <Link href={HOME}>
                    <a className="text-2xl lg:text-3xl font-bold lg:mr-10">
                        Newspaper
                    </a>
                </Link>
                <Icon className="text-black w-7 h-8 cursor-pointer lg:hidden" onClick={setOpen.bind(null, !isOpen)} />
                <div
                    className="absolute top-[66px] left-0 transition-all w-full lg:relative lg:top-0 bg-white lg:transition-none"
                    style={!lg ? { transform: isOpen ? 'translateY(0)' : 'translateY(-120%)', transitionDuration: '500ms', opacity: isOpen ? 1 : 0 } : null}
                >
                    <div className="px-4 py-6 space-y-5 lg:flex lg:justify-between lg:p-0 lg:space-y-0">
                        <div className="flex flex-col items-center lg:flex-row lg:space-x-3">
                            <Button
                                label='Blog'
                                type='link'
                                href='/blog'
                            />
                            {/* TODO: Implement pages */}
                            <Button
                                label='Work'
                                type='link'
                                href='/vacancies'
                            />
                            <Button
                                label='Upgrade'
                                type='link'
                                href='/upgrade'
                            />
                        </div>
                        {appState.isGuestUser ? <AuthBtns handleOpenModal={handleOpenModal} /> : <UserIcon />}
                    </div>
                </div>
            </div>
        </header>
        {!lg && (
            <div
                className="fixed bg-black w-full opacity-60 top-0 bottom-0 transition-all z-10"
                onClick={setOpen.bind(null, false)}
                style={{ transform: isOpen ? "translateY(0)" : "translateY(-100%)", height: typeof window !== 'undefined' ? window.innerHeight : null }}
            />
        )}
    </>;
}

export default Header;