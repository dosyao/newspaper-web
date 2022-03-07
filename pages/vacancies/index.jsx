import { createContext } from "react";
import { loadVacancies, loadVacancyById } from "../../api/vacancies";
import VacanciesComponent from "../../components/VacanciesComponent";

export const VacanciesState = createContext();

const Vacancies = ({ vacanciesStore }) => (
    <VacanciesState.Provider value={vacanciesStore}>
        <VacanciesComponent />   
    </VacanciesState.Provider>
);

export const getStaticProps = async ({ params }) => {
    const vacancyId = params?.vacancyId;
    const resp = !vacancyId ? await loadVacancies(1, 10) : null;
    const vacancy = vacancyId ? await loadVacancyById(vacancyId) : null;

    if (!resp && !vacancyId || vacancyId && !vacancy) {
        return {
            notFound: true
        }
    }

    const vacanciesStore = {
        vacancies: resp?.vacancies ?? null,
        vacancy: vacancy ?? null,
        page: resp?.page ?? null,
        total: resp?.total ?? null,
        totalPages: resp?.total_pages ?? null
    };

    return {
        revalidate: 200,
        props: {
            vacanciesStore
        }
    }
}

export default Vacancies;
