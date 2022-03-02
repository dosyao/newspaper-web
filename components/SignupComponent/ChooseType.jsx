const ChooseType = ({ type, setType }) => (
    <div className="space-y-3 py-5 flex flex-col max-w-lg w-full mx-auto">
        <label
            className="items-center inline-flex cursor-pointer"
            onClick={setType.bind(null, 'user')}
        >
            <div className="border-2 border-gray-300 rounded-full mr-2 p-1">
                <div
                    className="rounded-full h-4 w-4 bg-transparent transition"
                    style={{ backgroundColor: type === "user" ? "#000000" : "transparent" }}
                />
            </div>
            <div>
                <h2 className="text-lg font-bold">
                    User
                </h2>
                <p className="text-gray-500">
                    You can find a work
                </p>
            </div>
        </label>
        <label
            className="items-center inline-flex cursor-pointer"
            onClick={setType.bind(null, 'company')}
        >
            <div className="border-2 border-gray-300 rounded-full mr-2 p-1">
                <div
                    className="rounded-full h-4 w-4 bg-transparent transition"
                    style={{ backgroundColor: type === "company" ? "#000000" : "transparent" }}
                />
            </div>
            <div>
                <h2 className="text-lg font-bold">
                    Company
                </h2>
                <p className="text-gray-500">
                    You can publicate your vacantions
                </p>
            </div>
        </label>
    </div>
);

export default ChooseType;
