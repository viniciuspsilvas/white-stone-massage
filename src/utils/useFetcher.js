import { useEffect, useState } from 'react';
import api from './api';

export default function useFetcher(url, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            //setIsLoading(true);
            try {
                const response = await api.get(url);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false)
            }
        };
        fetchData();
    }, []);
    return [data, error, isLoading];
};