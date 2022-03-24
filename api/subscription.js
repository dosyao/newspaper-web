import axios from "axios";

import { API_PREFIX, headers, STRIPE_API_PREFIX, STRIPE_SECRET } from "../constants/common";

export const stripeSession = async ({ successUrl, failureUrl, priceId, email }) => {
    try {
        const response = await axios.post(`${API_PREFIX}/subscription/payment`, {
            priceId, successUrl, failureUrl, customerEmail: email
        }, { headers });

        return response.data;
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

export const subscribe = async ({ sessionId, userId }) => {
    try {
        const response = await axios.post(`${API_PREFIX}/subscription/add`, {
            userId,
            sessionId
        }, { headers });

        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const loadSubscription = async userId => {
    try {
        const response = await axios.get(`${API_PREFIX}/subscription/user/${userId}`);

        if (!response.data) return null;

        if ((new Date(response.data.createdDateTime).getDate() + 30) < new Date().getDate()) {
            await deleteSubscription(response.data.id);
            return null;
        }

        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const deleteSubscription = async id => {
    try {
        const response = await axios.delete(`${API_PREFIX}/subscription/delete/${id}`, null, { headers });

        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}
