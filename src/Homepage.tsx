import React, { useEffect } from "react";
import "./Home.scss";
import "tailwindcss/tailwind.css";
import Typed from "typed.js";
import Scrollbar from "react-smooth-scrollbar";
import { Twitter, Facebook, Youtube, Linkedin, GitHub, PenTool, Server, Database } from "react-feather";

const Homepage = (): JSX.Element => {

    const typingOptions = {
        strings: ["Melvin Chia", "The Silly Coder", "Web Developer", "Data Scraper"],
        typeSpeed: 40,
        loop: true,
        backSpeed: 40,
        backDelay: 1200,
        cursorChar: "_",
        startDelay: 1000,
    };
    
    useEffect(() => {
        document.querySelector("body")?.classList.add("loaded");
        const typed = new Typed(".title-text", typingOptions);
    }, []);
    return (<Scrollbar
        damping={0.1}
        thumbMinSize={5}
        alwaysShowTracks={false}
    >
        <div className='top-wrapper'>
            <div className='top-container'>
                <div className='subtitle top-title'>
                    <p className='subtitle-text'>Hey guys! I&apos;m</p>
                </div>
                <div className='title-wrapper'>
                    <p className='title-text'></p>
                    <div className='title-seperator'></div>
                </div>
                <div className='subtitle'>
                    <p className='subtitle-text'>A 15 years old guy who can do the jobs with unimaginable speed and quality, and enjoy learning new skills as time goes by.</p>
                </div>
                <a href='/projects' className='btn-mywork'>SEE MY WORKS</a>
                <div className='footer-socialmedia-list-container top-socialmedia-list'>
                    <ul className="socialmedia-list">
                        <li><a href='https://github.com/melvinchia3636' target="_blank" rel="noreferrer"><GitHub className="socialmedia-icon"/></a></li>
                        <li><a href='https://www.youtube.com/channel/UCsSf5dUsiQYfEucaJlusXng' target="_blank" rel="noreferrer"><Youtube className="socialmedia-icon"/></a></li>
                        <li><a href='https://facebook.com/TheSillyCoder' target="_blank" rel="noreferrer"><Facebook className="socialmedia-icon"/></a></li>
                        <li><a href='' target="_blank"><Linkedin className="socialmedia-icon"/></a></li>
                        <li><a href='' target="_blank"><Twitter className="socialmedia-icon"/></a></li>
                    </ul>
                </div>
            </div>
            <div className='btn-see-more'>
                <a>Scroll down</a>
                <div></div>
            </div>
        </div>
        <div className='section-wrapper'>
            <h2 className='section-title'>INTRODUCTION</h2>
            <div className='section-title-seperator'></div>
            <div className='section-container'>
                <div className='section-numbers-wrapper'>
                    <div className='numbers-container'>
                        <h3>50+</h3>
                        <p>PROJECTS</p>
                    </div>
                    <div className='numbers-container'>
                        <h3>2 yrs</h3>
                        <p>EXPERIENCE</p>
                    </div>
                    <div className='numbers-container'>
                        <h3>10+</h3>
                        <p>CUSTOMERS</p>
                    </div>
                    <div className='numbers-container'>
                        <h3>1</h3>
                        <p>PORTFOLIO</p>
                    </div>
                    <div className='numbers-container'>
                        <h3>100+</h3>
                        <p>LIKE-MINDED<br/>FRIENDS</p>
                    </div>
                    <div className='numbers-container'>
                        <h3>3000+</h3>
                        <p>FACEBOOK LIKES</p>
                    </div>
                </div>
                <div className='section-desc-wrapper'>
                    <h3>ABOUT ME</h3>
                    <div id='about-me' className='section-desc-container'><p>
                        A full stack web developer, who loves designing UI, and always <span className='highlight'>willing to learn new stuff</span>. A guy who knows the fundamental concepts of UI/UX designing, and able to create decent looking webpage. 
                        <br></br>
                        A guy who can deliver quality works with <span className='highlight'>unimaginable speed</span>. A 15 years old teenager who has his own dream, willing to create amazing projects. 
                        <br/><br/>
                        A person who believe that he can contribute to the world. A guy who has <span className='highlight'>countless project ideas</span> waiting to be implemented. A guy who think about coding 24 hours a day. 
                    </p></div>
                    <a href='#' className='btn-mywork'>GET IN TOUCH</a>
                </div>
            </div>
        </div>
        <div className='section-wrapper'>
            <h2 className='section-title'>SERVICES</h2>
            <div className='section-title-seperator'></div>
            <div className='section-container card-wrapper'>
                <div className='section-card-container'>
                    <Database className="service-icon"/>
                    <h3 className='service-name'>WEB SCRAPING</h3>
                    <p className='service-desc'>Scrape data from Internet providing large amount of data for data analyst to do their job</p>
                    <a className='btn-learn-more'>
                        Learn More
                        <div className='btn-learn-more-line'></div>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 3.33334L4.25 7.5L0.75 11.6667" stroke="#FFC800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
                <div className='section-card-container'>
                    <PenTool className="service-icon"/>
                    <h3 className='service-name'>UI DESIGNING</h3>
                    <p className='service-desc'>Create insane user interface design for website and desktop app with cool animations</p>
                    <a className='btn-learn-more'>
                        Learn More
                        <div className='btn-learn-more-line'></div>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 3.33334L4.25 7.5L0.75 11.6667" stroke="#FFC800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
                <div className='section-card-container'>
                    <Server className="service-icon"/>
                    <h3 className='service-name'>BACK-END</h3>
                    <p className='service-desc'>Develop fully functional and easy-to-use backend system using Python Django framework</p>
                    <a className='btn-learn-more'>
                        Learn More
                        <div className='btn-learn-more-line'></div>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 3.33334L4.25 7.5L0.75 11.6667" stroke="#FFC800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div className='section-wrapper'>
            <h2 className='section-title'>SKILLS</h2>
            <div className='section-title-seperator'></div>
            <div className='section-container skill-wrapper'>
                <div className='skill-container'>
                    <h3 className='skill-name'>HTML - 80%</h3>
                    <div className='skill-bar'>
                        <div className='skill-bar-inner' data-skill='80'></div>
                    </div>
                </div>
                <div className='skill-container'>
                    <h3 className='skill-name'>CSS - 70%</h3>
                    <div className='skill-bar'>
                        <div className='skill-bar-inner' data-skill='70'></div>
                    </div>
                </div>
                <div className='skill-container'>
                    <h3 className='skill-name'>Javascript - 40%</h3>
                    <div className='skill-bar'>
                        <div className='skill-bar-inner' data-skill='40'></div>
                    </div>
                </div>
                <div className='skill-container'>
                    <h3 className='skill-name'>Python - 90%</h3>
                    <div className='skill-bar'>
                        <div className='skill-bar-inner' data-skill='90'></div>
                    </div>
                </div>
            </div>
        </div>
        <button className='btn-go-up'>
            <span data-feather='chevron-up'></span>
        </button>
    </Scrollbar>);
};

export default Homepage;