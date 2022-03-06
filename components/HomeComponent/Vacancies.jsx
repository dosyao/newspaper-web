import Link from "next/link";
import { Accordion, AccordionItem } from "react-sanfona";
import useHome from "../../hooks/useHome";
import styles from "./HomeComponent.module.css";

const Vacancies = () => {
    const { vacancies } = useHome();

    if (!vacancies?.length) return null;

    return (
        <section className={styles.cardsSection}>
            <h2 className={styles.label}>
                The Best Vacancies
            </h2>
            <Accordion className="max-w-xl mx-auto">
                {vacancies.map(vacancy => (
                    <AccordionItem
                        key={vacancy.id}
                        title={`${vacancy.title}, ${vacancy.company}`}
                        className="w-full rounded-xl shadow-xl p-5 font-bold text-xl md:px-10 mb-0"
                    >
                        <ul className="text-lg font-normal space-y-1">
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
                                <Link href={`/vacancies/${vacancy.id}`}>
                                    <a className="text-cyan-500 hover:underline">
                                        See more...
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default Vacancies;
