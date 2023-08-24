import { useEffect, useState } from 'react';
import styles from './day.module.css';
import QuestBox from './questBox.js';
import questions from './questionData.js';

const Day = () => {
    const [submited, setSubmited] = useState(false);
    const [score, setScore] = useState(0);

    function getResult(score) {
        let message = "";
        if (score < 42 * 1 / 4) {
            message = "You're definitely not an SF hipster.";
        } else if (score < 42 * 1 / 2) {
            message = "You might be an SF hipster.";
        } else if (score < 42 * 3 / 4) {
            message = "You're most likely an SF hipster.";
        } else {
            message = "You're a Super SF Hipster!";
        }
        return message;
    }

    function calculateScore() {
        let result = 0;
        for (let i = 0; i < questions.length; i++) {
            const radios = document.getElementsByName(`answer${i + 1}`);
            for (let j = 0; j < radios.length; j++) {
                if (radios[j].checked) {
                    result += parseInt(radios[j].value);
                    break;
                }
            }
        }
        return result;
    }

    function submitHandler() {
        setScore(calculateScore());
        setSubmited(true);
    }

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.titleMain}>Are you a San Francisco Hipster?</div>
            <div className={styles.titleSub}>Take this short quiz to find out how much of an SF hipster you are.</div>
            {!submited &&
                <div className={styles.questionContainer}>
                    {
                        questions.map((question, i) => {
                            return <QuestBox key={i} data={question} index={i + 1} />
                        })
                    }
                    <button className={styles.submitButton} onClick={submitHandler}>Submit</button>
                </div>
            }
            {submited &&
                <div className={styles.resultContainer}>
                    <h1 className={styles.titleMain}>Your Score is {score}.</h1>
                    <h2 className={styles.titleSub}>{getResult(score)}</h2>
                </div>
            }
        </div>
    );
}

export default Day;

//Day 19 - How Much of an SF Hipster are You? - origin website: https://jenniferdewalt.com/hipster_quiz.html