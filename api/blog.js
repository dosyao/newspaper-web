import axios from "axios";

const apiPrefix = process.env.NEXT_PUBLIC_API_PREFIX;

export const loadCategories = async () => {
    try {
        const response = await axios.get(`${apiPrefix}/category`);

        return response.data;
    } catch {
        return null;
    }
}

export const loadPosts = async (page = 1, perPage = 100, categoryId = null, excludeId = null) => {
    try {
        let queryParams = `?page=${page}&per_page=${perPage}`;
        if (categoryId) queryParams += `&categoryId=${categoryId}`;
        if (excludeId) queryParams += `&excludeId=${excludeId}`

        const response = await axios.get(`${apiPrefix}/posts${queryParams}`);

        return response.data;
    } catch {
        return null;
    }
}

export const loadPostBySlug = async (slug) => {
    try {
        const response = await axios.get(`${apiPrefix}/posts/${slug}`);

        return response.data;
    } catch {
        return null;
    }
}
