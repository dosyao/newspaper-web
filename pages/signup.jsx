import SignupComponent from "../components/SignupComponent";
import { USER_TOKEN } from "../constants/common";
import { HOME } from "../constants/routes";

const SignUp = () => <SignupComponent />;

export const getServerSideProps = async ({ req, res }) => {
    const token = req.cookies[USER_TOKEN];

    if (token) {
        res.writeHead(302, {
            Location: HOME
        });
        res.end();
    }

    return {
        props: { }
    }
}

export default SignUp;
