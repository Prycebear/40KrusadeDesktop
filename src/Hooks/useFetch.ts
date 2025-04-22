import { useState, useEffect } from 'react';

export default function useFetch(url: string, options: RequestInit = {}, includeAuth: boolean = true){
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const token = localStorage.getItem('authToken'); // Replace with your storage method if needed

                const headers = new Headers(options.headers || {});
                if (includeAuth && token) {
                    headers.append('Authorization', `Bearer ${token}`);
                }

                const response = await fetch(url, {
                    ...options,
                    headers,
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const json = await response.json();
                setData(json);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(options), includeAuth]);

    return { data, error, loading };
};
