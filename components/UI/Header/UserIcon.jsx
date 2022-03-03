import { ChevronRightIcon, UserIcon as Icon } from "@heroicons/react/solid";
import { setCookies } from "cookies-next";
import { USER_TOKEN } from "../../../constants/common";
import { HOME } from "../../../constants/routes";
import useApp from "../../../hooks/useApp";

const UserIcon = () => {
    const [appState, setAppState] = useApp();

    if (!appState.user) return null;

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
        <div className="flex items-center cursor-pointer space-x-3 justify-center lg:justify-start" onClick={handleLogOut}>
            <div className="flex items-center justify-center bg-gray-400 rounded-full h-12 w-12">
                <Icon className="text-white uppercase w-6 h-6" />
            </div>
            <div className="text-base font-semibold flex items-center">
                {appState.user.username}
                <ChevronRightIcon className="w-7 h-7 text-black" />
            </div>
        </div>
    );
}

export default UserIcon;
