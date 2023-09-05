import { useState } from 'react';
import styles from './day.module.css';
import Cloud from './cloud';

const Day = () => {
    const [type, setType] = useState('heart');

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.container}>
                <div className={styles.buttons}>
                    <button className={styles.typeButton} onClick={() => setType("rain")}>Rain</button>
                    <button className={styles.typeButton} onClick={() => setType("heart")}>Heart</button>
                    <button className={styles.typeButton} onClick={() => setType("bacon")}>Bacon</button>
                </div>
                <div className={styles.cloudContainer}>
                    <Cloud type={type} num={10} />
                </div>
            </div>
        </div>
    );
}

export default Day;

//Day 27 - Rain Maker - origin website: https://jenniferdewalt.com/rain_maker.html