import axios from "axios";

import { API_PREFIX } from "../constants/common";

const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

export const getAccountVacancies = async (userId) => {
    try {
        const response = await axios.get(`${API_PREFIX}/vacancies?page=1&per_page=100&userId=${userId}`);

        if (!response?.data?.vacancies) return null;
        return response.data.vacancies;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const createVacancy = async (vacancy) => {
    try {
        const response = await axios.post(`${API_PREFIX}/vacancies/add`, vacancy, { headers });

        if (response?.status !== 200) return null;
        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}
