import { deleteVacancy } from "../../api/vacancies";
import { accountActions } from "../../constants/common";
import Button from "../UI/Button";

const VacanciesList = ({ vacancies, setAction, setEdit }) => {
    const handleEdit = (vacancy) => {
        return () => {
            setEdit(vacancy);
            setAction(accountActions.EDIT);
        }
    }

    const handleDelete = (id) => {
        return async () => {
            await deleteVacancy(id);
        }
    }

    return (
        <section className="m-5 bg-white p-5 rounded-2xl shadow-2xl max-w-xl lg:p-10 md:mx-auto md:my-10 relative min-h-[420px] flex flex-col justify-between">
            <div className="max-w-xl mx-auto my-5 md:my-10">
                {vacancies?.length ? vacancies.map(vacancy => (
                    <div
                        key={vacancy.id}
                        className="w-full border-b-2 p-5 font-bold text-xl md:px-10 mb-0"
                    >
                        <ul className="text-lg font-normal space-y-1">
                            <li className="font-semibold text-lg">
                                {vacancy.title}
                            </li>
                            <li className="font-semibold">
                                Salary: <span className="text-green-500 font-black">{new Intl.NumberFormat('en-us', {
                                    style: "currency",
                                    currency: "USD"
                                }).format(vacancy.salary)}</span> per month
                            </li>
                            <li className="font-semibold text-gray-500">
                                City: {vacancy.city}
                            </li>
                            <li className="font-normal">
                                <a className="text-black hover:underline cursor-pointer mr-2">
                                    Reviews
                                </a>
                                <span className="text-gray-500">|</span>
                                <a
                                    className="text-cyan-500 hover:underline cursor-pointer mx-2"
                                    onClick={handleEdit(vacancy)}
                                >
                                    Edit
                                </a>
                                <span className="text-gray-500">|</span>
                                <a
                                    className="ml-2 text-red-500 hover:underline cursor-pointer"
                                    onClick={handleDelete(vacancy.id)}
                                >
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </div>
                )) : (
                    <h2 className="text-center font-bold text-3xl">
                        You have&apos;t vacancies yet.
                    </h2>
                )}
            </div>
            <div className="mt-auto items-center space-y-5 w-full flex flex-col">
                <Button
                    type="transparent"
                    label="Create"
                    onClick={setAction.bind(null, accountActions.ADD)}
                />
            </div>
        </section>
    );
}

export default VacanciesList;
