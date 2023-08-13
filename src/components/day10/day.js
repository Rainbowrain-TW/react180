import { useState } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <h1>Day {count}</h1>
        </div>
    );
}

export default Day;

//Day 10 - Sushi Jiggler - origin website: https://jenniferdewalt.com/sushi_jiggler.html