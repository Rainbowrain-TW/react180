import { useEffect, useState } from 'react';
import styles from './day.module.css';
import './day.css';

import ColorPicker from './colorPicker.js';
import Column from './column.js';

const Day = () => {
    const [color, setColor] = useState(0);

    useEffect(() => {
        console.log('color changed :>> ', color);
    }, [color]);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div class="container">
                <div className="title">
                    <h1>選個顏色畫到繪畫板塊上吧！</h1>
                </div>
                <div className="canvas">
                    <div className="paint">
                        <ColorPicker color="red" setColor={setColor} />
                        <ColorPicker color="yellow" setColor={setColor} />
                        <ColorPicker color="blue" setColor={setColor} />
                        <ColorPicker color="white" setColor={setColor} />
                        <ColorPicker color="black" setColor={setColor} />
                    </div>
                    <div className="grid">
                        <div className="row" style={{ height: "20%", }}>
                            <Column style={{ width: "20%" }} newColor={color} />
                            <Column style={{ width: "40%" }} newColor={color} />
                            <Column style={{ width: "10%" }} newColor={color} />
                            <Column style={{ width: "30%" }} newColor={color} />
                        </div>
                        <div className="row" style={{ height: "30%", }}>
                            <Column style={{ width: "20%" }} newColor={color} />
                            <Column style={{ width: "40%" }} newColor={color} />
                            <Column style={{ width: "10%" }} newColor={color} />
                            <Column style={{ width: "30%" }} newColor={color} />
                        </div>
                        <div className="row" style={{ height: "35%", }}>
                            <Column style={{ width: "20%" }} newColor={color} />
                            <Column style={{ width: "40%" }} newColor={color} />
                            <Column style={{ width: "10%" }} newColor={color} />
                            <Column style={{ width: "30%" }} newColor={color} />
                        </div>
                        <div className="row" style={{ height: "15%", }}>
                            <Column style={{ width: "20%" }} newColor={color} />
                            <Column style={{ width: "40%" }} newColor={color} />
                            <Column style={{ width: "10%" }} newColor={color} />
                            <Column style={{ width: "30%" }} newColor={color} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Day;

//Day 4 - Paint a Mondrian - origin website: https://jenniferdewalt.com/mondrian.html