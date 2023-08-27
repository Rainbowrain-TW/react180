import { useState } from 'react';
import styles from './day.module.css';

// start area width 50px and border-radius: 50% 0 0 50%;

const StraightGame = ({ width, height, showCursor, showPath, setResult }) => {
    const [gameStart, setGameStart] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [gameEnd, setGameEnd] = useState(false);

    const gameStartHandler = () => {
        setGameStart(true);
    }

    const gameVictoryHandler = () => {
        if (gameStart && !gameEnd) {
            setIsSuccess(true);
            setResult("success");
        }
    }

    const gameEndHandler = () => {
        if (gameStart && !isSuccess && !gameEnd) {
            setGameEnd(true);
            setResult("fail");
        }
    }

    return (
        <div className={styles.gameContainer} onMouseLeave={gameEndHandler}>
            <div className={styles.startArea} onMouseEnter={gameStartHandler}
                style={{ height }}
            ></div>
            <div className={`${styles.pathArea} ${showCursor ? "" : styles.hideCursor} ${showPath ? "" : styles.hidePath}`}
                style={{ width, height }}
            ></div>
            <div className={styles.endArea} onMouseEnter={gameVictoryHandler}
                style={{ height }}
            ></div>
        </div>
    );
}

export default StraightGame;

//Day 22 - Keep It Straight - origin website: https://jenniferdewalt.com/keep_it_straight.html