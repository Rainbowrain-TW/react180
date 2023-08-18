import { useState } from 'react';
import styles from './day.module.css';

const subMsgList = [
    "That's terrible! You should knock that off!",
    "Seriously? Why don't you grow the hell up?!",
    "Aren't you a little old for that crap?",
    "You are bad and you should feel bad!",
    "Gross. You are gross.",
    "Are you going to suck all your life?",
    "What? Who does that?!",
    "I thought you were better than that.",
    "My disapproval is overwhelming.",
    " ಠ__ಠ ",
    "Are you freaking kidding me?",
    "NO! Bad!",
    "And when do you plan on becoming an adult?",
    "That is totally unacceptable.",
    "You should be utterly ashamed.",
    "Ugh! That's horrible!",
    "A kitten dies everytime you do that.",
    "I can't believe you are that disgusting."]

function getSubMsg() {
    const subMsg = subMsgList[Math.floor(Math.random() * subMsgList.length)];
    return subMsg;
}

const Day = () => {
    const [mMsg, setMMsg] = useState("What's your bad habit?");
    const [sMsg, setSMsg] = useState("");

    function setHabit() {
        const habitText = document.querySelector('input').value;

        setMMsg(`You ${habitText}？`);
        setSMsg(getSubMsg());
    }

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.mainMessage}>{mMsg}</div>
            <div className={styles.subMessage}>{sMsg}</div>
            <div className={styles.inputContainer}>
                <input type="text" className={styles.input}
                    placeholder="My bad habit is I..." />
                <button className={styles.button}
                    onClick={setHabit}>Submit!</button>
            </div>
        </div>
    );
}

export default Day;

//Day 14 - Tough Love - origin website: https://jenniferdewalt.com/tough_love.html