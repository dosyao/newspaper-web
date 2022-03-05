import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Footer from "../../components/UI/Footer";
import useApp from "../../hooks/useApp";
import SettingsField from "./SettingsField";
import Button from "../UI/Button";
import { HOME, UPGRADE } from "../../constants/routes";
import { USER_TOKEN } from "../../constants/common";
import { setCookies } from "cookies-next";

const Loader = dynamic(() => import("../UI/Loader"));

const SettingsComponent = () => {
    const [appState, setAppState] = useApp();
    const router = useRouter();
    const { user } = appState;
    const [updUser, setUpdUser] = useState(user);

    useEffect(() => {
        setUpdUser(user);
    }, [user]);

    const handleGoBack = () => {
        router.back();
    }

    const handleSave = async () => {
        console.log(updUser);
    }

    const handleLogOut = () => {
        setAppState({
            ...appState,
            user: null,
            isGuestUser: true
        });
        setCookies(USER_TOKEN, "");
        window.location.href = HOME;
    }

    return (
        <div className="min-h-screen w-full bg-[#f5fafa] flex flex-col justify-between">
            <div className="p-0 m-0 w-full">
                <header className="max-w-7xl w-full mx-auto p-5 flex items-center">
                    <ChevronLeftIcon
                        className="w-10 h-10 text-black hover:text-cyan-500 transition cursor-pointer"
                        onClick={handleGoBack}
                    />
                    <h1 className="lg:hidden text-center text-base font-black absolute left-[50%] translate-x-[-50%]">
                        SETTINGS    
                    </h1>
                </header>
                <h1 className="hidden lg:block text-center mt-12 mb-10 text-4xl font-black">
                    Settings
                </h1>
                <section className="m-5 bg-white p-5 rounded-2xl shadow-2xl max-w-xl lg:p-10 md:mx-auto md:my-10 relative min-h-[420px] h-full">
                    {!updUser ? <Loader /> : <>
                        <SettingsField
                            label='Account Name:'
                            value={updUser.username}
                            setValue={(username) => setUpdUser({ ...updUser, username })}
                        />
                        <SettingsField
                            label='Account Email:'
                            value={updUser.email}
                            isUnchanged
                        />
                        <SettingsField
                            label='Account Type:'
                            value={updUser.type[0].toUpperCase() + updUser.type.substr(1)}
                            isUnchanged
                        />
                        <SettingsField
                            label='Account Id:'
                            value={updUser.id}
                            isUnchanged
                        />
                        <div className="mt-3 flex flex-col items-center space-y-3">
                            {user.username !== updUser.username && (
                                <Button
                                    type="white"
                                    label="Save"
                                    className="border-2 border-cyan-500 text-cyan-500 transition-all hover:text-white hover:bg-cyan-500"
                                    onClick={handleSave}
                                />
                            )}
                            <Button
                                type="white"
                                label="Upgrade"
                                className="border-2 border-cyan-500 text-cyan-500 transition-all hover:text-white hover:bg-cyan-500"
                                href={UPGRADE}
                            />
                            <Button
                                type="white"
                                label="Log Out"
                                className="border-2 border-red-500 text-red-500 transition-all hover:text-white hover:bg-red-500"
                                onClick={handleLogOut}
                            />
                        </div>
                    </>}
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default SettingsComponent;
