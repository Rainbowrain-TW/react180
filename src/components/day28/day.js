import { useState, useEffect, useRef } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [count, setCount] = useState(0);
    const [phase, setPhase] = useState('start'); // start, game, score
    const drgree = useRef(1.2);
    const halfCircleRef = useRef(null);
    const halfCircleRightRef = useRef(null);
    const maskRef = useRef(null);

    const gameLength = 30; // seconds

    function gameStart() {
        setPhase('game');
        setCount(0);
        drgree.current = 1.2;

        setTimeout(() => {
            setPhase('score');
        }, gameLength * 1000);
    }

    function timerAnimation() {
        const timer = halfCircleRef.current;
        const timerRight = halfCircleRightRef.current;
        const mask = maskRef.current;

        if (!timer.className.includes(styles.animation)) {
            timer.classList.add(styles.animation);
        }

        if (!timerRight.className.includes(styles.halfCircleRightAnimation)) {
            timerRight.classList.add(styles.halfCircleRightAnimation);
        }

        if (!mask.className.includes(styles.maskAnimation)) {
            mask.classList.add(styles.maskAnimation);
        }
    }

    function restartGame() {
        setPhase('start');
    }

    function handleClick() {
        setCount(count => {
            console.log(`count: ${count + 1}`);
            return count + 1;
        });
    }

    function getScore() {
        return Math.floor((count / gameLength) * 10) / 10;
    }

    // global event listener
    useEffect(() => {

        if (phase === 'game') {
            document.addEventListener('click', handleClick);
            timerAnimation();
        } else {
            document.removeEventListener('click', handleClick);
        }

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [phase]);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            {phase === 'start' &&
                <div className={styles.titleContainer}>
                    <div className={styles.title}>The Click Challenge</div>
                    <div className={styles.subTitle}>How many clicks can you get per second?</div>
                    <div className={styles.description}>Click start and you'll have thirty seconds to click anywhere on the page as many times as you can!
                    </div>
                    <button className={styles.startButton} onClick={gameStart}>Start!</button>
                </div>}
            {phase === 'game' &&
                <div className={styles.gameContainer}>
                    <div className={styles.clickCount}>{count}</div>
                    <div className={styles.timer}>
                        <div ref={halfCircleRef} className={styles.halfCircle}></div>
                        <div ref={halfCircleRightRef} className={styles.halfCircleRight}></div>
                        <div ref={maskRef} className={styles.mask}></div>
                    </div>
                </div>}
            {phase === 'score' &&
                <div className={styles.score}>
                    <div className={styles.title}>Time's Up!</div>
                    <div className={styles.subTitle}>You got {count} clicks.</div>
                    <div className={styles.description}>That's {getScore()} clicks per second!</div>
                    <div className={styles.restartButton} onClick={restartGame}>Try Again?</div>
                </div>
            }
        </div>

    );
}

export default Day;

//Day 28 - The Click Challenge - origin website: https://jenniferdewalt.com/click_challenge.html