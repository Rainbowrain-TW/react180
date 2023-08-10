import { useState } from 'react';
import styles from './day6.module.css';

const Tab = ({ day, today, imgUrl }) => {

    return (
        <div className={`${styles.tab} ${today && styles.today}`}>
            <img className={`${styles.holoMem} ${today && styles.today}`} src={imgUrl} />
            <div className={styles.dayText}>{day}</div>
        </div>
    );
}

export default Tab;