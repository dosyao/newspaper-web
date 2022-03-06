import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import useVacancies from "../../hooks/useVacancies";
import dynamic from "next/dynamic";
import useApp from "../../hooks/useApp";
import { SIGNUP } from "../../constants/routes";

const Button = dynamic(() => import("../UI/Button"));

const Vacancy = () => {
    const router = useRouter();
    const [{ isGuestUser, user }] = useApp();
    const { vacancy } = useVacancies();

    if (!vacancy) return null;

    const handleGoBack = () => {
        router.back();
    }

    const handleSend = () => {
        if (isGuestUser) return;
    }

    return (
        <section 
            className="p-5 md:p-10 w-full mx-auto"
            style={{ minHeight: "calc(100vh - 78px - 112px)" }}
        >
            <div className="max-w-xl w-full rounded-2xl shadow-2xl p-5 md:p-10 mx-auto space-y-3">
                <span
                    className="cursor-pointer font-bold text-gray-500 hover:text-cyan-500 flex items-center transition-all"
                    onClick={handleGoBack}
                >
                    <ChevronLeftIcon className="w-5 h-5" /> Go back
                </span>
                <h1 className="font-black text-2xl lg:text-3xl w-full border-b-2 pb-4">
                    {vacancy.title}
                </h1>
                <p className="text-gray-500 text-base md:text-xl font-bold">
                    {vacancy.company}, {vacancy.city}
                </p>
                <p className="text-base md:text-xl font-semibold">
                    Salary: <span className="text-green-500 font-bold">{new Intl.NumberFormat('en-us', {
                        style: "currency",
                        currency: "USD"
                    }).format(vacancy.salary)}</span> per month
                </p>
                <h2 className="font-bold text-xl lg:text-2xl">
                    Requirements:
                </h2>
                <ul className="list-disc pl-3">
                    {vacancy.requirements.map(el => (
                        <li key={el} className="text-base">
                            {el}
                        </li>
                    ))}
                </ul>
                <h2 className="font-bold text-xl lg:text-2xl">
                    Work conditions:
                </h2>
                <ul className="list-disc pl-3">
                    {vacancy.conditions.map(el => (
                        <li key={el} className="text-base">
                            {el}
                        </li>
                    ))}
                </ul>
                <h2 className="font-bold text-xl lg:text-2xl">
                    Responsibilities:
                </h2>
                <ul className="list-disc pl-3">
                    {vacancy.responsibilities.map(el => (
                        <li key={el} className="text-base">
                            {el}
                        </li>
                    ))}
                </ul>
                {(isGuestUser || user?.type !== "company") && (
                    <div className="flex justify-center">
                        <Button
                            type="black"
                            label="Send resume"
                            href={isGuestUser ? SIGNUP : null}
                            onClick={handleSend}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

export default Vacancy;
