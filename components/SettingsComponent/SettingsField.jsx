import { CheckIcon, PencilAltIcon } from "@heroicons/react/solid";
import { useState } from "react";

const InputField = (props) => (
    <input
        className="border-b-2 text-base border-black outline-none w-auto"
        {...props}
    />
);

const SettingsField = ({ label, value, setValue, isUnchanged }) => {
    const [open, setOpen] = useState(false);
    const Icon = open ? CheckIcon : PencilAltIcon;

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="border-b-2 flex items-center space-x-3">
            <p className="font-black text-base py-3">
                {label}
            </p>
            {open && !isUnchanged
                ? <InputField value={value} onChange={handleChange} />
                : <span className="font-normal">{value}</span>
            }
            {!isUnchanged && (
                <Icon
                    className="w-5 h-5 hover:text-cyan-500 transition cursor-pointer"
                    onClick={setOpen.bind(null, !open)}
                />
            )}
        </div>
    );
}

export default SettingsField;