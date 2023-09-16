import { useEffect, useRef } from 'react';
import styles from './day.module.css';

const Day = () => {
    const isDraggingRef = useRef(false);
    const audioPlayerRef = useRef(null);
    const coinImgRef = useRef(null);
    const nekoBodyRef = useRef(null);

    function playAudio() {
        console.log('audioPlayerRef :>> ', audioPlayerRef.current);
        audioPlayerRef.current.currentTime = 0;
        audioPlayerRef.current.play();
    }

    function coinDragHandle(e) {
        e.preventDefault()
        isDraggingRef.current = true;
        setCoinPosition(e);
        console.log("drag start");
    }

    function coinDraggingHandle(e) {
        if (isDraggingRef.current) {
            console.log('Dragging');
            setCoinPosition(e);
        }
    }

    function coinDragEndHandle(e) {
        console.log('drag end');

        const nekoBodyRect = nekoBodyRef.current.getBoundingClientRect();
        const coinRect = coinImgRef.current.getBoundingClientRect();
        if (checkRectCollision(nekoBodyRect, coinRect)) {
            console.log('collision');
            playAudio();
        }

        isDraggingRef.current = false;
        coinImgRef.current.style.top = `${-1000}px`;
        coinImgRef.current.style.left = `${-1000}px`;
    }

    function setCoinPosition(e) {
        const x = e.pageX;
        const y = e.pageY;
        const width = coinImgRef.current.clientWidth;
        const height = coinImgRef.current.clientHeight;
        coinImgRef.current.style.left = `${x - width / 2}px`;
        coinImgRef.current.style.top = `${y - height / 2}px`;
    }

    function checkRectCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y;
    }

    useEffect(() => {
        audioPlayerRef.current.volume = 0.5;
    }, []);

    return (
        <div className={styles.site}
            onMouseMove={coinDraggingHandle}
        >
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div className={styles.mainContainer}>
                <div className={styles.coinContainer}>
                    <div className={styles.coin}>
                        <img src="image/day34/penny.png" alt="coin"
                            onMouseDown={coinDragHandle}
                        />
                    </div>
                </div>
                <div className={styles.nekoContainer}>
                    <div ref={nekoBodyRef} className={styles.nekoBody} >
                        <img src="image/day34/lucky_cat_body.png" alt="" />
                    </div>
                    <div className={styles.nekoHandContainer}>
                        <img className={styles.nekoHand} src="image/day34/lucky_cat_arm.png" alt="" />
                    </div>
                </div>
            </div>
            <audio ref={audioPlayerRef}><source src='media/day34/coin.wav' type='audio/wav' /></audio>
            <div ref={coinImgRef} className={styles.draggableCoin}>
                <img src="image/day34/penny.png" alt="coin"
                    onMouseMove={coinDraggingHandle}
                    onMouseUp={coinDragEndHandle}
                />
            </div>
        </div>
    );
}

export default Day;

//Day 34 - Maneki-neko - origin website: https://jenniferdewalt.com/lucky_cat.html