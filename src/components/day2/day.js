import { useState } from 'react';
import styles from './day.module.css';

import Door from './components/door';

const doorData = {
    blue: {
        fg: 'image/day2/blue_door.png',
        bg: 'image/day2/kannagi-tenri-clip.jpg',
        holo: false
    },
    green: {
        fg: 'image/day2/green_door.png',
        bg: 'image/day2/ray-clip.jpg',
        holo: false,
    },
    orange: {
        fg: 'image/day2/orange_door.png',
        bg: 'image/day2/AZKi-clip.png',
        holo: true,
    },
}

const Day = () => {
    const [count, setCount] = useState(0);
    const [blueOpen, setBlueOpen] = useState(false);
    const [greenOpen, setGreenOpen] = useState(false);
    const [orangeOpen, setOrangeOpen] = useState(false);
    const [phaseSelect, setPhaseSelect] = useState(true);
    const [phaseFinal, setPhaseFinal] = useState(false);
    const [phaseResult, setPhaseResult] = useState(false);
    const [firstAnswer, setFirstAnswer] = useState("");
    const [finalAnswer, setFinalAnswer] = useState("");

    function doorClickHandle(door) {
        if (phaseSelect) {
            selectPhaseHandler(door);
        } else if (phaseFinal) {
            openPhaseHandler(door);
        }
    }

    function selectPhaseHandler(door) {
        if (door === "blue") {
            setGreenOpen(true);
            setFirstAnswer("green");
        } else if (door === "green") {
            setBlueOpen(true);
            setFirstAnswer("blue");
        } else if (door === "orange") {
            setBlueOpen(true);
            setFirstAnswer("blue");
        }

        setPhaseSelect(false);
        setPhaseFinal(true);
    }

    function openPhaseHandler(door) {
        if (door === firstAnswer) return;

        if (door === "blue") {
            setBlueOpen(true);
        } else if (door === "green") {
            setGreenOpen(true);
        } else if (door === "orange") {
            setOrangeOpen(true);
        }

        setTimeout(() => {
            setFinalAnswer(door);
            setPhaseFinal(false);
            setPhaseResult(true);
        }, 1000);
    }

    return (
        <div className={styles.site}>
            <header>
                <h1><a href="https://zh.wikipedia.org/zh-tw/%E8%92%99%E6%8F%90%E9%9C%8D%E7%88%BE%E5%95%8F%E9%A1%8C">
                    Monty Hall problem
                </a></h1>
                <hr />
                <br />
            </header>
            <main>
                {phaseSelect && <p>這裡有三道門，其中一扇門後的是 Hololive 的成員，你能猜到她在哪一扇門後面嗎？</p>}
                {phaseFinal && <p>在你真的決定答案前，我讓你看看其中一道不是 Hololive 成員的門打開的樣子。你可以在剩下的兩道門再做一次選擇，祝你好運。</p>}
                {phaseResult && finalAnswer === "blue" && <Tenri />}
                {phaseResult && finalAnswer === "green" && <Ray />}
                {phaseResult && finalAnswer === "orange" && <AZKi />}
                {phaseResult && <a style={{ color: "snow", textDecoration: "underline" }} href="./day2"> 再玩一次？ </a>}
            </main>

            <div className={styles.doors}>
                {!phaseResult && <Door open={blueOpen} data={doorData.blue} onClick={() => doorClickHandle("blue")} />}
                {!phaseResult && <Door open={greenOpen} data={doorData.green} onClick={() => doorClickHandle("green")} />}
                {!phaseResult && <Door open={orangeOpen} data={doorData.orange} onClick={() => doorClickHandle("orange")} />}
            </div>
        </div>
    );
}

export default Day;

const AZKi = () => {
    return (
        <div>
            <img style={{ height: "300px", width: "auto" }} src="image/day2/bg_AZKi_04.png" alt="Ray" />
            <h1>AZKi</h1>
            <h2>"右手にマイク！左手に地図！あなたのハートをゼロゲッサー♪"</h2>
            <h3>恭喜你猜對了！AZKi 正是今天門後唯一一位 Hololive 的成員
                <br />
                她的歌聲輕柔且有很強的情感渲染能力，有時讓人聽了會有一種感情與歌曲中的故事同步的感覺
                <br />
                介紹這首在最開始讓我在意起她的歌曲給你～
            </h3>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5QJfWQrdQEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

const Ray = () => {
    return (
        <div>
            <img style={{ height: "300px", width: "auto" }} src="image/day2/ray.jpg" alt="Ray" />
            <h1>來-Ray-</h1>
            <h2>
                "안녕하세요"
            </h2>
            <h3>
                很可惜，你沒猜對！這位是個人勢 "來-Ray-"，她擁有威嚴高貴的獨特嗓音，能夠完美地演唱從黑人音樂到流行曲的各種曲風，請來聽聽這首最近我很著迷的歌曲。
                <br />
                （因為不常直播，她好像沒有固定的招呼語，但蠻常會摻雜一些韓語來打招呼。）
            </h3>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Q3us1KfRLrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

    )
}

const Tenri = () => {
    return (
        <div>
            <img style={{ height: "300px", width: "auto" }} src="image/day2/kannagi-tenri.jpg" alt="Ray" />
            <h1>巫てんり</h1>
            <h2>"こんなき～"</h2>
            <h3>很可惜，你沒猜對！這位是個人勢 巫てんり，她講話的聲音很甜美但歌喉卻很有暴發力！推薦你聽聽這首翻唱曲 "新時代"</h3>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/afpbZTjqW4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

//Day 2 - Make a Deal! - origin website: https://jenniferdewalt.com/make_a_deal.html