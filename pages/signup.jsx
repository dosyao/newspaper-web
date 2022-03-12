import { createContext } from "react";
import { loadPrice, loadProduct } from "../api/subscription";
import SignupComponent from "../components/SignupComponent";

export const SignUpStore = createContext();

const SignUp = ({ signupStore }) => (
    <SignUpStore.Provider value={signupStore}>
        <SignupComponent />
    </SignUpStore.Provider>
);

export const getStaticProps = async () => {
    const product = await loadProduct();
    const price = await loadPrice();

    const signupStore = {
        product,
        price
    }

    return {
        revalidate: 200,
        props: {
            signupStore
        }
    }
}

export default SignUp;
