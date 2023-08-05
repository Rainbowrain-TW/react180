import { useState } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.site}>
            <h1>Day {count}</h1>
        </div>
    );
}

export default Day;