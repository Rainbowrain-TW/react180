import { useState } from 'react';
import styles from './day.module.css';


const Tile = () => {
    const [color, setColor] = useState('inherit');

    function mouseEnterHandler() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor('#' + randomColor);
    }

    return (
        <div className={styles.tile}
            style={{ backgroundColor: color }}
            onMouseEnter={mouseEnterHandler}>
        </div>
    );
}

export default Tile;

//Day 7 - Technicolor Boxes - origin website: https://jenniferdewalt.com/technicolor_boxes.html