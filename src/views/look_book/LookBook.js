import React, { useEffect, useState } from 'react';
import './LookBook.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function LookBook() {


    var Scroll = require('react-scroll');
    var Element = Scroll.Element;
    var scroller = Scroll.scroller;

    const sectionList = ['onee', 'twoo', 'threee', 'fourr', 'fivee']
    const [sectionIndex, setSectionIndex] = useState(0);
    var scroll = Scroll.animateScroll;
    let ticket = false;
    let index = 0;

    // let last_known_scroll_position = window.scrollY;
    // function doSomething(position) {
    //     // scroll 위치에 대한 작업을 하세요
    //     const height = window.innerHeight * 3;
    //     // console.log(position);

    //     if (position > window.scrollY) {
    //         // console.log('Scroll up');
    //         console.log('Scroll up', position, window.scrollY);
    //         last_known_scroll_position = window.scrollY;
    //     }
    //     else if (position < window.scrollY) {
    //         console.log('Scroll down', position, window.scrollY);
    //         last_known_scroll_position = window.scrollY;
    //     }

    // }

    // setTimeout(() => {
    //     console.log("timeout");

    // }, 4000);
    var lastScrollTop = window.pageYOffset;


    function scrollTo() {
        // let element = document.getElementById("dddd");

        // console.log(element);
        // element.scrollIntoView()
        // scroll.scrollToBottom();
        // console.log("sectionIndex2", sectionIndex2);

        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", to, element);
        });

        scroller.scrollTo(sectionList[index], {
            duration: 1500,
            delay: 100,
            smooth: true,
        })
        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", to, element);
        });
        // sectionIndex++
    }

    // useEffect(() => {
    //     console.log(sectionIndex);

    // }, [sectionIndex])

    setTimeout(() => {
        window.addEventListener("scroll", function () {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (!ticket) {
                ticket = true;
                if (st > lastScrollTop) {
                    // downscroll code
                    console.log('Scroll down');

                    if (index < 5) {
                        index++
                        scrollTo()
                    }
                    console.log(index);

                    setTimeout(() => {
                        console.log("timeout");
                        ticket = false
                    }, 2000);
                } else {
                    // upscroll code
                    console.log('Scroll up');
                    ticket = true;
                    if (index > 0) {
                        index--
                        scrollTo()
                    }
                    console.log(index);
                    setTimeout(() => {
                        console.log("timeout");
                        ticket = false;
                    }, 2000);
                }
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    }, 1000);


    // 

    // window.addEventListener('scroll', function (e) {


    //     if (!ticket) {
    //         window.requestAnimationFrame(function () {
    //             doSomething(last_known_scroll_position);
    //             ticket = true;
    //             setTimeout(() => {
    //                 console.log("timeout");
    //                 ticket = false;
    //             }, 4000);
    //         });


    //     }
    // });

    // window.addEventListener('mousewheel', async (event) => {
    //     if (!ticket) {
    //         ticket = true;
    //         setTimeout(() => {
    //             ticket = false;
    //         }, 500)

    //     }
    // });


    // add listener to disable scroll
    // window.addEventListener('scroll', noScroll);

    // Remove listener to re-enable scroll
    // window.removeEventListener('scroll', noScroll);


    return (
        <div>
            <button onClick={scrollTo}>test</button>
            <Link activeClass="onClick"
                to="one"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                className="nav_text a"
            >
                <span className="text">HOME</span>
            </Link>
            <Link activeClass="onClick"
                to="two"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                className="nav_text a"
            >
                <span className="text">HOME</span>
            </Link>
            <Link activeClass="onClick"
                to="three"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                className="nav_text a"
            >
                <span className="text">HOME</span>
            </Link>
            <section className="container">
                <Element className="child" id="one" name="onee">1</Element>
            </section>
            <section className="container">
                <Element className="child" id="two" name="twoo">2</Element>
            </section>
            <section className="container">
                <Element className="child" id="three" name="threee">3</Element>
                {/* <div className="child" id="dddd" name="threee">3</div> */}
            </section>
            <section className="container">
                <Element className="child" id="four" name="fourr">4</Element>
            </section>
            <section className="container">
                <Element className="child" id="five" name="fivee">5</Element>
            </section>
            <Element name="myScrollToElement">dasdas</Element>
            {/* <Element className="child" id="five" name="fivee">5</Element> */}
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




// import React, { Component } from 'react'
// import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

// export default class LookBook extends Component {
//     render() {
//         return (
//             <Fullpage>

//                 <FullPageSections>

//                     <FullpageSection style={{
//                         backgroundColor: 'lime',
//                         height: '100vh',
//                         padding: '1em',
//                     }}>1</FullpageSection>
//                     <FullpageSection style={{
//                         backgroundColor: 'coral',
//                         height: '100vh',
//                         padding: '1em',
//                     }}>2</FullpageSection>
//                     <FullpageSection style={{
//                         backgroundColor: 'firebrick',
//                         height: '100vh',
//                         padding: '1em',
//                     }}>3</FullpageSection>

//                 </FullPageSections>

//             </Fullpage>
//         )
//     }
// }