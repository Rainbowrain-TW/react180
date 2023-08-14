import { useRef, useEffect, useState } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [colorHex, setColorHex] = useState('#000000');
    const [time, setTime] = useState('00:00:00');
    const secRef = useRef(0);


    const updateTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        secRef.current += (Math.floor((Math.random() * 3)) + 2);
        secRef.current = secRef.current > 255 ? 0 : secRef.current;

        const hoursHex = (hours + 100).toString(16).padStart(2, '0');
        const minutesHex = (minutes + 20).toString(16).padStart(2, '0');
        const secondsHex = secRef.current.toString(16).padStart(2, '0');

        const time = `${("" + hours).padStart(2, '0')}:${("" + minutes).padStart(2, '0')}:${("" + seconds).padStart(2, '0')}`;
        setTime(time);

        const colorHex = `#${hoursHex}${minutesHex}${secondsHex}`;
        setColorHex(colorHex);

        setTimeout(updateTime, 1000);
    }

    useEffect(() => {
        updateTime();
    }, []);

    return (
        <div className={styles.site} style={{ backgroundColor: `${colorHex}` }}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <p className={styles.text}>現在時間</p>
            <div className={styles.clock}>{time}
                <div className={styles.effect}>11:11:11</div>
                <div className={styles.effect}>22:22:22</div>
                <div className={styles.effect}>03:33:33</div>
                <div className={styles.effect}>04:44:44</div>
                <div className={styles.effect}>05:55:55</div>
                <div className={styles.effect}>12:34:56</div>
                <div className={styles.effect}>23:45:07</div>
            </div>
            <p className={styles.text}>現在顏色</p>
            <div className={styles.color}>{colorHex}
                <div className={styles.effect}>#000000</div>
                <div className={styles.effect}>#111111</div>
                <div className={styles.effect}>#222222</div>
                <div className={styles.effect}>#333333</div>
                <div className={styles.effect}>#444444</div>
                <div className={styles.effect}>#555555</div>
                <div className={styles.effect}>#666666</div>
                <div className={styles.effect}>#777777</div>
                <div className={styles.effect}>#888888</div>
                <div className={styles.effect}>#999999</div>
                <div className={styles.effect}>#AAAAAA</div>
                <div className={styles.effect}>#BBBBBB</div>
                <div className={styles.effect}>#CCCCCC</div>
                <div className={styles.effect}>#DDDDDD</div>
                <div className={styles.effect}>#EEEEEE</div>
                <div className={styles.effect}>#FFFFFF</div>
            </div>
        </div>
    );
}

export default Day;

//Day 11 - Color Clock - origin website: https://jenniferdewalt.com/color_clock.html