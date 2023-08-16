import { useState } from 'react';
import styles from './day.module.css';

const Hand = ({ phase, type, direction }) => {
    const [count, setCount] = useState(0);

    return (
        <div className={`${styles.hand} ${direction == 'right' ? styles.right : ""} ${phase == 'shaking' ? styles.shaking : ''}`}>
            <div className={styles.handWrapper}>
                {phase == 'check' && type == 'scissors' && <img src='./image/day13/scissors.png' alt='scissors' />}
                {phase == 'check' && type == 'rock' && <img src='./image/day13/rock.png' alt='rock' />}
                {phase == 'check' && type == 'paper' && <img src='./image/day13/paper.png' alt='paper' />}
                {phase != 'check' && <img src='./image/day13/hand.png' alt='hand' />}
            </div>
        </div>
    );
}

export default Hand;

//Day 13 - Rock Paper Scissors - origin website: https://jenniferdewalt.com/rock_paper_scissors.html