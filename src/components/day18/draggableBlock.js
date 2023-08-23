import { useEffect, useRef } from 'react';
import styles from './day.module.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

const DraggableBlock = ({ type }) => {
    const blockRef = useRef();

    useEffect(() => {
        $(blockRef.current).draggable({
            containment: 'window',
            stack: '.block',
            snap: true,
            snapMode: 'outer',
            snapTolerance: 13,
        });
    }, []);

    return (
        <div ref={blockRef} className={`${styles.block} ${type}`}>

        </div>
    );
}

export default DraggableBlock;

//Day 18 - Building Blocks - origin website: https://jenniferdewalt.com/building_blocks.html