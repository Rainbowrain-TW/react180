import { useRef, useState } from 'react';
import styles from './day.module.css';

import Hand from './hand';

const moarType = [
    'scissors',
    'rock',
    'paper'
]

const results = {
    'scissors': {
        'scissors': '平手',
        'rock': '輸了',
        'paper': '勝利'
    },
    'rock': {
        'scissors': '勝利',
        'rock': '平手',
        'paper': '輸了'
    },
    'paper': {
        'scissors': '輸了',
        'rock': '勝利',
        'paper': '平手'
    }
}


const Day = () => {
    const [phase, setPhase] = useState('');
    const [cpuType, setCpuType] = useState('');
    const [playerType, setPlayerType] = useState('');
    const monitorRef = useRef();

    function play(type) {
        const cpu = moarType[Math.floor(Math.random() * 3)];
        const player = type;
        const result = results[player][cpu];

        setPhase('shaking');

        setTimeout(() => {
            setPhase('check');
            setCpuType(cpu);
            setPlayerType(player);
            monitorRef.current.innerText = result;
        }, 2000);
    }

    return (
        <div className={styles.site}>
            <div className={styles.main_Container}>
                <a href="/react180/" className={styles.homeLink}>⛪</a>
                <div className={styles.CPU_Container}>
                    <h1>電腦</h1>
                    <hr />
                    <Hand phase={phase} type={cpuType} direction='right' />
                </div>
                <div className={styles.vs_Container}>
                    <h1 ref={monitorRef}>VS</h1>
                </div>
                <div className={styles.Player_Container}>
                    <h1>玩家</h1>
                    <hr />
                    <Hand phase={phase} type={playerType} direction='left' />
                    <div className={styles.button_Container}>
                        <button className={styles.button} onClick={() => play('scissors')}>剪刀</button>
                        <button className={styles.button} onClick={() => play('rock')}>石頭</button>
                        <button className={styles.button} onClick={() => play('paper')}>布</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Day;

//Day 13 - Rock Paper Scissors - origin website: https://jenniferdewalt.com/rock_paper_scissors.html