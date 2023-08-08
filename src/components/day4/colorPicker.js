import { useState } from 'react';
import styles from './day.module.css';

const ColorPicker = (props) => {
    const color = props.color;

    return (
        <div className={`${styles.colorPick} ${color}`}
            onClick={() => { props.setColor(color); console.log(`set color to ${color}`) }}>
        </div>
    );
}

export default ColorPicker;

//Day 4 - Paint a Mondrian - origin website: https://jenniferdewalt.com/mondrian.html