import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { VACANCIES, VACANCY } from "../../constants/routes";
import MainLayout from "../../layouts/MainLayout";

const VacanciesList = dynamic(() => import("./VacanciesList"));
const Vacancy = dynamic(() => import("./Vacancy"));

const VacanciesComponent = () => {
    const { pathname } = useRouter();

    const renderPage = () => {
        switch (pathname) {
            case VACANCIES:
                return <VacanciesList />;
            case VACANCY:
                return <Vacancy />;
            default:
                return null;
        }
    }

    return (
        <MainLayout>
            {renderPage()}
        </MainLayout>
    );
}

export default VacanciesComponent;
