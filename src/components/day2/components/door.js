import { useState } from 'react';
import styles from './door.module.css';

const Day = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <image src="https://jenniferdewalt.com/images/orange_door.png" alt="Monty Hall" />
        </div>
    );
}

export default Day;

//Day 2 - Make a Deal! - origin website: https://jenniferdewalt.com/make_a_deal.html