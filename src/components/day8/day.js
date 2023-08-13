import { useState, useRef } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [mimiCount, setMimiCount] = useState(0);
    const [msgContentCount, setMsgContentCount] = useState(0);
    const [msgTitleCount, setMsgTitleCount] = useState(0);

    const mimiImage = {
        0: "./image/day8/maxresdefault.jpg",
        1: "./image/day8/transformMiMi.jpg",
    }

    const mimiClickHandler = () => {
        setMimiCount(mimiCount + 1);
    }

    const msgContentClickHandler = () => {
        setMsgContentCount(msgContentCount + 1);
    }

    const msgTitleClickHandler = () => {
        setMsgTitleCount(msgTitleCount + 1);
    }

    const getMimiShadow = (count) => {
        const shadow = `0px 0px ${count * 7}px #FFFFFF`;
        return shadow;
    }

    const getMsgShadow = (count) => {
        const shadow = `0px ${count}px ${count * 2}px #FFFFFF`;
        return shadow;
    }

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.header}>
            </div>
            <div className={styles.content}>
                <div className={styles.box}>
                    <img useRef={mimiCount} style={{ boxShadow: `${getMimiShadow(mimiCount)}` }}
                        src={mimiCount < 10 ? mimiImage[0] : mimiImage[1]} alt="Mimi" onClick={mimiClickHandler}
                        title='Click!' />
                </div>
                <div className={styles.box}>
                    <p className={styles.msg} style={{ textShadow: `${getMsgShadow(msgContentCount)}` }}
                        useRef={msgContentCount} onClick={msgContentClickHandler}>
                        "You will always be lucky if you know how to make friends with strange cats."
                    </p>
                    <p className={styles.msg} style={{ textShadow: `${getMsgShadow(msgTitleCount)}` }}
                        useRef={msgTitleCount} onClick={msgTitleClickHandler}>
                        - Colonial proverb
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Day;

//Day 8 - More Drop Shadow! - origin website: https://jenniferdewalt.com/more_drop_shadow.html