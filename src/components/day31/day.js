import { useState, useEffect, useRef } from 'react';
import styles from './day.module.css';
import Throbber from './throbber';

const messages = [
    "Click anywhere to begin.",
    "That's odd. Try clicking somewhere else.",
    "So weird! Maybe try the other side?",
    "Welp. I got nothing else for you. You're on your own now."
]

const Day = () => {
    const [throbbers, setThrobbers] = useState([]);
    const countRef = useRef(0);
    const siteRef = useRef(null);

    useEffect(() => {

        function clickHandler(e) {
            const rdn = Math.floor(Math.random() * 13);
            setThrobbers((prevThrobbers) => [...prevThrobbers,
            countRef.current == 0 ?
                { x: 0, y: 0, imgNum: 5 } :
                { x: e.clientX, y: e.clientY, imgNum: rdn }
            ]);

            countRef.current = countRef.current + 1;
        }

        siteRef.current.addEventListener('click', clickHandler);

        return () => { siteRef.current.removeEventListener('click', clickHandler); }

    }, []);

    return (
        <div ref={siteRef} className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={`${styles.message} ${countRef.current >= 4 ? styles.fadeOut : ""}`}>
                {countRef.current < 4 ? messages[countRef.current] : messages[3]}
            </div>
            <div className={styles.demoThrobberContainer}>
                {countRef.current > 0 ? <Throbber data={throbbers[0]} /> : ""}
            </div>
            {
                throbbers.map((throbber, index) => {
                    console.log('throbber :>> ', throbber);
                    if (index > 0) {
                        return (
                            <Throbber key={index} data={throbber} />
                        );
                    }
                })
            }
        </div>
    );
}

export default Day;

//Day 31 - Endless Throbbers - origin website: https://jenniferdewalt.com/endless_throbbers.html