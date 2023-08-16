import { useState } from 'react';
import styles from './day.module.css';

const Dice = ({ num }) => {

    function checkNum(dot) {
        let result;
        switch (dot) {
            case 1:
            case 6:
                result = [3, 4, 5, 6].includes(num);
                break;
            case 2:
            case 5:
                result = [2, 6].includes(num);
                break;
            case 3:
            case 4:
                result = [4, 5, 6].includes(num);
                break;
            case 7:
                result = [1, 3, 5].includes(num);
                break;
            default:
                break;
        }
        console.log(`num: ${num}, dot: ${dot}, result: ${result}`);
        return result ? 'visible' : 'hidden';
    }

    return (
        <div className={styles.dice}>
            <div style={{ visibility: `${checkNum(1)}` }} className={styles.dot}></div>
            <div style={{ visibility: `${checkNum(2)}` }} className={styles.dot}></div>
            <div style={{ visibility: `${checkNum(3)}` }} className={styles.dot}></div>
            <div style={{ visibility: `${checkNum(4)}` }} className={styles.dot}></div>
            <div style={{ visibility: `${checkNum(5)}` }} className={styles.dot}></div>
            <div style={{ visibility: `${checkNum(6)}` }} className={styles.dot}></div>
            <div style={{ visibility: `${checkNum(7)}` }} className={styles.centerDot}></div>
        </div>
    );
}

export default Dice;

//Day 12 - Dice Roller - origin website: https://jenniferdewalt.com/dice_roller.html