import React, { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";

import "./style/Home.scss";
import "tailwindcss/tailwind.css";
import "animate.css";

import $ from 'jquery';
import './jquery.pagepiling.js';
import './jquery.pagepiling.css';

import Avatar from "./assets/avatar.jpg";
import Project1 from "./assets/project1.png"
import Project2 from "./assets/project2.png"
import Project3 from "./assets/project3.png"
import Navbar from './Navbar';

const Landing = (): JSX.Element => {
    const [projectOpen, setProjectOpen] = useState(-1);
    const [page, setPage] = useState(1);

    useEffect(() => {
        ($('#pagepiling') as any).pagepiling({
            navigation: false,
            touchSensitivity: 5,
            scrollingSpeed: 200,
            easing: 'linear',
            onLeave: (index: number, nextIndex: number, direction: 'up' | 'down') => {
                setPage(nextIndex);
            }
        });
    }, []);

    return <div className="flex h-full font-[Rajdhani]">
        <Navbar />
        <div className="h-full" id="pagepiling">
            <div className="section bg-[#1E1E1E] w-full border-b-2 border-white ">
                <div className="flex gap-8 text-white relative overflow-hidden w-[calc(100vw-5rem)] h-[100vh] p-8">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-1 w-min whitespace-nowrap">
                            <div className={`${page == 1 ? 'animated fadeInUp' : ""} bg-yellow-400 z-[-1] w-72 text-[#1E1E1E] font-medium tracking-wide text-lg flex justify-between head relative py-1 pt-1.5 px-3`}>
                                MELVIN CHIA
                                <span>[DEV]</span>
                            </div>
                            <div className={`font-[Barlow] font-normal ${page == 1 ? "animated fadeInLeft" : ""} border-2 z-[2] relative border-yellow-500 text-2xl tracking-wide w-[32rem] flex justify-between items-center`}>
                                <div className="p-4">WEB DEVELOPER & UI DESIGNER</div>
                                <div className="h-full w-1 bg-yellow-500"></div>
                            </div>
                        </div>
                        <h1 className={`${page == 1 ? 'animated fadeInUp' : ""} text-7xl leading-none tracking-wide`}>
                            WITH THE VISION OF
                            <br/>
                            <div className={`text-[10rem] text-yellow-400 font-semibold neon ${page == 1 ? 'animated fadeInLeft' : ""}`}>CREATIVITY</div>
                        </h1>
                        <p className={`font-[Barlow] font-light ${page == 1 ? 'animated fadeInUp' : ""} text-2xl tracking-widest leading-10 -mt-8 ml-1`}><span className="text-6xl font-medium">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className={`relative ${page == 1 ? 'animated fadeInRight' : ""} mb-2 mt-6 m-1 cursor-pointer flex items-center bg-yellow-500 whitespace-nowrap w-96`} style={{ clipPath: "polygon(100% 0px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0px 100%, 0px 0px)", border: "2px solid rgb(254 206 60)", height: "90px", minWidth: "128px", opacity: 1}}>
                            <div className="absolute top-0 left-0 right-0 bottom-0 " style={{backgroundColor: "rgb(30, 30, 30)", clipPath: "polygon(100% 0px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0px 100%, 0px 0px)"}}></div>
                            <div className="flex-1 z-10 h-full" style={{clipPath: "polygon(100% 0px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0px 100%, 0px 0px)"}}>
                                <a className="display-font uppercase text-3xl font-semibold w-full h-full flex flex-row justify-start items-center relative" style={{color: "rgb(254 206 60)"}}>
                                    <div className="h-full w-1 bg-yellow-500"></div>
                                    <span className="pr-4 pl-2 text-center w-full" style={{letterSpacing: "1.1px"}}>GET IN TOUCH</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`relative ${page == 1 ? 'animated fadeInRight' : ""} img h-full w-[34rem] flex-shrink-0 pr-6`}><img className="h-full w-full filter grayscale object-cover" src={Avatar} /></div>
                    <div className={`absolute ${page == 1 ? 'animated slideInUp' : ""} top-0 right-44 w-56 h-full flex items-center justify-center border-l-2 border-r-2 border-yellow-500 z-[-1] px-4`}>
                        <div className={`w-full ${page == 1 ? 'animated fadeIn' : ""} h-screen border-l-2 border-r-2 border-white`} />
                    </div>
                </div>
            </div>
            <div className="section relative h-[100vh] bg-[#1E1E1E]">
                <div className="flex flex-col w-[calc(100vw-5rem)] text-white overflow-hidden  h-[100vh]">
                    <div className="w-full p-8 text-white flex gap-8 py-6">
                        <div className="w-full text-3xl gap-8 flex flex-col justify-between text-white tracking-wide pt-2">
                            <div className={page == 2 ? "animated animate fadeInLeft" : ""}>
                                <span className="text-yellow-400">EST. 2020</span><br/>
                                FULL STACK DEVELOPER
                            </div>
                            <div className={page == 2 ? "animated fadeInLeft" : ""}>
                                <span className="text-yellow-400">EST. 2021</span><br/>
                                UI DESIGNER
                            </div>
                        </div>
                        <div className={`${page == 2 ? "animated fadeInDown" : ""} w-full border-l-2 border-r-2 justify-between flex-col items-center flex px-8 border-white text-2xl font-[Rajdhani]`}>
                            <a>HOME</a>
                            <a>BLOG</a>
                            <a>WORKS</a>
                            <a>CONTACT</a>
                        </div>
                        <div className={`${page == 2 ? "animated fadeInRight" : ""} w-full text-4xl flex items-center text-center justify-center text-white tracking-wide pt-2 font-medium`}>
                            <p><span className="text-yellow-500">CREATIVITY.</span> SIMPLICITY.<br/>
                            VISIONARY.</p>
                        </div>
                    </div>
                    <div className={`${page == 2 ? "animated fadeInRight" : ""} w-full h-full border-t-2 border-white realtive pl-8 text-white flex gap-8`}>
                        <div className="flex flex-col justify-between py-8">
                            <div>
                                <h2 className={`${page == 2 ? "animated fadeInLeft" : ""} text-8xl tracking-wide font-semibold text-yellow-400 neon`}>ABOUT ME</h2>
                                <p className={`${page == 2 ? "animated fadeInUp" : ""} font-[Rajdhani] text-2xl tracking-wider mt-4 leading-10`}><span className="text-6xl font-normal">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit. Pharetra massa massa ultricies mi quis hendrerit dolor. </p>
                            </div>
                            <div className="self-end">
                                <h2 className={`${page == 2 ? "animated fadeInRight" : ""} text-[8rem] leading-none tracking-wide -mb-4 font-semibold neon`}>MELVIN CHIA</h2>
                                <p className={`${page == 2 ? "animated fadeInUp" : ""} font-[Rajdhani] text-3xl text-yellow-400 tracking-wide leading-none text-right`}>FULL STACK DEVELOPER & UI DESIGNER</p>
                            </div>
                        </div>
                        <div className="h-full border-l-2 w-[80rem] border-white flex flex-col">
                            <div className="border-b-2 h-full border-white p-4 tracking-wide flex flex-col">
                                <p className="text-2xl text-yellow-400">AGE</p>
                                <div className="text-center text-6xl h-full flex items-center justify-center whitespace-nowrap">16 YO</div>
                            </div>
                            <div className="border-b-2 h-full border-white p-4 tracking-wide flex flex-col">
                                <p className="text-2xl text-yellow-400">RESIDENCE</p>
                                <div className="text-center text-6xl h-full flex items-center justify-center">MALAYSIA</div>
                            </div>
                            <div className="border-b-2 h-full border-white p-4 tracking-wide flex flex-col">
                                <p className="text-2xl text-yellow-400">FREELANCE</p>
                                <div className="text-center text-6xl h-full flex items-center justify-center">AVAILABLE</div>
                            </div>
                            <div className="h-full p-4 tracking-wide flex flex-col">
                                <p className="text-2xl text-yellow-400">EXPERIENCE</p>
                                <div className="text-center text-6xl h-full flex items-center justify-center">3 YEARS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section relative h-[100vh] bg-[#1E1E1E] border-b-2 border-b-white">
                <div className="flex flex-col w-[calc(100vw-5rem)] p-8 text-white overflow-hidden h-[100vh]">
                    <div className="self-end flex flex-col items-end">
                        <h2 className="text-8xl tracking-wide font-semibold neon">SKILLS & TECH STACKS</h2>
                        <p className="text-4xl tracking-widest text-yellow-400">THE STACK NEVER STOPS GROWING</p>
                    </div>
                    <div className="font-[Rajdhani] text-2xl mt-8 flex items-center">
                        <div className="w-20 flex-shrink-0">2019</div>
                        <div className="bg-white w-2 h-2 rounded-full flex-shrink-0 relative dot-line"></div>
                        <div className="ml-6 flex-shrink-0 flex-wrap w-11/12">HTML, CSS</div>
                    </div>
                    <div className="font-[Rajdhani] text-2xl mt-4 flex items-center">
                        <div className="w-20 flex-shrink-0">2020</div>
                        <div className="bg-white w-2 h-2 rounded-full flex-shrink-0"></div>
                        <div className="ml-6 flex-shrink-0 flex-wrap w-11/12">Python, Tkinter, Flask, Django, Javascript, Jquery, Heroku, HTTP, REST API</div>
                    </div>
                    <div className="font-[Rajdhani] text-2xl mt-4 flex mr-8 items-center">
                        <div className="w-20 flex-shrink-0">2021</div>
                        <div className="bg-white w-2 h-2 rounded-full flex-shrink-0"></div>
                        <div className="ml-6 flex-shrink-0 flex-wrap w-11/12">Typescript, SCSS, Tailwind CSS, Node JS, React JS, React Redux, Svelte, Angular JS, Express JS, Socket IO, Figma, SQL, CPanel</div>
                    </div>
                    <div className="font-[Rajdhani] text-2xl mt-4 flex items-center">
                        <div className="w-20 flex-shrink-0">2022</div>
                        <div className="bg-white w-2 h-2 rounded-full flex-shrink-0"></div>
                        <div className="ml-6 flex-shrink-0 flex-wrap w-11/12">UIKit, Vue JS, Next JS, MongoDB, C++, Qt, GraphQL</div>
                    </div>
                </div>
            </div>
            <div className="section relative h-[100vh] bg-[#1E1E1E] flex">
                <div className="flex justify-between w-[calc(100vw-5rem)] text-white overflow-hidden h-[100vh]">
                    <div className={`flex flex-col justify-between h-full ${projectOpen === -1 ? "w-[99%] px-8" : "w-0 p-0"} overflow-hidden py-8 transition-all duration-500`}>
                        <h1 className="text-[9rem] leading-none tracking-wide whitespace-nowrap font-semibold text-yellow-500 neon">
                            FEATURED
                            <br/>WORK
                        </h1>
                        <p className="font-[Rajdhani] overflow-hidden w-[44rem] text-3xl tracking-wider leading-10"><span className="text-6xl font-normal">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className={`flex ${!(projectOpen === -1) ? "w-full" : "w-[32rem]"} transition-all duration-500 justify-end`}>
                        <div className={`flex h-full ${projectOpen === 1 ? "w-full border-l-0" : "w-36 flex-shrink-0"} ${projectOpen === -1 ? "border-l-2" : ""} justify-center transition-all duration-500 border-r-2 border-white`}>
                            <div onClick={() => setProjectOpen(projectOpen === 1 ? -1 : 1)} className={`${projectOpen === 1 ? 'border-r-2 border-white' : ""} flex h-full flex-col justify-between items-center p-8`}>
                                <h3 className="text-7xl transform whitespace-nowrap vert tracking-wide font-semibold"><span className="text-yellow-400">01.</span> CRUISEGATOR</h3>
                                <p className="text-2xl text-yellow-400">2021</p>
                            </div>
                            <div className={`h-full text-white flex flex-col items-center overflow-hidden py-8 transition-all duration-500 ${projectOpen === 1 ? "w-full" : "w-0"}`}>
                                <div className={`pb-8 w-full flex flex-col items-center border-b-2 border-white ${projectOpen === 1 ? "px-8" : ""}`}>
                                    <a className="uppercase text-3xl font-medium" style={{color: "rgb(254 206 60)"}}>
                                        <span className="px-4 pt-0.5 text-center w-full" style={{letterSpacing: "1.1px"}}>DATA ARCHIVE</span>
                                    </a>
                                    <h2 className="text-8xl tracking-wide font-semibold">CRUISEGATOR</h2>
                                    <p className="font-[Barlow] font-normal text-center text-2xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <div className="relative mt-8 m-1 cursor-pointer flex items-center bg-yellow-500 whitespace-nowrap w-full" style={{ clipPath: "polygon(calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px),0 0)", border: "2px solid rgb(254 206 60)", height: "90px", minWidth: "128px", opacity: 1}}>
                                        <div className="absolute top-0 left-0 right-0 bottom-0 " style={{backgroundColor: "rgb(30, 30, 30)", clipPath: "polygon(calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px),0 0)"}}></div>
                                        <div className="flex-1 z-10 h-full" style={{clipPath: "polygon(calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px),0 0)"}}>
                                            <a className="display-font uppercase text-3xl font-semibold w-full h-full flex flex-row justify-start items-center relative" style={{color: "rgb(254 206 60)"}}>
                                                <span className="pr-4 pl-2 text-center w-full" style={{letterSpacing: "1.1px"}}>GO TO WEBSITE</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div><img className="p-8" src={Project1} /></div>
                            </div>
                        </div>
                        <div className={`flex h-full ${projectOpen === 2 ? "w-full border-l-0" : "w-36 flex-shrink-0"} justify-center transition-all duration-500 border-r-2 border-white`}>
                            <div onClick={() => setProjectOpen(projectOpen === 2 ? -1 : 2)} className={`${projectOpen === 2 ? 'border-r-2 border-white' : ""} flex h-full flex-col justify-between items-center p-8`}>
                                <h3 className="text-7xl transform whitespace-nowrap vert tracking-wide font-semibold"><span className="text-yellow-400">02.</span> ICONIFY</h3>
                                <p className="text-2xl text-yellow-400">2021</p>
                            </div>
                            <div className={`h-full text-white flex flex-col items-center overflow-hidden py-8 transition-all duration-500 ${projectOpen === 2 ? "w-full" : "w-0"}`}>
                                <div className={`pb-8 w-full flex flex-col items-center border-b-2 border-white ${projectOpen === 2 ? "px-8" : ""}`}>
                                    <div className="bg-yellow-400 text-white inline-block w-min whitespace-nowrap px-2 pt-1 text-3xl tracking-wide">WEBSITE REMAKE</div>
                                    <h2 className="text-8xl tracking-wide mt-4">ICONIFY REMAKE</h2>
                                    <p className="font-[Rajdhani] text-center text-2xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <a href="https://iconify.thecodeblog.net" target="_blank" className="text-4xl tracking-wide border-2 border-white w-full pt-7 mt-8 pb-6 text-center hover:text-white hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-500">GO TO WEBSITE</a>
                                </div>
                                <div><img className="p-8" src={Project2} /></div>
                            </div>
                        </div>
                        <div className={`flex h-full ${projectOpen === 3 ? "w-full border-l-0" : "w-36 flex-shrink-0"} justify-center transition-all duration-500 border-r-2 border-white`}>
                            <div onClick={() => setProjectOpen(projectOpen === 3 ? -1 : 3)} className={`${projectOpen === 3 ? 'border-r-2 border-white' : ""} flex h-full flex-col justify-between items-center p-8`}>
                                <h3 className="text-6xl transform whitespace-nowrap vert tracking-wide font-semibold"><span className="text-yellow-400">03.</span> AVATAR GENERATOR</h3>
                                <p className="text-2xl text-yellow-400">2021</p>
                            </div>
                            <div className={`h-full text-white flex flex-col items-center overflow-hidden py-8 transition-all duration-500 ${projectOpen === 3 ? "w-full" : "w-0"}`}>
                                <div className={`pb-8 w-full flex flex-col items-center border-b-2 border-white ${projectOpen === 3 ? "px-8" : ""}`}>
                                    <div className="bg-yellow-400 text-white inline-block w-min whitespace-nowrap px-2 pt-1 text-3xl tracking-wide">WEBSITE REMAKE</div>
                                    <h2 className="text-8xl tracking-wide mt-4">ICONIFY REMAKE</h2>
                                    <p className="font-[Rajdhani] text-center text-2xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <a href="https://avatar-gen.thecodeblog.net" target="_blank" className="text-4xl tracking-wide border-2 border-white w-full pt-7 mt-8 pb-6 text-center hover:text-white hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-500">GO TO WEBSITE</a>
                                </div>
                                <div className="shadow-md"><img className="p-8" src={Project3} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Landing;
