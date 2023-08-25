import { useEffect, useState } from 'react';
import styles from './day.module.css';

const FireFly = ({ x, y, mainColor, secondaryColor, size }) => {
    const [isFlashing, setIsFlashing] = useState(false);

    useEffect(() => {
        setIsFlashing(true);
        setTimeout(() => {
            setIsFlashing(false);
        }, 2000);
    }, []);

    return (
        <div className={styles.fireFly}
            style={{
                left: x,
                top: y,
                backgroundColor: mainColor,
                width: size * 0.85,
                height: size
            }}>
            <div className={`${styles.fireFlyLight} ${isFlashing ? styles.flash : ""}`}
                style={{
                    backgroundColor: secondaryColor,
                    width: size,
                    height: size,
                }}>
            </div>
        </div >
    );
}

export default FireFly;

//Day 20 - Smushing Fireflies - origin website: https://jenniferdewalt.com/smushing_fireflies.html