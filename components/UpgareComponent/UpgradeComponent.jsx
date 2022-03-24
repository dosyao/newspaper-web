/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SIGNUP, UPGRADE } from '../../constants/routes';
import useApp from '../../hooks/useApp';
import SubscriptionCard from './SubscriptionCard';
import MainLayout from '../../layouts/MainLayout';
import subscriptions from "../../public/data/subscriptions.json";
import styles from "./Upgrade.module.css";
import { STRIPE_KEY, WEB_BASE_URL } from '../../constants/common';
import useUpgrade from '../../hooks/useUpgrade';
import { stripeSession } from '../../api/subscription';

const UpgradeComponent = ({ subscription }) => {
    const router = useRouter();
    const [appState, setAppState] = useApp();
    const { price } = useUpgrade();
    const [free, paid] = subscriptions;

    useEffect(() => {
        if (router.query?.session_id) {
            setAppState({ ...appState, subscription: subscription ?? null });

            router.replace(UPGRADE);
        }
    }, []);

    const goToStripeCheckout = async () => {
        const loadStripe = (await import("@stripe/stripe-js")).loadStripe;
        const stripePromise = loadStripe(STRIPE_KEY);
        const stripe = await stripePromise;

        const session = await stripeSession({
            email: appState.user?.email,
            priceId: price.id,
            successUrl: `${WEB_BASE_URL}${UPGRADE}?session_id={CHECKOUT_SESSION_ID}`,
            failureUrl: `${WEB_BASE_URL}${UPGRADE}`
        });

        await stripe.redirectToCheckout({
            sessionId: session.sessionId
        });
    }

    const handleClick = async () => {
        if (!appState.user) {
            router.push(SIGNUP);
            return;
        }

        await goToStripeCheckout();
    }

    return (
        <MainLayout>
            <section className="w-full h-auto" style={{ minHeight: 'calc(100vh - 77px - 112px)' }}>
                <div className="max-w-3xl w-full mx-auto p-5">
                    <h1 className={styles.title}>
                        Newspaper <span className={styles.gradient}>PLUS</span>
                    </h1>
                    <h2 className='text-lg md:text-xl font-bold my-5 text-gray-500'>
                        Choose your subscription:
                    </h2>
                    <div className="flex flex-wrap gap-5 lg:gap-10 my-10 justify-center">
                        <SubscriptionCard
                            key={free.type}
                            label={free.label}
                            features={appState.user ? free[`${appState.user.type}List`] : [...free.userList, ...free.companyList]}
                        />
                        <SubscriptionCard
                            key={paid.type}
                            label={price.unit_amount / 100}
                            features={appState.user ? paid[`${appState.user.type}List`] : [...paid.userList, ...paid.companyList]}
                            handleClick={handleClick}
                        />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default UpgradeComponent;
