import { useState } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [result, setResult] = useState(false);
    const [birthday, setBirthday] = useState(0);
    const [birthtime, setBirthtime] = useState(0);
    const [todayBirthday, setTodayBirthday] = useState(null);
    const [birthMonth, setBirthMonth] = useState(0);
    const [birthDay, setBirthDay] = useState(0);
    const [age, setAge] = useState(0);
    const [daysOld, setDaysOld] = useState(0);
    const [minutesOld, setMinutesOld] = useState(0);
    const [tenThousandthDay, setTenThousandthDay] = useState(0);
    const [twentyThousandthDay, setTwentyThousandthDay] = useState(0);
    const [fiveHundredThousandthHour, setFiveHundredThousandthHour] = useState(0);
    const [oneMillionthMinute, setOneMillionthMinute] = useState(0);
    const [tenMillionthMinute, setTenMillionthMinute] = useState(0);
    const [fiftyMillionthMinute, setFiftyMillionthMinute] = useState(0);
    const [oneBillionthSecond, setOneBillionthSecond] = useState(0);

    function calcResult() {
        const birthdate = document.querySelector('.' + styles.datePicker).value;
        const birthtime = document.querySelector('.' + styles.timePicker).value;
        const birthday = new Date(birthdate + ' ' + birthtime);
        const birthMonth = birthday.getMonth() + 1;
        const birthDay = birthday.getDate().toString().padStart(2, '0');
        const now = new Date();

        const age = now.getFullYear() - birthday.getFullYear();
        const daysOld = Math.floor((now - birthday) / 1000 / 60 / 60 / 24);
        const minutesOld = Math.floor((now - birthday) / 1000 / 60);
        const tenThousandthDay = (new Date(birthday.getTime() + 10000 * 24 * 60 * 60 * 1000)).toLocaleDateString();
        const twentyThousandthDay = (new Date(birthday.getTime() + 20000 * 24 * 60 * 60 * 1000)).toLocaleDateString();
        const fiveHundredThousandthHour = (new Date(birthday.getTime() + 500000 * 60 * 60 * 1000)).toLocaleDateString();
        const oneMillionthMinute = (new Date(birthday.getTime() + 1000000 * 60 * 1000)).toLocaleDateString();
        const tenMillionthMinute = (new Date(birthday.getTime() + 10000000 * 60 * 1000)).toLocaleDateString();
        const fiftyMillionthMinute = (new Date(birthday.getTime() + 50000000 * 60 * 1000)).toLocaleDateString();
        const oneBillionthSecond = (new Date(birthday.getTime() + 1000000000 * 1000)).toLocaleDateString();

        setBirthday(birthday);
        setBirthtime(birthtime);
        setBirthMonth(birthMonth);
        setBirthDay(birthDay);
        setAge(age);
        setDaysOld(daysOld);
        setMinutesOld(minutesOld);
        setTenThousandthDay(tenThousandthDay);
        setTwentyThousandthDay(twentyThousandthDay);
        setFiveHundredThousandthHour(fiveHundredThousandthHour);
        setOneMillionthMinute(oneMillionthMinute);
        setTenMillionthMinute(tenMillionthMinute);
        setFiftyMillionthMinute(fiftyMillionthMinute);
        setOneBillionthSecond(oneBillionthSecond);

        if (isTodayBirthday(birthday)) {
            setTodayBirthday(true);
        } else {
            setTodayBirthday(false);
        }

        setResult(true);
    }

    function isTodayBirthday(birthday) {
        const now = new Date();
        return (now.getMonth() === birthday.getMonth() && now.getDate() === birthday.getDate());
    }
    //Time to Party?
    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.title}>
                {
                    todayBirthday === null ? 'Time to Party?' :
                        todayBirthday ? 'Happy Birthday! Let Party!' : 'Boo! No Parties Today.'
                }
            </div>
            <div className={styles.hint}>Enter a birthdate and time to see if it's party time</div>
            <div className={styles.inputContainer}>
                <label>Birthdate: </label>
                <input type="date" className={styles.datePicker} />
                <label>Time: </label>
                <input type="time" className={styles.timePicker} />
                <button className={styles.button} onClick={calcResult}>Party?</button>
            </div>
            {
                result &&
                <div className={styles.result}>
                    <div className={styles.birthday}>{`Your birthday is ${birthMonth}/${birthDay}`}</div>
                    <div className={styles.age}>{`You're ${age} years old`}</div>
                    <div className={styles.daysOld}>{`You're ${daysOld} days old`}</div>
                    <div className={styles.minutesOld}>{`You're ${minutesOld} minutes old`}</div>
                    <div className={styles.tenThousandthDay}>{`Your 10,000th day was ${tenThousandthDay}`}</div>
                    <div className={styles.twentyThousandthDay}>{`Your 20,000th day is ${twentyThousandthDay}`}</div>
                    <div className={styles.fiveHundredThousandthHour}>{`Your 500,000th hour is ${fiveHundredThousandthHour}`}</div>
                    <div className={styles.oneMillionthMinute}>{`Your one millionth minute was ${oneMillionthMinute}`}</div>
                    <div className={styles.tenMillionthMinute}>{`Your ten millionth minute was ${tenMillionthMinute}`}</div>
                    <div className={styles.fiftyMillionthMinute}>{`Your fifty millionth minute is ${fiftyMillionthMinute}`}</div>
                    <div className={styles.oneBillionthSecond}>{`Your one billionth second was ${oneBillionthSecond}`}</div>
                </div>
            }
        </div>
    );
}

export default Day;

//Day 17 - Party Time? - origin website: https://jenniferdewalt.com/party_time.html