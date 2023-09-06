import { useState, useRef, useEffect } from 'react';
import styles from './day.module.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

const answers = ["Signs point to yes", "Yes", "Reply hazy, try again",
    "Without a doubt", "My sources say no", "As I see it, yes",
    "You may rely on it", "Concentrate and ask again",
    "Outlook not so good", "It is decidedly so",
    "Better not tell you now", "Very doubtful", "Yes - definitely",
    "It is certain", "Cannot predict now", "Most likely",
    "Ask again later", "My reply is no", "Outlook good",
    "Don't count on it"];

const Day = () => {
    const [answer, setAnswer] = useState('');
    const tbAnswerRef = useRef();
    const answerRef = useRef();

    const handleClick = () => {
        const index = Math.floor(Math.random() * answers.length);
        $(answerRef.current).fadeOut(400);

        setTimeout(() => {
            setAnswer(answers[index]);
        }, 400);
    }

    useEffect(() => {
        $(tbAnswerRef.current).focus();

        setTimeout(() => {
            $(answerRef.current).fadeIn(1300);
        }, 400);
    }, [answer]);

    useEffect(() => {

        $('#submit').one('click', function () {
            $(`#${styles.eight_logo}`).fadeOut('200');
            console.log("eight_logo fadeout", styles.eight_logo);

        });
    }, []);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.container}>
                <div className={styles.ballContainer}>
                    <div className={styles.ball}>
                        <div className={styles.innerBall}>
                            <div className={styles.triangle}>
                            </div>
                            <div className={styles.triangleInner}></div>
                            <div ref={answerRef} className={styles.answer}><p>{answer}</p></div>
                        </div>
                        <div id={styles.eight_logo}>
                            <p id={styles.eight}>8</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.form}>
                <input ref={tbAnswerRef} type="text" placeholder="Ask a question" />
                <button id="submit" onClick={handleClick}>Ask</button>
            </div>
        </div>
    );
}

export default Day;

//Day 29 - Magic 8 Ball - origin website: https://jenniferdewalt.com/magic_8.html