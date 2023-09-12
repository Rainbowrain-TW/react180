import { useState } from 'react';
import styles from './day.module.css';
import WavePanel from './wavePanel';

const Day = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <WavePanel numOfHorizontal={40} numOfVertical={25} />
        </div>
    );
}

export default Day;

//Day 32 - Particle Waves - origin website: https://jenniferdewalt.com/particle_waves.html