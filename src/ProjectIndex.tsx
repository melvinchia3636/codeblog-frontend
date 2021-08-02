import React from "react";
import "./ProjectIndex.scss";
import illu3 from "./illu3.svg"; 
import "./scrollbar.css";

import project1 from "./assets/project images/cruisegator.png";
import project2 from "./assets/project images/McWiki.png";
import project3 from "./assets/project images/Fruits Inc..png";

import PerfectScrollbar from "react-perfect-scrollbar";

const ProjectIndex = (): JSX.Element => {

    const scrollbarRef = React.useRef<PerfectScrollbar>(null);

    React.useEffect(() => {
        document.querySelector(".scrollbar-container")?.scrollTo({ left: 1, top: 100, behavior: "smooth" });
        scrollbarRef.current?.updateScroll();
    }, []);

    return <div className="project-index">
        <div className="w-full h-screen top flex items-center justify-center relative mb-32">
            <div className="w-5/12 mr-32">
                <h1 className="text-6xl font-semibold leading-tight">What I&#39;ve done in my<br/><span className="text-purple-300">entire</span> coding<br/>journey</h1>
                <p className="text-xl w-full my-12 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at.</p>
                <a className="font-semibold text-xl text-purple-300 flex items-center mt-8">GET IN TOUCH 
                    <svg className="ml-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 5L20 12L13 19" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
            <img src={illu3}/>
            
            <a className="absolute bottom-24 xl:bottom-10 right-10 flex font-semibold" href="#aboutme">
                    SCROLL DOWN
                <svg className="ml-4 transform rotate-90" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 5L20 12L13 19" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
        </div>
        <div className="flex justify-between items-center mb-48">
            <div className="p-32 pr-48">
                <h2 className="font-semibold text-5xl text-purple-300">Highlights</h2>
                <p className="text-xl mt-6 leading-8">Here are some of my favourite projects which I’m absolutely sure you’ll love them as well.</p>
            </div>
            
            <div className="bg-purple-200 showcase overflow-visible rounded-lg p-12 pr-0">
                <PerfectScrollbar className="flex overflow-x-scroll py-12" ref={scrollbarRef} options={{swipeEasing: false}}>
                    <div className="flex flex-col justify-center items-center bg-gray-100 mx-2 px-8 py-16 flex-shrink-0 rounded-lg">
                        <img src={project1} className="h-64"/>
                        <h3 className="font-semibold text-2xl mt-4">Cruisegator</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-gray-100 mx-2 px-8 py-16 flex-shrink-0 rounded-lg">
                        <img src={project2} className="h-64"/>
                        <h3 className="font-semibold text-2xl mt-4">Mc Wiki</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-gray-100 mx-2 px-8 py-16 flex-shrink-0 rounded-lg">
                        <img src={project3} className="h-64"/>
                        <h3 className="font-semibold text-2xl mt-4">Juicy Inc.</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-gray-100 mx-2 px-8 py-16 flex-shrink-0 rounded-lg">
                        <img src={project1} className="h-64"/>
                        <h3 className="font-semibold text-2xl mt-4">Cruisegator</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-gray-100 mx-2 px-8 py-16 flex-shrink-0 rounded-lg">
                        <img src={project2} className="h-64"/>
                        <h3 className="font-semibold text-2xl mt-4">Mc Wiki</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-gray-100 mx-2 px-8 py-16 flex-shrink-0 rounded-lg">
                        <img src={project3} className="h-64"/>
                        <h3 className="font-semibold text-2xl mt-4">Juicy Inc.</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-gray-100 mx-2 px-8 py-16 flex-shrink-0 rounded-lg">
                        <img src={project1} className="h-64"/>
                        <h3 className="font-semibold text-2xl mt-4">Cruisegator</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-gray-100 mx-2 px-8 py-16 flex-shrink-0 rounded-lg">
                        <img src={project2} className="h-64"/>
                        <h3 className="font-semibold text-2xl mt-4">Mc Wiki</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-gray-100 mx-2 px-8 py-16 flex-shrink-0 rounded-lg">
                        <img src={project3} className="h-64"/>
                        <h3 className="font-semibold text-2xl mt-4">Juicy Inc.</h3>
                    </div>
                </PerfectScrollbar>
            </div>
        </div>
    </div>;
};

export default ProjectIndex;