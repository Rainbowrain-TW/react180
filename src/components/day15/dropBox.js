import { useEffect, useState } from 'react';
import styles from './day.module.css';

const DropBox = () => {
    const [style, setStyle] = useState(0);
    const [bgColor, setBgColor] = useState(0);

    const dropStyle = [
        styles.crawlBox,
        styles.dangleBox,
        styles.jumpBox,
        styles.stretchBox,
        styles.flipBox];

    function getRandomStyle() {
        return dropStyle[Math.floor(Math.random() * dropStyle.length)];
    };

    function getNewStyle() {
        let newStyle;
        do {
            newStyle = getRandomStyle();
        } while (newStyle === style);
        setStyle(newStyle);
    }

    function getRandomColor() {
        let red, green, blue;

        // 檢查三個色彩分量是否都小於 48，如果是則重新生成
        do {
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
        } while (red < 48 && green < 48 && blue < 48);

        // 轉換成十六進制並組合
        red = red.toString(16).padStart(2, '0');
        green = green.toString(16).padStart(2, '0');
        blue = blue.toString(16).padStart(2, '0');

        return `#${red}${green}${blue}`;
    }

    useEffect(() => {
        setBgColor(getRandomColor());
    }, []);

    return (
        <div className={`${styles.dropBox} ${style}`}
            style={{ backgroundColor: bgColor }}
            onClick={getNewStyle}>
        </div>
    );
}

export default DropBox;

//Day 15 - Dropping Boxes - origin website: https://jenniferdewalt.com/dropping_boxes.html