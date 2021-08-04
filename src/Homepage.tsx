import React, { useEffect, useRef } from "react";
import { Radar } from "react-chartjs-2";

import project1 from "./assets/project images/cruisegator.png";
import project2 from "./assets/project images/McWiki.png";
import project3 from "./assets/project images/Fruits Inc..png";

import "./style/Home.scss";
import "tailwindcss/tailwind.css";
import "animate.css/animate.min.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Tilt from "react-tilt";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactAnime from "react-animejs";

import Illu1 from "./assets/illu1";
import Illu2 from "./assets/illu2";
import { useIntersection } from "./useIntersection";
  
const chartOptions = {
    responsive: true, 
    maintainAspectRatio: true,
    scale: {
        ticks: {
            beginAtZero: true,
            min: 0,
            step: 10
        },
        angleLines: {
            display: false
        },
        pointLabels: {
            fontSize: 100
        }
    },
    plugins: {
        legend: {
            display: false,
        }
    },
    animation: {
        duration: 0
    }
};

interface ServiceProps {
    inViewPort: boolean,
    bottom: boolean
}

const Service: React.FC<ServiceProps> = ({inViewPort, bottom}: ServiceProps): JSX.Element => {
    return <div className={(!bottom ? "block mt-16 xl:hidden" : "hidden xl:block xl:mr-32")}>
        <div className="py-5 border-b-2 border-t-2 px-6 border-gray-200">
            <h3 className="text-3xl font-medium mb-6 flex items-center whitespace-nowrap">
                <svg width="38" height="38" className="mr-4" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.083 30.0835H12.6663V28.5002H11.083V30.0835ZM28.4997 30.0835H30.083V28.5002H28.4997V30.0835ZM1.58301 36.4168H18.9997V1.5835H1.58301V36.4168ZM18.9997 36.4168H36.4163V1.5835H18.9997V36.4168ZM6.33301 7.91683H14.2497H6.33301ZM23.7497 7.91683H31.6663H23.7497ZM6.33301 14.2502H14.2497H6.33301ZM23.7497 14.2502H31.6663H23.7497ZM6.33301 20.5835H14.2497H6.33301ZM23.7497 20.5835H31.6663H23.7497Z" stroke="#716FFF" strokeWidth="2.4"/>
                </svg>
                Create Website
            </h3>
            <p className="text-lg font-normal leading-7 text-gray-400">Et sollicitudin ac orci phasellus. Mi proin sed libero enim sed faucibus turpis in eu.</p>
        </div>
        <div className="py-5 border-b-2 px-6 border-gray-200">
            <h3 className="text-3xl font-medium mb-6 flex items-center whitespace-nowrap">
                <svg width="38" height="38" className="mr-4" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6249 26.061C15.8016 25.9696 14.9917 25.7823 14.2119 25.5028C14.2356 24.9423 14.2499 24.3581 14.2499 23.7501V23.5601V22.9497C14.9861 23.3012 15.7865 23.5458 16.6249 23.667V17.8126C16.6249 16.8678 17.0002 15.9616 17.6683 15.2935C18.3364 14.6254 19.2426 14.2501 20.1874 14.2501H26.0418C25.8524 12.9341 25.35 11.6827 24.577 10.601C23.8039 9.51924 22.7826 8.63874 21.5988 8.03336C20.4151 7.42798 19.1034 7.1154 17.7738 7.12183C16.4442 7.12827 15.1356 7.45354 13.9578 8.07035C13.7699 7.29356 13.4605 6.55133 13.041 5.8711C14.5807 5.10261 16.2831 4.71725 18.0036 4.74778C19.7241 4.7783 21.4118 5.22382 22.9232 6.04644C24.4346 6.86906 25.725 8.04447 26.6848 9.47274C27.6445 10.901 28.2452 12.5399 28.4358 14.2501H32.0624C33.0072 14.2501 33.9134 14.6254 34.5815 15.2935C35.2496 15.9616 35.6249 16.8678 35.6249 17.8126V29.6876C35.6249 30.6324 35.2496 31.5386 34.5815 32.2067C33.9134 32.8748 33.0072 33.2501 32.0624 33.2501H20.1874C19.2426 33.2501 18.3364 32.8748 17.6683 32.2067C17.0002 31.5386 16.6249 30.6324 16.6249 29.6876V26.061ZM28.4358 16.6251C28.1659 19.0348 27.085 21.2812 25.3705 22.9957C23.656 24.7103 21.4096 25.7911 18.9999 26.061V29.6876C18.9999 30.0025 19.125 30.3046 19.3477 30.5273C19.5704 30.75 19.8724 30.8751 20.1874 30.8751H32.0624C32.3773 30.8751 32.6794 30.75 32.9021 30.5273C33.1248 30.3046 33.2499 30.0025 33.2499 29.6876V17.8126C33.2499 17.4977 33.1248 17.1956 32.9021 16.9729C32.6794 16.7502 32.3773 16.6251 32.0624 16.6251H28.4358ZM26.0418 16.6251H20.1874C19.8724 16.6251 19.5704 16.7502 19.3477 16.9729C19.125 17.1956 18.9999 17.4977 18.9999 17.8126V23.667C20.7763 23.4102 22.4221 22.5856 23.6912 21.3165C24.9604 20.0473 25.785 18.4015 26.0418 16.6251Z" fill="#716FFF"/>
                    <path d="M11.3881 17.9575C11.1388 17.0408 10.735 16.1216 10.0415 15.4163C11.1625 14.3546 11.875 12.6636 11.875 10.6876C11.875 9.03227 11.5401 7.89465 10.9345 6.98502C10.6658 6.59379 10.3552 6.23304 10.0083 5.90915C9.87528 5.78077 9.74069 5.6541 9.6045 5.52915C9.45963 5.39377 9.32663 5.27027 9.15325 5.0969C8.797 4.74065 8.75663 4.45565 8.75663 4.30602C8.75702 4.22285 8.77065 4.14028 8.797 4.0614C8.90559 3.82657 8.93451 3.56271 8.87938 3.30993C8.82425 3.05716 8.68807 2.82931 8.49156 2.66102C8.29506 2.49274 8.04897 2.39324 7.79072 2.37765C7.53247 2.36206 7.2762 2.43123 7.06087 2.57465L7.05612 2.57702L7.049 2.58177L7.02763 2.59602L6.95637 2.64352C6.60012 2.89762 6.2569 3.16951 5.928 3.45815C5.33425 3.98302 4.56 4.75965 4.01138 5.6859C3.53246 6.4538 3.14809 7.27677 2.86663 8.1369C2.58163 8.98952 2.375 9.9134 2.375 10.6876C2.375 12.6636 3.0875 14.3523 4.2085 15.4186C3.515 16.1216 3.11125 17.0408 2.86188 17.9599C2.375 19.7459 2.375 21.9546 2.375 23.6623V23.7501C2.375 28.6379 3.28937 31.5401 4.32487 33.2668C4.845 34.1313 5.3865 34.6894 5.84013 35.0409C6.08184 35.2294 6.34489 35.3889 6.62388 35.5159C6.78521 35.5748 6.95379 35.6115 7.125 35.6251C7.3245 35.6251 7.62612 35.5159 7.62612 35.5159C7.90511 35.3889 8.16816 35.2294 8.40987 35.0409C8.86112 34.6894 9.40737 34.1313 9.92512 33.2668C10.9606 31.5425 11.875 28.6379 11.875 23.7501V23.6646C11.875 21.9546 11.875 19.7483 11.3881 17.9575ZM5.90663 17.0788C6.175 16.808 6.53363 16.6251 7.125 16.6251C7.71875 16.6251 8.075 16.8104 8.34338 17.0764C8.64262 17.378 8.9015 17.8673 9.09625 18.5821C9.4905 20.0333 9.5 21.938 9.5 23.7501C9.5 28.3624 8.63313 30.8039 7.88738 32.046C7.60238 32.521 7.334 32.8274 7.125 33.0198C6.82638 32.7326 6.56973 32.4048 6.36262 32.046C5.61687 30.8015 4.75 28.3624 4.75 23.7501C4.75 21.938 4.7595 20.0333 5.15375 18.5821C5.3485 17.8696 5.60737 17.378 5.90663 17.0764V17.0788ZM7.125 14.2501C6.21062 14.2501 4.75 13.2336 4.75 10.6876C4.75 10.2768 4.8735 9.62602 5.1205 8.88977C5.34559 8.19469 5.65591 7.53018 6.04438 6.9114C6.251 6.56227 6.51938 6.22265 6.80913 5.91152C6.973 6.20127 7.18913 6.4934 7.47413 6.7784C7.6475 6.95177 7.87312 7.16077 8.0655 7.34127L8.36 7.61677C8.60938 7.85902 8.80175 8.0704 8.95612 8.30552C9.24112 8.73065 9.5 9.37427 9.5 10.6876C9.5 13.2336 8.03937 14.2501 7.125 14.2501Z" fill="#716FFF"/>
                </svg>
                UI/UX Design
            </h3>
            <p className="text-lg font-normal leading-7 text-gray-400">Ut morbi tincidunt augue interdum velit euismod in. Lacus sed turpis tincidunt id.</p>
        </div>
        <div className="py-5 border-b-2 px-6 border-gray-200">
            <h3 className="text-3xl font-medium mb-6 flex items-center whitespace-nowrap">
                <svg width="40" height="40" className="mr-4" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 3.75V10.5862L9.21875 10.9763L14.2575 15H10.43L5.7425 11.4838L4.2575 13.5162L9.57 17.5H14.0238L9.53125 21.25H3.75V23.75H10.4688L10.7812 23.4762L12.5387 22.0312C12.5288 22.1875 12.5 22.3388 12.5 22.5C12.5 22.72 12.52 22.94 12.5387 23.1637L7.85125 27.8512L7.5 28.2425V36.25H10V29.2962L13.2037 26.0938C13.545 27.0362 13.9788 27.9688 14.5312 28.8288C15.7913 30.785 17.6362 32.5 20 32.5C22.3625 32.5 24.2087 30.7863 25.4688 28.8275C26.0115 27.9683 26.4572 27.0514 26.7975 26.0938L30 29.2975V36.25H32.5V28.2425L32.1488 27.8512L27.4613 23.1637C27.48 22.9387 27.5 22.72 27.5 22.5C27.5 22.3487 27.4713 22.2162 27.4613 22.07L29.2188 23.4762L29.57 23.75H36.25V21.25H30.43L25.7425 17.5H30.43L35.7425 13.515L34.2575 11.485L29.57 15H25.7425L30.7812 10.9763L31.25 10.5875V3.75H28.75V9.41375L24.8438 12.5387C24.6488 11.7638 24.2575 11.0938 23.75 10.5075V6.25H21.25V8.945C20.85 8.8425 20.43 8.75 20 8.75C19.57 8.75 19.15 8.8425 18.75 8.945V6.25H16.25V10.5075C15.7425 11.0938 15.3512 11.7625 15.1562 12.5387L11.25 9.41375V3.75H8.75ZM20 11.25C21.3962 11.25 22.5 12.3538 22.5 13.75C22.5 15.1462 21.3962 16.25 20 16.25C18.6038 16.25 17.5 15.1462 17.5 13.75C17.5 12.3538 18.6038 11.25 20 11.25ZM20 18.75C21.5375 18.75 22.8325 19.1213 23.6725 19.7262C24.51 20.3325 25 21.1138 25 22.5C25 23.8875 24.36 25.9425 23.3587 27.5C22.3587 29.0575 21.0837 30 20 30C18.9163 30 17.6413 29.0575 16.64 27.5C15.64 25.9425 15 23.8875 15 22.5C15 21.1125 15.4875 20.3325 16.3287 19.7262C17.1662 19.1213 18.4625 18.75 20 18.75Z" fill="#716FFF"/>
                </svg>
                Web Scraping
            </h3>
            <p className="text-lg font-normal leading-7 text-gray-400">Consequat nisl vel pretium lectus. Blandit massa enim nec dui nunc mattis.</p>
        </div>
    </div>;
};

