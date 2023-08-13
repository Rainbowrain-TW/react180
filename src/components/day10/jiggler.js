import { useState } from 'react';
import styles from './day.module.css';

const jigglerType = [
    styles.shake,
    styles.hop,
    styles.spin,
    styles.grow,
    styles.hooray,
]

const jiggler = (e) => {
    const typeNum = Math.floor(Math.random() * jigglerType.length);
    console.log(`typeNum: ${typeNum}`);
    const randomJiggler = jigglerType[typeNum];
    e.target.classList.add(randomJiggler);
    setTimeout(() => {
        e.target.classList.remove(randomJiggler);
    }, 2000);
}

const handleImageLoad = (event) => {
    const img = event.target;
    img.style.width = `${img.naturalWidth}px`;
    img.style.height = `${img.naturalHeight}px`;
};

const Jiggler = ({ imgUrl }) => {

    return (
        <img src={imgUrl}
            className={`${styles.sushi} sushi`}
            alt="sushi"
            onClick={jiggler}
            onLoad={handleImageLoad}
        />
    );
}

export default Jiggler;

//Day 10 - Sushi Jiggler - origin website: https://jenniferdewalt.com/sushi_jiggler.html