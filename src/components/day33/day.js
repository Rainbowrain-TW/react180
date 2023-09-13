import { useEffect, useState } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [words, setWords] = useState([]);
    const [word, setWord] = useState('');
    const [start, setStart] = useState(true);


    const getWords = async () => {
        const response = await fetch('./data/words.json');
        const data = await response.json();
        setWords(data);
    }

    const getWord = () => {
        const index = Math.floor(Math.random() * words.length);
        const word = words[index];
        setWord(word);
    }

    useEffect(() => {
        getWords();
    }, []);

    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                getWord();
            }, 50);
            return () => clearInterval(interval);
        }
    }, [start, words]);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        Random Word Generator
                    </div>
                </div>
                <div className={styles.wordContainer}>
                    {word}
                </div>
                <div className={styles.buttonContainer}>
                    <button className={`${styles.switchButton} ${start ? styles.stop : styles.start}`}
                        onClick={() => setStart(!start)}
                    >
                        {`${start ? "Stop" : "Start"}`}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Day;

//Day 33 - Random Word Generator - origin website: https://jenniferdewalt.com/random_word.html