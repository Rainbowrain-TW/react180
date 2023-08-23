import { useState } from 'react';
import styles from './day.module.css';
import DraggableBlock from './draggableBlock';

const shapes = [
    styles.square, styles.rectup, styles.rectupLong,
    styles.rectdown, styles.triup, styles.trileft,
    styles.triright, styles.paraleft, styles.pararight,
    styles.circle, styles.semitop, styles.quartleft, styles.quartright]

const Day = () => {

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.container}>
                {
                    shapes.flatMap((shape, index) =>
                        new Array(8).fill(0).map((el, i) => <DraggableBlock key={`${index}-${i}`} type={shape} />)
                    )
                }
            </div>
        </div>
    );
}

export default Day;

//Day 18 - Building Blocks - origin website: https://jenniferdewalt.com/building_blocks.html