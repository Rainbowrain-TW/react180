import { useEffect, useState } from 'react';
import styles from './day.module.css';

import Ball from './ball';

const Day = () => {
    const ballCount = 19;

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            {
                Array(ballCount).fill(0).map((_, index) => {
                    return (
                        <Ball key={index} />
                    );
                })
            }
        </div>
    );
}

export default Day;

//Day 16 - Caterpillar - origin website: https://jenniferdewalt.com/caterpillar.html