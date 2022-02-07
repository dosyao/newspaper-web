import axios from "axios";

export const loadCategories = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_PREFIX}/category`);
    if (response.status !== 200) return null;

    return response.data;
}

export const loadPosts = async ({ page = 1, perPage = 100, categoryId }) => {
    let queryParams = `?page=${page}&per_page=${perPage}`;
    if (categoryId) queryParams += `&category=${categoryId}`;

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_PREFIX}/posts${queryParams}`);
    if (response.status !== 200) return null;

    return response.data;
}
