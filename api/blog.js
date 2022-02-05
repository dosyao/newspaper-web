import axios from "axios";

export const loadCategories = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_PREFIX}/categories`);
    console.log(response);
}
