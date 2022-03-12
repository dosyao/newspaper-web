import axios from "axios";

import { API_PREFIX, headers, STRIPE_API_PREFIX, STRIPE_SECRET } from "../constants/common";

export const subscribe = async ({ successUrl, failureUrl, priceId, email }) => {
    try {
        const response = await axios.post(`${API_PREFIX}/payment/create`, {
            priceId, successUrl, failureUrl, customerEmail: email
        }, { headers });

        return response.data.sessionId;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const loadProduct = async () => {
    try {
        const response = await axios.get(`${STRIPE_API_PREFIX}/v1/products?key=${STRIPE_SECRET}`);

        return response.data.data[0];
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const loadPrice = async () => {
    try {
        const response = await axios.get(`${STRIPE_API_PREFIX}/v1/prices?key=${STRIPE_SECRET}`);

        return response.data.data[0];
    } catch (err) {
        console.error(err);
        return null;
    }
}
