import React, { useState, useEffect } from "react";
import Scrollbar from "react-smooth-scrollbar";
import "./ProjectIndex.css";
import axios from "axios";

import { Icon } from "@iconify/react";
import forkIcon from "@iconify-icons/cil/fork";
import bxsStar from "@iconify-icons/bx/bxs-star";
import bxlGithub from "@iconify-icons/bx/bxl-github";


const ProjectIndex = (): JSX.Element => {
    
    const [data, setData] = useState([]);
    const colorMap = {
        "HTML": "#ff8d74",
        "JavaScript": "#ffff74",
        "TypeScript": "#55a3ff",
        "Python": "#748bff"
    };

    useEffect(() => {
        axios.get("http://localhost:9595/projects/fetch/")
            .then(response => {
                setData(response.data);
            });
    }, []);

    return <Scrollbar
        damping={0.1}
        thumbMinSize={5}
        alwaysShowTracks={false}
    >
        <div className="flex flex-col items-center mb-4 mt-4">
            <h1 className="mb-0">Project Index</h1>
            <div className="bg-yellow-300 w-10 h-1 rounded-full my-2"></div>
            <p className="text-white text-2xl max-w-3xl mt-6 text-center font-Baloo">Explore over 50 amazing, cool and fun projects that I’ve created throughout my entire coding journey</p>
        </div>
        <div className="rank-container">
            <div className="project-card place">
                <div className="project-title">
                    <img src="{{project.icon}}"/>
                    <h2>Cruisegator</h2>
                    <p className="cat-name">Web App</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.</p>
                </div>
                <div className="project-meta">
                    <div className="meta" style={{color: "#55a3ff"}}>
                        <span style={{background: "#55a3ff"}}></span>
                    TypeScript
                    </div>
                    <div className="meta">
                        <span className="iconify" data-inline="false" data-icon="bx:bxs-star" style={{fontSize: 16, marginRight: .4, color: "#ffc800"}}></span>
                    58
                    </div>
                    <div className="meta">
                        <span className="iconify" data-inline="false" data-icon="cil:fork" style={{fontSize: 16, marginRight: .4, color: "#ffc800"}}></span>
                    37
                    </div>
                    <div>
                        <a className="repo-link" href="https://thecodeblog.net" target="_blank" rel="noreferrer">
                            <span className="iconify" data-inline="false" data-icon="bx:bxl-github" style={{fontSize: 16, marginRight: .4, color: "#ffc800"}}></span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-card place first-place relative overflow-hidden">
                <div className="first-place-banner">No. 1</div>
                <div className="project-title">
                    <img src="{{project.icon}}"/>
                    <h2>Cruisegator</h2>
                    <p className="cat-name">Web App</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.</p>
                </div>
                <div className="project-meta">
                    <div className="meta" style={{color: "#55a3ff"}}>
                        <span style={{background: "#55a3ff"}}></span>
                    TypeScript
                    </div>
                    <div className="meta">
                        <span className="iconify" data-inline="false" data-icon="bx:bxs-star" style={{fontSize: 16, marginRight: .4, color: "#ffc800"}}></span>
                    58
                    </div>
                    <div className="meta">
                        <span className="iconify" data-inline="false" data-icon="cil:fork" style={{fontSize: 16, marginRight: .4, color: "#ffc800"}}></span>
                    37
                    </div>
                    <div>
                        <a className="repo-link" href="https://thecodeblog.net" target="_blank" rel="noreferrer">
                            <span className="iconify" data-inline="false" data-icon="bx:bxl-github" style={{fontSize: 16, marginRight: .4, color: "#ffc800"}}></span>
                        </a>
                    </div>
                </div>
            </div>
        
            <div className="project-card place">
                <div className="project-title">
                    <img src="{{project.icon}}"/>
                    <h2>Cruisegator</h2>
                    <p className="cat-name">Web App</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.</p>
                </div>
                <div className="project-meta">
                    <div className="meta" style={{color: "#55a3ff"}}>
                        <span style={{background: "#55a3ff"}}></span>
                    TypeScript
                    </div>
                    <div className="meta">
                        <span className="iconify" data-inline="false" data-icon="bx:bxs-star" style={{fontSize: 16, marginRight: .4, color: "#ffc800"}}></span>
                    58
                    </div>
                    <div className="meta">
                        <span className="iconify" data-inline="false" data-icon="cil:fork" style={{fontSize: 16, marginRight: .4, color: "#ffc800"}}></span>
                    37
                    </div>
                    <div>
                        <a className="repo-link" href="https://thecodeblog.net" target="_blank" rel="noreferrer">
                            <span className="iconify" data-inline="false" data-icon="bx:bxl-github" style={{fontSize: 16, marginRight: .4, color: "#ffc800"}}></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="filter-container">
            <h2>Project Categories</h2>
            <div>
                <a className="selected">All</a>
                <a >Web Scraping</a>
            </div>
        </div>
        <div className="filter-container">
            <h2>Language Used</h2>
            <div>
                <a className="selected">All</a>
                <a>TypeScript</a>
            </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-[1fr] px-24 gap-4">
            {data ? data.map(({name, cat, desc, icon, lang, url}) => <div className="flex p-4 flex-col items-center justify-between relative transition-all duration-300 rounded-[10px]" key="card" style={{boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, 0.5)"}}>
                <div className="flex flex-col items-center content-start">
                    <img src={icon} className="my-8"/>
                    <h2 className="text-white font-Poppins text-2xl font-medium text-center">{name}</h2>
                    <p className="text-yellow-300 font-Poppins font-medium text-center mb-4 mt-1">{cat}</p>
                    <p className="text-gray-300 px-4 font-Baloo text-center leading-[125%] text-lg mb-8">{desc}</p>
                </div>
                <div className="project-meta flex w-full justify-start items-center">
                    <div className="text-white mr-4 font-Consolas flex items-center" style={{color: colorMap[lang]}}>
                        <span style={{background: colorMap[lang]}}></span>
                        {lang}
                    </div>
                    <div className="text-white mr-4 font-Consolas flex items-center">
                        <Icon icon={bxsStar} className="mr-1 text-yellow-300"/>
                        58
                    </div>
                    <div className="text-white mr-4 font-Consolas flex items-center">
                        <Icon icon={forkIcon} className="mr-1 text-yellow-300"/>
                        37
                    </div>
                    <div>
                        <a className="repo-link" href={url} target="_blank" rel="noreferrer">
                            <Icon icon={bxlGithub} className="mr-1 text-yellow-300"/>
                        </a>
                    </div>
                </div>
            </div>) : ""}
        </div>
        <div className="details-background">
            <div className="details-container"></div>
        </div>
    </Scrollbar>;
};

export default ProjectIndex;