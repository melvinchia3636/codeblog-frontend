import React from "react";
import "./Navbar.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactAnime from "react-animejs";

const Navbar = ():JSX.Element => {
    const {Anime, stagger} = ReactAnime;
    
    return <nav className='cb-nav'>
        <div className='navbrand-wrapper'>
            <button className='collapse-btn'><span className='collapse-icon' data-feather='menu'></span></button>
            <a className='navbar-brand' href="/">{"<CB/>"}</a>
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
                <li>
                    <a href="/home" className='homenav-item active'>HOME</a>
                </li>
                <li>
                    <a href="#" className='homenav-item'>PROJECTS</a>
                </li>
                <li>
                    <a href="/ideas" className='homenav-item'>BLOG</a>
                </li>
                <li>
                    <a href="/projects" className='homenav-item'>ABOUT</a>
                </li>
            </ul>
        </Anime>
    </nav>;
};

export default Navbar;