import axios from "axios";

export const fetchUser = async (username: string) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}`
        );
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.status === 404)
            throw new Error(`User "${username}" was not found. Please try again with a different username. `);
    }

};