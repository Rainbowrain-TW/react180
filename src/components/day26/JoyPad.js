import { useState, useRef } from 'react';
import styles from './day.module.css';

const Day = ({ color, type, audio, cb }) => {
    const [flash, setFlash] = useState(false);
    const audioRef = useRef(null);


    function clickHandler() {
        cb(color);
        audioRef.current.play();
        setFlash(true);
        setTimeout(() => {
            setFlash(false);
        }, 500);
    }

    return (
        <div id={color} className={`${type} ${styles.gamePad} ${flash ? styles.flash : ''}`}
            onClick={clickHandler}
        >
            <audio id={`${color}Audio`} ref={audioRef} src={audio}></audio>
        </div>
    );
}

export default Day;

//Day 26 - Simon - origin website: https://jenniferdewalt.com/simon.html