import Input from "../UI/Input";

const RegisterFields = ({ state }) => {
    const [signupState, setSingupState] = state;

    return (
        <div className="flex flex-col space-y-5 max-w-xs mx-auto pt-5 lg:pt-10">
            <Input
                label={signupState.type === 'company' ? 'Name of company' : 'Full name'}
                type="text"
                state={{
                    value: signupState.username,
                    onChange: (e) => {
                        setSingupState({
                            ...signupState,
                            username: e.target.value
                        })
                    }
                }}
            />
            <Input
                label="Email"
                type="email"
                state={{
                    value: signupState.email,
                    onChange: (e) => {
                        setSingupState({
                            ...signupState,
                            email: e.target.value
                        })
                    }
                }}
            />
            <Input
                label="Password"
                type="password"
                state={{
                    value: signupState.password,
                    onChange: (e) => {
                        setSingupState({
                            ...signupState,
                            password: e.target.value
                        })
                    }
                }}
            />
            <Input
                label="Confirm password"
                type="password"
                state={{
                    value: signupState.confirmPassword,
                    onChange: (e) => {
                        setSingupState({
                            ...signupState,
                            confirmPassword: e.target.value
                        })
                    }
                }}
            />
        </div>
    );
}

export default RegisterFields;
