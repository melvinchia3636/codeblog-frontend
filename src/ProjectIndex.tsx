import React from "react";
import "./style/ProjectIndex.scss";
import illu3 from "./assets/illu3.svg"; 
import "./style/scrollbar.css";

import project1 from "./assets/project images/cruisegator.png";
import project2 from "./assets/project images/McWiki.png";
import project3 from "./assets/project images/Fruits Inc..png";
import * as websiteIcon from "./assets/icons/website";

import PerfectScrollbar from "react-perfect-scrollbar";

interface ShowcaseProps extends React.HTMLProps<HTMLButtonElement> {
    direction: "left" | "right";
    projectData: [string, string, string][]
}

const projectData: [string, string, string][] = [
    ["Cruisegator", "https://www.thecodeblog.net", project1],
    ["McWiki", "https://www.thecodeblog.net", project2],
    ["Juicy Inc.", "https://www.thecodeblog.net", project3],
    ["Cruisegator", "https://www.thecodeblog.net", project1],
    ["McWiki", "https://www.thecodeblog.net", project2],
    ["Juicy Inc.", "https://www.thecodeblog.net", project3],
    ["Cruisegator", "https://www.thecodeblog.net", project1],
    ["McWiki", "https://www.thecodeblog.net", project2],
    ["Juicy Inc.", "https://www.thecodeblog.net", project3],
];

const ProjectShowcase: React.FC<ShowcaseProps> = ({direction, id, projectData}: ShowcaseProps):JSX.Element => {

    const scrollbarRef = React.useRef<PerfectScrollbar>(null);

    React.useEffect(() => {
        scrollbarRef.current?.updateScroll();
        document.querySelector(`#${id}.scrollbar-container`)?.scrollTo({ left: direction === "right" ? 9999 : 1, top: 0, behavior: "smooth" });
        setTimeout(() => {
            document.querySelector(`#${id}.scrollbar-container`)?.scrollTo({ left: direction === "right" ? 9999 : 1, top: 0, behavior: "smooth" });
        }, 100);
    }, []);

    return <div className={"bg-purple-200 showcase overflow-visible rounded-xl p-12 " + (direction === "left" ? "pr-0" : "pl-0")}>
        <PerfectScrollbar id={id} className={`flex overflow-x-scroll py-12 ${direction} ` + (direction === "left" ? "-ml-32" : "-mr-32")} ref={scrollbarRef} options={{swipeEasing: false}}>
            {projectData.map(([name, link, img]) => 
                <div key="name" className="flex flex-col justify-center items-center mx-2 px-16 py-16 flex-shrink-0 rounded-xl">
                    <img src={img} className="h-56"/>
                    <h3 className="font-semibold text-3xl mt-4">{name}</h3>
                    <a className="font-semibold text-lg text-purple-300 flex items-center mt-4" href={link}>DETAILS
                        <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13 5L20 12L13 19" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>)}
        </PerfectScrollbar>
    </div>;
};

const ProjectIndex = (): JSX.Element => {

    return <div className="project-index">
        <div className="w-full h-screen top flex items-center justify-center relative mb-32">
            <div className="w-5/12 mr-32">
                <h1 className="text-6xl font-semibold leading-tight whitespace-nowrap">What I&#39;ve done during<br/>my <span className="text-purple-300">entire</span> coding<br/>journey</h1>
                <p className="text-xl w-full my-12 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at.</p>
                <a className="font-semibold text-xl text-purple-300 flex items-center mt-8">GET IN TOUCH 
                    <svg className="ml-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 5L20 12L13 19" stroke="#716FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
            <img src={illu3} className="w-5/12"/>
            
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
                <p className="text-xl mt-6 leading-8 text-gray-400">Here are some of my favourite and extremely large scale projects which I’m absolutely sure you’ll love them as well.</p>
                <a className='bg-purple-300 rounded-full text-white py-4 px-16 inline-block mt-12 font-medium btn-anim2 whitespace-nowrap w-max' data-text="PICK RANDOM">{"LET'S GO".split("").map(e => <span className="text-white" key={e}>{e}</span>)}</a>
            </div>
            
            <ProjectShowcase direction="left" id="first" projectData={projectData}/>
        </div>
        <div className="flex justify-between items-center mb-32">
            <ProjectShowcase direction="right" id="second" projectData={projectData}/>

            <div className="p-32 pl-48">
                <h2 className="font-semibold text-5xl text-purple-300">Websites</h2>
                <p className="text-xl mt-6 leading-8 text-gray-400">You’ll be able to find a lot of websites with wierd topic here... Most of them are the products of casual ideas.</p>
                <div className="grid grid-flow-col grid-rows-2 gap-5 mt-12" style={{gridTemplateColumns: "repeat(auto-fill, 32px)"}}>
                    {Object.values(websiteIcon).map(e => <img key={e} src={e}/>)}
                </div>
                <a className='bg-purple-300 rounded-full text-white py-4 px-16 inline-block mt-12 font-medium btn-anim2 whitespace-nowrap w-max' data-text="PICK RANDOM">{"LET'S GO".split("").map(e => <span className="text-white" key={e}>{e}</span>)}</a>
            </div>
        </div>
        <div className="flex justify-between items-center mb-48">
            <div className="p-32 pr-48">
                <h2 className="font-semibold text-5xl text-purple-300">Mobile Apps</h2>
                <p className="text-xl mt-6 leading-8 text-gray-400">The journey truely began when my first client required me to build him a mobile app... It became unstoppable.</p>
                <a className='bg-purple-300 rounded-full text-white py-4 px-16 inline-block mt-12 font-medium btn-anim2 whitespace-nowrap w-max' data-text="PICK RANDOM">{"LET'S GO".split("").map(e => <span className="text-white" key={e}>{e}</span>)}</a>
            </div>
            
            <ProjectShowcase direction="left" id="third" projectData={projectData}/>
        </div>
        <div className="flex justify-between items-center mb-32">
            <ProjectShowcase direction="right" id="fourth" projectData={projectData}/>

            <div className="p-32 pl-48">
                <h2 className="font-semibold text-5xl text-purple-300">Miscellaneous</h2>
                <p className="text-xl mt-6 leading-8 text-gray-400">Here are some other type of tiny scale projects that I&#39;ve created over the year including minigames, algorithms related stuff, etc.</p>
                <a className='bg-purple-300 rounded-full text-white py-4 px-16 inline-block mt-12 font-medium btn-anim2 whitespace-nowrap w-max' data-text="PICK RANDOM">{"LET'S GO".split("").map(e => <span className="text-white" key={e}>{e}</span>)}</a>
            </div>
        </div>
        <div className="px-8 sm:px-24 md:px-32 mb-24" id="collab">
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

export default ProjectIndex;