import { useState, useEffect } from 'react';
import styles from './day.module.css';

const WavePanel = ({ numOfHorizontal, numOfVertical }) => {
    const [waveEntities, setWaveEntities] = useState(new Array(numOfHorizontal * numOfVertical).fill(0).map(() => ({ onWave: false, triggered: false })));

    function waveClickHandler(indices) {

        const newWaveEntities = [...waveEntities];
        indices.forEach(index => {
            newWaveEntities[index].onWave = true;
            newWaveEntities[index].triggered = true;
        });
        setWaveEntities(newWaveEntities);

        const triggerIndeicesCollection = indices.
            map(index => [index - 1, index + 1, index - numOfHorizontal, index + numOfHorizontal]).
            // convert 2d array to 1d array
            flat().
            // remove duplicates
            filter((item, index, self) => self.indexOf(item) === index).
            // remove out of range
            filter(i => i >= 0 && i < numOfHorizontal * numOfVertical && !newWaveEntities[i].triggered);

        console.log('triggerIndeicesCollection', triggerIndeicesCollection);

        setTimeout(() => {
            if (triggerIndeicesCollection.length > 0) {
                waveClickHandler(triggerIndeicesCollection);
            } else {
                const newWaveEntities = [...waveEntities];
                newWaveEntities.forEach(waveEntity => {
                    waveEntity.onWave = false;
                    waveEntity.triggered = false;
                });
                setWaveEntities(newWaveEntities);
            }

        }, 50);
    }

    return (
        <div className={styles.wavePanel}
            style={{ width: `${20 * numOfHorizontal}px`, height: `${20 * numOfVertical}px` }}
        >
            {
                waveEntities.map((waveEntity, index) =>
                    <WaveEntity key={index} index={index}
                        onWave={waveEntity.onWave}
                        waveClickHandler={waveClickHandler} />
                )
            }
        </div>
    );
}

const WaveEntity = ({ waveClickHandler, onWave, index }) => {
    return (
        <div className={`${styles.waveEntity} ${onWave ? styles.wave : ""}`}
            onClick={() => waveClickHandler([index])}>
        </div>
    );
}

export default WavePanel;

// import { useState, useEffect } from 'react';
// import styles from './day.module.css';

// const WavePanel = ({ numOfHorizontal, numOfVertical }) => {
//     const [waveEntities, setWaveEntities] = useState(new Array(numOfHorizontal * numOfVertical).fill(0).map(() => ({ onWave: false })));

//     function waveClickHandler(index) {
//         const newWaveEntities = [...waveEntities];
//         newWaveEntities[index].onWave = true;
//         setWaveEntities(newWaveEntities);

//         const triggerIndeicesCollection = [index - 1, index + 1, index - numOfHorizontal, index + numOfHorizontal];

//         setTimeout(() => {
//             triggerIndeicesCollection.forEach(i => {
//                 if (i >= 0 && i < numOfHorizontal * numOfVertical) {
//                     waveClickHandler(i);
//                 }
//             })
//         }, 50);
//     }

//     return (
//         <div className={styles.wavePanel}
//             style={{ width: `${20 * numOfHorizontal}px`, height: `${20 * numOfVertical}px` }}
//         >
//             {
//                 waveEntities.map((waveEntity, index) =>
//                     <WaveEntity key={index} index={index}
//                         onWave={waveEntity.onWave}
//                         waveClickHandler={waveClickHandler} />
//                 )
//             }
//         </div>
//     );
// }

// const WaveEntity = ({ waveClickHandler, onWave, index }) => {
//     return (
//         <div className={`${styles.waveEntity} ${onWave ? styles.wave : ""}`}
//             onClick={() => { !onWave && waveClickHandler(index); }}>
//         </div>
//     );
// }

// export default WavePanel;