const TOC  = (): JSX.Element => {
    const {Anime, stagger} = ReactAnime;

    const content = [
        ["#aboutme", "about me"],
        ["#skills", "my skills"],
        ["#services", "services"],
        ["#projects", "projects"],
        ["#collab", "collaborate"],
        ["#contact", "get in touch"]
    ];

    return <Anime initial={[
        {
            targets: ".c-nav li",
            translateX: 350,
            delay: stagger(200, {start: 1000}),
            easing: "spring(1, 80, 100, 0)"
        }
    ]}>
        <ul className="text-2xl font-semibold -mt-10 c-nav hidden lg:block">
            {content.map(([id, text], i) => <li className={"my-10 -ml-96 mr-96 uppercase " + (!i ? "active" : "")} key={id}><a href={id}>{text}</a></li>)}
        </ul>
    </Anime>;
};

const ProjectList = ():JSX.Element => {
    const projects = [
        {
            name: "Cruisegator",
            subtitle: "Introducing cruiseships in a fancy way.",
            description: "Cruisegator is a website containing interesting data of over 1000 cruiseship. It is my first ever React JS, Express JS, Typescript and React Redux project. It's by far the largest project I've ever built.",
            image: project1,
            link: "https://cruisegator.thecodeblog.net",
            type: "website"
        },
        {
            name: "Mc Wiki",
            subtitle: "A mobile app for everything in Minecraft.",
            description: "This project actually hasn't been done yet. One day when I was surfing around the Internet, I accidentally stumbled on the Minecraft officail wiki, so I just decided to make something similar.",
            image: project2,
            link: "https://cruisegator.thecodeblog.net",
            type: "app"
        },
        {
            name: "Juicy Inc.",
            subtitle: "Give you a taste of juicy juice.",
            description: "This is a really casual idea that has randomly pop out from nowhere. It's just a normal midnight when I opened a blank canvas in Figma without any idea on what I'm gonna do... And that's it!",
            image: project3,
            link: "https://cruisegator.thecodeblog.net",
            type: "website"
        },
    ];

    return <>
        {projects.map(({name, subtitle, description, image, link, type}) => 
            <div className="px-8 sm:px-24 md:px-32 flex flex-col items-center mt-24" key={name}>
                <h2 className='text-purple-300 font-semibold text-5xl md:text-6xl'>{name}</h2>
                <h3 className="text-2xl md:text-3xl font-medium mt-6 mb-9 text-center">{subtitle}</h3>
                <p className="text-lg font-normal leading-7 md:leading-8 text-gray-400 w-full xl:w-9/12 text-center">{description}</p>
                <a className='bg-purple-300 rounded-full py-4 px-12 inline-block mt-12 font-medium btn-goto' data-hover="LET'S GO" href={link}><div className="text-white whitespace-nowrap">{type === "website" ? "GO TO WEBSITE" : "DOWNLOAD APP"}</div></a>
                <img src={image} className="mt-16 md:mt-24"/>
            </div>
        )}
    </>;
};

