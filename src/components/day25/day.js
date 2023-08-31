import { useState, useEffect, useRef } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [score, setScore] = useState(0);
    const [words, setWords] = useState([]);
    const [word, setWord] = useState('');
    const [scrambledWord, setScrambledWord] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [chances, setChances] = useState(2);
    const [count, setCount] = useState(0);
    const hintMessageRef = useRef(null);
    const answerInputRef = useRef(null);
    const hintMessage = useRef("Here's your first word. Good Luck!");

    const getWords = async () => {
        const response = await fetch('./data/day25/words.json');
        const data = await response.json();
        setWords(data);
    }

    const getWord = () => {
        const index = Math.floor(Math.random() * words.length);
        const word = words[index];
        console.log('word :>> ', word);
        setWord(word);
        setScrambledWord(scramble(word));
    }

    const scramble = (word) => {
        const letters = word.split('');
        for (let i = letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = letters[i];
            letters[i] = letters[j];
            letters[j] = temp;
        }
        return letters.join(' ');
    }

    const CheckAnswer = () => {
        if (word === answerInputRef.current.value) {
            setScore(score + 1);
            setChances(2);
            getWord();
            hintMessage.current = "You got it! Here's your next word.";
        } else {
            setChances(chances - 1);

            if (chances === 0) {
                setScore(score - 1);
                setChances(2);
                getWord();
                hintMessage.current = "Sorry, you're out of guesses. Here's your next word.";
            } else {
                hintMessage.current = `Incorrect! ${chances} chances left.`;
            }
        }
        answerInputRef.current.value = '';
    }

    const gameStart = () => {
        getWord();
        setGameStarted(true);
    }

    useEffect(() => {
        getWords();
    }, []);

    console.log('word :>> ', word);
    console.log('scrambledWord :>> ', scrambledWord);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            {!gameStarted &&
                <div className={styles.title}>
                    <p>You have three chances to unscramble the word.</p>
                    <p>If you succeed, you get a point.</p>
                    <p>If you fail, you lose a point.</p>
                    <button className={styles.gameStart} onClick={gameStart}>Let's Play!</button>
                </div>
            }
            {
                gameStarted &&
                <div className={styles.game}>
                    <div className={styles.monitor}>
                        <p ref={hintMessageRef}>{hintMessage.current}</p>
                    </div>
                    <div className={styles.questionContainer}>
                        <div className={styles.scoreContainer}>
                            <div className={styles.score}>Score: {score}</div>
                        </div>
                        <div className={styles.question}>{scrambledWord}</div>
                        <div className={styles.answerContainer}>
                            <input ref={answerInputRef} type="text" className={styles.answerInput} placeholder='Enter your guess' />
                            <button className={styles.submit} onClick={CheckAnswer}>Submit!</button>
                        </div>
                    </div >
                </div >
            }
        </div >
    );
}

export default Day;

//Day 25 - SCRAMBLED! - origin website: https://jenniferdewalt.com/scrambled.html