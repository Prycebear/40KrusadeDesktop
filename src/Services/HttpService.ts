import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export class HttpService<T> {
    private axiosInstance: AxiosInstance;
    private baseUrl: string;

    constructor(endpoint: string) {
        console.log('API base url:', API_BASE_URL);
        this.baseUrl = `${import.meta.env.VITE_API_URL}${endpoint}`;

        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
        });

        this.axiosInstance.interceptors.request.use(config => {
            const token = localStorage.getItem('authToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
    }

    async getAll(): Promise<T> {
        const response = await this.axiosInstance.get<T[]>('');
        return response.data;
    }

    async getById(id: number): Promise<T> {
        const response = await this.axiosInstance.get<T>(`/${id}`);
        return response.data;
    }

    async create(data: T): Promise<T> {
        const response = await this.axiosInstance.post<T>('/', data);
        return response.data;
    }

    async update(id: number, data: T): Promise<T> {
        const response = await this.axiosInstance.put<T>(`/${id}`, data);
        return response.data;
    }

    async delete(id: number): Promise<void> {
        await this.axiosInstance.delete(`/${id}`);
    }
}
