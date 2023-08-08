import { useState } from 'react';
import styles from './day5.module.css';

import Quiz from './quiz';
import Answer from './answer';

const Day = () => {
    const [showAuthor, setShowAuthor] = useState(false);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <h1>Secret Message</h1>
            <Quiz />
            <Answer onClick={() => { console.log("show author"); setShowAuthor(true) }} />
            {showAuthor &&
                <img src="image/day5/AZKi_inochi.jpg" alt="author" onClick={() => { console.log("click"); setShowAuthor(false) }} />
            }
        </div>
    );
}

export default Day;

//Day 5 - Secret Message - origin website: https://jenniferdewalt.com/secret_message.html