import axios from "axios";

const apiPrefix = process.env.NEXT_PUBLIC_API_PREFIX;
const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET;

export const signup = async ({ username, email, password, type }) => {
    try {
        const response = await axios.post(`${apiPrefix}/Account/Register`, {
            username,
            email,
            password,
            type
        }, {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        console.log(response);
        if (!response?.data?.token) return null;
        return response.data.token;
    } catch (err) {
        console.error(err);
        return null;
    }
}
