import { useState } from 'react';
import styles from './door.module.css';

const Day = ({ open, data, onClick }) => {
    return (
        <div className={styles.door} onClick={onClick}>
            <img className={styles.fg + ' ' + (open ? styles.open : '')} src={data.fg} />
            <img className={styles.bg} src={data.bg} />
        </div>
    );
}

export default Day;

//Day 2 - Make a Deal! - origin website: https://jenniferdewalt.com/make_a_deal.html