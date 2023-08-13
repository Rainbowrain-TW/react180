import { useEffect, useState } from 'react';
import styles from './day.module.css';
import Jiggler from './jiggler';

const Day = () => {
    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.sushiTable}>
                {sushiCollection.map((sushi, index) => {
                    return <Jiggler key={index} imgUrl={sushi} />
                }
                )}
            </div>
        </div>
    );
}

export default Day;

const sushiCollection = [
    "./image/day10/seaweed.png",
    "./image/day10/pinkfish.png",
    "./image/day10/masago.png",
    "./image/day10/eel2.png",
    "./image/day10/shrimp2.png",
    "./image/day10/rolls.png",
    "./image/day10/whitefish.png",
    "./image/day10/roll1.png",
    "./image/day10/sake.png",
    "./image/day10/fancy_roll.png",
];

//Day 10 - Sushi Jiggler - origin website: https://jenniferdewalt.com/sushi_jiggler.html