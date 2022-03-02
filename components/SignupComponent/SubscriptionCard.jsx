const SubscriptionCard = ({ label, features, isActive, handleClick }) => {
    const price = isNaN(+label) ? label : new Intl.NumberFormat('en-us', {
        style: "currency",
        currency: "USD"
    }).format(+label)
    
    return (
        <div
            className={`max-w-xs w-full transition-all p-5 cursor-pointer flex flex-col rounded-lg shadow-xl ${!isActive && 'text-gray-500 bg-gray-200 shadow-none'}`}
            onClick={handleClick}
        >
            <h1 className={`font-black text-5xl text-center ${isActive && "text-green-500"}`}>
                {price} {label !== 'FREE' && <span className={`${isActive && "text-black"} text-3xl`}>per month</span>}
            </h1>
            <ul className="space-y-3 list-disc pl-5 mt-5">
                {features.map(el => (
                    <li key={el} className="text-base">
                        {el}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubscriptionCard;
