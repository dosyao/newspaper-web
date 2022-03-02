import subscriptions from "../../public/data/subscriptions.json";
import SubscriptionCard from "./SubscriptionCard";

const ChooseSubscription = ({ subscription, type, setSubscription }) => {
    return (
        <div className="flex flex-wrap gap-5 justify-center py-5 lg:p-10">
            {subscriptions.map(el => (
                <SubscriptionCard
                    key={el.type}
                    label={el.label}
                    features={el[`${type}List`]}
                    isActive={subscription === el.type}
                    handleClick={setSubscription.bind(null, el.type)}
                />
            ))}
        </div>
    );
}

export default ChooseSubscription;
