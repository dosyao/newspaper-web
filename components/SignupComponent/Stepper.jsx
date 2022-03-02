const Stepper = ({ step }) => {
    return (
        <div className="flex">
            <div className="flex-1 bg-transparent">
                <div className="items-center flex justify-center">
                    <div className="flex-1 h-px bg-black opacity-30" />
                    <div className={`items-center flex justify-center ${step >= 1 ? 'bg-black' : 'bg-gray-400'} transition text-white rounded-full h-8 w-8 mx-1`}>
                        1
                    </div>
                    <div className="flex-1 h-px bg-black opacity-30" />
                </div>
            </div>
            <div className="flex-1">
                <div className="items-center flex justify-center">
                    <div className="flex-1 h-px bg-black opacity-30" />
                    <div className={`items-center flex justify-center ${step >= 2 ? 'bg-black' : 'bg-gray-400'} transition text-white rounded-full h-8 w-8 mx-1`}>
                        2
                    </div>
                    <div className="flex-1 h-px bg-black opacity-30" />
                </div>
            </div>
            <div className="flex-1 bg-transparent">
                <div className="items-center flex justify-center">
                    <div className="flex-1 h-px bg-black opacity-30" />
                    <div className={`items-center flex justify-center ${step >= 3 ? 'bg-black' : 'bg-gray-400'} transition text-white rounded-full h-8 w-8 mx-1`}>
                        3
                    </div>
                    <div className="flex-1 h-px bg-black opacity-30" />
                </div>
            </div>
        </div>
    );
}

export default Stepper;
