import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const loginUser = async (username: string, password: string): Promise<string> => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    const token = response.data.jwt;
    if (!token) {
        throw new Error('No token returned from backend');
    }
    return token;
};

export const registerUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            password
        });
        return response.data; // In case you want to return the response or token
    } catch (error) {
        throw new Error('Registration failed. Please try again.');
    }
};

export const logoutUser = async () => {
    try {
    } catch (error) {
        console.error("Error logging out:", error);
    }
};

