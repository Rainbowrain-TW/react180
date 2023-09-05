import { useState, useEffect, useRef } from 'react';
import styles from './day.module.css';

const typeEnum = {
    'rain': styles.rain,
    'heart': styles.heart,
    'bacon': styles.bacon,
}

const Cloud = ({ type, num }) => {
    const [drops, setDrops] = useState([]);
    const dropsLength = useRef(0);

    useEffect(() => {
        console.log('type :>> ', type);
        const interval = setInterval(() => {
            // setDrops(drops => [...drops, <Drop type={type} key={drops.length} />]);
            setDrops(drops => [...drops, drops.length]);
            dropsLength.current += 1;
            if (dropsLength.current > num) {
                console.log(`drops.length(${dropsLength.current}) > ${num} :>> `, dropsLength > num);
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [type]);

    return (
        <>
            <div className={styles.cloud}>
            </div>
            <div className={styles.rainContainer}>
                {drops.map((drop, i) => <Drop type={type} key={i} />)}
            </div>
        </>
    );
}

const Drop = ({ type }) => {
    const [className, setClassName] = useState(typeEnum[type]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const yRef = useRef(y);


    useEffect(() => {
        setX(Math.random() * 350);

        const interval = setInterval(() => {
            setY(y => y + 2);
            yRef.current += 2;
            if (yRef.current > 1000) {
                setY(0);
                yRef.current = 0;
            }
        }, 25);
    }, []);

    useEffect(() => {
        setClassName(typeEnum[type]);
    }, [type]);

    return (
        <div className={className} style={{ top: y, left: x }}>
        </div>
    );
}

export default Cloud;