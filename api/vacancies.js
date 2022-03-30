import axios from "axios";

import { API_PREFIX, SPLITER, headers } from "../constants/common";

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

export const createVacancy = async (vacancy) => {
    try {
        vacancy.requirements = vacancy.requirements.join(SPLITER);
        vacancy.conditions = vacancy.conditions.join(SPLITER);
        vacancy.responsibilities = vacancy.responsibilities.join(SPLITER);
        const response = await axios.post(`${API_PREFIX}/vacancies/add`, vacancy, { headers });

        if (response?.status !== 200) return null;

        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const updateVacancy = async (vacancy) => {
    try {
        vacancy.requirements = vacancy.requirements.join(SPLITER);
        vacancy.conditions = vacancy.conditions.join(SPLITER);
        vacancy.responsibilities = vacancy.responsibilities.join(SPLITER);
        const response = await axios.post(`${API_PREFIX}/vacancies/edit`, vacancy, { headers });

        if (response?.status !== 200) return null;

        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const deleteVacancy = async (id) => {
    try {
        const response = await axios.delete(`${API_PREFIX}/vacancies/delete/${id}`, { headers });
        return response.status === 200;
    } catch (err) {
        console.error(err);
        return false;
    }
}
