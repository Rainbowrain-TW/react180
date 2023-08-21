import { useEffect, useState, useRef } from 'react';
import styles from './day.module.css';

const Ball = () => {
    const [color, setColor] = useState(0);
    const [size, setSize] = useState(0);
    const cursorRef = useRef(null);
    const speedRef = useRef(null);
    const [trackInterval, setTrackInterval] = useState(null);
    const ballRef = useRef(null);


    function getRandomColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return '#' + randomColor;
    }

    function getRandomSize() {
        const randomSize = Math.floor(Math.random() * 90) + 10;
        return randomSize;
    }

    function getRandomSpeed() {
        const randomSpeed = Math.floor(Math.random() * 43) + 8;
        return randomSpeed;
    }

    useEffect(() => {
        function handleMouseMove(e) {
            const cursor = { x: e.clientX, y: e.clientY };
            console.log('cursor :>> ', cursor);
            cursorRef.current = cursor;
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    useEffect(() => {
        setColor(getRandomColor());
        setSize(getRandomSize());
        speedRef.current = getRandomSpeed();
        setTrackInterval(setInterval(() => {
            ballRef.current && followCursor();
        }, 1000 / 30));
    }, []);

    function followCursor() {

        if (!cursorRef.current) {
            return;
        }

        const ball = ballRef.current;
        const ballRect = ball.getBoundingClientRect();
        const ballX = ballRect.x;
        const ballY = ballRect.y;

        const cursorX = cursorRef.current.x;
        const cursorY = cursorRef.current.y;

        console.log("Cursor Pt:", { x: cursorX, y: cursorY });
        console.log("Ball Pt:", { x: ballX, y: ballY });

        // follow cursor util ball.x === cursor.x && ball.y === cursor.y
        if (ballX !== cursorX || ballY !== cursorY) {

            ball.style.left = (ballX + (cursorX - ballX) / speedRef.current) + 'px';
            ball.style.top = (ballY + (cursorY - ballY) / speedRef.current) + 'px';
        }
    }



    return (
        <div ref={ballRef} className={styles.ball} style={{ backgroundColor: color, width: size, height: size }}>

        </div>
    );
}

export default Ball;

//Day 16 - Caterpillar - origin website: https://jenniferdewalt.com/caterpillar.html