import React from "react";
import Image1 from "./assets/image 1.png";
import Image2 from "./assets/image 2.png";
import Image3 from "./assets/image 3.png";
import Image4 from "./assets/image 4.png";
import Image5 from "./assets/image 5.png";
import Image6 from "./assets/image 6.png";
import Image7 from "./assets/image 7.png";
import Landing from "./assets/Landing.png";
import OtherPages1 from "./assets/otherPages1.png";
import OtherPages2 from "./assets/otherPages2.png";
import OtherPages3 from "./assets/otherPages3.png";

const CaseStudy = (): JSX.Element => {
    return <div className={"wh-full flex flex-col overflow-scroll case-study bg-black-dark pb-20 px-12 lg:px-40 mb-12 lg:mb-20 pt-12 mt-24 lg:pt-8"}>
        <h1 className="text-6xl font-bold tracking-widest text-yellow-500">CODEBLOG v7.0 <span className="text-white font-Dosis font-semibold text-5xl">CASE STUDY</span></h1>
        <div className="border-l border-white mt-6 mb-32 relative z-10">
            <div className="section relative pl-16 text-white font-Dosis tracking-widest text-xl font-light">
                <h2 className="font-Dosis text-6xl font-semibold tracking-widest mt-7">01</h2>
                <h3 className="font-Dosis text-3xl font-normal tracking-widest uppercase mt-2 mb-12">the_<span className="font-semibold font-Dosis text-yellow-500">introduction</span></h3>
                <h4 className="font-Dosis text-2xl font-medium uppercase mb-2 tracking-widerr text-yellow-500">creative. innovative. enthusiastic</h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget velit aliquet sagittis id. Vitae aliquet nec ullamcorper sit amet risus nullam. Ultrices in iaculis nunc sed. Massa tincidunt dui ut ornare lectus sit amet.
                <div className="flex gap-32 mt-16">
                    <div className="text-white text-6xl uppercase tracking-wider">
                        <p className="font-Dosis font-semibold text-yellow-500 tracking-widest">2 years</p>
                        <p className="font-Dosis text-2xl mt-2 font-medium">from beginning to completion</p>
                    </div>
                    <div className="text-white text-6xl uppercase tracking-wider">
                        <p className="font-Dosis font-semibold text-yellow-500 tracking-widest">3,141,592,653</p>
                        <p className="font-Dosis text-2xl mt-2 font-medium">consumed brain cells</p>
                    </div>
                </div>
            </div>
            <div className="section relative pb-7 mt-32 text-white font-Dosis tracking-widest text-xl font-light">
                <h2 className="font-Dosis pl-16 text-6xl font-semibold tracking-widest mt-7">02</h2>
                <h3 className="font-Dosis pl-16 text-3xl font-normal tracking-widest uppercase mt-2 mb-12">the_<span className="font-semibold font-Dosis text-yellow-500">UI Designs</span></h3>
                <h4 className="font-Dosis text-2xl font-semibold text-center tracking-widest uppercase mt-16">version iterations</h4>
                <h4 className="font-Dosis text-lg font-semibold text-center tracking-widerr mb-12 text-yellow-500">v1.0 - v7.0</h4>
                <div className="w-full border-t border-r border-white" style={{marginLeft: "-1px"}}>
                    <div className="w-full h-full iter border-black-dark border-l flex items-center justify-between p-12 gap-12">
                        <div className="img-container" data-version="1.0"><div className="img"><img src={Image1}/></div></div>
                        <div className="img-container" data-version="2.0"><div className="img"><img src={Image2}/></div></div>
                    </div>
                </div>
                <div className="w-full border-t border-white" style={{marginLeft: "-1px"}}>
                    <div className="w-full h-full iter border-black-dark border-r flex items-center justify-between p-12 gap-12">
                        <div className="img-container" data-version="4.0"><div className="img"><img src={Image4}/></div></div>
                        <div className="img-container" data-version="3.0"><div className="img"><img src={Image3}/></div></div>
                    </div>
                </div>
                <div className="w-full border-t border-r border-b border-white" style={{marginLeft: "-1px"}}>
                    <div className="w-full h-full iter border-black-dark border-l flex items-center justify-between p-12 gap-12">
                        <div className="img-container" data-version="5.0"><div className="img"><img src={Image5}/></div></div>
                        <div className="img-container" data-version="6.0"><div className="img"><img src={Image6}/></div></div>
                    </div>
                </div>
                <div className="w-full border-white" style={{marginLeft: "-1px"}}>
                    <div className="w-full h-full iter border-black-dark border-r flex items-center justify-between p-12 gap-12">
                        <div></div>
                        <div className="img-container" data-version="7.0"><div className="img"><img src={Image7}/></div></div>
                    </div>
                </div>
                <div className="ml-16 mt-4 flex flex-col">
                    <h4 className="font-Dosis text-3xl font-semibold tracking-widest uppercase mb-6">landing page</h4>
                    <div className="w-full -ml-24 border border-white rounded-xl overflow-hidden bg-black-dark" style={{ width: "calc(100% + 6rem)" }}>
                        <div className="w-full flex items-center p-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <img src={Landing} className="border-t border-white"/>
                    </div>
                    <h4 className="font-Dosis text-3xl mt-24 font-semibold tracking-widest uppercase mb-6">some other pages</h4>
                    <div className="flex flex-col gap-12 w-full overflow-visible -ml-24" style={{ width: "calc(100% + 6rem)" }}>
                        <img src={OtherPages1} className="w-full flex-shrink-0 border border-white"/>
                        <img src={OtherPages2} className="w-full flex-shrink-0 border border-white"/>
                        <img src={OtherPages3} className="w-full flex-shrink-0 border border-white"/>
                    </div>
                    <h4 className="font-Dosis text-3xl mt-24 font-semibold tracking-widest uppercase mb-6">TYPOGRAPHY</h4>
                    <div className="mb-8">
                        <h5 className="font-Dosis text-yellow-500 text-3xl mt-8 font-medium tracking-widest mb-1">Chakra Petch</h5>
                        <p className="font-Dosis text-xl font-white">A square sans serif with tapered corners.</p>
                        <div className="flex justify-between mt-6">
                            {["light", "normal", "medium", "semibold", "bold"].map((e, i) => <div key={e} className="text-center">
                                <p className={`font-${e} text-white text-9xl leading-none`}>Aa</p>
                                <p className="font-Dosis text-white text-2xl font-medium uppercase">{e}</p>
                                <p className="font-Dosis text-yellow-500 text-lg font-medium uppercase">{(i+3)*100}</p>
                            </div>)}
                        </div>
                    </div>
                    <div className="mb-8">
                        <h5 className="font-Dosis text-yellow-500 text-3xl mt-8 font-medium tracking-widest mb-1">Poppins</h5>
                        <p className="font-Dosis text-xl font-white">A sans serif font that looks great in any designs.</p>
                        <div className="flex justify-between mt-6">
                            {["light", "normal", "medium", "semibold", "bold"].map((e, i) => <div key={e} className="text-center">
                                <p className={`font-${e} font-Poppins text-white text-9xl leading-none`}>Aa</p>
                                <p className="font-Dosis text-white text-2xl font-medium uppercase">{e}</p>
                                <p className="font-Dosis text-yellow-500 text-lg font-medium uppercase">{(i+3)*100}</p>
                            </div>)}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-Dosis text-yellow-500 text-3xl mt-8 font-medium tracking-widest mb-1">Dosis</h5>
                        <p className="font-Dosis text-xl font-white">A rounded sans-serif type family.</p>
                        <div className="flex justify-between mt-6">
                            {["light", "normal", "medium", "semibold", "bold"].map((e, i) => <div key={e} className="text-center">
                                <p className={`font-${e} font-Dosis text-white text-9xl leading-none`}>Aa</p>
                                <p className="font-Dosis text-white text-2xl font-semibold uppercase">{e}</p>
                                <p className="font-Dosis text-yellow-500 text-lg font-medium uppercase">{(i+3)*100}</p>
                            </div>)}
                        </div>
                    </div>
                    <h4 className="font-Dosis text-3xl mt-24 font-semibold tracking-widest uppercase mb-6">COLOR PALETTE</h4>
                    <div className="flex gap-16 mt-8">
                        <div className="flex flex-col items-center">
                            <div className="bg-yellow-500 w-44 h-44"></div>
                            <p className="font-Dosis text-white text-2xl font-semibold mt-4">#FFC922</p>
                            <p className="font-Dosis text-white text-lg font-medium -mt-0.5">H:45, S:87, V:100</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-yellow-800 w-44 h-44"></div>
                            <p className="font-Dosis text-white text-2xl font-semibold mt-4">#D8A40E</p>
                            <p className="font-Dosis text-white text-lg font-medium -mt-0.5">H:45, S:94, V:85</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-black-dark w-44 h-44 border border-gray-500"></div>
                            <p className="font-Dosis text-white text-2xl font-semibold mt-4">#131313</p>
                            <p className="font-Dosis text-white text-lg font-medium -mt-0.5">H:0, S:0, V:8</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white w-44 h-44"></div>
                            <p className="font-Dosis text-white text-2xl font-semibold mt-4">#FFC922</p>
                            <p className="font-Dosis text-white text-lg font-medium -mt-0.5">H:0, S:0, V:100</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <p className="${anim} font-Dosis absolute bottom-0 right-8 text-massive leading-none font-black tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner">WA-PF0M5</p>
    </div>;
};

export default CaseStudy;