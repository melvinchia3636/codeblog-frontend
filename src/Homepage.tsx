import React, { useRef, useState } from "react";
import Illu1 from "./assets/illu1.svg";
import Img1 from "./assets/img1.png";
import workflowIllu1 from "./assets/workflow-illu-1.svg";
import workflowIllu2 from "./assets/workflow-illu-2.svg";
import workflowIllu3 from "./assets/workflow-illu-3.svg";
import workflowIllu4 from "./assets/workflow-illu-4.svg";

import "./style/Home.scss";
import "tailwindcss/tailwind.css";
import "animate.css/animate.min.css";
import { useEffect } from "react";
import Typed from "typed.js";
  
interface ILanding {
    page: number;
    setPage: any
}

interface IDownButton extends ILanding {
    currentPage: number;
    delay?: 1|2|3|4|5
}

const DownButton: React.FC<IDownButton> = ({page, setPage, currentPage, delay}: IDownButton):JSX.Element => {
    return <button onClick={() => setPage(currentPage+1)} className={`animate__animated absolute bottom-6 left-1/2 ${page === currentPage ? `animate__fadeInDown animate__delay-${delay || 1}s` : "animate__fadeOutDown"}`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 26.6667V5.33337" stroke="#131313" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66667 17.3334L16 26.6667L25.3333 17.3334" stroke="#131313" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>;
};

const Landing: React.FC<ILanding> = ({page, setPage}: ILanding): JSX.Element => {

    const el = React.useRef<any>(null);
    const typed = React.useRef<any>(null);

    const workFlow: [number, string, string, string, string][] = [
        [7, workflowIllu1, "A NEW IDEA", "LET’S GET CREATIVE", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."],
        [8, workflowIllu2, "UI DESIGNING", "INTO FIGMA WE GO", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."],
        [9, workflowIllu3, "START CODING", "LET’S GET CREATIVE", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."],
        [10, workflowIllu4, "PUBLISH EM’", "last but not least", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."]
        
    ];

    useEffect(() => {
        const options = {
            strings: [
                "A WEB DEV",
                "MELVIN CHIA"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 3000,
            cursorChar: "_",
        };
        
        typed.current = new Typed(el.current, options);
        
        return () => {
            typed.current.destroy();
        };
    }, [page]);

    return <>
        {/* Intro */}
        <div className={page > 1 ? "hidden" : "flex items-center justify-center flex-col h-screen"}>
            <div className="absolute top-24 left-32 flex gap-4">
                <svg className={`animate__animated animate__fadeInLeft animate__fast ${page === 0 ? "animate__delay-2s" : ""} ${page !== 0 ? "animate__fadeOutLeftBig" : ""}`} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.53511 16.2543C13.1595 12.3251 18.6439 10.3333 25.8334 10.3333H28.4167V17.6158L26.3397 18.0317C22.8005 18.7395 20.3386 20.1319 19.0211 22.1753C18.3337 23.2762 17.9438 24.5366 17.8896 25.8333H25.8334C26.5185 25.8333 27.1756 26.1055 27.6601 26.59C28.1445 27.0745 28.4167 27.7315 28.4167 28.4167V46.5C28.4167 49.3494 26.0994 51.6667 23.25 51.6667H7.75003C7.06489 51.6667 6.4078 51.3945 5.92334 50.91C5.43887 50.4256 5.1667 49.7685 5.1667 49.0833V36.1667L5.17445 28.6259C5.1512 28.3392 4.66036 21.545 9.53511 16.2543ZM51.6667 51.6667H36.1667C35.4816 51.6667 34.8245 51.3945 34.34 50.91C33.8555 50.4256 33.5834 49.7685 33.5834 49.0833V36.1667L33.5911 28.6259C33.5679 28.3392 33.077 21.545 37.9518 16.2543C41.5762 12.3251 47.0606 10.3333 54.25 10.3333H56.8334V17.6158L54.7564 18.0317C51.2172 18.7395 48.7553 20.1319 47.4378 22.1753C46.7503 23.2762 46.3605 24.5366 46.3063 25.8333H54.25C54.9352 25.8333 55.5923 26.1055 56.0767 26.59C56.5612 27.0745 56.8334 27.7315 56.8334 28.4167V46.5C56.8334 49.3494 54.5161 51.6667 51.6667 51.6667Z" fill="#FFC922"/>
                </svg>
                <p className={`animate__animated animate__fadeInDown animate__fast ${page === 0 ? "animate__delay-2s" : ""} ${page !== 0 ? "animate__fadeOutLeftBig" : ""} text-white font-Chakra tracking-widerr text-3xl z-10 text-wider`}>You can never use up creativity. The more<br/>you use, the more you have.</p>
            </div>
            <div className='mt-48'>
                <p className={`animate__animated ${page === 0 ? "animate__delay-2s" : ""} animate__fast animate__fadeInLeft uppercase font-Chakra ml-2 text-white text-4xl font-bold tracking-widest ${page !== 0 ? " animate__fadeOutDownBig" : ""}`}>VISION OF</p>
                <h1 className={`animate__animated animate__slow animate__fadeIn uppercase text-huge leading-none relative z-60 font-Chakra font-bold tracking-widest mix-blend-difference text-yellow-500 ${page !== 0 ? "animate__fadeOutDownBig" : ""}`}>creativity</h1>
            </div>
            <button onClick={() => setPage(1)} className={`animate__animated animate__fadeInDown animate__fast ${page === 0 ? "animate__delay-3s" : ""} ${page !== 0 ? "animate__fadeOutDownBig" : ""} uppercase font-Chakra text-3xl relative z-10 font-semibold border-4 text-yellow-500 border-yellow-500 mix-blend-difference tracking-widest py-5 px-16 mt-24`}>START HERE</button>
        </div>
        
        {/* Intro.2 */}
        {[1, 2].includes(page) ? <div className="w-full h-screen top-0 left-0 flex flex-col justify-center items-center absolute z-10">
            <div className={`animate__animated ${page !== 0 ? "block animate__fadeInUp" : "hidden"}`}>
                <h2 className={`text-9xl tracking-widerr font-bold text-yellow-a800 text-inner font-Chakra ${page !== 1 ? "titleFadeOut" : ""}`}>GET READY</h2>
            </div>
            <p className={`font-Poppins text-center mt-4 text-xl tracking-widerr font-medium text-black-dark animate__animated ${page === 1 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>Use your mouse scroll to navigate between sections.<br/>Sit back, relax, and enjoy!</p>
            <DownButton {...{page, setPage}} currentPage={1}/>
        </div> : ""}

        {/* Intro.3 */}
        {[2, 3].includes(page) ? <div className="w-full h-screen top-0 left-0 flex flex-col justify-center items-center absolute z-10">
            <h2 className={`animate__animated font-Poppins text-center mt-4 text-2xl tracking-widerr font-medium text-black-dark ${page === 2 ? "animate__fadeIn animate__delay-1s" : "animate__fadeOutDown animate__faster"}`}>The portfolio of <span className="font-Chakra font-bold text-4xl">Melvin Chia</span></h2>
            <DownButton {...{page, setPage}} currentPage={2}/>
        </div> : ""}

        {/* 01A */}
        {[3, 4].includes(page) ? <div className="w-full h-screen top-0 left-0 flex flex-col justify-center items-center absolute z-10">
            <h2 className={`text-huge tracking-widerr font-bold text-yellow-a800 text-inner font-Chakra ${page !== 3 ? "titleFadeOut" : "titleNoIn"}`}>01A</h2>
            <p className={`font-Poppins text-center text-4xl tracking-widerr font-medium text-black-dark animate__animated ${page === 3 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>Who Am I</p>
            <DownButton {...{page, setPage}} currentPage={3} delay={2}/>
        </div> : ""}

        <div className={`bg-yellow-500 w-full h-200 absolute ${page <= 1 ? `-translate-x-28 anim-1 transform rotate-27 ${page !== 0 ? "anim-2" : ""}` : "top-0 left-0 w-full h-full"} transition-all mix-blend-difference`}></div>

        {Array(5).fill(0).map((_, i) => <div key={i} className={`layer layer-${i+1} w-full h-full left-0 -top-full absolute z-10 ${[4, 5, 7, 8, 9, 10].includes(page) ? "active" : ""}`}></div>)}
        <div className={`animate__animated animate__delay-1s animate__fadeIn w-full h-full left-0 top-0 bg-black-dark absolute ${[4, 5, 6].includes(page) ? "" : "hidden"} ${page === 6 ? "section-leave" : ""}`}>
            <div className="flex px-32 pt-28 items-center gap-6">
                <p className={`animate__animated ${page === 4 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold font-Chakra text-6xl tracking-widerr`}>01A</p>
                <h1 className={`animate__animated ${page === 4 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase font-Chakra text-4xl font-bold text-white tracking-widerr`}>self introduction</h1>
            </div>
            {/* 01A.1 */}
            <div className={`px-32 pb-8 w-full h-full animate__animated ${page === 4 ? "" : "section-hide"}`}>
                <div className="mt-16 flex gap-32">
                    <img src={Illu1} className={`animate__animated -mt-4 ${page === 4 ? "animate__fadeIn animate__delay-2s" : "animate__fadeOutDown"}`}/>
                    <div className="relative z-10">
                        <h1 className={`animate__animated text-6xl text-white font-Chakra font-bold tracking-widerr uppercase ${page === 4 ? "animate__fadeInRight animate__delay-3s" : "animate__fadeOutRight"}`}>Hello,<br/>I’m <span className="text-yellow-500" ref={el}></span></h1>
                        <p className={`animate__animated ${page === 4 ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOutDown"} text-white font-Poppins text-xl tracking-widerr font-light leading-7 mt-8 mb-12`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className={`animate__animated ${page === 4 ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} font-Chakra text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-2xl tracking-widerr`}>download CV</button>
                    </div>
                </div>
            </div>
            {/* 01A.2 */}
            <div className={`px-32 w-full h-full animate__animated ${page === 5 ? "block" : "animate__delay-2 animate__fadeOut"}`}>
                <div className="flex gap-32" style={{height: "140%"}}>
                    <img src={Img1} className={`animate__animated ${page === 5 ? "animate__fadeIn" : "animate__fadeOutDown"}`}/>
                    <div className="relative z-10">
                        <h1 className={`animate__animated text-6xl -mt-2 text-white font-Chakra font-bold tracking-widerr uppercase ${page === 5 ? "animate__fadeInRight animate__delay-2s" : "animate__fadeOutRight"}`}><span className="text-yellow-500">practice</span> skills<br/>make <span className="text-yellow-500">projects</span></h1>
                        <p className={`animate__animated ${page === 5 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown"} text-white font-Poppins text-xl tracking-widerr font-light leading-7 mt-8 mb-12`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className={`animate__animated relative z-10 ${page === 5 ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOut"} font-Chakra text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-2xl tracking-widerr`}>see my works</button>
                    </div>
                </div>
            </div>
            <p className="animate__animated absolute z-0 bottom-0 right-8 text-enormous leading-none font-bold font-Chakra tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner">01A</p>
        </div>

        {/* 01B */}
        <div className={`w-full h-screen top-0 left-0 flex flex-col justify-center items-center absolute z-10 ${[6, 7].includes(page) ? "" : "hidden"}`}>
            <h2 className={`text-huge tracking-widerr font-bold text-yellow-a800 text-inner font-Chakra ${page !== 6 ? "titleFadeOut" : "titleNoIn animate__delay-2s"}`}>01B</h2>
            <p className={`font-Poppins text-center text-4xl tracking-widerr font-medium text-black-dark animate__animated ${page === 6 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>HOW I DO MY PROJECTS</p>
            <DownButton {...{page, setPage}} currentPage={6} delay={2}/>
        </div>

        <div className={`animate__animated animate__delay-1s animate__fadeIn w-full h-full left-0 top-0 bg-black-dark absolute ${[7, 8, 9, 10].includes(page) ? "" : "hidden"} ${page === 11 ? "section-leave" : ""}`}>
            <div className="flex px-32 pt-28 items-center gap-6">
                <p className={`animate__animated ${page === 7 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold font-Chakra text-6xl tracking-widerr`}>01B</p>
                <h1 className={`animate__animated ${page === 7 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase font-Chakra text-4xl font-bold text-white tracking-widerr`}>project workflow</h1>
            </div>
            {workFlow.map(([i, illu, title, subtitle, desc], index) => <div key={i} className={`px-32 pb-8 w-full h-full animate__animated ${page === i ? "" : "section-hide"}`}>
                <div className={`${!index ? "mt-24" : ""} flex gap-32`}>
                    <img src={illu} className={`animate__animated -mt-4 ${page === i ? "animate__fadeIn animate__delay-2s" : "animate__fadeOutDown"}`}/>
                    <div className="relative z-10">
                        <div className={`animate__animated workflow-title relative pl-6 ${page === i ? "animate__fadeInDown animate__delay-2s" : "animate__fadeOutUp"}`} style={{borderLeft: "10px solid rgba(254, 206, 60)"}}>
                            <h1 className={`animate__animated text-6xl text-white font-Chakra font-bold tracking-widerr uppercase ${page === i ? "animate__fadeInDown animate__delay-2s" : "animate__fadeOutRight"}`}>{title}</h1>
                            <p className={`animate__animated text-3xl mt-2 text-white font-Poppins tracking-widerr uppercase ${page === i ? "animate__fadeInRight animate__delay-3s" : "animate__fadeOutRight"}`}>{subtitle}</p>
                        </div>
                        <p className={`animate__animated ${page === i ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOutDown"} text-white font-Poppins text-xl tracking-widerr font-light leading-7 mt-8 mb-12`}>{desc}</p>
                        <button className={`animate__animated ${page === i ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} font-Chakra text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-2xl tracking-widerr`}>read more</button>
                    </div>
                </div>
            </div>)}
            <p className="animate__animated absolute bottom-0 right-8 text-enormous leading-none font-bold font-Chakra tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner">01B</p>
        </div>
    </>;
};

export default Landing;