import { useState } from 'react';
import styles from './day.module.css';

import Tile from './tile';

const Day = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.canvas}>
                {
                    [...Array(14 * 28)].map((e, i) => {
                        return <Tile key={i} />;
                    })
                }
            </div>
        </div>
    );
}

export default Day;

//Day 7 - Technicolor Boxes - origin website: https://jenniferdewalt.com/technicolor_boxes.html