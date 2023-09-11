import { useState, useEffect } from 'react';
import styles from './day.module.css';

const Throbber = ({ data }) => {
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
        const imgNum = data.imgNum;
        const imgPath = `./image/day31/throbber_${imgNum}` +
            `${imgNum == 5 ? ".png" : ".gif"}`;

        setImgUrl(imgPath);
    }, []);

    return (
        <>
            <img className={`${styles.throbber} ${data.imgNum == 5 ? styles.spin : ""}`}
                src={imgUrl ? imgUrl : "./image/day31/throbber1.gif"}
                style={{ left: data.x, top: data.y }} />
        </>
    );
}

export default Throbber;
// <img src="./image/day12/bae_dice.jpg" />