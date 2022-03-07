import Router, { useRouter } from "next/router";
import { useState } from "react";
import { createVacancy } from "../../api/account";
import { ACCOUNT_VACANCIES } from "../../constants/routes";
import useApp from "../../hooks/useApp";
import Button from "../UI/Button";
import Input from "../UI/Input";

const VacancyForm = ({ vacancy, setEdit }) => {
    const router = useRouter();
    const [{ user }] = useApp();

    const [city, setCity] = useState(vacancy?.city ?? "");
    const [salary, setSalary] = useState(vacancy?.salary ?? "");
    const [title, setTitle] = useState(vacancy?.title ?? "");
    const [requirements, setRequirements] = useState(vacancy?.requirements ?? [""]);
    const [conditions, setConditions] = useState(vacancy?.conditions ?? [""]);
    const [responsibilities, setResponsibilities] = useState(vacancy?.responsibilities ?? [""]);

    const handleChange = (handler) => {
        return (event) => handler(event.currentTarget.value);
    }

    const handleCreate = async () => {
        if (!vacancy) {
            const response = await createVacancy({
                userId: user.id,
                company: user.username,
                title,
                salary,
                city,
                requirements: requirements.map(el => el.trim()).filter(el => !!el),
                conditions: conditions.map(el => el.trim()).filter(el => !!el),
                responsibilities: responsibilities.map(el => el.trim()).filter(el => !!el)
            });
    
            if (!response) return;
        } else {
            setEdit(null);
        }

        router.push(ACCOUNT_VACANCIES);
    }

    return (
        <section className="m-5 bg-white p-5 rounded-2xl shadow-2xl max-w-xl lg:p-10 md:mx-auto md:my-10 relative min-h-[420px] flex flex-col justify-between">
            <form className="mx-auto my-5 md:my-10 space-y-3">
                <Input
                    state={{
                        value: title, 
                        onChange: handleChange(setTitle)
                    }}
                    label="Title"
                    type="text"
                />
                <Input
                    state={{
                        value: city, 
                        onChange: handleChange(setCity)
                    }}
                    label="Location"
                    type="text"
                />
                <Input
                    state={{
                        value: salary, 
                        onChange: handleChange(setSalary)
                    }}
                    label="Salary per month"
                    type="number"
                />    
                {conditions.map((condition, idx) => (
                    <Input
                        key={`condition_${idx}`}
                        state={{
                            value: condition, 
                            onChange: handleChange((value) => setConditions([ ...(conditions.map((el, idex) => idex === idx ? value : el)) ]))
                        }}
                        label={`Condition ${idx + 1}`}
                        type="text"
                    />
                ))}
                <Button
                    type="transparent"
                    label="Add More"
                    onClick={setConditions.bind(null, [ ...conditions, "" ])}
                />
                {requirements.map((requirement, idx) => (
                    <Input
                        key={`requirement_${idx}`}
                        state={{
                            value: requirement, 
                            onChange: handleChange((value) => setRequirements([ ...(requirements.map((el, idex) => idex === idx ? value : el)) ]))
                        }}
                        label={`Requirement ${idx + 1}`}
                        type="text"
                    />
                ))}
                <Button
                    type="transparent"
                    label="Add More"
                    onClick={setRequirements.bind(null, [ ...requirements, "" ])}
                />
                {responsibilities.map((responsibility, idx) => (
                    <Input
                        key={`responsibility_${idx}`}
                        state={{
                            value: responsibility, 
                            onChange: handleChange((value) => setResponsibilities([ ...(responsibilities.map((el, idex) => idex === idx ? value : el)) ]))
                        }}
                        label={`Responsibility ${idx + 1}`}
                        type="text"
                    />
                ))}
                <Button
                    type="transparent"
                    label="Add More"
                    onClick={setResponsibilities.bind(null, [ ...responsibilities, "" ])}
                />
                <Button
                    type="black"
                    label={vacancy ? "Edit" : "Create"}
                    onClick={handleCreate}
                    isSubmit
                />
            </form>
        </section>
    );
}

export default VacancyForm