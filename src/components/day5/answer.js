import { useState } from 'react';
import styles from './day5.module.css';

const Answer = ({ onClick }) => {
    return (
        <div className={styles.Answer}>
            <div className={styles.AnswerText}>
                <p>　後まで　　こと　届　　　　　　　</p>
                <p>　め　し　い　　　の　　　　てよ　　　　てよ　　　</p>
                <p>　　聴　え　ん　　　　　　涙　　　　　　　　　　　　　　　　　　居なく　　　</p>
                <p>　　　　　夢　　　　　</p>
                <p>　た　、　イ　イ。</p>
            </div>
            <div className={styles.AnswerImage}>
                <span><a className={styles.link} href="#" onClick={(e) => { console.log("???"); e.preventDefault(); onClick() }}>AZKi</a> </span>
            </div>
        </div>
    );
}

export default Answer;

/*
                <p>最後まで私のこと見届けてくれるの？</p>
                <p>覚めてしまいそうなの　わかってよ　わかってよ　ねえ</p>
                <p>声が聴こえるんだよ　塩辛い涙が出ちゃうほど君が忘れちゃったら私は居なくなるの</p>
                <p>命のような夢を見てるよ</p>
                <p>またね、バイバイ。</p>
                */