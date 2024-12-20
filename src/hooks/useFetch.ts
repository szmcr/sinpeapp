import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants/API";


export const useFetch = (endpoint: string) => {
    const [data, setData] = useState<any>(null);
    const [refreshing, setRefreshing] = useState(false);
    const [initalLoading, setInitialLoading] = useState(true);

    const fetch = async (endpoint: string) => {
        try {
            const res = await axios.get(`${API_URL}/${endpoint}`);
            if (res.status == 200) {
                setData(res.data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setRefreshing(false);
            setInitialLoading(false);
        }
    };

    useEffect(() => {
        fetch(endpoint);
    }, []);

    return { data, refreshing, initalLoading, fetch };
};