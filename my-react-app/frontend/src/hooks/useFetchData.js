import { useCallback, useEffect, useState } from 'react';

export const useFetchData = (resource = 'todos') => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = useCallback(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(res => res.json())
            .then(data => {
                console.log('----------------------');
                console.log(data);
                console.log('----------------------');
                setData(data);
                setError(null);
            }).catch(err => {
            console.error(err);
            setError(err);
            setData([]);
        });
    }, [resource])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        data,
        error,
        fetchData,
    };
}