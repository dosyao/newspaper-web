import { createContext } from "react";
import { loadPosts } from "../api/blog";
import { loadVacancies } from "../api/vacancies";
import HomeComponent from "../components/HomeComponent/HomeComponent";

export const HomeStore = createContext();

const HomePage = ({ homeState }) => (
    <HomeStore.Provider value={homeState}>
        <HomeComponent />
    </HomeStore.Provider>
);

export const getStaticProps = async () => {
    const postsData = await loadPosts(1, 3);
    const resp = await loadVacancies(1, 5);

    const homeState = {
        posts: postsData?.posts ?? null,
        vacancies: resp.vacancies
    };

    return {
        revalidate: 200,
        props: {
            homeState
        }
    }
}

export default HomePage;
