import { useState } from 'react';
import styles from './day.module.css';

const QuestBox = ({ data, index }) => {

    return (
        <div className={styles.questionBox}>
            <div className={styles.questionTitle}>{data.quest}</div>
            <div className={styles.answerContainer}>
                <div className={styles.answerRow}>
                    <input type="radio" id={`answer${index}-1`} name={`answer${index}`} value={data.options[0].score} />
                    <div className={styles.labelContainer}><label htmlFor={`answer${index}-1`}>{data.options[0].text}</label></div>
                </div>
                <div className={styles.answerRow}>
                    <input type="radio" id={`answer${index}-2`} name={`answer${index}`} value={data.options[1].score} />
                    <div className={styles.labelContainer}><label htmlFor={`answer${index}-2`}>{data.options[1].text}</label></div>
                </div>
                <div className={styles.answerRow}>
                    <input type="radio" id={`answer${index}-3`} name={`answer${index}`} value={data.options[2].score} />
                    <div className={styles.labelContainer}><label htmlFor={`answer${index}-3`}>{data.options[2].text}</label></div>
                </div>
                <div className={styles.answerRow}>
                    <input type="radio" id={`answer${index}-4`} name={`answer${index}`} value={data.options[3].score} />
                    <div className={styles.labelContainer}><label htmlFor={`answer${index}-4`}>{data.options[3].text}</label></div>
                </div>
            </div>
        </div>
    );
}

export default QuestBox;

//Day 19 - How Much of an SF Hipster are You? - origin website: https://jenniferdewalt.com/hipster_quiz.html