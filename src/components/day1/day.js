import { useState } from 'react';
import styles from './day.module.css';
import { list } from './dailySiteList';

const Day = () => {
    const [count, setCount] = useState(0);

    const lastDay = Object.keys(list).length;
    const lastDayTitle = list[lastDay].title;
    console.log('lastDay :>> ', lastDay);
    console.log('lastDayTitle :>> ', lastDayTitle);

    return (
        <div className={styles.site}>
            <header>
                <nav>
                    <ul>
                        <li><a href="http://rainbowrain.tw/">關於我</a></li>
                        <li><a href="mailto:rainbowrain0930@gmail.com">連絡我</a></li>
                        <li><a href="https://github.com/rainbowrain-TW/">Github</a></li>
                    </ul>
                </nav>
            </header>
            <div className={styles.content}>
                <h1>嗨！</h1>
                <p>我是 RainbowRAIN，這個網站是參考 Jennifer Dewalt 的</p>
                <h2><a href="https://jenniferdewalt.com/index.html" target='_blank'>180 Websites in 180 days.</a></h2>
                <p>的作品，用來練習 React 框架</p>
                <p>有興趣的話歡迎常來看看這個網站</p>
                <h2> 180 <span className={styles.spec}>React</span> websites in 180+ days.</h2>
                <p className={styles.comment}>(剛下班吃完飯就已經快 12 點了，覺得應該很難每天完成一個網頁，所以偷偷放了個+ ...)</p>
            </div>
            <hr />
            <section>
                <div>最新的網站</div>
                <div>
                    <a href={`./day${lastDay}`}>{lastDayTitle}</a>
                </div>
            </section>
            <hr />
            <section className={styles.list}>
                <ul>
                    {
                        Object.entries(list).map(([key, value]) => {
                            return (
                                <li key={key}>
                                    {`Day ${('' + key).padStart(2, '0')}  -  `}<a href={`/react180/day${key}`}>{value.title}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        </div>
    );
}

export default Day;

// Origin Day 1 Homepage - https://jenniferdewalt.com/index.html