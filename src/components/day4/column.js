import { useState } from 'react';
import styles from './day.module.css';

const Column = (props) => {
    const [color, setColor] = useState("white");

    return (
        <div className={`${styles.column} ${color}`}
            style={props.style}
            onClick={() => { console.log("props: ", props); setColor(props.newColor) }}>
        </div>
    );
}

export default Column;

//Day 4 - Paint a Mondrian - origin website: https://jenniferdewalt.com/mondrian.html