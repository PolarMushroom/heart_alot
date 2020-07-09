import React, { useState } from 'react';
import './LookBook.css'

function LookBook() {


    function doSomething(event) {
        // scroll 위치에 대한 작업을 하세요
        const height = window.innerHeight * 3;

        if (event.wheelDeltaY >= 0) {
            console.log('Scroll up');
            // htime--
        }
        else {
            console.log('Scroll down');
            htime++
            window.scroll({
                top: height,
                behavior: 'smooth'
            });
        }

    }

    // setTimeout(() => {
    //     console.log("timeout");

    // }, 4000);

    // 


    // window.addEventListener('mousewheel', async (event) => {
    //     if (!ticket) {
    //         ticket = true;
    //         setTimeout(() => {
    //             ticket = false;
    //         }, 500)
    //         doSomething(event)
    //     }
    // });
    let htime = 2
    // let ticket = false;
    function noScroll() {
        const height = window.innerHeight * htime;
        window.scrollTo(0, height);

        window.scroll({
            top: height,
            behavior: 'smooth'
        });
    }

    // add listener to disable scroll
    window.addEventListener('scroll', noScroll);

    // Remove listener to re-enable scroll
    // window.removeEventListener('scroll', noScroll);


    return (
        <div>
            <section className="container">
                <div className="child" id="one">1</div>
            </section>
            <section className="container">
                <div className="child" id="two">2</div>
            </section>
            <section className="container">
                <div className="child" id="three">3</div>
            </section>
            <section className="container">
                <div className="child" id="four">4</div>
            </section>
            <section className="container">
                <div className="child" id="five">5</div>
            </section>
        </div>
        // <div class="scrolled-container">
        //     <div class="scrolled-area">1</div>
        //     <div class="scrolled-area">2</div>
        //     <div class="scrolled-area">3</div>
        //     <div class="scrolled-area">4</div>
        // </div>
    );
}

export default LookBook;
