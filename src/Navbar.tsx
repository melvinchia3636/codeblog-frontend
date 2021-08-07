import React, {useEffect, useState} from "react";
import "./style/Navbar.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactAnime from "react-animejs";
import { useLocation } from "react-router-dom";

const Navbar = ():JSX.Element => {
    const page = ["home", "projects", "blog", "about"];
    const location = useLocation();
    const pathname = location.pathname.match(/\/(.*?)(?:\/|$)/) || [];
    const pagename = pathname[pathname.length-1] || "home";
    const {Anime, stagger} = ReactAnime;
    const [isNavToggle, setNavToggle] = useState(false);
    const [firstTime, setFirstTime] = useState(true);
    const [isDown, setDown] = useState(false);

    useEffect(() => {
        document.querySelector("body")?.addEventListener("scroll", e => {
            if ((document.querySelector("body")?.scrollTop || 0) > 100 && !isDown) {
                setDown(true);
            } else {
                setDown(false);
            }
        });
    }, []);
    
    return <nav className={"cb-nav absolute top-0 left-0 " + (isDown ? "bg-gray-200 shadow-md py-6" : "py-6")}>
        <div className={"absolute top-0 left-0 w-screen h-screen transform overflow-hidden bg-gray-200 " + (!firstTime ? (isNavToggle ? "rounded-animation-on" : "rounded-animation-off") : "-translate-x-1/2 -translate-y-full")}>
            {isNavToggle ? <Anime initial={[
                {
                    targets: ".phone-nav li",
                    translateX: ["-1000%", "0%"],
                    delay: stagger(200, {start: 300}),
                    easing: "spring(1, 80, 100, 0)"
                }
            ]} className="h-full">
                <ul className="phone-nav flex flex-col justify-center items-center h-full gap-24">
                    {page.map((e, i) => 
                        <li key={e}>
                            <a href={`/${e}`} className={`homenav-item ${page.indexOf(pagename) === i ? "active": ""}`}>{e.toUpperCase()}</a>
                        </li>)}
                </ul>
            </Anime> : ""}
        </div>
        <div className="navbrand-wrapper">
            <button className="collapse-btn"><span className="collapse-icon" data-feather="menu"></span></button>
            <a className="navbar-brand" href="/">{"<CB/>"}</a>
        </div>
        <Anime initial={[
            {
                targets: ".nav li",
                translateY: ["-1000%", "0%"],
                delay: stagger(200, {start: 500}),
                easing: "spring(1, 80, 100, 0)"
            }
        ]} className="mr-5 flex items-center">
            <ul className="nav homenav-item-container">
                {page.map((e, i) => 
                    <li key={e}>
                        <a href={`/${e}`} className={`homenav-item ${page.indexOf(pagename) === i ? "active": ""}`}>{e.toUpperCase()}</a>
                    </li>)}
            </ul>
        </Anime>
        <button onClick={() => {setNavToggle(!isNavToggle); setFirstTime(false);}} className="mr-5 collapse-btn relative z-[9999]"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2.4em" height="2.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="#716fff"/><path d="M4 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="#716fff"/><path d="M11 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8z" fill="#716fff"/></g></svg></button>
    </nav>;
};

export default Navbar;