import React from "react";
import { RouteComponentProps } from "react-router-dom";
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

type ICaseStudy = RouteComponentProps<{proj_id: string}>

const CaseStudy: React.FC<ICaseStudy> = ({ match }: ICaseStudy):JSX.Element => {
    return <div className={"wh-full flex flex-col overflow-scroll case-study bg-black-dark pb-20 px-12 lg:px-40 mb-12 lg:mb-20 pt-12 mt-24 lg:pt-8"}>
        <h1 className="text-6xl font-bold tracking-widest text-yellow-500">CODEBLOG v7.0 <span className="text-white font-Dosis font-semibold text-5xl">CASE STUDY</span></h1>
        <div className="border-l border-white mt-6 mb-32 relative z-10">
            <div className="section relative pl-16 text-white font-Dosis tracking-widest text-xl font-light">
                <h2 className="font-Dosis text-6xl font-semibold tracking-widest mt-7">01</h2>
                <h3 className="font-Dosis text-3xl font-normal tracking-widest uppercase mt-2 mb-20">the_<span className="font-semibold font-Dosis text-yellow-500">introduction</span></h3>
                <h4 className="font-Dosis text-2xl font-medium uppercase mb-2 tracking-widerr text-yellow-500">creative. innovative. enthusiastic</h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget velit aliquet sagittis id. Vitae aliquet nec ullamcorper sit amet risus nullam. Ultrices in iaculis nunc sed. Massa tincidunt dui ut ornare lectus sit amet.
                <h4 className="font-Dosis text-2xl font-medium uppercase mb-2 tracking-widerr text-yellow-500 mt-16">passion to the future</h4>
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
                <h4 className="font-Dosis text-2xl font-semibold text-center tracking-widest uppercase mt-24">version iterations</h4>
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
            <div className="section relative pl-16 mt-32 text-white font-Dosis tracking-widest text-xl font-light">
                <h2 className="font-Dosis text-6xl font-semibold tracking-widest mt-7">03</h2>
                <h3 className="font-Dosis text-3xl font-normal tracking-widest uppercase mt-2 mb-12">the_<span className="font-semibold font-Dosis text-yellow-500">tech stack</span></h3>
                <h4 className="font-Dosis text-2xl font-semibold text-center tracking-widest uppercase mt-24">frontend technology stack</h4>
                <h4 className="font-Dosis text-lg font-medium text-center tracking-widerr mb-12 text-yellow-500">4 technologies</h4>
                <div className="w-full flex justify-center">
                    <svg width="782" height="128" viewBox="0 0 782 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64 73.8985C69.5228 73.8985 74 69.4213 74 63.8984C74 58.3756 69.5228 53.8984 64 53.8984C58.4772 53.8984 54 58.3756 54 63.8984C54 69.4213 58.4772 73.8985 64 73.8985Z" fill="#00D8FF"/>
                        <path d="M64 86.8216C51.9805 87.1124 39.9912 85.4922 28.48 82.0216C23.1625 80.336 18.2029 77.6806 13.852 74.1896C12.1917 72.9971 10.8091 71.4594 9.79897 69.6822C8.78885 67.905 8.17516 65.9303 8 63.8936C8 57.2816 15.264 50.8016 27.432 46.5616C39.2509 42.8047 51.5997 40.9838 64 41.1697C76.2348 40.9987 88.4182 42.7866 100.088 46.4656C105.209 48.0983 110.001 50.6253 114.24 53.9296C115.872 55.0666 117.234 56.5485 118.229 58.2704C119.225 59.9923 119.829 61.9121 120 63.8936C120 70.7656 111.88 77.7296 98.8 82.0576C87.5117 85.4151 75.7753 87.0218 64 86.8216V86.8216ZM64 45.9537C52.1365 45.7951 40.3233 47.5261 29.004 51.0816C17.804 54.9896 12.784 60.3336 12.784 63.8816C12.784 67.5936 18.18 73.4296 30.028 77.4816C41.0403 80.7851 52.5064 82.3228 64 82.0376C75.2656 82.2391 86.4957 80.7148 97.3 77.5176C109.6 73.4416 115.2 67.5976 115.2 63.8936C114.998 62.6226 114.535 61.4071 113.84 60.3241C113.144 59.2411 112.232 58.3141 111.16 57.6016C107.367 54.6702 103.087 52.4306 98.516 50.9856C87.3521 47.4807 75.6999 45.7819 64 45.9537V45.9537Z" fill="#00D8FF"/>
                        <path d="M41.2784 113.77C39.4124 113.813 37.5685 113.36 35.9344 112.458C30.2064 109.154 28.2224 99.6259 30.6264 86.9659C33.277 74.8503 37.8697 63.2431 44.2264 52.5939C50.1894 41.9104 57.8232 32.2496 66.8384 23.9779C70.8111 20.3568 75.3939 17.4681 80.3744 15.4459C82.1759 14.6017 84.141 14.1641 86.1304 14.1641C88.1199 14.1641 90.085 14.6017 91.8864 15.4459C97.8424 18.8779 99.8144 29.3899 97.0344 42.8819C94.302 54.3402 89.8287 65.3117 83.7704 75.4139C78.0174 85.9714 70.6239 95.548 61.8664 103.786C57.7496 107.549 52.9718 110.518 47.7744 112.542C45.6937 113.314 43.4975 113.729 41.2784 113.77V113.77ZM48.3704 54.9699C42.3068 65.1672 37.9051 76.2648 35.3304 87.8459C33.1184 99.5059 35.2424 106.518 38.3304 108.302C41.5304 110.154 49.2984 108.398 58.7304 100.158C67.0905 92.2657 74.1474 83.0988 79.6384 72.9979C85.4422 63.34 89.7332 52.8505 92.3624 41.8939C94.9784 29.1939 92.7184 21.4179 89.5104 19.5699C88.3081 19.1092 87.0232 18.903 85.7371 18.9643C84.451 19.0256 83.1915 19.353 82.0384 19.9259C77.6052 21.7553 73.5294 24.3525 69.9984 27.5979C61.3851 35.5211 54.0932 44.7697 48.3984 54.9939L48.3704 54.9699Z" fill="#00D8FF"/>
                        <path d="M86.7043 113.823C81.2843 113.823 74.4003 110.543 67.2323 104.379C58.0591 96.0325 50.2962 86.257 44.2443 75.4314C37.9672 64.9289 33.411 53.4896 30.7483 41.5474C29.5935 36.2934 29.3795 30.8762 30.1163 25.5474C30.2866 23.5707 30.8885 21.6553 31.8796 19.9365C32.8707 18.2176 34.2268 16.7372 35.8523 15.5994C41.8003 12.1554 51.8923 15.6954 62.1923 24.8394C70.7546 32.9282 78.0258 42.2822 83.7523 52.5754C90.0255 62.8328 94.6295 74.0216 97.3923 85.7234C98.5967 91.1703 98.7825 96.793 97.9403 102.307C97.7399 104.341 97.1021 106.307 96.0706 108.071C95.0391 109.835 93.6383 111.355 91.9643 112.527C90.3569 113.418 88.5415 113.866 86.7043 113.823V113.823ZM48.3843 73.0234C54.19 83.3692 61.6054 92.7249 70.3523 100.739C79.3483 108.479 86.4843 110.143 89.5523 108.339C92.7523 106.479 95.1123 98.8874 92.6803 86.6034C90.0158 75.4312 85.5998 64.7511 79.5963 54.9594C74.1316 45.1079 67.1912 36.1509 59.0163 28.3994C49.3203 19.7914 41.4563 17.8674 38.2523 19.7234C37.2537 20.535 36.4341 21.5447 35.8455 22.689C35.2568 23.8332 34.9118 25.0871 34.8323 26.3714C34.1963 31.1238 34.4035 35.951 35.4443 40.6314C38.0055 52.052 42.3752 62.9899 48.3883 73.0314L48.3843 73.0234Z" fill="#00D8FF"/>
                        <path d="M224 64V119H334V9H224V64Z" fill="#007ACC"/>
                        <path d="M248.326 64.3654L248.291 68.8698H262.608V109.553H272.736V68.8698H287.053V64.4526C287.053 62.0077 287.001 59.9649 286.931 59.9125C286.879 59.8429 278.166 59.8077 267.602 59.8253L248.379 59.8777L248.326 64.3649L248.326 64.3654Z" fill="white"/>
                        <path d="M312.757 59.7486C315.551 60.4473 317.681 61.6865 319.636 63.712C320.649 64.7948 322.151 66.768 322.273 67.2393C322.307 67.379 317.524 70.5918 314.625 72.39C314.521 72.46 314.101 72.0059 313.63 71.3072C312.216 69.2473 310.732 68.3565 308.462 68.1997C305.127 67.9724 302.979 69.7186 302.997 72.6341C302.997 73.49 303.119 73.9962 303.468 74.6948C304.202 76.2138 305.563 77.1217 309.841 78.9724C317.716 82.36 321.085 84.5948 323.181 87.7724C325.521 91.3173 326.044 96.9741 324.455 101.182C322.71 105.757 318.38 108.865 312.285 109.895C310.4 110.227 305.93 110.174 303.905 109.808C299.488 109.022 295.297 106.839 292.713 103.976C291.7 102.858 289.727 99.9424 289.849 99.7327C289.902 99.6631 290.355 99.3838 290.862 99.0869C291.351 98.8076 293.202 97.742 294.947 96.7296L298.108 94.8962L298.771 95.8741C299.697 97.2882 301.722 99.2266 302.944 99.8724C306.454 101.723 311.273 101.461 313.647 99.331C314.66 98.4059 315.079 97.4455 315.079 96.031C315.079 94.7565 314.922 94.1979 314.258 93.238C313.403 92.0155 311.657 90.9852 306.698 88.838C301.024 86.3931 298.579 84.8741 296.344 82.4644C295.052 81.068 293.83 78.8327 293.324 76.9644C292.905 75.4107 292.799 71.5169 293.132 69.9455C294.302 64.4627 298.44 60.6393 304.411 59.5041C306.349 59.1376 310.854 59.2772 312.757 59.749V59.7486Z" fill="white"/>
                        <path d="M494.669 74.7968C492.745 75.6808 490.637 76.8328 486.417 79.1488C484.817 80.0488 483.145 80.9488 481.589 81.7968C481.481 81.6888 481.369 81.5528 481.261 81.4408C472.913 72.5208 457.473 66.2208 458.129 54.2408C458.373 49.8768 459.873 38.4208 487.781 24.5088C510.749 13.1888 529.025 16.3248 532.181 23.2808C536.717 33.1968 522.385 51.6488 498.665 54.3248C496.04 54.8573 493.328 54.793 490.731 54.1366C488.134 53.4802 485.718 52.2486 483.661 50.5328C482.405 49.1688 482.217 49.0888 481.753 49.3608C480.989 49.7608 481.481 50.9968 481.753 51.7048C482.658 53.343 483.882 54.7831 485.353 55.9401C486.824 57.0971 488.512 57.9474 490.317 58.4408C499.651 60.4584 509.384 59.4944 518.141 55.6848C532.517 50.1208 543.741 34.6528 540.453 21.6848C537.153 8.53677 515.329 4.20077 494.681 11.5368C481.75 15.8943 469.803 22.754 459.521 31.7248C448.145 42.3648 446.345 51.6128 447.081 55.4848C449.729 69.2328 468.681 78.1808 476.281 84.8088C475.881 85.0288 475.545 85.2088 475.245 85.3808C471.453 87.2648 456.997 94.8208 453.393 102.813C449.301 111.869 454.049 118.361 457.185 119.233C461.911 120.365 466.872 119.993 471.377 118.168C475.881 116.344 479.703 113.159 482.309 109.057C484.522 105.655 485.881 101.77 486.27 97.7308C486.66 93.6916 486.068 89.6181 484.545 85.8568C485.443 85.1402 486.401 84.5018 487.409 83.9488C489.345 82.8048 491.189 81.6768 492.825 80.8048C498.426 78.181 504.539 76.83 510.725 76.8488C523.709 78.3768 526.273 86.4768 525.781 89.8888C525.551 91.0993 525.064 92.2465 524.353 93.2532C523.643 94.2599 522.725 95.1026 521.661 95.7248C520.761 96.2968 520.461 96.4888 520.541 96.8968C520.649 97.4968 521.085 97.4688 521.849 97.3608C523.8 96.7442 525.518 95.552 526.779 93.9408C528.04 92.3295 528.784 90.3746 528.913 88.3328C529.313 80.3328 521.685 71.5568 508.181 71.6368C504.137 71.6437 500.134 72.4414 496.397 73.9848C495.797 74.2328 495.214 74.4994 494.649 74.7848L494.669 74.7968ZM475.369 106.153C471.057 110.845 465.057 112.617 462.465 111.117C459.665 109.517 460.773 102.577 466.065 97.6128C469.199 94.7888 472.587 92.2595 476.185 90.0568C476.813 89.6568 477.741 89.1288 478.857 88.4568L479.157 88.2928L479.813 87.8928C480.757 91.0572 480.843 94.4156 480.062 97.6241C479.281 100.833 477.661 103.776 475.369 106.153V106.153Z" fill="#CD6799"/>
                        <g clipPath="url(#clip0_335:25)">
                            <path d="M718 25.8066C700.934 25.8066 690.266 34.2722 686 51.2029C692.4 42.7373 699.867 39.5628 708.4 41.6793C713.269 42.8866 716.749 46.391 720.601 50.2694C726.876 56.5882 734.137 63.901 750 63.901C767.066 63.901 777.734 55.4354 782 38.5048C775.6 46.9703 768.133 50.1449 759.6 48.0283C754.731 46.821 751.251 43.3166 747.399 39.4383C741.124 33.1195 733.863 25.8066 718 25.8066ZM686 63.901C668.934 63.901 658.266 72.3666 654 89.2972C660.4 80.8316 667.866 77.6571 676.4 79.7736C681.268 80.9809 684.748 84.4853 688.6 88.3637C694.875 94.6825 702.137 101.995 718 101.995C735.066 101.995 745.734 93.5298 750 76.5991C743.6 85.0647 736.133 88.2392 727.6 86.1227C722.731 84.9154 719.252 81.411 715.4 77.5326C709.125 71.2138 701.863 63.901 686 63.901Z" fill="url(#paint0_linear_335:25)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_335:25" x1="650.444" y1="50.187" x2="760.55" y2="114.182" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#2298BD"/>
                                <stop offset="1" stopColor="#0ED7B5"/>
                            </linearGradient>
                            <clipPath id="clip0_335:25">
                                <rect width="128" height="76.3871" fill="white" transform="translate(654 25.8066)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <h4 className="font-Dosis text-2xl font-semibold text-center tracking-widest uppercase mt-24">backend technology stack</h4>
                <h4 className="font-Dosis text-lg font-medium text-center tracking-widerr mb-12 text-yellow-500">3 technologies</h4>
                <div className="w-full flex justify-center">
                    <svg width="673" height="128" viewBox="0 0 673 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.54 8.39956C35.14 8.39956 36.936 20.6796 36.936 20.6796V33.4396H63.944V37.4396H26.18C26.18 37.4396 8 35.1996 8 64.0196C8 92.8396 24.052 91.6676 24.052 91.6676H33.32V78.2236C33.32 78.2236 32.8 62.1716 48.92 62.1716H75.968C75.968 62.1716 91.056 62.4116 91.056 47.5636V23.1996C91.056 23.1996 93.344 8.35156 63.688 8.35156L63.54 8.39956ZM48.612 16.9476C49.5722 16.9233 50.5179 17.1844 51.3297 17.6977C52.1415 18.211 52.7829 18.9535 53.1726 19.8314C53.5624 20.7092 53.6831 21.6829 53.5195 22.6293C53.3559 23.5757 52.9153 24.4524 52.2534 25.1484C51.5915 25.8444 50.7381 26.3285 49.8011 26.5394C48.8641 26.7504 47.8856 26.6788 46.9893 26.3336C46.093 25.9884 45.3192 25.3852 44.7657 24.6002C44.2123 23.8152 43.904 22.8837 43.88 21.9236V21.8436C43.88 20.8831 44.1648 19.9443 44.6984 19.1457C45.232 18.3471 45.9904 17.7247 46.8777 17.3572C47.765 16.9897 48.7414 16.8935 49.6834 17.0809C50.6253 17.2682 51.4906 17.7307 52.1697 18.4099C52.8488 19.089 53.3113 19.9542 53.4987 20.8962C53.6861 21.8382 53.5899 22.8146 53.2224 23.7019C52.8548 24.5892 52.2324 25.3476 51.4338 25.8812C50.6353 26.4148 49.6964 26.6996 48.736 26.6996L48.612 16.9476Z" fill="url(#paint0_linear_335:42)"/>
                        <path d="M64.3387 119.64C92.7387 119.64 90.9427 107.32 90.9427 107.32V94.6004H63.9387V90.6004H101.819C101.819 90.6004 119.999 92.6324 119.999 63.9804C119.999 35.3284 103.947 36.3324 103.947 36.3324H94.5587V49.6004C94.5587 49.6004 95.0787 65.6524 78.9587 65.6524H51.8987C51.8987 65.6524 36.7987 65.4244 36.7987 80.2724V104.8C36.7987 104.8 34.5107 119.648 64.1667 119.648H64.3267L64.3387 119.64ZM79.2667 111.052C78.3065 111.077 77.3608 110.816 76.549 110.302C75.7372 109.789 75.0958 109.046 74.7061 108.169C74.3163 107.291 74.1956 106.317 74.3592 105.371C74.5228 104.424 74.9634 103.548 75.6253 102.852C76.2872 102.156 77.1406 101.672 78.0776 101.461C79.0146 101.25 79.9932 101.321 80.8894 101.666C81.7857 102.012 82.5595 102.615 83.113 103.4C83.6664 104.185 83.9747 105.116 83.9987 106.076V106.196C83.9987 107.484 83.4871 108.719 82.5764 109.63C81.6657 110.541 80.4306 111.052 79.1427 111.052H79.2627H79.2667Z" fill="url(#paint1_linear_335:42)"/>
                        <path d="M280.543 16H296.403V88.676C289.633 90.0655 282.742 90.7823 275.831 90.816C256.463 90.796 246.383 82.144 246.383 65.528C246.383 49.528 257.075 39.128 273.647 39.128C275.971 39.0827 278.291 39.3518 280.543 39.928V16V16ZM280.543 52.568C278.819 51.9992 277.01 51.7287 275.195 51.768C267.195 51.768 262.543 56.66 262.543 65.232C262.543 73.58 266.971 78.188 275.095 78.188C276.918 78.1876 278.739 78.0539 280.543 77.788V52.588V52.568Z" fill="#44B78B"/>
                        <path d="M321.598 40.2358V76.6358C321.598 89.1678 320.658 95.1918 317.906 100.388C315.098 105.671 310.505 109.786 304.946 112L290.234 105.068C295.579 103.238 300.056 99.4909 302.798 94.5518C305.062 90.0678 305.778 84.8718 305.778 71.2038V40.2358H321.598Z" fill="#44B78B"/>
                        <path d="M305.766 16.0801H321.622V32.1921H305.766V16.0801Z" fill="#44B78B"/>
                        <g clipPath="url(#clip0_335:42)">
                            <path d="M533.316 63.1421C530.324 63.1421 527.891 64.0281 526.027 65.7978C524.162 67.5697 523.216 69.8921 523.216 72.7381C523.216 74.2127 523.451 75.5574 523.913 76.7895C524.377 78.0241 525.097 79.168 526.066 80.2017C527.034 81.2359 528.973 82.6408 531.862 84.4276C535.407 86.5916 537.727 88.3482 538.841 89.7197C539.955 91.0899 540.508 92.5259 540.508 94.0232C540.508 96.0276 539.848 97.628 538.491 98.8307C537.133 100.034 535.316 100.633 533.064 100.633C530.688 100.633 528.618 99.796 526.841 98.1333C525.064 96.4675 524.166 94.2645 524.146 91.503H523.041V101.525H524.146C524.484 100.576 524.951 100.091 525.562 100.091C525.855 100.091 526.544 100.293 527.616 100.672C530.226 101.601 532.368 102.049 534.052 102.049C536.955 102.049 539.432 101.032 541.496 98.9666C543.558 96.9017 544.598 94.4109 544.598 91.503C544.598 89.2487 543.911 87.2421 542.563 85.4938C541.214 83.743 538.592 81.7066 534.673 79.368C531.3 77.3416 529.111 75.6916 528.101 74.4052C527.089 73.1206 526.57 71.6995 526.57 70.1403C526.57 68.4539 527.189 67.0991 528.411 66.0886C529.633 65.0776 531.234 64.5767 533.238 64.5767C535.493 64.5767 537.373 65.246 538.86 66.593C540.346 67.9421 541.205 69.8118 541.458 72.2145H542.563V63.5302H541.535C541.409 63.9728 541.293 64.2557 541.186 64.3829C541.082 64.5092 540.882 64.5767 540.585 64.5767C540.228 64.5767 539.591 64.4263 538.685 64.1307C536.747 63.4781 534.959 63.1421 533.316 63.1421H533.316ZM569.431 63.1421C565.786 63.1421 562.476 64.0017 559.486 65.7206C556.491 67.4364 554.121 69.8193 552.372 72.8544C550.623 75.8895 549.755 79.1123 549.755 82.5473C549.755 87.1614 551.265 91.2728 554.31 94.8763C557.357 98.4772 561.008 100.721 565.244 101.584C566.212 102.088 567.598 103.391 569.412 105.5C571.455 107.879 573.185 109.595 574.607 110.617C575.997 111.619 577.542 112.386 579.181 112.886C580.804 113.379 582.558 113.622 584.455 113.622C586.752 113.622 588.808 113.223 590.619 112.401L590.212 111.393C589.161 111.772 588.039 111.955 586.859 111.955C585.255 111.955 583.636 111.426 582.012 110.365C580.391 109.301 578.363 107.272 575.945 104.278C574.808 102.844 574.023 101.939 573.579 101.584C578.214 100.678 582.025 98.4324 584.998 94.8373C587.969 91.2443 589.456 87.1434 589.456 82.5469C589.456 77.0899 587.514 72.5031 583.66 68.764C579.802 65.0241 575.058 63.1421 569.431 63.1421V63.1421ZM591.976 63.1421L592.034 64.3245C594.461 64.3245 595.821 65.0395 596.125 66.4763C596.238 66.9908 596.29 67.9399 596.299 69.3066L596.28 95.4579C596.259 97.4109 595.981 98.6579 595.446 99.1991C594.91 99.7364 594.005 100.073 592.694 100.207L592.635 101.39H616.828L617.449 95.4579H616.344C616.028 97.0737 615.305 98.2316 614.153 98.889C612.998 99.5513 610.957 99.8776 608.008 99.8776H605.72C603.067 99.8776 601.532 98.9184 601.126 96.989C601.043 96.6074 601.014 96.1982 601.01 95.7487L601.106 69.3066C601.106 67.3566 601.352 66.05 601.863 65.4101C602.378 64.7728 603.308 64.4162 604.654 64.3245L604.596 63.1421H591.976V63.1421ZM569.818 64.5763C573.93 64.5763 577.287 66.196 579.88 69.4618C582.472 72.7289 583.757 77.2066 583.757 82.8767C583.757 88.2495 582.453 92.5513 579.841 95.7873C577.228 99.0223 573.752 100.634 569.431 100.634C565.28 100.634 561.914 98.9719 559.331 95.6324C556.75 92.2925 555.473 87.9566 555.473 82.6245C555.473 77.1456 556.766 72.7596 559.37 69.4811C561.972 66.2066 565.457 64.5767 569.819 64.5767L569.818 64.5763ZM625.455 70.1987C624.865 70.1987 624.415 70.3978 624.079 70.7995C623.734 71.1995 623.629 71.6842 623.749 72.2728C623.865 72.8438 624.187 73.3438 624.699 73.7653C625.208 74.1864 625.756 74.4052 626.347 74.4052C626.917 74.4052 627.352 74.1864 627.665 73.7653C627.977 73.3443 628.073 72.8438 627.955 72.2728C627.835 71.6842 627.524 71.1995 627.045 70.7991C626.559 70.3978 626.026 70.1982 625.455 70.1982V70.1987ZM641.409 74.2114C640.406 78.0684 638.233 80.1557 634.896 80.4921L634.934 81.5973H638.831L638.753 94.6631C638.759 96.8969 638.828 98.3842 638.986 99.1412C639.37 100.953 640.553 101.875 642.534 101.875C645.399 101.875 648.404 100.129 651.548 96.6403L650.598 95.8263C648.328 98.1237 646.322 99.2767 644.569 99.2767C643.492 99.2767 642.824 98.6574 642.572 97.4351C642.503 97.1381 642.476 96.7912 642.476 96.3881L642.514 81.5973H648.466L648.407 79.8329H642.534V74.2114H641.409V74.2114ZM664.42 79.1351C661.091 79.1351 658.383 80.7513 656.278 83.9623C654.184 87.1785 653.535 90.7421 654.359 94.6631C654.843 96.9596 655.809 98.7394 657.286 99.9938C658.761 101.248 660.632 101.875 662.869 101.875C664.952 101.875 667.852 101.347 669.072 100.285C670.296 99.2232 671.423 97.503 672.465 95.1478L671.631 94.275C669.97 97.3311 666.618 98.8697 664.09 98.8697C660.615 98.8697 658.486 96.9627 657.693 93.1702C657.586 92.658 657.508 92.1402 657.46 91.6193C661.595 90.9649 664.728 89.8057 666.843 88.1302C668.956 86.4535 671.077 84.6763 670.681 82.7991C670.445 81.6833 669.866 80.8061 668.975 80.1434C668.073 79.4807 665.73 79.1351 664.42 79.1351V79.1351ZM628.034 79.271L620.861 80.9188V82.1982L623.342 81.8881C624.544 81.8881 625.251 82.432 625.474 83.5162C625.549 83.8789 625.597 84.389 625.61 85.0285L625.532 96.7566C625.513 98.3794 625.332 99.3228 624.97 99.6061C624.605 99.8899 623.642 100.033 622.082 100.033L622.043 101.138H633.422L633.403 100.032C631.822 100.032 630.797 99.9079 630.34 99.664C629.891 99.4228 629.581 98.982 629.448 98.3074C629.345 97.8215 629.3 96.9837 629.293 95.8263L629.332 79.271H628.033H628.034ZM662.598 81.4421C663.29 81.4421 663.959 81.7096 664.633 82.2368C665.298 82.7623 665.702 83.3465 665.835 83.9816C666.484 87.1 663.72 89.2552 657.499 90.4561C657.322 88.1829 657.716 86.1184 658.72 84.2531C659.718 82.389 661.016 81.4421 662.598 81.4421V81.4421Z" fill="white"/>
                            <path d="M517.249 18.3647H455.522C451.385 18.3647 448 21.7498 448 25.8867V93.9604C448 98.0972 451.385 101.482 455.522 101.482H496.177C495.715 81.2533 502.623 41.9954 517.249 18.3647V18.3647Z" fill="#0F80CC"/>
                            <path d="M515.006 20.5591H455.521C452.584 20.5591 450.193 22.949 450.193 25.8872V88.9937C463.665 83.8235 483.885 79.3621 497.866 79.5648C500.675 64.8744 508.932 36.085 515.006 20.5591V20.5591Z" fill="url(#paint2_linear_335:42)"/>
                            <path d="M531.647 16.1369C527.419 12.3671 522.3 13.8812 517.249 18.3649C516.499 19.0307 515.751 19.7698 515.007 20.5592C506.364 29.7272 498.343 46.7084 495.85 59.6777C496.822 61.6465 497.58 64.1588 498.079 66.0781C498.207 66.5702 498.322 67.0325 498.415 67.4255C498.634 68.3562 498.752 68.9592 498.752 68.9592C498.752 68.9592 498.675 68.6663 498.357 67.7443C498.296 67.5676 498.229 67.3746 498.149 67.1474C498.107 67.0363 498.063 66.9264 498.015 66.8176C497.452 65.5071 495.893 62.7413 495.206 61.5369C494.662 63.1326 494.149 64.7386 493.666 66.354C495.647 69.979 496.855 76.1913 496.855 76.1913C496.855 76.1913 496.75 75.7886 496.252 74.3834C495.81 73.1408 493.609 69.2834 493.087 68.3816C492.195 71.675 491.841 73.8983 492.161 74.4395C492.781 75.4882 493.372 77.2983 493.891 79.2996C495.064 83.8084 495.878 89.2978 495.878 89.2978C495.878 89.2978 495.904 89.6619 495.949 90.2215C495.786 94.0079 495.884 97.9338 496.177 101.482C496.565 106.179 497.297 110.215 498.229 112.374L498.861 112.029C497.493 107.775 496.937 102.199 497.18 95.768C497.549 85.9391 499.811 74.0851 503.99 61.7303C511.051 43.0799 520.848 28.1158 529.814 20.9693C521.642 28.35 510.581 52.2399 507.27 61.0864C503.563 70.9935 500.936 80.29 499.352 89.197C502.084 80.8465 510.917 77.2575 510.917 77.2575C510.917 77.2575 515.249 71.9145 520.312 64.2812C517.279 64.9728 512.3 66.1571 510.632 66.8579C508.171 67.8899 507.508 68.2421 507.508 68.2421C507.508 68.2421 515.478 63.3886 522.315 61.1913C531.719 46.3807 541.964 25.3404 531.647 16.1369" fill="#003B57"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_335:42" x1="19.0686" y1="19.2912" x2="72.2153" y2="72.3174" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#387EB8"/>
                                <stop offset="1" stopColor="#366994"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_335:42" x1="50.5087" y1="53.8347" x2="111.229" y2="106.845" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFE052"/>
                                <stop offset="1" stopColor="#FFC331"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_335:42" x1="487.566" y1="21.9593" x2="487.566" y2="85.1881" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#97D9F6"/>
                                <stop offset="0.92024" stopColor="#0F80CC"/>
                                <stop offset="1" stopColor="#0F80CC"/>
                            </linearGradient>
                            <clipPath id="clip0_335:42">
                                <rect width="224.561" height="100" fill="white" transform="translate(448 14)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="section relative pl-16 mt-32 text-white font-Dosis tracking-widest text-xl font-light">
                <h2 className="font-Dosis text-6xl font-semibold tracking-widest mt-7">04</h2>
                <h3 className="font-Dosis text-3xl font-normal tracking-widest uppercase mt-2 mb-12">the_<span className="font-semibold font-Dosis text-yellow-500">RESULTS</span></h3>
            </div>
        </div>

        <p className="${anim} font-Dosis absolute bottom-0 right-8 text-massive leading-none font-black tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner uppercase">{match.params.proj_id}</p>
    </div>;
};

export default CaseStudy;