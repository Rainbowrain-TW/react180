import { useState, useEffect } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [count, setCount] = useState(0);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        if (count > 0) {
            setHide(true);
        }
    }, [count]);

    useEffect(() => {
        //set focus on textarea
        document.querySelector("textarea").focus();
    }, []);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.email}>
                <div className={`${styles.main} ${hide ? styles.hide : ""}`}>
                    <h1 className={styles.title}>What is Your Email's Impact?</h1>
                    <div className={styles.description}>Emails should be short and to the point for maximum impact.</div>
                    <h2 className={styles.subtitle}>Is your email too long?</h2>
                    <div className={styles.description}>Start typing to see a visual representation of how long your email is!</div>
                </div>
                <textarea className={styles.input}
                    onChange={(e) => setCount(e.target.value.length)}
                    onBlur={(e) => e.target.focus()}
                />
                <div className={styles.count}>Character Count: {count}</div>
            </div>
        </div>
    );
}

export default Day;

//Day 24 - What is Your Email's Impact? - origin website: https://jenniferdewalt.com/email_impact.html