import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import 'animate.css';

function Navbar() {

    const [navOpen, setNavOpen] = useState(false);
  return (
    <div className={`w-${navOpen ? "full" : "20"} transition-all border-r-2 text-white border-white overflow-hidden duration-1000 h-full flex animate__animated animate__slideInDown`}>
        <div className="h-full w-20 flex flex-col justify-between items-center py-8 px-5">
            <button onClick={() => setNavOpen(!navOpen)} className="flex flex-col gap-1 w-full">
                <span className="w-full border-b-[3px] rounded-full border-white"></span>
                <span className="w-full border-b-[3px] rounded-full border-white"></span>
            </button>
            <div className="animate__animated animate__fadeInLeft">
                <button onClick={() => {Array(100).fill(0).forEach(() => {($.fn as any).pagepiling.moveSectionUp();})}} className="transform -rotate-90 text-3xl pt-2 tracking-wide font-medium">&lt;<span className="text-yellow-500">CODEBLOG</span>/&gt;<span className="text-sm ml-2">v8</span></button>
            </div>
            <div className="flex flex-col gap-10 animate__animated animate__fadeInLeft">
                <a><Icon icon="bx:bxl-facebook" className="w-7 h-7" /></a>
                <a><Icon icon="bx:bxl-github" className="w-7 h-7" /></a>
                <a><Icon icon="bx:bxl-youtube" className="w-7 h-7" /></a>
            </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-between text-3xl border-l-2 border-white overflow-hidden text-white tracking-wide py-12">
            <a className="w-full h-full flex items-center justify-center text-3xl"><span className="block px-12 btn relative bg-[#1E1E1E] pt-4 pb-3 border-2 border-yellow-500 font-semibold">HOME</span></a>
            <a className="w-full h-full flex items-center justify-center">BLOG</a>
            <a className="w-full h-full flex items-center justify-center">WORKS</a>
            <a className="w-full h-full flex items-center justify-center">CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar