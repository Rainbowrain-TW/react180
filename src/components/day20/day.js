import { useState } from 'react';
import styles from './day.module.css';

import FireFly from './fireFly';

const Day = () => {
    const [fireFlies, setFireFlies] = useState([]);
    const [id, setId] = useState(0);
    const maxFireFlies = 20;

    function createFireFly(e) {
        const newFireFly = {
            id: id,
            x: e.clientX,
            y: e.clientY,
            mainColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
            secondaryColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
            size: Math.floor(Math.random() * 100) + 10,
        };
        const newFireFlies = [...fireFlies];

        // keep the number of fireflies on the page to a maximum of 20
        // remove the oldest firefly if there are already 20
        if (fireFlies.length >= maxFireFlies) {
            newFireFlies.shift();
            newFireFlies.push(newFireFly);
        } else {
            newFireFlies.push(newFireFly);
        }
        setFireFlies(newFireFlies);
        setId(id + 1);
    }

    return (
        <div className={styles.site} onClick={createFireFly}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            {
                fireFlies.map((fireFly, i) => {
                    return <FireFly key={fireFly.id} {...fireFly} />
                })
            }
        </div>
    );
}

export default Day;

//Day 20 - Smushing Fireflies - origin website: https://jenniferdewalt.com/smushing_fireflies.html