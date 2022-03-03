import axios from "axios";

import { API_PREFIX } from "../constants/common";

export const loadCategories = async () => {
    try {
        const response = await axios.get(`${API_PREFIX}/category`);

        if (!response?.data?.length) return null;

        const categories = response.data.map(el => ({ count: el.count, ...el.category }));

        return categories;
    } catch {
        return null;
    }
}

export const loadPosts = async (page = 1, perPage = 100, categoryId = null, excludeId = null) => {
    try {
        let queryParams = `?page=${page}&per_page=${perPage}`;
        if (categoryId) queryParams += `&categoryId=${categoryId}`;
        if (excludeId) queryParams += `&excludeId=${excludeId}`

        const response = await axios.get(`${API_PREFIX}/posts${queryParams}`);

        return response.data;
    } catch {
        return null;
    }
}

export const loadPostBySlug = async (slug) => {
    try {
        const response = await axios.get(`${API_PREFIX}/posts/${slug}`);

        return response.data;
    } catch {
        return null;
    }
}
