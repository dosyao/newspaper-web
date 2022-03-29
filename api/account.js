import axios from "axios";

import { API_PREFIX, SPLITER, headers } from "../constants/common";

export const getAccountVacancies = async (userId) => {
    try {
        const response = await axios.get(`${API_PREFIX}/vacancies?page=1&per_page=100&userId=${userId}`);

        if (!response?.data?.vacancies) return null;
        return response.data.vacancies.map(vacancy => {
            const mutatedVacancy = { ...vacancy };
            mutatedVacancy.requirements = vacancy.requirements.split(SPLITER);
            mutatedVacancy.conditions = vacancy.conditions.split(SPLITER);
            mutatedVacancy.responsibilities = vacancy.responsibilities.split(SPLITER);

            return mutatedVacancy;
        });
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const updateUsername = async ({ userId, username }) => {
    try {
        const response = await axios.post(`${API_PREFIX}/account/edit`, {
            userid: userId,
            username
        }, { headers });

        if (response?.status !== 200) return null;

        response.data.token;
    } catch (err) {
        console.error(err);
        return null;
    }
}
