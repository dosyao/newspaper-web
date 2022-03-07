import axios from "axios";

import { API_PREFIX, SPLITER } from "../constants/common";

export const loadVacancies = async (page, perPage) => {
    try {
        const response = await axios.get(`${API_PREFIX}/vacancies?page=${page}&per_page=${perPage}`);

        if (!response?.data?.vacancies) return null;
        const mutatedVacancies = response.data.vacancies.map(vacancy => {
            const mutatedVacancy = { ...vacancy };
            mutatedVacancy.requirements = vacancy.requirements.split(SPLITER);
            mutatedVacancy.conditions = vacancy.conditions.split(SPLITER);
            mutatedVacancy.responsibilities = vacancy.responsibilities.split(SPLITER);

            return mutatedVacancy;
        });

        return { ...response.data, vacancies: mutatedVacancies };
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const loadVacancyById = async (id) => {
    try {
        const response = await axios.get(`${API_PREFIX}/vacancies/${id}`);

        if (!response.data) return null;

        const mutatedVacancy = { ...response.data };
        mutatedVacancy.requirements = mutatedVacancy.requirements.split(SPLITER);
        mutatedVacancy.conditions = mutatedVacancy.conditions.split(SPLITER);
        mutatedVacancy.responsibilities = mutatedVacancy.responsibilities.split(SPLITER);

        return mutatedVacancy;
    } catch {
        return null;
    }
}
