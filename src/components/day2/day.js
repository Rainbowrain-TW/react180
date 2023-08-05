import { useState } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Day {count}</h1>
        </>
    );
}

export default Day;

//Day 2 - Make a Deal! - origin website: https://jenniferdewalt.com/make_a_deal.html