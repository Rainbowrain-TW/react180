import { useState, useRef, useEffect } from 'react';
import styles from './day.module.css';
import JoyPad from './JoyPad';

let colors = ['Green', 'Red', 'Yellow', 'Blue'];

const Day = () => {
    const [count, setCount] = useState(0);
    const [level, setLevel] = useState(1);
    const [gameStarted, setGameStarted] = useState(false);
    const [pattern, setPattern] = useState([]);
    const patternRef = useRef(pattern);
    const audioFail = useRef(null);

    function clickHandler(color) {

        if (patternRef.current[count] === color && count == patternRef.current.length - 1) {
            setCount(0);
            setLevel(level + 1);
            getPattern();
            playPattern();
        } else if (patternRef.current[count] === color) {
            setCount(count + 1);
        } else {
            audioFail.current.play();
            setCount(0);
            setLevel(1);
            setPattern([]);
            patternRef.current = [];
            setGameStarted(false);
        }
    }

    function getPattern() {
        let newPattern = [...patternRef.current, getRandomColor()];
        setPattern(newPattern);
        patternRef.current = newPattern;
    }

    function getRandomColor() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    }

    function playPattern() {
        let i = 0;
        let interval = setInterval(() => {
            let pad = document.getElementById(patternRef.current[i]);
            console.log(`pattern[${i}] :>> `, patternRef.current[i]);
            pad.classList.add(styles.flash);
            let audio = document.getElementById(patternRef.current[i] + 'Audio');
            audio.play();
            setTimeout(() => {
                pad.classList.remove(styles.flash);
            }, 500);
            i++;
            if (i >= patternRef.current.length) {
                clearInterval(interval);
            }
        }, 1000);
    }

    function gameStart() {
        setGameStarted(true);
        getPattern();
        playPattern();
    }

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.gameLevel}>Level {level}</div>
            <div className={styles.gamePads}>
                <JoyPad color={"Green"} type={styles.padGreen} audio="/react180/media/day26/green.wav" cb={clickHandler} />
                <JoyPad color={"Red"} type={styles.padRed} audio="/react180/media/day26/red.wav" cb={clickHandler} />
                <JoyPad color={"Yellow"} type={styles.padYellow} audio="/react180/media/day26/yellow.wav" cb={clickHandler} />
                <JoyPad color={"Blue"} type={styles.padBlue} audio="/react180/media/day26/blue.wav" cb={clickHandler} />
                <div className={styles.centerDisk} />
            </div>
            <audio ref={audioFail} src="/react180/media/day26/fail.wav"></audio>
            {!gameStarted &&
                <div className={styles.modal}>
                    <div className={styles.modalTitle}>Simon</div>
                    <div className={styles.modalText}>Repeat the pattern.<br />Move to the next level.</div>
                    <button className={styles.modalButton} onClick={gameStart}>Play!</button>
                </div>
            }
        </div>
    );
}

export default Day;

//Day 26 - Simon - origin website: https://jenniferdewalt.com/simon.html