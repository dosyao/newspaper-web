import { createContext } from "react";
import VacanciesComponent from "../../components/VacanciesComponent";

export const VacanciesState = createContext();

const Vacancies = ({ vacanciesStore }) => (
    <VacanciesState.Provider value={vacanciesStore}>
        <VacanciesComponent />   
    </VacanciesState.Provider>
);

export const getStaticProps = async ({ params }) => {
    const vacancyId = params?.vacancyId;
    const resp = (await import("../../public/data/vacancies.json"))?.default;
    const vacancy = resp.vacancies.find(el => el.id === vacancyId);

    if (!resp || vacancyId && !vacancy) {
        return {
            notFound: true
        }
    }

    const vacanciesStore = {
        vacancies: resp.vacancies,
        vacancy: vacancy ?? null,
        page: resp.page,
        total: resp.total,
        totalPages: resp.totalPages
    };

    return {
        revalidate: 200,
        props: {
            vacanciesStore
        }
    }
}

export default Vacancies;
