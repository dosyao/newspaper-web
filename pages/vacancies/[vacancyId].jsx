import { loadVacancies } from "../../api/vacancies";
import vacancies from "./index";

export { getStaticProps } from "./index";

export const getStaticPaths = async () => {
    const resp = await loadVacancies(1, 1000);
    const paths = resp.vacancies.map(el => ({
        params: {
            vacancyId: el.id.toString()
        }
    }));

    return {
        paths,
        fallback: "blocking"
    }
}

export default vacancies;
