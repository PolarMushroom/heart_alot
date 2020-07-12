// import React from 'react';
// import './LookBook.css'

// function LookBook() {


//     var lastScrollTop = 0;
//     var stopLocation = 0;
//     function scrollTo(index) {
//         window.scrollTo({
//             top: window.innerHeight * index,
//             left: 0,
//             offset: '',
//             behavior: 'smooth'
//         });

//         lastScrollTop = window.pageYOffset

//     }

//     var ticking = false;


//     const stopScroll = (() => {
//         window.scrollTo(0, stopLocation * window.innerHeight);
//     })


//     const scrolling = () => {
//         var st = window.pageYOffset || document.documentElement.scrollTop;

//         if (!ticking) {
//             ticking = true;
//             if (st > lastScrollTop) {

//                 // downscroll code
//                 console.log("down");

//                 if (stopLocation < 4) {
//                     stopLocation++
//                 }
//                 window.requestAnimationFrame(function () {
//                     scrollTo(stopLocation);
//                 })

//             } else {
//                 // upscroll code
//                 console.log("up");
//                 if (stopLocation > 0) {
//                     stopLocation--
//                 }
//                 window.requestAnimationFrame(function () {
//                     scrollTo(stopLocation);
//                 });
//             }
//             lastScrollTop = st <= 0 ? 0 : st;
//             setTimeout(() => {

//                 window.addEventListener("scroll", stopScroll)
//                 setTimeout(() => {
//                     ticking = false
//                     lastScrollTop = window.pageYOffset;
//                     window.removeEventListener("scroll", stopScroll, false);
//                 }, 800)

//             }, 500)
//         }

//     }

//     window.addEventListener("scroll", scrolling, false);

//     return (
//         <div>
//             <section className="container">
//                 <div className="child" id="one" ></div>

//             </section>
//             <section className="container">
//                 <div className="child" id="two" ></div>

//             </section>
//             <section className="container">
//                 <div className="child" id="three"></div>
//             </section>
//             <section className="container">
//                 <div className="child" id="four" ></div>

//             </section>
//             <section className="container">
//                 <div className="child" id="five" ></div>

//             </section>
//         </div>

//     );
// }

// export default LookBook;

import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import './LookBook.css'
export default class LookBook extends Component {
    render() {
        return (
            <Fullpage>

                <FullPageSections>

                    <FullpageSection style={{
                        // backgroundColor: 'lime',
                        height: '100vh',
                        // padding: '1em',
                        // backgroundImage: 'https://www.nzherald.co.nz/resizer/F-AnpPpgzz5PuUMlKmBdvxEzq4Y=/1000x562/smart/filters:quality(70)/arc-anglerfish-syd-prod-nzme.s3.amazonaws.com/public/LW42KJ2PQFFMLDPUWC5OVUTG5U.jpg'
                    }}><div className="child" id="one" ></div> </FullpageSection>
                    <FullpageSection style={{
                        // backgroundColor: 'coral',
                        height: '100vh',
                    }}><div className="child" id="two" ></div></FullpageSection>
                    <FullpageSection style={{
                        height: '100vh',
                    }}><div className="child" id="three" ></div></FullpageSection>
                    <FullpageSection style={{
                        height: '100vh',
                    }}><div className="child" id="four" ></div></FullpageSection>
                    <FullpageSection style={{
                        height: '100vh',
                    }}><div className="child" id="five" ></div></FullpageSection>

                </FullPageSections>

            </Fullpage>
        )
    }
}