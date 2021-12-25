import React, {Dispatch, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactAnime from "react-animejs";
import { useLocation, useHistory } from "react-router-dom";
import Logo from "./logo";


interface INavbar {
    page: number;
    setPage: Dispatch<number>;
}

const Navbar: React.FC<INavbar> = ({ page, setPage }: INavbar):JSX.Element => {
    const {Anime, stagger} = ReactAnime;
    const [section, setSection] = useState(0);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [sideNavOpen, setSideNavOpen] = useState(false);
    const location = useLocation();
    const history = useHistory();
    
    const topNavItem = ["home", "projects", "blog", "FAQ"];
    const sideNavItem = [["intro", 0], ["skills", 11], ["projects", 15], ["outro", 24]];
    const caseStudySideNavItem = ["intro", "designs", "tech stack", "results"];
    const lightmode = [0, 1, 2, 3, 6, 11, 15, 21, 23, 25, 26, 27, 32];
    
    return <nav>
        <div className="absolute z-50 top-6 left-6 flex justify-between items-center" style={{width: "calc(100% - 3rem)"}}>
            {location.pathname === "/" ? <svg className="cursor-pointer 1230:hidden" onClick={() => setSideNavOpen(!sideNavOpen)} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z" className={page || (mobileNavOpen || sideNavOpen) ? (mobileNavOpen || sideNavOpen || (location.pathname === "/" ? lightmode.includes(page) : false) ? "fill-black" : "fill-white") : "fill-white"}/></svg> : ""}
            <Logo page={mobileNavOpen || sideNavOpen ? 2 : (location.pathname == "/" ? page : 0)} setPage={setPage}/>
            <Anime initial={[
                {
                    targets: ".navbar button",
                    translateX: ["1000%", "0%"],
                    delay: stagger(200),
                    easing: "spring(1, 80, 100, 0)"
                }
            ]} className="h-full hidden 1330:block">
                <div className="text-white font-Chakra gap-16 navbar relative z-10 flex">
                    {topNavItem.map((e, i) => 
                        <button key={`topNav-${i}`} onClick={() => {history.push("/"+e.replace("home", "")); setPage(0);}} className={`uppercase tracking-widerr text-xl transition-color font-bold ${lightmode.includes(page) && location.pathname === "/" ? (location.pathname.split("/")[1] === e.replace("home", "")? "text-black-dark" : "text-yellow-900") : (location.pathname.split("/")[1] === e.replace("home", "") ? "text-yellow-500" : "")} relative z-10`}>{e}</button>
                    )}
                </div>
            </Anime>
            <button onClick={() => {setMobileNavOpen(!mobileNavOpen);}} className="block 1330:hidden"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><g fill="none"><path className={page || (mobileNavOpen || sideNavOpen) ? (mobileNavOpen || sideNavOpen || (location.pathname === "/" ? lightmode.includes(page) : false) ? "fill-black" : "fill-white") : "fill-white 481:fill-black"} fillRule="evenodd" clipRule="evenodd" d="M3 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" /><path className={page  || (mobileNavOpen || sideNavOpen) ? (mobileNavOpen || sideNavOpen || (location.pathname === "/" ? lightmode.includes(page) : false) ? "fill-black" : "fill-white") : "fill-white 481:fill-black"} fillRule="evenodd" clipRule="evenodd" d="M3 13a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"/></g></svg></button>
        </div>
        {location.pathname === "/" && <Anime initial={[
            {
                targets: ".sidebar button",
                translateY: ["-1000%", "0%"],
                delay: stagger(200, {start: 2000}),
                easing: "spring(1, 80, 100, 0)"
            }
        ]} className="h-full">
            <div className="text-white font-Chakra gap-16 sidebar transform origin-top-left -rotate-90 absolute z-30 bottom-2 left-6 hidden 1230:flex">
                {sideNavItem.map(([e, t], i) => <button key={`sideNav-${i}`} className={`uppercase tracking-widerr text-lg transition-color font-bold ${[1, 2, 3, 6, 11, 15, 21, 23, 24, 25, 26, 27, 32].includes(page) && location.pathname === "/" ? (section === i ? "text-black-dark" : "text-yellow-900") : (section === i ? "text-yellow-500" : "")}`} onClick={() => {setPage(t as number); setSection(i); (document.activeElement as HTMLElement).blur();}}>{e}</button>)}
            </div>
        </Anime>}
        {location.pathname.match(/projects\/[A-Z]{2}\/[A-Z]{2}-[A-Z0-9]{5}/) && <Anime initial={[
            {
                targets: ".sidebar button",
                translateY: ["-1000%", "0%"],
                delay: stagger(200, {start: 2000}),
                easing: "spring(1, 80, 100, 0)"
            }
        ]} className="h-full">
            <div className="text-white font-Chakra gap-16 sidebar transform origin-top-left -rotate-90 absolute z-30 bottom-2 left-6 hidden 1230:flex">
                {caseStudySideNavItem.map((e, i) => <a key={`sideNav-${i}`} className={`uppercase tracking-widerr text-lg transition-color font-bold ${[1, 2, 3, 6, 11, 15, 21, 23, 24, 25, 26, 27, 32].includes(page) && location.pathname === "/" ? (section === i ? "text-black-dark" : "text-yellow-900") : (section === i ? "text-yellow-500" : "")}`} href={`#${e.replace(/\s/g, "-")}`}>{e}</a>)}
            </div>
        </Anime>}
        <Anime initial={[
            {
                targets: ".sidebar2 button",
                translateX: ["1000%", "0%"],
                delay: stagger(200, {start: 4000}),
                easing: "spring(1, 80, 100, 0)"
            }
        ]} className="h-full">
            <div className="text-white font-Chakra gap-12 flex flex-col items-end absolute bottom-6 right-6 z-30 sidebar2">
                <a className="hidden lg:block" href="https://www.facebook.com/TheSillyCoder" target="_blank" rel="noreferrer">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={lightmode.includes(page) && location.pathname === "/" ? "fill-black" : "fill-yellow"} d="M15.6298 24.4965V14.9345H18.8556L19.3351 11.1907H15.6298V8.806C15.6298 7.72567 15.9308 6.986 17.4813 6.986H19.446V3.64817C18.49 3.54572 17.5292 3.49626 16.5678 3.5C13.7165 3.5 11.7588 5.24067 11.7588 8.43617V11.1837H8.55396V14.9275H11.7658V24.4965H15.6298Z"/>
                    </svg>
                </a>
                <a className="hidden lg:block" href="https://www.youtube.com/channel/UCsSf5dUsiQYfEucaJlusXng" target="_blank" rel="noreferrer">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={lightmode.includes(page) && lightmode.includes(page) && location.pathname === "/"? "fill-black" : "fill-yellow"} d="M25.1919 8.4035C25.059 7.91047 24.7993 7.46084 24.4386 7.09936C24.078 6.73789 23.6289 6.47717 23.1362 6.34317C21.3092 5.8415 14 5.83333 14 5.83333C14 5.83333 6.69202 5.82517 4.86385 6.30467C4.37143 6.44484 3.92331 6.70924 3.56251 7.07249C3.20171 7.43574 2.94035 7.88564 2.80352 8.379C2.32169 10.206 2.31702 13.9953 2.31702 13.9953C2.31702 13.9953 2.31235 17.8033 2.79068 19.6117C3.05902 20.6115 3.84652 21.4013 4.84752 21.6708C6.69319 22.1725 13.9825 22.1807 13.9825 22.1807C13.9825 22.1807 21.2917 22.1888 23.1187 21.7105C23.6116 21.5767 24.0611 21.3166 24.4226 20.9559C24.7842 20.5951 25.0453 20.1463 25.1802 19.6537C25.6632 17.8278 25.6667 14.0397 25.6667 14.0397C25.6667 14.0397 25.69 10.2305 25.1919 8.4035ZM11.662 17.5058L11.6679 10.5058L17.7427 14.0117L11.662 17.5058Z"/>
                    </svg>
                </a>
                <a className="hidden lg:block" href="https://www.instagram.com/melvin.chia.4896" target="_blank" rel="noreferrer">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={lightmode.includes(page) && location.pathname === "/" ? "fill-black" : "fill-yellow"} d="M13.9989 8.6065C12.5681 8.6065 11.1959 9.17486 10.1842 10.1866C9.17255 11.1983 8.60419 12.5704 8.60419 14.0012C8.60419 15.4319 9.17255 16.8041 10.1842 17.8158C11.1959 18.8275 12.5681 19.3958 13.9989 19.3958C15.4296 19.3958 16.8018 18.8275 17.8135 17.8158C18.8252 16.8041 19.3935 15.4319 19.3935 14.0012C19.3935 12.5704 18.8252 11.1983 17.8135 10.1866C16.8018 9.17486 15.4296 8.6065 13.9989 8.6065ZM13.9989 17.5047C13.0694 17.5047 12.1779 17.1354 11.5207 16.4782C10.8634 15.8209 10.4942 14.9295 10.4942 14C10.4942 13.0705 10.8634 12.1791 11.5207 11.5218C12.1779 10.8646 13.0694 10.4953 13.9989 10.4953C14.9283 10.4953 15.8198 10.8646 16.477 11.5218C17.1343 12.1791 17.5035 13.0705 17.5035 14C17.5035 14.9295 17.1343 15.8209 16.477 16.4782C15.8198 17.1354 14.9283 17.5047 13.9989 17.5047Z"/>
                        <path className={lightmode.includes(page) && location.pathname === "/" ? "fill-black" : "fill-yellow"} d="M19.607 9.66583C20.3016 9.66583 20.8647 9.10275 20.8647 8.40816C20.8647 7.71357 20.3016 7.1505 19.607 7.1505C18.9124 7.1505 18.3494 7.71357 18.3494 8.40816C18.3494 9.10275 18.9124 9.66583 19.607 9.66583Z"/>
                        <path className={lightmode.includes(page) && location.pathname === "/" ? "fill-black" : "fill-yellow"} d="M23.9552 7.1295C23.6851 6.43205 23.2723 5.79867 22.7434 5.2699C22.2144 4.74114 21.5809 4.32865 20.8833 4.05884C20.067 3.75242 19.2047 3.58673 18.333 3.56884C17.2095 3.51984 16.8537 3.50584 14.0047 3.50584C11.1557 3.50584 10.7905 3.50584 9.67632 3.56884C8.80527 3.58582 7.94354 3.75154 7.12832 4.05884C6.43058 4.32834 5.79688 4.74072 5.26788 5.26952C4.73887 5.79832 4.32625 6.43186 4.05649 7.1295C3.75001 7.94572 3.5847 8.80815 3.56765 9.67984C3.51749 10.8022 3.50232 11.158 3.50232 14.0082C3.50232 16.8572 3.50232 17.22 3.56765 18.3365C3.58515 19.2092 3.74965 20.0702 4.05649 20.888C4.32701 21.5854 4.74003 22.2187 5.26916 22.7474C5.79829 23.2761 6.43189 23.6887 7.12949 23.9587C7.94316 24.2774 8.80525 24.4549 9.67865 24.4837C10.8022 24.5327 11.158 24.5478 14.007 24.5478C16.856 24.5478 17.2212 24.5478 18.3353 24.4837C19.2069 24.4659 20.0693 24.3007 20.8857 23.9948C21.583 23.7244 22.2164 23.3115 22.7453 22.7826C23.2742 22.2537 23.687 21.6204 23.9575 20.923C24.2643 20.1063 24.4288 19.2453 24.4463 18.3727C24.4965 17.2503 24.5117 16.8945 24.5117 14.0443C24.5117 11.1942 24.5117 10.8325 24.4463 9.716C24.4327 8.83199 24.2666 7.95696 23.9552 7.1295ZM22.5342 18.2502C22.5266 18.9225 22.4039 19.5886 22.1713 20.2195C21.9961 20.6732 21.7279 21.0852 21.3839 21.429C21.0399 21.7728 20.6278 22.0407 20.174 22.2157C19.5501 22.4472 18.8911 22.5699 18.2257 22.5785C17.1173 22.6298 16.8047 22.6427 13.9627 22.6427C11.1183 22.6427 10.8278 22.6427 9.69849 22.5785C9.0334 22.5704 8.3747 22.4476 7.75132 22.2157C7.29595 22.0418 6.88215 21.7743 6.53669 21.4305C6.19123 21.0866 5.92179 20.6741 5.74582 20.2195C5.51651 19.5954 5.39385 18.9371 5.38299 18.2723C5.33282 17.164 5.32115 16.8513 5.32115 14.0093C5.32115 11.1662 5.32115 10.8757 5.38299 9.74517C5.39053 9.0732 5.51325 8.40749 5.74582 7.777C6.10165 6.8565 6.83082 6.132 7.75132 5.77967C8.37501 5.54883 9.03352 5.42613 9.69849 5.41684C10.808 5.36667 11.1195 5.35267 13.9627 5.35267C16.8058 5.35267 17.0975 5.35267 18.2257 5.41684C18.8911 5.42484 19.5502 5.54759 20.174 5.77967C20.6277 5.95499 21.0398 6.22324 21.3838 6.5672C21.7278 6.91117 21.996 7.32325 22.1713 7.777C22.4006 8.40111 22.5233 9.05936 22.5342 9.72417C22.5843 10.8337 22.5972 11.1452 22.5972 13.9883C22.5972 16.8303 22.5972 17.136 22.547 18.2513H22.5342V18.2502Z"/>
                    </svg>
                </a>
                <a className="hidden lg:block" href="https://www.github.com/melvinchia3636" target="_blank" rel="noreferrer">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={lightmode.includes(page) && location.pathname === "/" ? "fill-black" : "fill-yellow"} fillRule="evenodd" clipRule="evenodd" d="M14.0303 2.33333C7.60315 2.33333 2.39398 7.54249 2.39398 13.9697C2.39398 19.11 5.72715 23.4722 10.3518 25.0122C10.934 25.1172 11.144 24.759 11.144 24.451C11.144 24.1745 11.1346 23.4418 11.1311 22.4723C7.89365 23.1747 7.20998 20.9113 7.20998 20.9113C6.68265 19.5673 5.91848 19.2092 5.91848 19.2092C4.86265 18.487 5.99898 18.5033 5.99898 18.5033C7.16798 18.585 7.78048 19.7027 7.78048 19.7027C8.81882 21.4807 10.5058 20.9673 11.1661 20.6698C11.2723 19.9173 11.5756 19.404 11.907 19.1135C9.32398 18.8207 6.60798 17.822 6.60798 13.3618C6.60798 12.0937 7.06182 11.053 7.80265 10.241C7.68482 9.94583 7.28232 8.76166 7.91815 7.16099C7.91815 7.16099 8.89465 6.84716 11.1171 8.35216C12.0663 8.09394 13.0455 7.96214 14.0291 7.96016C15.0129 7.96176 15.992 8.09357 16.9411 8.35216C19.1648 6.84599 20.1401 7.16099 20.1401 7.16099C20.776 8.76166 20.377 9.94583 20.2556 10.241C21.0023 11.053 21.4503 12.0925 21.4503 13.3618C21.4503 17.8337 18.732 18.816 16.1396 19.1042C16.5538 19.4635 16.9271 20.1728 16.9271 21.2578C16.9271 22.8142 16.9131 24.0695 16.9131 24.451C16.9131 24.7625 17.1208 25.1242 17.7146 25.0098C22.337 23.4675 25.6666 19.1088 25.6666 13.9697C25.6666 7.54249 20.4575 2.33333 14.0303 2.33333Z"/>
                    </svg>
                </a>
                <p className={`font-bold ${lightmode.includes(page) && location.pathname === "/" ? "text-yellow-900" : "text-white"} tracking-widerr animate__animated animate__fadeInUp animate__delay-3s font-Chakra text-lg`}>v7.0</p>
            </div>
        </Anime>
        <div className={`mobile-nav bg-yellow-400 transition-all duration-700 absolute top-0 z-40 ${mobileNavOpen ? "left-0 top-0 w-full h-screen" : "left-full -top-1/2 rounded-bl-full w-96 h-96"}`}>
            {mobileNavOpen ? <Anime initial={[
                {
                    targets: ".navbar button",
                    translateX: ["600%", "0%"],
                    delay: stagger(200),
                    easing: "spring(1, 80, 100, 0)"
                }
            ]} className="h-full">
                <div className="text-white font-Chakra gap-16 navbar relative z-10 flex flex-col items-center justify-center h-full">
                    {topNavItem.map((e, i) => 
                        <button key={`topNav-${i}`} onClick={() => {history.push("/"+e.replace("home", "")); setMobileNavOpen(false); setSideNavOpen(false); setPage(0);}} className={`uppercase tracking-widerr text-lg transition-color font-bold ${(location.pathname.split("/")[1] === e.replace("home", "")? "text-black-dark" : "text-yellow-900")} relative z-10`}>{e}</button>
                    )}
                </div>
            </Anime> : null}
        </div>
        <div className={`mobile-nav bg-yellow-400 transition-all duration-700 absolute top-0 z-40 ${sideNavOpen ? "right-0 top-0 w-full h-screen" : "right-full -top-1/2 rounded-br-full w-96 h-96"}`}>
            {sideNavOpen ? <Anime initial={[
                {
                    targets: ".side-navbar button",
                    translateX: ["-600%", "0%"],
                    delay: stagger(200),
                    easing: "spring(1, 80, 100, 0)"
                }
            ]} className="h-full">
                <div className="text-white font-Chakra gap-16 side-navbar relative z-10 flex flex-col items-center justify-center h-full">
                    {sideNavItem.map(([e, t], i) => 
                        <button key={`topNav-${i}`} onClick={() => {setPage(t as number); setSection(i); setSideNavOpen(false);}} className={`uppercase tracking-widerr text-lg transition-color font-bold ${section === i ? "text-black-dark" : "text-yellow-900"} relative z-10`}>{e}</button>
                    )}
                </div>
            </Anime> : null}
        </div>
    </nav>;
};

export default Navbar;