const Landing = (): JSX.Element => {
    const refHeader = useRef(null);
    const refAbout = useRef(null);
    const refSkillsHeader = useRef(null);
    const refSkillsFrontend = useRef(null);
    const refSkillsBackend = useRef(null);
    const refServices = useRef(null);
    const refServicesFooter = useRef(null);
    
    const headerInViewport = useIntersection(refHeader, "0px");
    const aboutInViewport = useIntersection(refAbout, "0px");
    const skillsHeaderInViewport = useIntersection(refSkillsHeader, "0px");
    const skillsFrontendInViewport = useIntersection(refSkillsFrontend, "0px");
    const skillsBackendInViewport = useIntersection(refSkillsBackend, "0px");
    const servicesInViewport = useIntersection(refServices, "0px");
    const servicesFooterInViewport = useIntersection(refServicesFooter, "0px");

    return <div className="home mt-24">
        <div className="h-screen flex justify-between items-center lg:pl-48" ref={refHeader}>
            <div className="flex-shrink">
                <TOC/>
            </div>
            <div className="relative w-full h-screen flex-grow flex justify-center lg:justify-end items-center">
                <svg width="1540" height="1670" viewBox="0 0 1436 1574" fill="none" xmlns="http://www.w3.org/2000/svg" className="hex">
                    <path d="M468.352 202.984C483.857 183.269 509.196 174.046 533.746 179.183L1066.72 290.691C1089.07 295.367 1107.41 311.262 1115.22 332.719L1314.48 880.178C1322.29 901.634 1318.46 925.603 1304.34 943.551L967.736 1371.56C952.231 1391.27 926.891 1400.5 902.342 1395.36L369.368 1283.85C347.019 1279.18 328.674 1263.28 320.865 1241.83L121.606 694.366C113.796 672.909 117.632 648.941 131.747 630.993L468.352 202.984Z" fill="#E8E8FF"/>
                </svg>
                <div className="relative w-full lg:w-3/5 -mt-56 md:-mt-24 mx-8 lg:mx-0 lg:mr-24">
                    <h3 className={"font-semibold text-purple-300 text-xl xl:text-2xl opacity-0 " + (headerInViewport ? "animate__animated animate__fadeInDown" : "")}>Fullstack Web Developer</h3>
                    <h1 className={"text-left text-6xl md:text-7xl 2xl:text-8xl leading-129 font-semibold my-2 xl:my-3 2xl:my-6 md:whitespace-nowrap opacity-0 " + (headerInViewport ? "animate__animated animate__fadeInRight" : "")}>Melvin Chia</h1>
                    <p className={"text-lg mt-4 xl:leading-8 xl:text-xl opacity-0 " + (headerInViewport ? "animate__animated animate__fadeInUp" : "")}>I have 2 years experiences in web development and UI designing. I always love making lots of cool projects, and enjoy learning new skills as time goes by.</p>
                    <a className={"font-semibold text-xl text-purple-300 flex items-center mt-8 opacity-0 " + (headerInViewport ? "animate__animated animate__fadeInLeft" : "")}>GET IN TOUCH 
                        <svg className="ml-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13 5L20 12L13 19" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
                <a className={"absolute bottom-24 xl:bottom-10 right-10 flex font-semibold opacity-0 " + (headerInViewport ? "animate__animated animate__fadeInDown" : "")}href="#aboutme">
                    SCROLL DOWN
                    <svg className="ml-4 transform rotate-90" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 5L20 12L13 19" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
        <div className="px-8 sm:px-24 md:px-32 pt-4 xl:mb-24" id="aboutme" ref={refAbout}>
            <div className="flex flex-col xl:flex-row items-center justify-between">
                <div style={{flexShrink: 9999}}>
                    <h2 className={"text-purple-300 font-semibold text-xl opacity-0 " + (aboutInViewport ? "animate__animated animate__fadeInRight" : "")}>ABOUT ME</h2>
                    <h3 className={"text-4xl xl:text-5xl font-semibold my-6 leading-129 whitespace-nowrap opacity-0 " + (aboutInViewport ? "animate__animated animate__fadeInLeft" : "")}>A guy who loves<br/>grinding projects</h3>
                    <p className={"text-xl font-normal w-full leading-8 text-gray-400 opacity-0 " + (aboutInViewport ? "animate__animated animate__fadeInRight" : "")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a className={"bg-purple-300 rounded-full py-4 px-12 inline-block mt-10 font-medium btn-white btn btn-animated relative " + (aboutInViewport ? "animate__animated animate__fadeInUp" : "")}><span className="relative z-20 text-white">EXPLORE PROJECTS</span></a>
                </div>
                <div className={"animate__animated opacity-0 " + (aboutInViewport ? "fadeInRight" : "")} style={{width: "100vw"}}>
                    <Tilt className="relative z-50 flex justify-center xl:justify-end illu">
                        <Illu1/>
                    </Tilt>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center mb-24" id="skills" ref={refSkillsHeader}>
            <h2 className={"text-4xl md:text-5xl font-semibold my-4 leading-129 text-cente opacity-0 " + (skillsHeaderInViewport ? "animate__animated animate__fadeInLeft" : "")}>My Skills</h2>
            <p className={"text-lg md:text-xl ml-2 font-normal leading-7 md:leading-8 text-gray-400 text-center w-10/12 xl:w-7/12 opacity-0 " + (skillsHeaderInViewport ? "animate__animated animate__fadeInUp" : "")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="px-8 sm:px-24 md:px-32 mb-24" ref={refSkillsFrontend}>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full">
                <div className={"animate__animated opacity-0 mb-8 chart " + (skillsFrontendInViewport ? "animate__fadeInLeft" : "")}>
                    <Radar redraw={false} data={{
                        labels: ["HTML", "CSS", "SCSS", "Javascript", "Jinja", "React", "Jquery"],
                        datasets: [
                            {
                                label: "",
                                data: [90, 85, 95, 90, 80, 70, 90],
                                backgroundColor: "#716fff77",
                                borderColor: "#716fff",
                                borderWidth: 2,
                            },
                        ],
                    }} options={chartOptions}/>
                </div>
                <div className="w-full ml-0 xl:ml-24 2xl:ml-48">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-129 whitespace-nowrap flex items-center">
                        <svg className={"mr-4 w-16 h-16 opacity-0 " + (skillsFrontendInViewport ? "animate__animated animate__fadeInLeft" : "")} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M72.1875 9.1875H11.8125C10.3605 9.1875 9.1875 10.3605 9.1875 11.8125V72.1875C9.1875 73.6395 10.3605 74.8125 11.8125 74.8125H72.1875C73.6395 74.8125 74.8125 73.6395 74.8125 72.1875V11.8125C74.8125 10.3605 73.6395 9.1875 72.1875 9.1875ZM15.0938 15.0938H26.25V68.9062H15.0938V15.0938ZM68.9062 68.9062H31.5V31.5H68.9062V68.9062ZM31.5 26.25V15.0938H68.9062V26.25H31.5Z" fill="#716FFF"/>
                        </svg>
                        <span className={"animate__animated opacity-0 " + (skillsFrontendInViewport ? "animate__fadeInRight" : "")}>Frontend<br/>Development</span>
                    </h2>
                    <p className={"text-lg md:text-xl ml-2 font-normal leading-7 md:leading-8 text-gray-400 opacity-0 " + (skillsFrontendInViewport ? "animate__animated animate__fadeInUp" : "")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a className="font-semibold text-xl text-purple-300 flex items-center mt-8 ml-2">SEE MY WORKS
                        <svg className="ml-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13 5L20 12L13 19" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div> 
            </div>
        </div>
        <div className="px-8 sm:px-24 md:px-32 mb-24" ref={refSkillsBackend}>
            <div className="flex flex-col xl:flex-row items-center justify-between">
                <div className={"animate__animated opacity-0 block xl:hidden mb-8 chart " + (skillsBackendInViewport ? "animate__fadeInRight" : "")}>
                    <Radar redraw={false} data={{
                        labels: ["Django", "Flask", "Node JS","Express", "SQL"],
                        datasets: [
                            {
                                label: "",
                                data: [80, 65, 60, 55, 40],
                                backgroundColor: "#716fff77",
                                borderColor: "#716fff",
                                borderWidth: 2,
                            },
                        ],
                    }} options={chartOptions}/>
                </div>
                <div className="w-full mr-0 xl:mr-24 2xl:mr-48">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-129 whitespace-nowrap flex items-center">
                        <svg className={"mr-4 opacity-0 w-16 h-16 " + (skillsBackendInViewport ? "animate__animated animate__fadeInLeft" : "")} viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.9375 17.0625C23.2837 17.0625 24.375 15.9712 24.375 14.625C24.375 13.2788 23.2837 12.1875 21.9375 12.1875C20.5913 12.1875 19.5 13.2788 19.5 14.625C19.5 15.9712 20.5913 17.0625 21.9375 17.0625Z" fill="#716FFF"/>
                            <path d="M63.375 24.375H14.625C13.3325 24.3737 12.0932 23.8597 11.1793 22.9457C10.2653 22.0318 9.75129 20.7925 9.75 19.5V9.75C9.75129 8.45747 10.2653 7.21824 11.1793 6.30428C12.0932 5.39032 13.3325 4.87629 14.625 4.875H63.375C64.6675 4.87629 65.9068 5.39032 66.8207 6.30428C67.7347 7.21824 68.2487 8.45747 68.25 9.75V19.5C68.2487 20.7925 67.7347 22.0318 66.8207 22.9457C65.9068 23.8597 64.6675 24.3737 63.375 24.375ZM14.625 9.75V19.5H63.375V9.75H14.625Z" fill="#716FFF"/>
                            <path d="M21.9375 41.4375C23.2837 41.4375 24.375 40.3462 24.375 39C24.375 37.6538 23.2837 36.5625 21.9375 36.5625C20.5913 36.5625 19.5 37.6538 19.5 39C19.5 40.3462 20.5913 41.4375 21.9375 41.4375Z" fill="#716FFF"/>
                            <path d="M63.375 48.75H14.625C13.3325 48.7487 12.0932 48.2347 11.1793 47.3207C10.2653 46.4068 9.75129 45.1675 9.75 43.875V34.125C9.75129 32.8325 10.2653 31.5932 11.1793 30.6793C12.0932 29.7653 13.3325 29.2513 14.625 29.25H63.375C64.6675 29.2513 65.9068 29.7653 66.8207 30.6793C67.7347 31.5932 68.2487 32.8325 68.25 34.125V43.875C68.2487 45.1675 67.7347 46.4068 66.8207 47.3207C65.9068 48.2347 64.6675 48.7487 63.375 48.75ZM14.625 34.125V43.875H63.375V34.125H14.625Z" fill="#716FFF"/>
                            <path d="M21.9375 65.8125C23.2837 65.8125 24.375 64.7212 24.375 63.375C24.375 62.0288 23.2837 60.9375 21.9375 60.9375C20.5913 60.9375 19.5 62.0288 19.5 63.375C19.5 64.7212 20.5913 65.8125 21.9375 65.8125Z" fill="#716FFF"/>
                            <path d="M63.375 73.125H14.625C13.3325 73.1237 12.0932 72.6097 11.1793 71.6957C10.2653 70.7818 9.75129 69.5425 9.75 68.25V58.5C9.75129 57.2075 10.2653 55.9682 11.1793 55.0543C12.0932 54.1403 13.3325 53.6263 14.625 53.625H63.375C64.6675 53.6263 65.9068 54.1403 66.8207 55.0543C67.7347 55.9682 68.2487 57.2075 68.25 58.5V68.25C68.2487 69.5425 67.7347 70.7818 66.8207 71.6957C65.9068 72.6097 64.6675 73.1237 63.375 73.125ZM14.625 58.5V68.25H63.375V58.5H14.625Z" fill="#716FFF"/>
                        </svg>

                        <span className={"animate__animated opacity-0 " + (skillsBackendInViewport ? "animate__fadeInRight" : "")}>Backend<br/>Development</span>
                    </h2>
                    <p className={"text-lg md:text-xl ml-2 font-normal leading-7 md:leading-8 text-gray-400 w-full opacity-0 " + (skillsBackendInViewport ? "animate__animated animate__fadeInUp" : "")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a className="font-semibold text-xl text-purple-300 flex items-center mt-8 ml-2">SEE MY WORKS
                        <svg className="ml-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13 5L20 12L13 19" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div> 
                <div className={"animate__animated opacity-0 hidden xl:block chart " + (skillsBackendInViewport ? "animate__fadeInRight" : "")}>
                    <Radar redraw={false} data={{
                        labels: ["Django", "Flask", "Node JS","Express", "SQL"],
                        datasets: [
                            {
                                label: "",
                                data: [80, 65, 60, 55, 40],
                                backgroundColor: "#716fff77",
                                borderColor: "#716fff",
                                borderWidth: 2,
                            },
                        ],
                    }} options={chartOptions}/>
                </div>
            </div>
        </div>
        <div className="px-8 sm:px-24 md:px-32 mb-16" id="services" ref={refServices}>
            <div className="flex flex-col xl:flex-row items-center justify-between">
                <Service inViewPort={servicesInViewport} bottom={true}/>
                <div>
                    <h2 className={"text-purple-300 font-semibold text-xl opacity-0 " + (servicesInViewport ? "animate__animated animate__fadeInDown" : "")}>SERVICES</h2>
                    <h3 className={"text-4xl xl:text-5xl font-semibold my-4 leading-129 opacity-0 " + (servicesInViewport ? "animate__animated animate__fadeInRight" : "")}>Service for others<br/>leads to greatness</h3>
                    <p className={"text-xl font-normal leading-8 text-gray-400 " + (servicesInViewport ? "animate__animated animate__fadeInUp" : "")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a className={"bg-purple-300 rounded-full text-white py-4 px-12 inline-block mt-8 font-medium btn-white btn btn-animated relative " + (servicesInViewport ? "animate__animated animate__fadeInUp" : "")} ref={refServices} href="#contact"><span className="relative z-20 text-white">GET IN TOUCH</span></a>
                </div>
                <Service inViewPort={servicesInViewport} bottom={false}/>
            </div>
        </div>
        <div className="px-8 sm:px-24 md:px-32 -mb-32 xl:mb-8 pt-16 xl:pt-0" ref={refServicesFooter}>
            <div className="flex flex-col xl:flex-row items-center justify-center lg:justify-between">
                <div style={{flexShrink: 9999}} className="flex flex-col items-center lg:block">
                    <h3 className={"text-4xl md:text-5xl font-semibold my-6 leading-129 -mt-6 opacity-0 md:whitespace-nowrap text-center lg:text-left " + (servicesFooterInViewport ? "animate__animated animate__fadeInDown" : "")}>I provide the <span className="text-purple-300">best</span><br/>services with<br/><span className="text-purple-300">affordable</span> price</h3>
                    <a className={"bg-purple-300 rounded-full text-white py-4 px-12 inline-block mt-8 font-medium btn-white btn btn-animated z-40 relative w-min whitespace-nowrap " + (servicesFooterInViewport ? "animate__animated animate__fadeInUp" : "")} href="#contact"><span className="relative z-20 text-white">MAKE AN ORDER</span></a>
                </div>
                <div className={"animate__animated opacity-0 xl:w-full w-screen relative z-10 " + (servicesFooterInViewport ? "animate__fadeInRight" : "")}>
                    <Tilt className="relative z-50 flex justify-center xl:justify-end -mt-32 xl:mt-0">
                        <Illu2/>
                    </Tilt>
                </div>
            </div>
        </div>
        <div className="px-8 sm:px-24 md:px-32" id="projects">
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between">
                <div>
                    <h2 className='text-purple-300 font-semibold text-xl mb-3 block xl:hidden'>PROJECTS</h2>
                    <h3 className="leading-129 md:leading-129 text-4xl md:text-5xl font-semibold md:whitespace-nowrap mr-48 w-full my-4 xl:my-0">Check out some of<br/>the <span className="text-purple-300">best</span> projects<br/>that I’ve created.</h3>
                </div>
                <div>
                    <h2 className='text-purple-300 font-semibold text-xl mb-3 hidden xl:block'>PROJECTS</h2>
                    <p className="text-lg md:text-xl font-normal w-full leading-7 md:leading-8 text-gray-400">{"I've made done uite a lot of projects over the year. Below are some of my favourite projects, and I'm sure you'll like them too."}</p>
                </div>
            </div>
        </div>
        <ProjectList/>
        <div className="px-8 sm:px-24 md:px-32 mb-24 pt-32" id="collab">
            <div className="flex flex-col items-center">
                <h2 className='text-purple-300 font-semibold text-xl mb-3'>COLLABORATION</h2>
                <h3 className="text-4xl md:text-5xl font-semibold leading-129 md:whitespace-nowrap text-center mb-4">Let’s make some<br/>cool projects <span className="text-purple-300">together</span>.</h3>
                <p className="text-lg md:text-xl font-normal leading-7 md:leading-8 text-gray-400 text-center w-full md:w-8/12 my-6">{"If you have a crazy project idea and trying to find a partner to work with, you've come the the right place."}</p>
                <a className='bg-purple-300 rounded-full text-white py-4 px-12 inline-block mt-6 font-medium btn-anim2 whitespace-nowrap w-max' data-text="GET IN TOUCH" href="#contact">{"CONTACT ME".split("").map(e => <span className="text-white" key={e}>{e}</span>)}</a>
            </div>
        </div>
        <div className="px-16 sm:px-24 md:px-32 mb-8 relative" id="contact">
            <svg width="1340" height="1240" viewBox="0 0 1436 1574" fill="none" xmlns="http://www.w3.org/2000/svg" className="hex-bottom">
                <path d="M468.352 202.984C483.857 183.269 509.196 174.046 533.746 179.183L1066.72 290.691C1089.07 295.367 1107.41 311.262 1115.22 332.719L1314.48 880.178C1322.29 901.634 1318.46 925.603 1304.34 943.551L967.736 1371.56C952.231 1391.27 926.891 1400.5 902.342 1395.36L369.368 1283.85C347.019 1279.18 328.674 1263.28 320.865 1241.83L121.606 694.366C113.796 672.909 117.632 648.941 131.747 630.993L468.352 202.984Z" fill="#E8E8FF"/>
            </svg>
            <div className="flex items-center justify-between relative">
                <div>
                    <h3 className="text-6xl font-semibold leading-129 whitespace-nowrap mr-48 mb-10">I would like to<br/>hear from you.</h3>
                    <p className="text-xl font-normal w-9/12 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <div className="grid mt-12 gap-y-8 gap-x-4 items-center" style={{gridTemplateColumns: "32px auto"}}>
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0003 2.59961C8.64033 2.59961 2.66699 8.57294 2.66699 15.9329C2.66699 23.2929 8.64033 29.2663 16.0003 29.2663H22.667V26.5996H16.0003C10.2137 26.5996 5.33366 21.7196 5.33366 15.9329C5.33366 10.1463 10.2137 5.26628 16.0003 5.26628C21.787 5.26628 26.667 10.1463 26.667 15.9329V17.8396C26.667 18.8929 25.7203 19.9329 24.667 19.9329C23.6137 19.9329 22.667 18.8929 22.667 17.8396V15.9329C22.667 12.2529 19.6803 9.26628 16.0003 9.26628C12.3203 9.26628 9.33366 12.2529 9.33366 15.9329C9.33366 19.6129 12.3203 22.5996 16.0003 22.5996C17.8403 22.5996 19.5203 21.8529 20.7203 20.6396C21.587 21.8263 23.0803 22.5996 24.667 22.5996C27.2937 22.5996 29.3337 20.4663 29.3337 17.8396V15.9329C29.3337 8.57294 23.3603 2.59961 16.0003 2.59961ZM16.0003 19.9329C13.787 19.9329 12.0003 18.1463 12.0003 15.9329C12.0003 13.7196 13.787 11.9329 16.0003 11.9329C18.2137 11.9329 20.0003 13.7196 20.0003 15.9329C20.0003 18.1463 18.2137 19.9329 16.0003 19.9329Z" fill="#716FFF"/>
                        </svg>
                        <p className="text-xl -mt-1">melvinchia623600@gmail.com</p>
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.863 27.9962V17.0682H21.5497L22.0977 12.7896H17.863V10.0642C17.863 8.82956 18.207 7.98423 19.979 7.98423H22.2244V4.16956C21.1319 4.05248 20.0338 3.99595 18.935 4.00023C15.6764 4.00023 13.439 5.98956 13.439 9.64156V12.7816H9.77637V17.0602H13.447V27.9962H17.863Z" fill="#716FFF"/>
                        </svg>
                        <p className="text-xl">Melvin Chia</p>
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0083 25.3497H15.9817C15.899 25.3497 7.62833 25.3337 5.54166 24.767C4.97785 24.6151 4.46382 24.3178 4.05105 23.9048C3.63828 23.4918 3.34123 22.9776 3.18966 22.4137C2.81444 20.2968 2.63325 18.1501 2.64833 16.0003C2.63864 13.847 2.82474 11.6973 3.20433 9.57766C3.36018 9.01282 3.6586 8.49753 4.07093 8.08122C4.48327 7.66492 4.99568 7.36158 5.559 7.20033C7.58833 6.66699 15.631 6.66699 15.9723 6.66699H16.0003C16.0843 6.66699 24.3763 6.68299 26.4417 7.24966C27.587 7.56033 28.4817 8.45499 28.791 9.60033C29.1777 11.7257 29.3603 13.8817 29.3337 16.0417C29.343 18.1924 29.1565 20.3395 28.7763 22.4563C28.6228 23.0196 28.3245 23.5329 27.9112 23.9453C27.4979 24.3577 26.984 24.6547 26.4203 24.807C24.3937 25.3443 16.3497 25.3497 16.0083 25.3497ZM13.3417 12.007L13.335 20.007L20.2843 16.007L13.3417 12.007Z" fill="#716FFF"/>
                        </svg>
                        <p className="text-xl">The Silly Coder</p>
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.6439 9.59639C8.25509 9.59639 9.56123 8.29025 9.56123 6.67905C9.56123 5.06785 8.25509 3.76172 6.6439 3.76172C5.0327 3.76172 3.72656 5.06785 3.72656 6.67905C3.72656 8.29025 5.0327 9.59639 6.6439 9.59639Z" fill="#716FFF"/>
                            <path d="M12.3163 11.8062V27.9916H17.3416V19.9876C17.3416 17.8756 17.739 15.8302 20.3576 15.8302C22.9403 15.8302 22.9723 18.2449 22.9723 20.1209V27.9929H28.0003V19.1169C28.0003 14.7569 27.0616 11.4062 21.9656 11.4062C19.519 11.4062 17.879 12.7489 17.2083 14.0196H17.1403V11.8062H12.3163ZM4.12695 11.8062H9.16029V27.9916H4.12695V11.8062Z" fill="#716FFF"/>
                        </svg>
                        <p className="text-xl pt-1">Not Yet Set Up</p>
                    </div>
                </div>
                <form>
                    <div className="grid grid-cols-2 ml-12">
                        <div className="mx-4 my-5">
                            <label className="block w-full text-purple-300 font-semibold text-sm" htmlFor="firstname">First Name</label>
                            <input className="block px-4 py-2 mt-2 bg-gray-100 placeholder-gray-300 text-lg" style={{borderRadius: 5}} type="text" name="firstname" id="firstname" placeholder="John"/>
                        </div>
                        <div className="mx-4 my-5">
                            <label className="block w-full text-purple-300 font-semibold text-sm" htmlFor="lastname">Last Name</label>
                            <input className="block px-4 py-2 mt-2 bg-gray-100 placeholder-gray-300 text-lg" style={{borderRadius: 5}} type="text" name="lastname" id="lastname" placeholder="Doe"/>
                        </div>
                        <div className="mx-4 my-5">
                            <label className="block w-full text-purple-300 font-semibold text-sm" htmlFor="email">Email</label>
                            <input className="block px-4 py-2 mt-2 bg-gray-100 placeholder-gray-300 text-lg" style={{borderRadius: 5}} type="email" name="email" id="email" placeholder="johndoe@company.com"/>
                        </div>
                        <div className="mx-4 my-5">
                            <label className="block w-full text-purple-300 font-semibold text-sm" htmlFor="phonenum">Phone Number</label>
                            <input className="block px-4 py-2 mt-2 bg-gray-100 placeholder-gray-300 text-lg" style={{borderRadius: 5}} type="text" name="phonenum" id="phonenum" placeholder="+6(012) 345 6789"/>
                        </div>
                        <div className="col-span-2 my-5 mx-4">
                            <p className="block w-full text-purple-300 text-sm font-semibold">Requirements</p>
                            <div className="mt-4 flex flex-wrap">
                                <button className="bg-gray-100 px-4 py-2 mr-2 mb-2 font-medium text-md tracking-wider" style={{borderRadius: 5}}>Buy Services</button>
                                <button className="bg-gray-100 px-4 py-2 mr-2 mb-2 font-medium text-md tracking-wider active" style={{borderRadius: 5}}>Collaboration</button>
                                <button className="bg-gray-100 px-4 py-2 mr-2 mb-2 font-medium text-md tracking-wider" style={{borderRadius: 5}}>Make Friends</button>
                                <button className="bg-gray-100 px-4 py-2 mr-2 mb-2 font-medium text-md tracking-wider" style={{borderRadius: 5}}>Share Projects</button>
                                <button className="bg-gray-100 px-4 py-2 mr-2 mb-2 font-medium text-md tracking-wider" style={{borderRadius: 5}}>Learn with Me</button>
                                <button className="bg-gray-100 px-4 py-2 mr-2 mb-2 font-medium text-md tracking-wider active" style={{borderRadius: 5}}>Donate</button>
                                <button className="bg-gray-100 px-4 py-2 mr-2 mb-2 font-medium text-md tracking-wider" style={{borderRadius: 5}}>Other</button>
                            </div>
                        </div>
                        <div className="col-span-2 my-5 mx-4">
                            <label className="block w-full text-purple-300 font-semibold text-sm" htmlFor="messages">Messages</label>
                            <input className="block px-4 py-2 mt-2 bg-gray-100 placeholder-gray-300 text-lg w-full" style={{borderRadius: 5}} type="text" name="messages" id="messages" placeholder="I want to say something"/>
                            <p className='mt-2 text-right text-sm'>0/200</p>
                        </div>
                        <a className='bg-purple-300 rounded-full text-white py-4 px-12 inline-block mt-12 font-medium text-center text-xl col-span-2 w-full'>SUBMIT</a>
                    </div>
                </form>
            </div>
        </div>
        <p className="relative text-center mt-72 mb-4 px-8">Copyright &copy; TheCodeblog.net. All rights reserved.</p>
    </div>;
};

export default Landing;