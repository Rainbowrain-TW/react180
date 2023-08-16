import { useRef, useState } from 'react';
import styles from './day.module.css';
import Dice from './dice';

const Day = () => {
    const [sum, setSum] = useState(0);
    const [num1, setNum1] = useState(6);
    const [num2, setNum2] = useState(6);
    const monitorRef = useRef();

    function shake() {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        monitorRef.current.innerText = "Shake, shake, shake..."
        monitorRef.current.classList.add(styles.shake);

        setTimeout(() => {
            monitorRef.current.innerText = roll1 + roll2;
            monitorRef.current.classList.remove(styles.shake);

            setNum1(roll1);
            setNum2(roll2);
            setSum(roll1 + roll2);
        }, 1000);
    }

    return (
        <div className={styles.site}>
            <div className={styles.leftBanner}>
                <img src="./image/day12/bae_dice.jpg" />
            </div>
            <div className={styles.middle}>
                <a href="/react180/" className={styles.homeLink}>⛪</a>
                <div ref={monitorRef} className={styles.monitor}>Hey you! Give us roll!</div>
                <div className={styles.table}>
                    <Dice id="dice1" num={num1} />
                    <Dice id="dice2" num={num2} />
                </div>
                <button className={styles.button} onClick={shake}>Roll Dice</button>
            </div>
            <div className={styles.rightBanner}>
                <img src="./image/day12/bae_dice.jpg" />
            </div>
        </div>
    );
}

export default Day;

//Day 12 - Dice Roller - origin website: https://jenniferdewalt.com/dice_roller.html