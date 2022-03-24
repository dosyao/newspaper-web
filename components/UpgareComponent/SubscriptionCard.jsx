import useApp from "../../hooks/useApp";
import Button from "../UI/Button";

const SubscriptionCard = ({ label, features, handleClick }) => {
    const [appState] = useApp();

    const price = isNaN(+label) ? label : new Intl.NumberFormat('en-us', {
        style: "currency",
        currency: "USD"
    }).format(+label);
    
    return (
        <div className='max-w-xs w-full transition-all p-5 flex flex-col rounded-lg border-2'>
            <h1 className='font-black text-5xl text-center text-green-500'>
                {price} {label !== 'FREE' && <span className='text-black text-3xl'>per month</span>}
            </h1>
            <ul className="space-y-3 list-disc pl-5 mt-5">
                {features.map(el => (
                    <li key={el} className="text-base">
                        {el}
                    </li>
                ))}
            </ul>
            {appState.subscription && label !== "FREE" && (
                <span className="text-black font-bold text-center mt-5">
                    Current subscription 
                    {' '}{new Date(appState.subscription.createdDateTime).getDate() + 30 - new Date().getDate()} days
                </span>
            )}
            {!appState.subscription && label !== 'FREE' && (
                <Button
                    className="mx-auto mt-5"
                    type="black"
                    label="Subscribe"
                    onClick={handleClick}
                />
            )}
        </div>
    );
}

export default SubscriptionCard;
