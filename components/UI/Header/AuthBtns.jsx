import { useRouter } from "next/router";
import { LOGIN, SIGNUP } from "../../../constants/routes";
import Button from "../Button";

const AuthBtns = ({ handleOpenModal }) => {
    const { pathname } = useRouter();
    const shouldHideLoginBtn = pathname === LOGIN;
    const shouldHideSignupBtn = pathname === SIGNUP;

    return (
        <div className="flex flex-col items-center space-y-3 lg:flex-row lg:space-x-4 lg:space-y-0">
            {!shouldHideLoginBtn && (
                <Button
                    label='Login'
                    type='transparent'
                    // href='/login'
                    onClick={handleOpenModal}
                />
            )}
            {!shouldHideSignupBtn && (
                <Button
                    label='Sign Up'
                    type='black'
                    href='/signup'
                />
            )}
        </div>
    );
}

export default AuthBtns;
