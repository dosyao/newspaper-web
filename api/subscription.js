import axios from "axios";

import { API_PREFIX, headers, STRIPE_API_PREFIX, STRIPE_SECRET } from "../constants/common";

export const stripeSession = async ({ successUrl, failureUrl, priceId, email }) => {
    try {
        const response = await axios.post(`${API_PREFIX}/subscription/payment`, {
            priceId, successUrl, failureUrl, customerEmail: email
        }   );
        console.log(response);
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
        const response = await axios.post(`${API_PREFIX}/subscription/subscribe`, {
            user_id: userId,
            session_id: sessionId
        }, { headers });

        return response.data.is_success;
    } catch (err) {
        return null;
    }
}
