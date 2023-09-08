import { useState, useEffect } from 'react';
import styles from './day.module.css';

import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

const Day = () => {

    useEffect(() => {
        $(function () {
            console.log('jquery loaded');
            $("." + styles.food).draggable({});

            console.log("styles.food:", styles.food);
            console.log("styles.food:", $("." + styles.food));

            $("." + styles.head).droppable({
                drop: function (event, ui) {
                    eatAnimation();
                    $("." + styles.pupil).animate({ top: '15', left: '15', height: '30px', width: '30px' });
                },
                over: function (event, ui) {
                    $("." + styles.pupil).animate({ top: '3', left: '3', height: '54px', width: '54px' });
                }
            });

            setTimeout(function () {
                $("#" + styles.fish_text).fadeOut('slow');
            }, 2000);

            $("." + styles.head).on('click', function () {
                $("#" + styles.text_bubble + " p").text('Purr...');
                $("#" + styles.text_bubble).show();
                $("#" + styles.kitty_container).addClass('purr');

                setTimeout(function () {
                    $("#" + styles.kitty_container).removeClass('purr');
                    $("#" + styles.text_bubble).fadeOut('600');
                }, 3000);
            });

            $("." + styles.paw).on('click', function () {
                var elm = this;
                $("#" + styles.text_bubble).fadeOut('600');
                $(elm).addClass(styles.paw_lick);
                $("." + styles.mouth).animate({ width: '20', height: '10', backgroundColor: '#ab0014', left: '90' });

                setTimeout(function () {
                    $(elm).removeClass(styles.paw_lick);
                    $("." + styles.mouth).animate({ width: '12', height: '3', backgroundColor: '202123', left: '94' });
                }, 1500);
            });

            $("." + styles.ear).on('click', function () {
                $("#" + styles.text_bubble + " p").text('Meow!');
                $("#" + styles.text_bubble).show();

                setTimeout(function () {
                    $("#" + styles.text_bubble).fadeOut('600');
                }, 3000)
            });

            function eatAnimation() {
                $("#" + styles.nose_container).addClass(styles.eat_nose);
                $("." + styles.eye).addClass(styles.eat_eyes);
                $("." + styles.mouth).addClass(styles.eat_mouth);
                $("." + styles.food).fadeOut(500);
                $("#" + styles.text_bubble + " p").text('GULP!');
                $("#" + styles.text_bubble).show();

                setTimeout(function () {
                    $("#" + styles.nose_container).removeClass(styles.eat_nose);
                    $("." + styles.eye).removeClass(styles.eat_eyes);
                    $("." + styles.mouth).removeClass(styles.eat_mouth);
                    $("#" + styles.text_bubble).fadeOut('600');
                    replaceFood();
                }, 1000);
            };

            function replaceFood() {
                $("." + styles.food).css({ top: 0, left: 0 });
                $("." + styles.food).show();
            }
        });
    }, []);

    return (
        <div className={styles.site}>
            <a href="/react180/" className={styles.homeLink}>⛪</a>
            <div id={styles.container}>

                <div id={styles.food_container}>
                    <div className={`${styles.food} ui-draggable`} id={styles.food_1} style={{ position: "relative", left: "0px", top: "0px", display: "inline-block" }}></div>
                    <div id={styles.fish_text} style={{ display: "none" }}>I'm Cat Food!'</div>
                </div>

                <div id={styles.text_bubble} style={{ display: "none" }}>
                    <p>GULP!</p>
                </div>

                <div id={styles.kitty_container} className={""} >
                    <div className={styles.ear} id={styles.left_ear} ></div >
                    <div className={styles.ear} id={styles.right_ear} ></div >
                    <div className={`${styles.head} "ui-droppable"}`}>
                        < div className={`${styles.eye} ${styles.blink}`} id={styles.left_eye} rel="left" >
                            <div className={styles.pupil} id={styles.pupil_left} style={{ top: "15px", left: "15px", height: "30px", width: "30px" }} ></div>
                        </div >
                        <div className={`${styles.eye} ${styles.blink}`} id={styles.right_eye} rel="right" >
                            <div className={styles.pupil} id={styles.pupil_right} style={{ top: "15px", left: "15px", height: "30px", width: "30px" }} ></div >
                        </div >

                        <div id={styles.nose_container} className={""} >
                            <div className={styles.nose}></div>
                            < div className={styles.whiskers} id={styles.left_whiskers}>
                                <div className={`${styles.whisker} ${styles.w1}`}></div>
                                <div className={`${styles.whisker} ${styles.w2}`}></div>
                                <div className={`${styles.whisker} ${styles.w3}`}></div>
                            </div>
                            <div className={styles.whiskers} id={styles.right_whiskers} >
                                <div className={`${styles.whisker} ${styles.w1}`}></div>
                                <div className={`${styles.whisker} ${styles.w2}`}></div>
                                <div className={`${styles.whisker} ${styles.w3}`}></div>
                            </div >
                        </div >
                        <div className={styles.mouth} style={{ width: "12px", height: "3px", backgroundColor: "rgb(0, 0, 0)", left: "94px" }}></div>
                    </div >
                    <div className={styles.paw} id={styles.left_paw} ></div >
                    <div className={styles.paw} id={styles.right_paw} ></div >
                    <div className={styles.body}>
                        < div className={styles.tail} ></div >
                    </div >
                </div >
            </div >
        </div >

    );
}

export default Day;

//Day 30 - Silly Kitty - origin website: https://jenniferdewalt.com/silly_kitty.html