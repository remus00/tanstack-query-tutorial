import axios from 'axios';
import { useEffect, useState } from 'react';

export const OldAxios = () => {
    /* OLD WAY TO USE AXIOS */
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8080/todos')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return <>{JSON.stringify(data)}</>;
};
