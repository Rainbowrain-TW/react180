import styles from './day.module.css';

const Digital = ({ num }) => {

    function checkNumber(digits) {
        switch (digits) {
            case "ht":
                return [2, 3, 5, 7, 8, 9, 0].includes(num) ? "visible" : "hidden";
            case "hm":
                return [2, 3, 4, 5, 6, 8, 9].includes(num) ? "visible" : "hidden";
            case "hb":
                return [2, 3, 5, 6, 8, 9, 0].includes(num) ? "visible" : "hidden";
            case "vlt":
                return [4, 5, 6, 8, 9, 0].includes(num) ? "visible" : "hidden";
            case "vlb":
                return [2, 6, 8, 0].includes(num) ? "visible" : "hidden";
            case "vrt":
                return [1, 2, 3, 4, 7, 8, 9, 0].includes(num) ? "visible" : "hidden";
            case "vrb":
                return [1, 3, 4, 5, 6, 7, 8, 9, 0].includes(num) ? "visible" : "hidden";
            default:
                return "visible";
        }
    }

    console.log(`num: ${num}`)

    return (
        <div className={styles.digital}>
            <div className={`${styles.horizon} ${styles.top}`} style={{ visibility: checkNumber("ht") }}><div className={styles.triLeft} /><div className={styles.triRight} /></div>
            <div className={`${styles.horizon} ${styles.middle}`} style={{ visibility: checkNumber("hm") }}><div className={styles.triLeft} /><div className={styles.triRight} /></div>
            <div className={`${styles.horizon} ${styles.bottom}`} style={{ visibility: checkNumber("hb") }}><div className={styles.triLeft} /><div className={styles.triRight} /></div>
            <div className={`${styles.vertical} ${styles.left} ${styles.top}`} style={{ visibility: checkNumber("vlt") }}><div className={styles.triUp} /><div className={styles.triDown} /></div>
            <div className={`${styles.vertical} ${styles.left} ${styles.bottom}`} style={{ visibility: checkNumber("vlb") }}><div className={styles.triUp} /><div className={styles.triDown} /></div>
            <div className={`${styles.vertical} ${styles.right} ${styles.top}`} style={{ visibility: checkNumber("vrt") }}><div className={styles.triUp} /><div className={styles.triDown} /></div>
            <div className={`${styles.vertical} ${styles.right} ${styles.bottom}`} style={{ visibility: checkNumber("vrb") }}><div className={styles.triUp} /><div className={styles.triDown} /></div>
        </div>
    );
}

export default Digital;

//Day 23 - Stopwatch - origin website: https://jenniferdewalt.com/stopwatch.html