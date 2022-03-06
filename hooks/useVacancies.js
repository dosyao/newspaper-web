import { useContext } from "react";
import { VacanciesState } from "../pages/vacancies";

function useVacancies() {
    const state = useContext(VacanciesState);

    return state;
}

export default useVacancies;
