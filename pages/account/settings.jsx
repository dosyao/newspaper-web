import SettingsComponent from "../../components/SettingsComponent";
import { USER_TOKEN } from "../../constants/common";
import { HOME } from "../../constants/routes";

const Settings = () => <SettingsComponent />;

export const getServerSideProps = async ({ req, res }) => {
    const token = req.cookies[USER_TOKEN];

    if (!token) {
        res.writeHead(302, {
            Location: HOME
        });
        res.end();
    }

    return {
        props: { }
    }
}

export default Settings;
