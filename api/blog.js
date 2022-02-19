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
// TODO: Add query params
export const loadPosts = async (page = 1, perPage = 100, categoryId = null) => {
    try {
        let queryParams = `?page=${page}&per_page=${perPage}`;
        if (categoryId) queryParams += `&category=${categoryId}`;

        const response = await axios.get(`${apiPrefix}/posts`);

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
