import { useEffect, useState } from 'react';

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    // const promiseHandler = (resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(100);
    //     }, 5_000);
    // }

    // const myPromise = new Promise(promiseHandler);
    // myPromise
    //     .then((res) => {
    //         return Promise.resolve(res * 20);
    //     })
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });


    useEffect(() => {
        // component did mount
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                console.log('----------------------');
                console.log(data);
                console.log('----------------------');
                setTasks(data);
            }).catch(err => console.log(err));

        // optional method
        return () => {
            // On unmount
        }
    }, []);

    return tasks;
}