import React from "react";
import "./Navbar.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactAnime from "react-animejs";
import Background from "./bg.svg";
import { useLocation } from "react-router-dom";

const Navbar = ():JSX.Element => {
    const page = ["home", "projects", "blog", "about"];
    const location = useLocation();
    const pathname = location.pathname.match(/\/(.*?)(?:\/|$)/) || [];
    const pagename = pathname[pathname.length-1] || "home";
    const {Anime, stagger} = ReactAnime;
    
    return <nav className="cb-nav absolute top-0 left-0">
        <div className="navbrand-wrapper">
            <button className="collapse-btn"><span className="collapse-icon" data-feather="menu"></span></button>
            <a className="navbar-brand" href="/">{"<CB/>"}</a>
        </div>
        <Anime initial={[
            {
                targets: ".nav li",
                translateY: 90,
                delay: stagger(200, {start: 500}),
                easing: "spring(1, 80, 100, 0)"
            }
        ]}>
            <ul className="nav homenav-item-container">
                {page.map((e, i) => 
                    <li key={e}>
                        <a href={`/${e}`} className={`homenav-item ${page.indexOf(pagename) === i ? "active": ""}`}>{e.toUpperCase()}</a>
                    </li>)}
            </ul>
        </Anime>
    </nav>;
};

export default Navbar;