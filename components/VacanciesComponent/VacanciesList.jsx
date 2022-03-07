import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Accordion, AccordionItem } from "react-sanfona";
import useVacancies from "../../hooks/useVacancies";

const Pagination = dynamic(() => import("../UI/Pagination"));

const hrefBuilder = (page) => {
    let path = `/vacancies`;

    if (page > 1) path += `/page/${page}`;

    return path;
}

const VacanciesList = () => {
    const router = useRouter();
    const { vacancies, page, totalPages, total } = useVacancies();

    if (!vacancies?.length) return null;

    const handleClick = (data) => {
        const nextPage = data.selected + 1;
        let path = `/vacancies`;

        if (nextPage > 1) path += `/page/${nextPage}`;

        router.push(path);
    }

    return (
        <section 
            className="max-w-7xl w-full mx-auto"
            style={{ minHeight: "calc(100vh - 78px - 112px)" }}
        >
            <Head>
                <title>Vacancies | Newspaper</title>
            </Head>
            <Accordion className="max-w-xl mx-auto my-5 md:my-10" allowMultiple>
                {vacancies.map(vacancy => (
                    <AccordionItem
                        key={vacancy.id}
                        title={`${vacancy.title}, ${vacancy.company}`}
                        className="w-full rounded-xl shadow-xl p-5 font-bold text-xl md:px-10 mb-0"
                        expanded
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
            {total > 5 && (
                <Pagination
                    totalPages={totalPages}
                    page={page}
                    hrefBuilder={hrefBuilder}
                    onClick={handleClick}
                />
            )}
        </section>
    );
}

export default VacanciesList;