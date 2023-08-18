import { useState } from 'react';
import styles from './day.module.css';

import DropBox from './dropBox';

const Day = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            {
                new Array(100).fill(0).map((_, i) => {
                    return <DropBox key={i} />
                })
            }
        </div>
    );
}

export default Day;

//Day 15 - Dropping Boxes - origin website: https://jenniferdewalt.com/dropping_boxes.html