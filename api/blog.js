import axios from "axios";

export const loadCategories = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_PREFIX}/category`);
    
    if (response.status !== 200) return null;

    return response.data;
}
