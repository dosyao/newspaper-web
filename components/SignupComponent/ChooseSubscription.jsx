import useSignup from "../../hooks/useSignup";
import subscriptions from "../../public/data/subscriptions.json";
import SubscriptionCard from "./SubscriptionCard";

const ChooseSubscription = ({ subscription, type, setSubscription }) => {
    const { product, price } = useSignup();
    const [free, paid] = subscriptions;

    return (
        <div className="flex flex-wrap gap-5 justify-center py-5 lg:p-10">
            <SubscriptionCard
                key={free.type}
                label={free.label}
                features={free[`${type}List`]}
                isActive={subscription === free.type}
                handleClick={setSubscription.bind(null, free.type)}
            />
            <SubscriptionCard
                key={paid.type}
                label={price.unit_amount / 100}
                features={paid[`${type}List`]}
                isActive={subscription === product.id}
                handleClick={setSubscription.bind(null, product.id)}
            />
        </div>
    );
}

export default ChooseSubscription;
