import React, { ReactElement, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactAnime from "react-animejs";

const anim = "animate__animated";
const lol = 0;

const Projects = (): JSX.Element => {
    const {Anime, stagger} = ReactAnime;
    const [currentType, changeCurrentType] = useState(1);
    const [show, setShow] = useState(true);
    const [first, setFirst] = useState(true);

    const projectTypes: (string|number|ReactElement)[][] = [
        ["Websites", 56, "WEB APPS/<br>WEBSITES", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.", "3 months / projects", "Available", "WA", <svg key="web" width="499" height="408" viewBox="0 0 499 408" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_264:31)" filter="url(#filter0_i_264:31)">
                <path d="M394.282 306.4C396.278 289.933 397.775 273.466 397.775 256.5C397.775 239.534 396.278 223.067 394.282 206.6H478.613C482.605 222.568 485.1 239.285 485.1 256.5C485.1 273.716 482.605 290.432 478.613 306.4H394.282ZM350.121 445.122C365.091 417.427 376.568 387.488 384.552 356.3H458.154C433.982 397.923 395.632 429.453 350.121 445.122ZM343.883 306.4H227.117C224.622 289.933 223.125 273.466 223.125 256.5C223.125 239.534 224.622 222.818 227.117 206.6H343.883C346.129 222.818 347.875 239.534 347.875 256.5C347.875 273.466 346.129 289.933 343.883 306.4ZM285.5 455.102C264.792 425.162 248.075 391.979 237.846 356.3H333.155C322.925 391.979 306.208 425.162 285.5 455.102ZM185.7 156.7H112.846C136.769 114.964 175.091 83.3841 220.63 67.878C205.66 95.5725 194.433 125.513 185.7 156.7ZM112.846 356.3H185.7C194.433 387.488 205.66 417.427 220.63 445.122C175.187 429.445 136.919 397.91 112.846 356.3ZM92.387 306.4C88.395 290.432 85.9 273.716 85.9 256.5C85.9 239.285 88.395 222.568 92.387 206.6H176.718C174.722 223.067 173.225 239.534 173.225 256.5C173.225 273.466 174.722 289.933 176.718 306.4H92.387ZM285.5 57.6485C306.208 87.5885 322.925 121.022 333.155 156.7H237.846C248.075 121.022 264.792 87.5885 285.5 57.6485ZM458.154 156.7H384.552C376.743 125.798 365.18 95.9691 350.121 67.878C396.029 83.5965 434.202 115.283 458.154 156.7ZM285.5 7C147.526 7 36 119.275 36 256.5C36 322.672 62.2865 386.133 109.077 432.923C132.245 456.091 159.75 474.469 190.02 487.008C220.291 499.547 252.735 506 285.5 506C351.672 506 415.133 479.713 461.923 432.923C508.713 386.133 535 322.672 535 256.5C535 223.735 528.547 191.291 516.008 161.02C503.469 130.75 485.091 103.245 461.923 80.0769C438.755 56.9086 411.25 38.5306 380.98 25.9921C350.709 13.4535 318.265 7 285.5 7Z" fill="#1A1A1A"/>
            </g>
            <defs>
                <filter id="filter0_i_264:31" x="0" y="0" width="499" height="475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_264:31"/>
                </filter>
                <clipPath id="clip0_264:31">
                    <rect width="499" height="471" fill="white"/>
                </clipPath>
            </defs>
        </svg>],
        ["UI Designs", 56, "UI<br>DESIGNS", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.", "3 days / projects", "Available", "UI", <svg key="ui" width="499" height="408" viewBox="0 0 499 408" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_262:77)">
                <path fillRule="evenodd" clipRule="evenodd" d="M498.999 471H29.3516V0H498.999V471ZM58.7045 441.562H469.646V29.4375H58.7045V441.562Z" fill="#1A1A1A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M88.0566 58.875H264.174V412.125H88.0566V58.875Z" fill="#1A1A1A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M293.531 58.875H440.296V235.5H293.531V58.875Z" fill="#1A1A1A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M293.531 264.938H440.296V412.125H293.531V264.938Z" fill="#1A1A1A"/>
            </g>
            <defs>
                <filter id="filter0_i_262:77" x="0" y="0" width="499" height="475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_262:77"/>
                </filter>
            </defs>
        </svg>],
        ["Mobile Apps", 56, "Mobile<br>Apps", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.", "3 months / projects", "Available", "MA", <svg key="phone" width="470" height="403" viewBox="0 0 470 403" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_264:296)" filter="url(#filter0_i_264:296)">
                <path d="M343.062 31.1875C351.334 31.1875 359.267 34.4733 365.115 40.3221C370.964 46.1709 374.25 54.1036 374.25 62.375V436.625C374.25 444.896 370.964 452.829 365.115 458.678C359.267 464.527 351.334 467.812 343.062 467.812H155.938C147.666 467.812 139.733 464.527 133.885 458.678C128.036 452.829 124.75 444.896 124.75 436.625V62.375C124.75 54.1036 128.036 46.1709 133.885 40.3221C139.733 34.4733 147.666 31.1875 155.938 31.1875H343.062ZM155.938 0C139.395 0 123.529 6.57163 111.832 18.2692C100.134 29.9668 93.5625 45.8321 93.5625 62.375V436.625C93.5625 453.168 100.134 469.033 111.832 480.731C123.529 492.428 139.395 499 155.938 499H343.062C359.605 499 375.471 492.428 387.168 480.731C398.866 469.033 405.438 453.168 405.438 436.625V62.375C405.438 45.8321 398.866 29.9668 387.168 18.2692C375.471 6.57163 359.605 0 343.062 0L155.938 0Z" fill="#1A1A1A"/>
                <path d="M249.5 436.625C257.771 436.625 265.704 433.339 271.553 427.49C277.402 421.642 280.688 413.709 280.688 405.438C280.688 397.166 277.402 389.233 271.553 383.385C265.704 377.536 257.771 374.25 249.5 374.25C241.229 374.25 233.296 377.536 227.447 383.385C221.598 389.233 218.312 397.166 218.312 405.438C218.312 413.709 221.598 421.642 227.447 427.49C233.296 433.339 241.229 436.625 249.5 436.625Z" fill="#1A1A1A"/>
            </g>
            <defs>
                <filter id="filter0_i_264:296" x="0" y="0" width="499" height="503" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_264:296"/>
                </filter>
                <clipPath id="clip0_264:296">
                    <rect width="499" height="499" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        ],
        ["Desktop Apps", 56, "Desktop<br>Apps", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.", "2 months / projects", "Available", "DA", <svg key="desktop" width="524" height="482" viewBox="0 0 524 482" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M255.469 170.312V391.719C255.469 396.236 253.674 400.568 250.48 403.762C247.286 406.956 242.954 408.75 238.438 408.75H204.375V442.812H238.438C242.954 442.812 247.286 444.607 250.48 447.801C253.674 450.995 255.469 455.327 255.469 459.844C255.469 464.361 253.674 468.693 250.48 471.887C247.286 475.081 242.954 476.875 238.438 476.875H136.25C131.733 476.875 127.401 475.081 124.207 471.887C121.013 468.693 119.219 464.361 119.219 459.844C119.219 455.327 121.013 450.995 124.207 447.801C127.401 444.607 131.733 442.812 136.25 442.812H170.312V408.75H68.125C54.5788 408.735 41.5917 403.347 32.0131 393.768C22.4344 384.19 17.0465 371.202 17.0312 357.656V204.375C17.0465 190.829 22.4344 177.842 32.0131 168.263C41.5917 158.684 54.5788 153.296 68.125 153.281H238.438C242.954 153.281 247.286 155.076 250.48 158.27C253.674 161.464 255.469 165.796 255.469 170.312ZM527.969 102.188V442.812C527.959 451.843 524.367 460.501 517.981 466.887C511.595 473.273 502.937 476.865 493.906 476.875H323.594C314.563 476.865 305.905 473.273 299.519 466.887C293.133 460.501 289.541 451.843 289.531 442.812V102.188C289.541 93.1567 293.133 84.4986 299.519 78.1129C305.905 71.7271 314.563 68.1351 323.594 68.125H493.906C502.937 68.1351 511.595 71.7271 517.981 78.1129C524.367 84.4986 527.959 93.1567 527.969 102.188ZM434.297 383.203C434.297 378.15 432.799 373.211 429.991 369.01C427.184 364.809 423.194 361.534 418.526 359.601C413.858 357.667 408.722 357.161 403.766 358.147C398.81 359.133 394.258 361.566 390.686 365.139C387.113 368.712 384.68 373.264 383.694 378.219C382.708 383.175 383.214 388.311 385.148 392.979C387.081 397.648 390.356 401.637 394.557 404.445C398.758 407.252 403.697 408.75 408.75 408.75C415.523 408.743 422.017 406.049 426.806 401.259C431.596 396.47 434.29 389.976 434.297 383.203V383.203ZM476.875 221.406C476.875 216.889 475.081 212.557 471.887 209.363C468.693 206.169 464.361 204.375 459.844 204.375H357.656C353.139 204.375 348.807 206.169 345.613 209.363C342.419 212.557 340.625 216.889 340.625 221.406C340.625 225.923 342.419 230.255 345.613 233.449C348.807 236.643 353.139 238.438 357.656 238.438H459.844C464.361 238.438 468.693 236.643 471.887 233.449C475.081 230.255 476.875 225.923 476.875 221.406ZM476.875 153.281C476.875 148.764 475.081 144.432 471.887 141.238C468.693 138.044 464.361 136.25 459.844 136.25H357.656C353.139 136.25 348.807 138.044 345.613 141.238C342.419 144.432 340.625 148.764 340.625 153.281C340.625 157.798 342.419 162.13 345.613 165.324C348.807 168.518 353.139 170.312 357.656 170.312H459.844C464.361 170.312 468.693 168.518 471.887 165.324C475.081 162.13 476.875 157.798 476.875 153.281Z" fill="#1A1A1A"/>
        </svg>
        ],
        ["Web Scraping", 56, "Web<br>Scraping", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.", "3 days / projects", "Partially Available", "WS", <svg key="spider" width="499" height="408" viewBox="0 0 499 408" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_264:227)" filter="url(#filter0_i_264:227)">
                <g clipPath="url(#clip1_264:227)">
                    <path d="M159.961 144.979L182.425 152.472H186.47L190.993 129.844C191.616 126.743 192.552 123.277 193.773 119.63L176.196 84.4748L196.814 22.6283C199.231 15.3685 195.315 7.51965 188.047 5.09395L174.905 0.710376C167.645 -1.71532 159.788 2.20911 157.371 9.47753L134.942 76.7732C132.619 83.7481 133.158 91.3595 136.44 97.9374L159.961 144.979ZM525.669 302.675L479.971 234.131C477.44 230.335 474.01 227.222 469.987 225.068C465.965 222.915 461.472 221.787 456.909 221.786H389.388L449.156 200.683C455.005 198.732 460.037 194.888 463.459 189.759L509.893 120.098C514.138 113.73 512.414 105.119 506.047 100.874L494.516 93.1813C488.149 88.9363 479.538 90.6603 475.293 97.0278L431.491 162.721L379.079 180.194H347.805L338.821 135.276C336.924 125.772 323.773 83.1666 278.499 83.1666C233.226 83.1666 220.075 125.772 218.178 135.276L209.194 180.194H177.92L125.516 162.721L81.7063 97.0278C77.4614 90.6603 68.8588 88.9363 62.4827 93.1813L50.952 100.874C44.5846 105.119 42.8606 113.722 47.1055 120.098L93.5403 189.759C96.9618 194.888 101.994 198.732 107.843 200.683L167.611 221.778H100.09C95.5254 221.779 91.0319 222.906 87.0076 225.059C82.9833 227.213 79.5526 230.326 77.0196 234.123L31.3299 302.675C27.0849 309.042 28.8002 317.653 35.1763 321.898L46.707 329.591C53.0745 333.836 61.6857 332.112 65.9307 325.745L107.514 263.37H148.283L95.5848 347.689C92.8318 352.095 91.3729 357.186 91.3745 362.381V429.694C91.3745 437.353 97.5773 443.556 105.236 443.556H119.097C126.755 443.556 132.958 437.353 132.958 429.694V366.358L197.135 263.673C196.26 275.845 195.333 288.025 195.333 300.24C195.333 346.216 230.644 388.111 278.499 388.111C326.355 388.111 361.666 346.216 361.666 300.24C361.666 288.025 360.73 275.845 359.864 263.673L424.041 366.358V429.694C424.041 437.353 430.244 443.556 437.902 443.556H451.763C459.422 443.556 465.624 437.353 465.624 429.694V362.373C465.624 357.175 464.16 352.081 461.414 347.68L408.716 263.361H449.485L491.068 325.736C495.313 332.104 503.924 333.828 510.292 329.583L521.823 321.89C528.199 317.645 529.914 309.042 525.669 302.675ZM380.803 84.4748L363.225 119.63C364.447 123.277 365.383 126.743 366.006 129.844L370.529 152.472H374.574L397.038 144.979L420.559 97.9374C422.186 94.6809 423.156 91.1358 423.413 87.5044C423.67 83.873 423.21 80.2265 422.057 76.7732L399.628 9.47753C397.211 2.21777 389.354 -1.71532 382.094 0.710376L368.952 5.09395C361.692 7.51965 357.768 15.3685 360.185 22.6283L380.803 84.4748Z" fill="#1A1A1A"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_i_264:227" x="0" y="0" width="499" height="475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_264:227"/>
                </filter>
                <clipPath id="clip0_264:227">
                    <rect width="499" height="471" fill="white"/>
                </clipPath>
                <clipPath id="clip1_264:227">
                    <rect width="499" height="443.556" fill="white" transform="translate(29)"/>
                </clipPath>
            </defs>
        </svg>
        ],
    ];

    return <div className="w-full h-full pt-32 px-16">
        <div className="flex justify-between gap-24 w-full h-full relative z-10">   
            <div className="h-full justify-between flex flex-col">
                <Anime initial={[{
                    targets: ".sidebar p",
                    translateX: ["-1000%", "0%"],
                    delay: stagger(200),
                    easing: "spring(1, 80, 100, 0)"
                }]}>
                    <div className="text-white sidebar font-Poppins text-3xl whitespace-nowrap">
                        {projectTypes.map(([e], i)=> <p key="projTyes" onClick={() => {setShow(false); setFirst(false); setTimeout(() => {
                            changeCurrentType(i+1);
                            setShow(true);
                        }, 1000);}} className={`font-Poppins tracking-widerr mb-8 cursor-pointer ${currentType === i+1 && "text-yellow-500 font-semibold"}`}>{e}</p>)}
                    </div>
                </Anime>
                <div className={`${anim} ${show ? "animate__fadeInUp "+(first ? "animate__delay-1s" : "") : "animate__fadeOutDown"}`}>
                    <p className="text-white uppercase tracking-widerr font-semibold text-2xl">category no.</p>
                    <p className={`${anim} animate__fadeInLeft animate__delay-1s text-yellow-500 text-big font-bold tracking-widerr -mt-6`}>{(currentType+"").padStart(2, "0")}<span className="text-white font-semibold text-4xl tracking-widerr whitespace-nowrap">/ 05</span></p>
                </div>
            </div>
            <div className="h-full justify-between flex flex-col">
                <div>
                    <div className={`${anim} workflow-title relative pl-6 ${show ? "animate__fadeInDown" : "animate__fadeOutUp"}`} style={{borderLeft: "10px solid rgba(254, 206, 60)"}}>
                        <h1 className={`${anim} text-7xl text-white font-bold tracking-widerr uppercase whitespace-nowrap ${show ? "animate__fadeInDown "+(first ? "animate__delay-1s" : "") : "animate__fadeOutRight"}`}>{(projectTypes[currentType-1][2]+"").split("<br>").map(e => <p key="hmm">{e}</p>)}</h1>
                    </div>
                    <button className={`${anim} text-yellow-500 font-bold mt-16 border-yellow-500 border-4 py-5 px-20 uppercase text-2xl tracking-widerr whitespace-nowrap ${show ? "animate__fadeInUp animate__delay-1s" : "animate__fadeOutDown"}`}>BWORSE PROEJCTS</button>
                </div>
                <div className={`${anim} ${show ? "animate__fadeInUp "+(first ? "animate__delay-1s" : "") : "animate__fadeOutDown"}`}>
                    <p className="text-white uppercase tracking-widerr font-semibold text-2xl">projects count</p>
                    <p className={`${anim} animate__fadeInRight animate__delay-1s text-yellow-500 text-big font-bold tracking-widerr -mt-6`}>{(projectTypes[currentType-1][1]+"").padStart(2, "0")}<span className="text-white font-semibold text-4xl tracking-widerr">/ 78</span></p>
                </div>
            </div>
            <Anime initial={[{
                targets: ".meta div",
                translateX: ["1000%", "0%"],
                delay: stagger(200, {start: 1500}),
                easing: "spring(1, 80, 100, 0)"
            }]} className={`${anim} ${show ? "animate__fadeInRight" : "animate__fadeOutRight"}`}>
                <div className="flex meta flex-col gap-16">
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase`}>description</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2`}>{projectTypes[currentType-1][3]}</p>
                    </div>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase`}>average time spent</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2`}>{projectTypes[currentType-1][4]}</p>
                    </div>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase`}>case study</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2`}>{projectTypes[currentType-1][5]}</p>
                    </div>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase`}>project s.no</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2`}>CB-<span className="font-semibold text-lg text-yellow-500">{projectTypes[currentType-1][6]}</span>-XXXXX</p>
                    </div>
                </div>
            </Anime>
        </div>
        <div className={`${anim} absolute bottom-0 right-0 ${show ? "animate__fadeInRightBig" : "fadeOutRightBig"}`}>{projectTypes[currentType-1][7]}</div>
    </div>;
};

export default Projects;