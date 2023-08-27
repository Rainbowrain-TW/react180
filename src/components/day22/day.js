import { useState, useEffect } from 'react';
import styles from './day.module.css';
import StraightGame from './straightGame';

const gameData = [
    { level: 1, width: 300, height: 50, showPath: true, showCursor: true, victoryTitle: "Nice Job!", victoryText: "That was just a warm up. Ready for the next level?", },
    { level: 2, width: 600, height: 40, showPath: true, showCursor: true, victoryTitle: "Excellent work!", victoryText: "Now that you've got the hang of it, let's take it up a notch.", },
    { level: 3, width: 740, height: 20, showPath: true, showCursor: true, victoryTitle: "Awesome!", victoryText: "Let's try something a bit more challenging now.", },
    { level: 4, width: 660, height: 10, showPath: true, showCursor: true, victoryTitle: "Damn You're Good!", victoryText: "What if we remove the guide?", },
    { level: 5, width: 460, height: 15, showPath: false, showCursor: true, victoryTitle: "You're Freakin' Amazing!", victoryText: "I bet the next one gives you trouble.", },
    { level: 6, width: 660, height: 10, showPath: false, showCursor: true, victoryTitle: "You've Got Nerves of Steel!", victoryText: "Think you can you do it blind?", },
    { level: 7, width: 460, height: 20, showPath: true, showCursor: false, victoryTitle: "That was Unbelievable!", victoryText: "Think you can do better?", },
    { level: 8, width: 460, height: 10, showPath: true, showCursor: false, victoryTitle: "Mind. Blown.", victoryText: "Alright, you made it this far. Now it is time for the insanity level.", },
    { level: 9, width: 670, height: 5, showPath: false, showCursor: false, victoryTitle: "YOU BEAT ALL THE LEVELS!", victoryText: "You're a freakin' cursor wielding ninja!", },
]

const failText = ["That's lame.",
    "Ouch, too bad.",
    "I am sure you're good at something.",
    "That wasn't too pretty.",
    "Well, at least you tried.",
    "Maybe cursors just aren't your thing.",
    "I've seen worse failures.",
    "Well that sucked.",
    "Are you using your foot?"]

function getRandomFailText() {
    return failText[Math.floor(Math.random() * failText.length)];
}

const Day = () => {
    const [level, setLevel] = useState(0);
    const [result, setResult] = useState("");

    function nextLevel() {
        if (level < gameData.length) {
            setLevel(level + 1);
            setResult("playing")
        }
    }

    function retry() {
        setLevel(level);
        setResult("playing");
    }

    function restart() {
        setLevel(0);
        setResult("");
    }

    function cheat(e) {
        e.preventDefault();
        if (level < gameData.length) {
            nextLevel();
        } else {
            setResult("success");
        }
    }

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a><a href="/react180/day22/" className={styles.cheatKey} onClick={cheat} title="Go Next Level" >✈</a>
            {result === "playing" && <h1>Level {level}</h1>}
            {result === "" &&
                <div className={styles.hintContainer}>
                    <div className={styles.title}>Keep It Straight</div>
                    <div className={styles.description}>Move your mouse in a straight line from the red side to the blue side.</div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.nextLevelButton} onClick={nextLevel}>Start</button>
                        <button className={styles.restartButton} onClick={restart}>Restart</button>
                    </div>
                </div>
            }

            {result === "success" && level <= gameData.length &&
                <div className={styles.victoryContainer}>
                    <div className={styles.title}>{gameData[level - 1].victoryTitle}</div>
                    <div className={styles.description}>{gameData[level - 1].victoryText}</div>
                    <div className={styles.buttonContainer}>
                        {level < gameData.length && <button className={styles.nextLevelButton} onClick={nextLevel}>Next Level</button>}
                        <button className={styles.restartButton} onClick={restart}>Restart</button>
                    </div>
                </div>
            }
            {result === "fail" &&
                <div className={styles.failContainer}>
                    <div className={styles.title}>FAIL!</div>
                    <div className={styles.description}>{getRandomFailText()}</div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.retryButton} onClick={retry}>Retry</button>
                        <button className={styles.restartButton} onClick={restart}>Restart</button>
                    </div>
                </div>
            }
            {level > 0 && level <= gameData.length && result === "playing" &&
                <StraightGame
                    width={gameData[level - 1].width}
                    height={gameData[level - 1].height}
                    showCursor={gameData[level - 1].showCursor}
                    showPath={gameData[level - 1].showPath}
                    victoryText={gameData[level - 1].victoryText}
                    setResult={setResult}
                />
            }
        </div>
    );
}

export default Day;

//Day 22 - Keep It Straight - origin website: https://jenniferdewalt.com/keep_it_straight.html