import { useEffect, useState } from 'react';
import styles from './day6.module.css';
import Tab from './tab.js';

const data = [
    { day: "日曜日", message: "日曜日の女 - 沙花叉クロヱ", img: "image/day6/Sakamata-Chloe_pr-img01.png" }, // 0
    { day: "月曜日", message: "月曜日の女 - Pavolia Reine", img: "image/day6/Pavolia-Reine_pr-img_02.png" },
    { day: "火曜日", message: "火曜日の女 - 博衣こより", img: "image/day6/Hakui-Koyori_pr-img_02.png" },
    { day: "水曜日", message: "水曜日の女 - ロボ子", img: "image/day6/roboco-san_pr-img_06.png" }, // 3
    { day: "木曜日", message: "木曜日の女 - 宝鐘マリン", img: "image/day6/Houshou-Marine_pr-img_05.png" }, // 4
    { day: "金曜日", message: "金曜日の女 - 百鬼あやめ", img: "image/day6/Nakiri-Ayame_pr-img_01.png" },
    { day: "土曜日", message: "土曜日の女 - Vestia Zeta", img: "image/day6/Vestia-Zeta_pr-img_02.png" },
]



const Day = () => {
    const [dayNumber, setDayNumber] = useState(0); // [0, function(){}

    function nextDay() {
        if (dayNumber === 6) {
            setDayNumber(0);
        } else {
            setDayNumber(dayNumber + 1);
        }
    }

    useEffect(() => {
        setDayNumber(new Date().getDay());
    }, []);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.tabContainer}>
                {data.map((item, index) => {
                    return <Tab key={index} day={item.day} today={index === dayNumber} imgUrl={item.img} />
                })}
            </div>
            <div className={styles.message} onClick={nextDay}><span style={{ color: "#fff" }}>鷹嶺ルイ's　</span><span>{data[dayNumber].message}</span></div>
            <img className={styles.lui} src="image/day6/Takane-Lui_pr-img_02.png" />
            <div className={styles.footer}><p>（只是玩梗，別當真）</p></div>
        </div>
    );
}

export default Day;

//Day 6 - Day Tracker - origin website: https://jenniferdewalt.com/day_tracker.html