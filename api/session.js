import axios from "axios";

import { API_PREFIX } from "../constants/common";

const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

export const signup = async ({ username, email, password, type }) => {
    try {
        const response = await axios.post(`${API_PREFIX}/account/register`, {
            username,
            email,
            password,
            type
        }, { headers });

        if (!response?.data?.token) return null;
        return response.data.token;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const login = async ({ email, password }) => {
    try {
        const response = await axios.post(`${API_PREFIX}/account/login`,{
            email, password
        }, { headers });

        if (!response?.data?.token) return null;
        return response.data.token;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const validate = async (token) => {
    try {
        const response = await axios.post(`${API_PREFIX}/account/validation`, {
            token
        }, { headers });

        return response?.data.isValid;
    } catch (err) {
        console.error(err);
        return false;
    }
}
