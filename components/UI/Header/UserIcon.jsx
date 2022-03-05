import { ChevronRightIcon, UserIcon as Icon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { SETTINGS } from "../../../constants/routes";
import useApp from "../../../hooks/useApp";

const UserIcon = () => {
    const router = useRouter();
    const [appState, setAppState] = useApp();

    if (!appState.user) return null;

    const handleGoSettings = () => {
        router.push(SETTINGS);
    }

    return (
        <div className="flex items-center cursor-pointer space-x-3 justify-center lg:justify-start text-black hover:text-cyan-500 transition" onClick={handleGoSettings}>
            <div className="flex items-center justify-center bg-gray-400 rounded-full h-12 w-12">
                <Icon className="text-white uppercase w-6 h-6" />
            </div>
            <div className="text-base font-semibold flex items-center">
                {appState.user.username}
                <ChevronRightIcon className="w-7 h-7" />
            </div>
        </div>
    );
}

export default UserIcon;
