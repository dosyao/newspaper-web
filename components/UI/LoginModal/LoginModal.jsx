import { useRef, useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import { XIcon } from "@heroicons/react/solid";
import { HOME, SIGNUP } from "../../../constants/routes";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { login } from "../../../api/session";
import useApp from "../../../hooks/useApp";
import { JWT_SECRET, USER_TOKEN } from "../../../constants/common";
import { setCookies } from "cookies-next";

const LoginModal = ({ closeModal }) => {
    const modalRef = useRef();
    const [app, setApp] = useApp();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setError] = useState(false);
    const disabled = !email || !password;

    useEffect(() => {
        const clickOutside = (event) => {
            if (modalRef.current.contains(event.target)) return null;

            closeModal();
        }

        document.addEventListener("mousedown", clickOutside);

        return () => {
            closeModal();
            document.removeEventListener("mousedown", clickOutside);
        }
    }, [closeModal]);

    useEffect(() => {
        if (isError) setError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email, password]);

    const handleChange = (handler) => {
        return (event) => handler(event.currentTarget.value);
    }

    const handleSubmit = async (event) => {
        event?.preventDefault?.();

        if (disabled) return null;

        const token = await login({ email, password });

        if (!token) {
            setError(true);
            return;
        }

        const user = await jwt.decode(token, JWT_SECRET);

        setCookies(USER_TOKEN, token);
        setApp({
            ...app,
            user,
            isGuestUser: false
        });
        window.location.href = HOME;
    }

    return (
        <form onSubmit={handleSubmit} className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
            <div ref={modalRef} className="shadow-2xl rounded-xl max-w-lg w-full mx-5 lg:mx-auto bg-white flex flex-col px-7 py-10 relative">
                <div className="flex justify-between w-full">
                    <h3 className="font-bold text-2xl mb-3 mx-auto">
                        Login
                    </h3>
                    <XIcon className="absolute right-7 top-10 w-7 h-7 text-black cursor-pointer" onClick={closeModal} />
                </div>
                <div className="space-y-3 flex flex-col justify-center items-center">
                    <Input type="email" label="Email" state={{ value: email, onChange: handleChange(setEmail) }} error={isError} />
                    <Input type="password" label="Password" state={{ value: password, onChange: handleChange(setPassword) }} error={isError} />
                    {isError && <span className="text-red-500 text-sm ml-3">Incorrect email or password.</span>}
                    <Button
                        type="black"
                        label="Login"
                        onClick={handleSubmit}
                        disabled={disabled}
                    />
                    <Link href={SIGNUP}>
                        <a className="text-sm text-black hover:text-slate-700">
                            Do you have&apos;t account? Sign up now
                        </a>
                    </Link>
                </div>
            </div>
        </form>
    );
}

export default LoginModal;
