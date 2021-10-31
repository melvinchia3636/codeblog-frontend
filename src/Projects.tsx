import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactAnime from "react-animejs";

const anim = "animate__animated";
const lol = 0;

const Projects = (): JSX.Element => {
    const {Anime, stagger} = ReactAnime;

    return <div className="w-full h-full pt-32 px-16">
        <div className="flex justify-between gap-24 w-full h-full relative z-10">   
            <div className="h-full justify-between flex flex-col">
                <Anime initial={[{
                    targets: ".sidebar p",
                    translateX: ["-1000%", "0%"],
                    delay: stagger(200),
                    easing: "spring(1, 80, 100, 0)"
                }]}>
                    <div className="text-white sidebar font-Poppins text-3xl whitespace-nowrap">
                        <p className="font-Poppins tracking-widerr mb-8 text-yellow-500 font-semibold">Websites</p>
                        <p className="font-Poppins tracking-widerr mb-8">UI Designs</p>
                        <p className="font-Poppins tracking-widerr mb-8">Mobile Apps</p>
                        <p className="font-Poppins tracking-widerr mb-8">Desktop Apps</p>
                        <p className="font-Poppins tracking-widerr mb-8">Web Scraping</p>
                    </div>
                </Anime>
                <div className={`${anim} animate__fadeInUp animate__delay-1s`}>
                    <p className="text-white uppercase tracking-widerr font-semibold text-2xl">category no.</p>
                    <p className={`${anim} animate__fadeInLeft animate__delay-1s text-yellow-500 text-big font-bold tracking-widerr -mt-6`}>01<span className="text-white font-semibold text-4xl tracking-widerr whitespace-nowrap">/ 05</span></p>
                </div>
            </div>
            <div className="h-full justify-between flex flex-col">
                <div>
                    <div className={`${anim} workflow-title relative pl-6 ${lol === 0 ? "animate__fadeInDown" : "animate__fadeOutUp"}`} style={{borderLeft: "10px solid rgba(254, 206, 60)"}}>
                        <h1 className={`${anim} text-7xl text-white font-bold tracking-widerr uppercase ${lol === 0 ? "animate__fadeInDown animate__delay-1s" : "animate__fadeOutRight"}`}>WEBAPPS/<br/>WEBSITES</h1>
                    </div>
                    <button className={`${anim} text-yellow-500 font-bold mt-16 border-yellow-500 border-4 py-5 px-20 uppercase text-2xl tracking-widerr ${lol == 0 ? "animate__fadeInRight animate__delay-1s" : ""}`}>BWORSE PROEJCTS</button>
                </div>
                <div className={`${anim} animate__fadeInUp animate__delay-1s`}>
                    <p className="text-white uppercase tracking-widerr font-semibold text-2xl">projects count</p>
                    <p className={`${anim} animate__fadeInRight animate__delay-1s text-yellow-500 text-big font-bold tracking-widerr -mt-6`}>56<span className="text-white font-semibold text-4xl tracking-widerr">/ 78</span></p>
                </div>
            </div>
            <Anime initial={[{
                targets: ".meta div",
                translateX: ["1000%", "0%"],
                delay: stagger(200, {start: 1500}),
                easing: "spring(1, 80, 100, 0)"
            }]}>
                <div className="flex meta flex-col gap-16">
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase`}>description</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </div>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase`}>average time spent</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2`}><span className="font-semibold text-lg">3 months</span> / project</p>
                    </div>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase`}>case study</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2`}>Available</p>
                    </div>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase`}>project s.no</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2`}>CB-<span className="font-semibold text-lg text-yellow-500">WA</span>-XXXXX</p>
                    </div>
                </div>
            </Anime>
        </div>
        <svg className="absolute bottom-0 right-0" width="499" height="408" viewBox="0 0 499 408" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_264:31)" filter="url(#filter0_i_264:31)">
                <path d="M394.282 306.4C396.278 289.933 397.775 273.466 397.775 256.5C397.775 239.534 396.278 223.067 394.282 206.6H478.613C482.605 222.568 485.1 239.285 485.1 256.5C485.1 273.716 482.605 290.432 478.613 306.4H394.282ZM350.121 445.122C365.091 417.427 376.568 387.488 384.552 356.3H458.154C433.982 397.923 395.632 429.453 350.121 445.122ZM343.883 306.4H227.117C224.622 289.933 223.125 273.466 223.125 256.5C223.125 239.534 224.622 222.818 227.117 206.6H343.883C346.129 222.818 347.875 239.534 347.875 256.5C347.875 273.466 346.129 289.933 343.883 306.4ZM285.5 455.102C264.792 425.162 248.075 391.979 237.846 356.3H333.155C322.925 391.979 306.208 425.162 285.5 455.102ZM185.7 156.7H112.846C136.769 114.964 175.091 83.3841 220.63 67.878C205.66 95.5725 194.433 125.513 185.7 156.7ZM112.846 356.3H185.7C194.433 387.488 205.66 417.427 220.63 445.122C175.187 429.445 136.919 397.91 112.846 356.3ZM92.387 306.4C88.395 290.432 85.9 273.716 85.9 256.5C85.9 239.285 88.395 222.568 92.387 206.6H176.718C174.722 223.067 173.225 239.534 173.225 256.5C173.225 273.466 174.722 289.933 176.718 306.4H92.387ZM285.5 57.6485C306.208 87.5885 322.925 121.022 333.155 156.7H237.846C248.075 121.022 264.792 87.5885 285.5 57.6485ZM458.154 156.7H384.552C376.743 125.798 365.18 95.9691 350.121 67.878C396.029 83.5965 434.202 115.283 458.154 156.7ZM285.5 7C147.526 7 36 119.275 36 256.5C36 322.672 62.2865 386.133 109.077 432.923C132.245 456.091 159.75 474.469 190.02 487.008C220.291 499.547 252.735 506 285.5 506C351.672 506 415.133 479.713 461.923 432.923C508.713 386.133 535 322.672 535 256.5C535 223.735 528.547 191.291 516.008 161.02C503.469 130.75 485.091 103.245 461.923 80.0769C438.755 56.9086 411.25 38.5306 380.98 25.9921C350.709 13.4535 318.265 7 285.5 7Z" fill="#1A1A1A"/>
            </g>
            <defs>
                <filter id="filter0_i_264:31" x="0" y="0" width="499" height="475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_264:31"/>
                </filter>
                <clipPath id="clip0_264:31">
                    <rect width="499" height="471" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    </div>;
};

export default Projects;