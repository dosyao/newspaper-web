import { useContext } from "react";
import { SignUpStore } from "../pages/signup";

const useSignup = () => {
    const signup = useContext(SignUpStore);

    return signup;
}

export default useSignup;
