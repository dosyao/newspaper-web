import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Button from "../UI/Button";
import Stepper from "./Stepper";
import { signup } from "../../api/session";
import ChooseType from "./ChooseType";
import { setCookies } from "cookies-next";
import { USER_TOKEN, STRIPE_KEY, WEB_BASE_URL } from "../../constants/common";
import { HOME, UPGRADE } from "../../constants/routes";
import { useEffect } from "react";
import { stripeSession } from "../../api/subscription";
import useSignup from "../../hooks/useSignup";

const ChooseSubscription = dynamic(() => import("./ChooseSubscription"));
const RegisterFields = dynamic(() => import("./RegisterFields"));

const SignupComponent = () => {
    const { price } = useSignup();
    const [step, setStep] = useState(1);
    const [signupState, setSignupState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        subscription: '',
        type: ''
    });
    const [isError, setError] = useState(false);
    const shouldDisableBtn =
        step === 1 && !signupState.type ||
        step === 2 && !signupState.subscription ||
        step === 3 && (
            !signupState.username ||
            !signupState.email ||
            !signupState.password ||
            !signupState.confirmPassword ||
            signupState.password !== signupState.confirmPassword
    );

    useEffect(() => {
        if (isError) setError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signupState.email]);

    const setType = (type) => {
        setSignupState({ ...signupState, type });
    }

    const setSubscription = (subscription) => {
        setSignupState({ ...signupState, subscription });
    }

    const handleSubmit = async (e) => {
        e?.preventDefault();
        if (shouldDisableBtn) return;

        if (step < 3) {
            setStep(step + 1);
            return;
        }

        const token = await signup({ ...signupState });

        if (!token) {
            setError(true);
            return;
        }

        setCookies(USER_TOKEN, token);
        
        if (signupState.subscription === "free") {
            window.location.href = HOME;
            return;
        }

        const loadStripe = (await import("@stripe/stripe-js")).loadStripe;
        const stripe = await loadStripe(STRIPE_KEY);

        const session = await stripeSession({
            email: signupState.email,
            priceId: price.id,
            successUrl: `${WEB_BASE_URL}/${UPGRADE}?price_id=${price.id}&payment=success`,
            failureUrl: `${WEB_BASE_URL}/${UPGRADE}`
        });

        await stripe.redirectToCheckout({
            sessionId: session.sessionId
        });
    }

    const handleBack = () => {
        switch (step) {
            case 2:
                setStep(step - 1);
                setSignupState({ ...signupState, subscription: "" });
                break;
            case 3:
                setStep(step - 1);
                setSignupState({
                    ...signupState,
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    subscription: ''
                });
                break;
            default:
                break;
        }
    }

    return (
        <MainLayout isGray>
            <Head>
                <title>Sign Up | Newspaper</title>
            </Head>
            <div className="p-5 lg:p-10" style={{ minHeight: "calc(100vh - 78px - 112px)" }}>
                <h1 className="text-center text-3xl font-black mb-10 lg:text-5xl lg:mb-20">
                    Create your account
                </h1>
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto w-full p-5 bg-white shadow-xl rounded-3xl mb-10 lg:mb-20">
                    <Stepper step={step} />
                    {step === 1 && <ChooseType type={signupState.type} setType={setType} />}
                    {step === 2 && <ChooseSubscription subscription={signupState.subscription} setSubscription={setSubscription} type={signupState.type} />}
                    {step === 3 && <RegisterFields state={[signupState, setSignupState]} isError={isError} />}
                    <div className="w-full justify-center items-center flex-col space-y-3 flex pt-5 lg:pt-10">
                        <Button
                            type='black'
                            label={step === 3 ? "Done" : "Select"}
                            onClick={handleSubmit}
                            disabled={shouldDisableBtn}
                            isSubmit={step === 3}
                        />
                        {step > 1 && (
                            <Button
                                type='transparent'
                                label='Back'
                                onClick={handleBack}
                            />
                        )}
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}

export default SignupComponent;
