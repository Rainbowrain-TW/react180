import { useRef, useState } from 'react';
import styles from './day.module.css';
import { click } from '@testing-library/user-event/dist/click';

const Day = () => {
    const [showResult, setShowResult] = useState(false);
    const resultRef = useRef();
    const inputRef = useRef();

    function clickHandler() {
        const userInput = inputRef.current.value;
        resultRef.current = userInput;
        setShowResult(true);
    }

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <header className={styles.nav}>
                <a href="/react180/day21" className={styles.dayTitle}>Teleprompter</a>
            </header>
            {!showResult &&
                <div className={styles.main}>
                    <div className={styles.textContainer}>
                        <p className={styles.text}>Enter your speech or other text below to have it returned in a teleprompter.</p>
                        <textarea ref={inputRef} className={styles.textarea} id="text" placeholder="Enter your text here"></textarea>
                        <button className={styles.submit} id="start" onClick={clickHandler}
                        >Teleprompt me!</button>
                    </div>
                </div>
            }
            {showResult &&
                <div className={styles.result}>
                    {resultRef.current}
                </div>
            }
        </div>
    );
}

export default Day;

//Day 21 - Teleprompter - origin website: https://jenniferdewalt.com/teleprompter.html