import React from "react";
import "./Navbar.css";

const Navbar = ():JSX.Element => {
    return <nav className='cb-nav fixed-top'>
        <div className='navbrand-wrapper'>
            <button className='collapse-btn'><span className='collapse-icon' data-feather='menu'></span></button>
            <a className='navbar-brand' href="/">&#60;/&#62; CODEBLOG</a>
        </div>
        <ul className="nav homenav-item-container">
            <li>
                <a href="/home" className='homenav-item {% ifequal title "Home" %}active{% endifequal %}'>HOME</a>
            </li>
            <li>
                <a href="#" className='homenav-item {% ifequal title "Share" %}active{% endifequal %}'>SHARE</a>
            </li>
            <li>
                <a href="/ideas" className='homenav-item {% ifequal title "Ideas" %}active{% endifequal %}'>IDEAS</a>
            </li>
            <li>
                <a href="/projects" className='homenav-item {% ifequal title "Projects" %}active{% endifequal %}'>PROJECTS</a>
            </li>
            <li>
                <a href='#' className='homenav-item {% ifequal title "About" %}active{% endifequal %}'>ABOUT</a>
            </li>
        </ul>
        <a href='/login' className='login-link {% ifequal title "Signin" %}active{% endifequal %}'>SIGN IN</a>
    </nav>;
};

export default Navbar;