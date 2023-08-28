import { useState, useEffect } from 'react';
import styles from './day.module.css';

import Digital from './digital';

const Day = () => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(null);

    function timerStart() {
        setTimer(true);
    }

    function timerStop() {
        setTimer(false);
    }

    function timerReset() {
        setTimer(false);
        setCount(0);
    }

    function getSecondRight() {
        return Number(Math.floor((count / 10) % 60).toString().padStart(2, "0")[1]);
    }

    function getSecondLeft() {
        return Number(Math.floor((count / 10) % 60).toString().padStart(2, "0")[0]);
    }

    function getMinuteRight() {
        return Number(Math.floor((count / 600) % 60).toString().padStart(2, "0")[1]);
    }

    function getMinuteLeft() {
        return Number(Math.floor((count / 600) % 60).toString().padStart(2, "0")[0]);
    }

    function getHourRight() {
        return Number(Math.floor((count / 36000) % 60).toString().padStart(2, "0")[1]);
    }

    function gethourLeft() {
        return Number(Math.floor((count / 36000) % 60).toString().padStart(2, "0")[0]);
    }

    useEffect(() => {
        if (timer) {
            const interval = setInterval(() => {
                setCount(count => count + 1);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [timer]);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.stopwatch}>
                <div className={styles.display}>
                    {/* Hour */}
                    <Digital num={gethourLeft()} />
                    <Digital num={getHourRight()} />
                    <div className={styles.colon}>：</div>
                    {/* Minute */}
                    <Digital num={getMinuteLeft()} />
                    <Digital num={getMinuteRight()} />
                    <div className={styles.colon}>：</div>
                    {/* Second */}
                    <Digital num={getSecondLeft()} />
                    <Digital num={getSecondRight()} />
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={timerStart}>Start</button>
                    <button className={styles.button} onClick={timerStop}>Stop</button>
                    <button className={styles.button} onClick={timerReset}>Reset</button>
                </div>
                <div className={styles.irregularHexagon}></div>
            </div>
        </div>
    );
}

export default Day;

//Day 23 - Stopwatch - origin website: https://jenniferdewalt.com/stopwatch.html