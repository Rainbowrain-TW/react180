import { useState } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [color, setColor] = useState("black");

    function getRandomColor() {
        const letters1 = '456789ABC';
        const letters2 = '0123456789ABCDEF';

        let newColor = '#';
        for (let i = 0; i < 6; i++) {
            newColor += i % 2 === 0 ?
                letters1[Math.floor(Math.random() * 9)] :
                letters2[Math.floor(Math.random() * 16)];
        }
        setColor(newColor);
    }

    return (
        <div className={styles.site} style={{ "background-color": color }}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.myButton} onClick={getRandomColor}>
                Click Me!
            </div>
        </div>
    );
}

export default Day;

//Day 3 - Get a Random Color Background - origin website: https://jenniferdewalt.com/random_background.html