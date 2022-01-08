import React, { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";

import "./style/Home.scss";
import "tailwindcss/tailwind.css";
import "animate.css/animate.min.css";

import $ from 'jquery';
import './jquery.pagepiling.js';
import './jquery.pagepiling.css';

import Avatar from "./assets/avatar.jpg";
import Project1 from "./assets/project1.png"

const anim = "animate__animated";

const Landing = (): JSX.Element => {
    const [navOpen, setNavOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(-1);

    useEffect(() => {
        ($('#pagepiling') as any).pagepiling({
            navigation: false,
            touchSensitivity: 5,
            scrollingSpeed: 200,
            easing: 'linear'
        });
    }, []);

    return <div className="flex h-full font-['Bebas_Neue']">
        <div className={`w-${navOpen ? "full" : "20"} transition-all border-r-2 text-slate-800 border-slate-800 overflow-hidden duration-1000 h-full flex`}>
            <div className="h-full w-20 flex flex-col justify-between items-center py-8 px-5">
                <button onClick={() => setNavOpen(!navOpen)} className="flex flex-col gap-1 w-full">
                    <span className="w-full border-b-[3px] rounded-full border-slate-800"></span>
                    <span className="w-full border-b-[3px] rounded-full border-slate-800"></span>
                </button>
                <button onClick={() => {Array(100).fill(0).forEach(() => {($.fn as any).pagepiling.moveSectionUp();})}} className="transform -rotate-90 text-3xl pt-2 tracking-wide">&lt;CODEBLOG/&gt;<span className="text-sm ml-2">v8</span></button>
                <div className="flex flex-col gap-10">
                    <a><Icon icon="bx:bxl-facebook" className="w-7 h-7" /></a>
                    <a><Icon icon="bx:bxl-github" className="w-7 h-7" /></a>
                    <a><Icon icon="bx:bxl-youtube" className="w-7 h-7" /></a>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-between text-3xl border-l-2 border-slate-800 overflow-hidden text-slate-800 tracking-wide py-12">
                <a className="w-full h-full flex items-center justify-center text-3xl"><span className="block px-12 btn relative bg-white pt-4 pb-3 border-2 border-slate-800">HOME</span></a>
                <a className="w-full h-full flex items-center justify-center">BLOG</a>
                <a className="w-full h-full flex items-center justify-center">WORKS</a>
                <a className="w-full h-full flex items-center justify-center">CONTACT</a>
            </div>
        </div>
        <div className="h-full" id="pagepiling">
            <div className="section bg-white w-full border-b-2 border-slate-800 ">
                <div className="flex gap-8 text-slate-800 overflow-hidden w-[calc(100vw-5rem)] h-[100vh] p-8 pb-10">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-9xl leading-none tracking-wide">
                            THE VISION OF
                            <br/>
                            <div className="text-[12rem] text-white bg-slate-600 inline-block px-3 tracking-wide h-[11rem]">CREATIVITY</div>
                        </h1>
                        <p className="font-['Proxima_Nova'] text-2xl tracking-wider leading-10"><span className="text-6xl font-normal">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className="px-16 pt-5 pb-4 border-2 btn relative bg-white border-slate-800 block text-4xl tracking-wide w-min whitespace-nowrap mt-2">GET IN TOUCH</a>
                    </div>
                    <div className="relative img h-full w-[34rem] flex-shrink-0"><img className="h-full w-full filter grayscale object-cover" src={Avatar} /></div>
                    <div className="absolute top-0 right-64 w-56 h-full flex items-center justify-center border-l-2 border-r-2 border-slate-800 z-[-1] px-4">
                        <div className="w-full h-[calc(100vh+4px)] border-l-2 border-r-2 border-slate-800" />
                    </div>
                </div>
            </div>
            <div className="section relative h-[100vh] bg-white">
                <div className="flex flex-col w-[calc(100vw-5rem)] text-slate-800 overflow-hidden  h-[100vh]">
                    <div className="w-full  p-8
                     border-b-2 border-slate-800 text-slate-800 flex gap-8 py-6">
                        <div className="w-full text-3xl gap-8 flex flex-col justify-between text-slate-800 tracking-wide pt-2">
                            <div>
                                <span className="text-slate-500">EST. 2020</span><br/>
                                FULL STACK DEVELOPER
                            </div>
                            <div>
                                <span className="text-slate-500">EST. 2021</span><br/>
                                UI DESIGNER
                            </div>
                        </div>
                        <div className="w-full border-l-2 border-r-2 justify-between flex-col items-center flex px-8 border-slate-800 text-2xl font-[Oswald]">
                            <a>HOME</a>
                            <a>BLOG</a>
                            <a>WORKS</a>
                            <a>CONTACT</a>
                        </div>
                        <div className="w-full text-5xl flex items-center text-center justify-center text-slate-800 tracking-wide pt-2">
                            CREATIVITY. SIMPLICITY.<br/>
                            VISIONARY.
                        </div>
                    </div>
                    <div className="w-full h-full realtive pl-8 border-b-2 border-slate-800 text-slate-800 flex gap-8">
                        <div className="flex flex-col justify-between py-8">
                            <div>
                                <h2 className="text-8xl tracking-wide">ABOUT ME</h2>
                                <p className="font-['Proxima_Nova'] text-2xl tracking-wider mt-4 leading-10"><span className="text-6xl font-normal">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit. Pharetra massa massa ultricies mi quis hendrerit dolor. </p>
                            </div>
                            <div className="self-end">
                                <h2 className="text-[8rem] leading-none tracking-wide -mb-4">MELVIN CHIA</h2>
                                <p className="font-[Oswald] text-3xl text-slate-600 tracking-wide leading-none text-right">FULL STACK DEVELOPER & UI DESIGNER</p>
                            </div>
                        </div>
                        <div className="h-full border-l-2 w-[80rem] border-slate-800 flex flex-col">
                            <div className="border-b-2 h-full border-slate-800 p-4 tracking-wide flex flex-col">
                                <p className="text-2xl text-slate-600">AGE</p>
                                <div className="text-center text-6xl h-full flex items-center justify-center whitespace-nowrap">16 YO</div>
                            </div>
                            <div className="border-b-2 h-full border-slate-800 p-4 tracking-wide flex flex-col">
                                <p className="text-2xl text-slate-600">RESIDENCE</p>
                                <div className="text-center text-6xl h-full flex items-center justify-center">MALAYSIA</div>
                            </div>
                            <div className="border-b-2 h-full border-slate-800 p-4 tracking-wide flex flex-col">
                                <p className="text-2xl text-slate-600">FREELANCE</p>
                                <div className="text-center text-6xl h-full flex items-center justify-center">AVAILABLE</div>
                            </div>
                            <div className="h-full p-4 tracking-wide flex flex-col">
                                <p className="text-2xl text-slate-600">EXPERIENCE</p>
                                <div className="text-center text-6xl h-full flex items-center justify-center">3 YEARS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section relative h-[100vh] bg-white border-b-2 border-b-slate-800">
                <div className="flex flex-col w-[calc(100vw-5rem)] p-8 text-slate-800 overflow-hidden h-[100vh]">
                    <div className="self-end flex flex-col items-end">
                        <h2 className="text-8xl tracking-wide">SKILLS & TECH STACKS</h2>
                        <p className="text-4xl tracking-widest text-slate-600">THE STACK NEVER STOPS GROWING</p>
                    </div>
                    <div className="font-['Proxima_Nova'] text-2xl mt-8 flex items-center">
                        <div className="w-20 flex-shrink-0">2019</div>
                        <div className="bg-slate-800 w-2 h-2 rounded-full flex-shrink-0 relative dot-line"></div>
                        <div className="ml-6 flex-shrink-0 flex-wrap w-11/12">HTML, CSS</div>
                    </div>
                    <div className="font-['Proxima_Nova'] text-2xl mt-4 flex items-center">
                        <div className="w-20 flex-shrink-0">2020</div>
                        <div className="bg-slate-800 w-2 h-2 rounded-full flex-shrink-0"></div>
                        <div className="ml-6 flex-shrink-0 flex-wrap w-11/12">Python, Tkinter, Flask, Django, Javascript, Jquery, Heroku, HTTP, REST API</div>
                    </div>
                    <div className="font-['Proxima_Nova'] text-2xl mt-4 flex mr-8 items-center">
                        <div className="w-20 flex-shrink-0">2021</div>
                        <div className="bg-slate-800 w-2 h-2 rounded-full flex-shrink-0"></div>
                        <div className="ml-6 flex-shrink-0 flex-wrap w-11/12">Typescript, SCSS, Tailwind CSS, Node JS, React JS, React Redux, Svelte, Angular JS, Express JS, Socket IO, Figma, SQL, CPanel</div>
                    </div>
                    <div className="font-['Proxima_Nova'] text-2xl mt-4 flex items-center">
                        <div className="w-20 flex-shrink-0">2022</div>
                        <div className="bg-slate-800 w-2 h-2 rounded-full flex-shrink-0"></div>
                        <div className="ml-6 flex-shrink-0 flex-wrap w-11/12">UIKit, Vue JS, Next JS, MongoDB, C++, Qt, GraphQL</div>
                    </div>
                </div>
            </div>
            <div className="section relative h-[100vh] bg-white flex">
                <div className="flex justify-between w-[calc(100vw-5rem)] text-slate-800 overflow-hidden h-[100vh]">
                    <div className={`flex flex-col justify-between h-full ${projectOpen === -1 ? "w-[99%] px-8" : "w-0 p-0"} overflow-hidden py-8 transition-all duration-500`}>
                        <h1 className="text-9xl leading-none tracking-wide">
                            THE VISION OF
                            <br/>
                            <div className="text-[12rem] text-white bg-slate-600 inline-block px-3 tracking-wide h-[11rem]">CREATIVITY</div>
                        </h1>
                        <p className="font-['Proxima_Nova'] overflow-hidden w-[44rem] text-2xl tracking-wider leading-10"><span className="text-6xl font-normal">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className={`flex ${!(projectOpen === -1) ? "w-full" : "w-[42rem]"} transition-all duration-500 justify-end`}>
                        <div onClick={() => setProjectOpen(projectOpen === 1 ? -1 : 1)} className={`flex h-full ${projectOpen === 1 ? "w-full border-l-0" : "w-36 flex-shrink-0"} ${projectOpen === -1 ? "border-l-2" : ""} justify-center transition-all duration-500 border-r-2 border-slate-800`}>
                            <div className={`${projectOpen === 1 ? 'border-r-2 border-slate-800' : ""} flex h-full flex-col justify-between items-center p-8`}>
                                <h3 className="text-7xl transform whitespace-nowrap vert tracking-wide"><span className="text-slate-600">01.</span> CRUISEGATOR</h3>
                                <p className="text-2xl text-slate-600">2021</p>
                            </div>
                            <div className={`h-full text-slate-800 flex flex-col items-center overflow-hidden py-8 transition-all duration-500 ${projectOpen === 1 ? "w-full" : "w-0"}`}>
                                <div className={`pb-8 w-full flex flex-col items-center border-b-2 border-slate-800 ${projectOpen === 1 ? "px-8" : ""}`}>
                                    <div className="bg-slate-800 text-white inline-block w-min whitespace-nowrap px-2 pt-1 text-3xl tracking-wide">DATA ARCHIVE</div>
                                    <h2 className="text-8xl tracking-wide mt-4">CRUISEGATOR</h2>
                                    <p className="font-['Proxima_Nova'] text-center text-2xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <a className="text-4xl tracking-wide border-2 border-slate-800 w-full pt-7 mt-8 pb-6 text-center">GO TO WEBSITE</a>
                                </div>
                                <div><img className="p-8" src={Project1} /></div>
                            </div>
                        </div>
                        <div onClick={() => setProjectOpen(projectOpen === 2 ? -1 : 2)} className={`flex h-full ${projectOpen === 2 ? "w-full border-l-0" : "w-36 flex-shrink-0"} justify-center transition-all duration-500 p-8 border-r-2 border-slate-800`}>
                            <div className="flex h-full flex-col justify-between items-center">
                                <h3 className="text-7xl transform whitespace-nowrap vert tracking-wide"><span className="text-slate-600">02.</span>  MC SERVER LIST</h3>
                                <p className="text-2xl text-slate-600">2021</p>
                            </div>
                            <div className="h-full w-full"></div>
                        </div>
                        <div onClick={() => setProjectOpen(projectOpen === 3 ? -1 : 3)} className={`flex h-full ${projectOpen === 3 ? "w-full border-l-0" : "w-36 flex-shrink-0"} justify-center transition-all duration-500 p-8 border-r-2 border-slate-800`}>
                            <div className="flex h-full flex-col justify-between items-center">
                                <h3 className="text-7xl transform whitespace-nowrap vert tracking-wide"><span className="text-slate-600">03.</span> GIT DEVELOPER INFO</h3>
                                <p className="text-2xl text-slate-600">2021</p>
                            </div>
                            <div className="h-full w-full"></div>
                        </div>
                        <div onClick={() => setProjectOpen(projectOpen === 4 ? -1 : 4)} className={`flex h-full ${projectOpen === 4 ? "w-full border-l-0 border-r-2" : "w-36 flex-shrink-0"} justify-center transition-all duration-500 p-8 border-r-2 border-slate-800`}>
                            <div className="flex h-full flex-col justify-between items-center">
                                <h3 className="text-7xl transform whitespace-nowrap vert tracking-wide"><span className="text-slate-600">04.</span> AVATAR GEN</h3>
                                <p className="text-2xl text-slate-600">2021</p>
                            </div>
                            <div className="h-full w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Landing;
