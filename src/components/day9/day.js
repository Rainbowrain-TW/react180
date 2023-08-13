import { useState } from 'react';
import styles from './day.module.css';

const Day = () => {
    const [stage, setStage] = useState(1);
    const [showCongrats, setShowCongrats] = useState(false);
    const [stageClear, setStageClear] = useState(false);

    function goNextStage() {
        if (stage < 11) {
            setShowCongrats(true);
            setStage(stage + 1);

            setTimeout(() => {
                setShowCongrats(false);
            }, 1500);
        } else {
            setStageClear(true);
        }
    }

    function getCurrentSpeed() {
        return (Math.floor(Math.max(8 - stage * 0.7, 0.6) * 100) / 100);
    }

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.content}>
                <div className={styles.stageInfo}>
                    <h2>抓住這顆彈跳球吧！</h2>
                    <p>點擊這顆球就可以進入下一關</p>
                    <p>Level {stage} ({getCurrentSpeed()}s)</p>
                </div>
                <div className={styles.stage}>
                    {!stageClear && !showCongrats &&
                        <div className={styles.ball}
                            style={{ animationDuration: `${getCurrentSpeed()}s` }}
                            onClick={goNextStage}>
                            <div className={styles.realBall} style={{ animationDuration: `${getCurrentSpeed()}s` }} />
                        </div>}
                    {!stageClear && showCongrats && <div className={styles.congrats}>{messages[stage - 1]}</div>}
                    {stageClear && <div className={styles.congrats}>
                        <div>你真是超越了我的想像</div>
                        <div>🎉恭喜你完成了所有關卡🎉</div>
                        <div className={styles.againHint} onClick={() => { setStage(1); setStageClear(false) }}>再玩一次？</div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Day;

//Day 9 - Bouncing Ball - origin website: https://jenniferdewalt.com/bouncing_ball.html

const messages = [
    "就是這樣！",
    "幹得好！",
    "點得很棒！",
    "太厲害了！",
    "你真是太會了！",
    "你是專業的！",
    "難以置信！",
    "太瘋狂了！",
    "你真是太扯了！",
    "真是太瘋狂了！",
    "你讓我震驚了！",
]