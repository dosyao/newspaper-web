import vacancies from "./index";

export { getStaticProps } from "./index";

export const getStaticPaths = async () => {
    const resp = (await import("../../public/data/vacancies.json"))?.default;
    const paths = resp.vacancies.map(el => ({
        params: {
            vacancyId: el.id
        }
    }));

    return {
        paths,
        fallback: "blocking"
    }
}

export default vacancies;
