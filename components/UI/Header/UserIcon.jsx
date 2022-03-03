import { UserIcon as Icon } from "@heroicons/react/solid";
import useApp from "../../../hooks/useApp";

const UserIcon = () => {
    const [appState] = useApp();

    // if (!appState.user) return null;

    return (
        <div className="flex items-center cursor-pointer">
            <div className="flex items-center justify-center bg-gray-400 rounded-full h-12 w-12">
                <Icon className="text-white text-2xl uppercase w-6 h-6" />
            </div>
        </div>
    );
}

export default UserIcon;
