import React, { ReactElement, useRef, useState } from "react";
import Illu1 from "./assets/illu1.svg";
import Img1 from "./assets/img1.png";

import workflowIllu1 from "./assets/workflow-illu-1.svg";
import workflowIllu2 from "./assets/workflow-illu-2.svg";
import workflowIllu3 from "./assets/workflow-illu-3.svg";
import workflowIllu4 from "./assets/workflow-illu-4.svg";

import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Project5 from "./assets/project5.png";

import "./style/Home.scss";
import "tailwindcss/tailwind.css";
import "animate.css/animate.min.css";
import { useEffect } from "react";
import Typed from "typed.js";

const anim = "animate__animated";
  
interface ILanding {
    page: number;
    setPage: any
}

interface IDownButton extends ILanding {
    currentPage: number;
    delay?: 1|2|3|4|5
}

const DownButton: React.FC<IDownButton> = ({page, setPage, currentPage, delay}: IDownButton):JSX.Element => {
    return <button onClick={() => setPage(currentPage+1)} className={`${anim} absolute bottom-6 left-1/2 ${page === currentPage ? `animate__fadeInDown animate__delay-${delay || 1}s` : "animate__fadeOutDown"}`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 26.6667V5.33337" stroke="#131313" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66667 17.3334L16 26.6667L25.3333 17.3334" stroke="#131313" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>;
};

const Landing: React.FC<ILanding> = ({page, setPage}: ILanding): JSX.Element => {

    const el = React.useRef<any>(null);
    const typed = React.useRef<any>(null);

    const workFlow: [number, string, string, string, string][] = [
        [7, workflowIllu1, "A NEW IDEA", "LET’S GET CREATIVE", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."],
        [8, workflowIllu2, "UI DESIGNING", "INTO FIGMA WE GO", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."],
        [9, workflowIllu3, "START CODING", "LET’S GET CREATIVE", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."],
        [10, workflowIllu4, "PUBLISH EM’", "last but not least", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."]
        
    ];

    const skills: [number, string, string, string, [ReactElement, string, string][]][] = [
        [12, "ESSENTIAL SKILLS", "THE FUNDAMENTAL", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.", [
            [<svg key="html" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.64844 0L14.5096 88.2L49.7871 98L85.1564 88.1878L93.0298 0H6.65456H6.64844ZM75.9176 28.8488H34.5422L35.5279 39.9289H74.938L71.9686 73.1386L49.7871 79.2881L27.6361 73.1386L26.1239 56.1479H36.979L37.7504 64.7841L49.7932 68.0304L49.8177 68.0242L61.8666 64.7719L63.1156 50.7456H25.6402L22.7259 18.032H76.8911L75.9237 28.8488H75.9176Z" fill="#FFC922"/>
            </svg>, "HTML", "advanced - 95%"],
            [<svg key='css' width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.125 0H91.875L84.0758 88.0489L48.9061 98L13.9323 88.0448L6.125 0ZM75.9092 18.0198L22.0908 18.0075L22.9606 28.714L64.3043 28.7222L63.2631 39.8125H36.1497L37.1298 50.3189H62.3729L60.8784 64.7045L48.9959 67.9875L36.9256 64.68L36.1579 56.0642H25.5004L26.6846 71.8054L49 78.7593L70.9397 72.5118L75.9092 18.0238V18.0198Z" fill="#FFC922"/>
            </svg>, "CSS", "advanced - 88%"],
            [<svg key="js" width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V91.875H91.875V0H0ZM49.9984 71.6564C49.9984 80.5989 44.7554 84.6659 37.1053 84.6659C30.2024 84.6659 26.1936 81.0889 24.157 76.7769L31.1885 72.52C32.5452 74.8965 33.7794 76.93 36.7378 76.93C39.5736 76.93 41.3621 75.8489 41.3621 71.5094V42.1706H49.9984V71.6564ZM70.413 84.6659C62.3954 84.6659 57.2136 80.8439 54.6871 75.8459L61.7155 71.7819C63.5653 74.7771 65.9724 77.0188 70.2292 77.0188C73.8032 77.0188 76.0572 75.2303 76.0572 72.7436C76.0572 69.7852 73.7113 68.7317 69.7668 67.032L67.6231 66.0826C61.3939 63.4336 57.2626 60.1016 57.2626 53.067C57.2626 46.5959 62.1749 41.6592 69.9046 41.6592C75.3926 41.6592 79.3371 43.5732 82.1791 48.5621L75.4722 52.8649C74.0023 50.2311 72.3914 49.1592 69.923 49.1592C67.3995 49.1592 65.7825 50.7579 65.7825 52.8649C65.7825 55.4741 67.375 56.5031 71.0806 58.1017L73.2336 59.0511C80.5744 62.1749 84.7087 65.3905 84.7087 72.618C84.7302 80.409 78.6266 84.6536 70.4222 84.6536L70.413 84.6659Z" fill="#FFC922"/>
            </svg>, "Javascript", "advanced - 80%"],
        ]],
        [13, "EVERYTHING IN JS", "THE FRONTEND", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.", [
            [<svg key="react" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M98 47.7301C98 41.2376 89.8701 35.084 77.4037 31.2702C80.2824 18.567 79.0043 8.45662 73.3693 5.21854C72.0039 4.45382 70.4586 4.06889 68.894 4.10379V8.55462C69.8128 8.55462 70.5518 8.73837 71.1725 9.07729C73.8879 10.6371 75.068 16.5661 74.1493 24.1979C73.9288 26.0762 73.5694 28.0525 73.1284 30.0697C68.9538 29.0637 64.7168 28.3366 60.4456 27.8933C57.9011 24.3828 55.125 21.0461 52.136 17.9055C58.6489 11.854 64.7617 8.53829 68.9185 8.53829V4.08337C63.4223 4.08337 56.2316 7.99929 48.9592 14.7899C41.6908 8.04421 34.496 4.16504 29.0039 4.16504V8.61587C33.1403 8.61587 39.2735 11.9152 45.7864 17.9259C42.9893 20.8659 40.1923 24.1979 37.534 27.8933C33.254 28.3317 29.0094 29.0658 24.8307 30.0901C24.3693 28.0934 24.0304 26.1579 23.7895 24.3C22.8503 16.6641 24.01 10.7351 26.7091 9.15896C27.3053 8.79962 28.0852 8.63629 29.0039 8.63629V4.18546C27.3298 4.18546 25.8067 4.54479 24.4918 5.30021C18.8773 8.53829 17.6196 18.6241 20.5147 31.2906C8.08908 35.129 0 41.258 0 47.7301C0 54.2226 8.12992 60.3762 20.5963 64.186C17.7176 76.8933 18.9957 87.0036 24.6307 90.2376C25.9292 90.9971 27.4482 91.3565 29.1223 91.3565C34.6185 91.3565 41.8093 87.4405 49.0817 80.65C56.35 87.3997 63.5408 91.2748 69.0369 91.2748C70.6135 91.3081 72.1706 90.922 73.549 90.156C79.1636 86.922 80.4213 76.8361 77.5262 64.1696C89.9109 60.3558 98 54.2022 98 47.7301ZM71.9892 34.4062C71.2133 37.0761 70.314 39.7086 69.2942 42.2952C67.6247 39.048 65.7917 35.8875 63.8021 32.826C66.64 33.2465 69.3758 33.7651 71.9933 34.4062H71.9892ZM62.8425 55.6804C61.2868 58.3754 59.6861 60.9356 58.0283 63.3121C52.0349 63.8404 46.0071 63.8472 40.0126 63.3325C36.5742 58.421 33.5672 53.2213 31.0252 47.7914C33.5633 42.3487 36.5575 37.1306 39.9758 32.193C45.9677 31.6637 51.9942 31.6555 57.9874 32.1685C59.6453 34.545 61.2663 37.0849 62.8221 39.7635C64.3411 42.3769 65.7213 45.031 66.9789 47.7097C65.7073 50.4209 64.3274 53.0799 62.8425 55.6804ZM69.2942 53.0834C70.3722 55.758 71.295 58.4366 72.0504 61.0336C69.4371 61.6747 66.6768 62.2137 63.8225 62.6302C65.8039 59.5408 67.6301 56.3546 69.2942 53.0834ZM49.0408 74.3984C47.1829 72.4792 45.325 70.3436 43.4875 68.0039C45.2842 68.0855 47.1217 68.1468 48.9796 68.1468C50.8579 68.1468 52.7158 68.106 54.5329 68.0039C52.7363 70.3436 50.8783 72.4792 49.0408 74.3984ZM34.1775 62.6302C31.4243 62.2313 28.691 61.7053 25.9863 61.054C26.7254 58.4775 27.6442 55.8192 28.6813 53.165C29.5021 54.7575 30.3637 56.3582 31.3028 57.9589C32.242 59.5555 33.1975 61.1153 34.1775 62.6302ZM48.9388 21.0619C50.7967 22.981 52.6546 25.1166 54.4921 27.4564C52.6954 27.3747 50.8579 27.3135 49 27.3135C47.1217 27.3135 45.2638 27.3543 43.4467 27.4564C45.2433 25.1166 47.1012 22.981 48.9388 21.0619ZM34.1571 32.83C32.1761 35.9127 30.35 39.0921 28.6854 42.3565C27.6369 39.7532 26.717 37.0999 25.9292 34.4062C28.5425 33.7855 31.3028 33.2465 34.1571 32.83ZM16.0802 57.8364C9.00783 54.8229 4.4345 50.8661 4.4345 47.7301C4.4345 44.5941 9.00783 40.617 16.0802 37.6239C17.7952 36.8848 19.6735 36.2233 21.6131 35.6067C22.7523 39.5185 24.2509 43.5937 26.1048 47.771C24.3545 51.6999 22.8743 55.7436 21.6743 59.874C19.7774 59.2866 17.9105 58.6066 16.0802 57.8364ZM26.8275 86.3789C24.1121 84.8272 22.932 78.89 23.8508 71.2624C24.0713 69.384 24.4306 67.4036 24.8716 65.3865C28.7834 66.346 33.0587 67.0851 37.5544 67.567C40.0991 71.0774 42.8751 74.414 45.864 77.5548C39.3511 83.6063 33.2383 86.922 29.0815 86.922C28.2973 86.9305 27.523 86.7454 26.8275 86.383V86.3789ZM74.2105 71.1603C75.1497 78.792 73.99 84.7251 71.2909 86.3013C70.6947 86.6606 69.9148 86.8199 68.9961 86.8199C64.8597 86.8199 58.7265 83.5246 52.2136 77.5099C55.0107 74.578 57.8078 71.242 60.466 67.5465C64.746 67.1081 68.9906 66.3741 73.1693 65.3497C73.6307 67.3669 73.9859 69.3024 74.2105 71.1603ZM81.8994 57.8364C80.1844 58.5755 78.3061 59.237 76.3665 59.8535C75.1455 55.7021 73.6448 51.638 71.8748 47.6893C73.7123 43.5365 75.1864 39.4818 76.3053 35.5863C78.2857 36.2029 80.1599 36.8848 81.9198 37.6239C88.9922 40.6374 93.5655 44.5941 93.5655 47.7301C93.5451 50.8661 88.9717 54.8433 81.8994 57.8364Z" fill="#FFC922"/>
                <path d="M48.9795 56.8605C51.401 56.8605 53.7233 55.8986 55.4356 54.1863C57.1478 52.474 58.1098 50.1517 58.1098 47.7302C58.1098 45.3087 57.1478 42.9863 55.4356 41.2741C53.7233 39.5618 51.401 38.5999 48.9795 38.5999C46.5579 38.5999 44.2356 39.5618 42.5233 41.2741C40.8111 42.9863 39.8491 45.3087 39.8491 47.7302C39.8491 50.1517 40.8111 52.474 42.5233 54.1863C44.2356 55.8986 46.5579 56.8605 48.9795 56.8605Z" fill="#FFC922"/>
            </svg>
            , "REACT js", "intermediate - 65%"],
            [<svg key="angular" width="90" height="98" viewBox="0 0 90 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.619 98L6.958 76.587L0 16.268L45.619 0L91.238 16.268L84.28 76.587L45.619 98ZM45.619 10.829L17.101 74.774H27.734L33.467 60.466H57.673L63.406 74.774H74.039L45.619 10.829ZM53.949 51.646H37.289L45.619 31.605L53.949 51.646Z" fill="#FFC922"/>
            </svg>, "angular js", "queuing - 0%"],
            [<svg key="vue" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M74.4371 12.3082H59.7188L49 29.2653L39.8125 12.3082H6.125L49 85.75L91.875 12.3082H74.4371ZM16.7856 18.4332H27.0847L49 56.3684L70.8969 18.4332H81.1961L49.0031 73.595L16.7856 18.4332Z" fill="#FFC922"/>
            </svg>, "Vue.js", "queuing - 0%"],
        ]],
        [14, "DATABASES & API", "THE BACKEND", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.", [
            [<svg key="django" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M61.9522 0H44.9002V24.2223C42.3563 23.6098 40.2452 23.4057 37.4848 23.4057C19.6652 23.4016 8.1665 33.9121 8.1665 50.1147C8.1665 66.9299 19.0078 75.6887 39.8328 75.7091C46.7867 75.7091 53.2179 75.0966 61.9522 73.5449V0ZM39.747 36.6561C41.854 36.6561 43.5037 36.8603 45.4963 37.4728V62.9854C43.0627 63.2917 41.5273 63.3937 39.6408 63.3937C30.9025 63.3937 26.1454 58.7306 26.1454 50.2863C26.1454 41.6092 31.1271 36.6561 39.747 36.6561Z" fill="#FFC922"/>
                <path d="M89.8333 62.2017V25.3782H72.8058V56.7178C72.8058 70.548 72.0382 75.8033 69.6004 80.3439C67.2729 84.7825 63.6306 87.6939 56.105 90.9851L71.9279 98.0003C79.4535 94.4804 83.0958 91.2913 85.8602 86.2403C88.8247 80.9809 89.8333 74.8804 89.8333 62.2017Z" fill="#FFC922"/>
                <path d="M88.1342 0H71.0903V16.3048H88.1382V0H88.1342Z" fill="#FFC922"/>
            </svg>, "django", "advanced - 80%"],
            [<svg key="express" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M98.0001 75.9011C96.5737 76.4405 94.9993 76.4393 93.5738 75.8977C92.1483 75.3561 90.9704 74.3115 90.2621 72.9611L76.1746 53.4795L74.133 50.7559L57.7874 72.9856C57.1217 74.2794 56.0077 75.2865 54.6534 75.8185C53.2992 76.3506 51.7976 76.3712 50.4292 75.8766L71.4911 47.6199L51.8992 22.095C53.3079 21.5873 54.8486 21.5806 56.2617 22.0759C57.6748 22.5712 58.8741 23.5384 59.6576 24.8145L74.2596 44.537L88.9432 24.8961C89.614 23.6254 90.7284 22.6454 92.0745 22.1425C93.4206 21.6396 94.9045 21.6488 96.2442 22.1685L88.6411 32.2584L78.3429 45.664C78.0569 45.9191 77.828 46.2318 77.6714 46.5815C77.5147 46.9312 77.4337 47.3102 77.4337 47.6934C77.4337 48.0766 77.5147 48.4555 77.6714 48.8053C77.828 49.155 78.0569 49.4677 78.3429 49.7228L97.9592 75.9051L98.0001 75.9011ZM0.00821565 47.2687L1.72322 38.7958C6.43538 22.0419 25.6434 15.0716 38.8571 25.4433C46.595 31.5234 48.5264 40.1311 48.1466 49.8331H4.55705C3.85063 67.1586 16.3538 77.6201 32.34 72.2751C34.9316 71.3422 37.2512 69.7811 39.0913 67.7316C40.9313 65.6821 42.2342 63.2081 42.8832 60.5314C43.7285 57.8119 45.1209 57.3464 47.6771 58.1304C47.2511 61.4476 46.0785 64.6251 44.2473 67.4237C42.4162 70.2224 39.9743 72.5694 37.1053 74.2881C32.3663 76.8804 26.9289 77.9078 21.5708 77.2235C16.2126 76.5393 11.208 74.1784 7.27247 70.4784C3.38117 66.0986 1.02936 60.5661 0.575799 54.7249C0.575799 53.7653 0.249132 52.867 0.0286323 52.0054C0.00875478 50.4279 -0.000773208 48.8504 4.89848e-05 47.2728L0.00821565 47.2687ZM4.61013 46.1009H44.0306C43.7856 33.5406 35.8599 24.6307 25.2881 24.5491C13.52 24.3857 5.10013 33.0996 4.58155 46.0437L4.61013 46.1009Z" fill="#FFC922"/>
            </svg>, "express js", "intermediate - 65%"],
            [<svg key="mongo" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M51.4117 1.0589C51.1056 0.724163 50.7332 0.456833 50.3181 0.273936C49.903 0.0910384 49.4544 -0.00341797 49.0009 -0.00341797C48.5473 -0.00341797 48.0987 0.0910384 47.6836 0.273936C47.2686 0.456833 46.8961 0.724163 46.5901 1.0589L29.4074 19.8096C23.6488 26.0899 20.3093 34.2121 19.985 42.7267C19.6607 51.2413 22.3727 59.5941 27.6369 66.2942L45.7342 89.3308V98.0005H52.2675V89.3308L70.3649 66.2942C75.6282 59.5954 78.3402 51.2444 78.0171 42.7313C77.694 34.2182 74.3568 26.0968 68.6009 19.8161L51.4117 1.06543V1.0589ZM52.2675 19.6005C52.2675 18.7341 51.9234 17.9032 51.3107 17.2906C50.6981 16.678 49.8672 16.3338 49.0009 16.3338C48.1345 16.3338 47.3036 16.678 46.691 17.2906C46.0784 17.9032 45.7342 18.7341 45.7342 19.6005V68.6005C45.7342 69.4669 46.0784 70.2978 46.691 70.9104C47.3036 71.523 48.1345 71.8672 49.0009 71.8672C49.8672 71.8672 50.6981 71.523 51.3107 70.9104C51.9234 70.2978 52.2675 69.4669 52.2675 68.6005V19.6005Z" fill="#FFC922"/>
            </svg>
            , "mongo DB", "queuing - 0%"],
        ]]        
    ];

    const projects: [number, string, string, string, string, string][] = [
        [16, "WA-001", "cruisegator", "web app", "#4189DD", Project1],
        [17, "WA-002", "kaler.info", "web app", "#FF6C7E", Project2],
        [18, "SW-001", "juicy inc.", "web app", "#E89C48", Project3],
        [19, "WA-003", "copychat", "web app", "#19192C", Project4],
        [20, "WA-004", "projtracker", "web app", "#005CE6", Project5],
    ];

    useEffect(() => {
        const options = {
            strings: [
                "A WEB DEV",
                "MELVIN CHIA"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 3000,
            cursorChar: "_",
        };
        
        typed.current = new Typed(el.current, options);
        
        return () => {
            typed.current.destroy();
        };
    }, [page]);

    return <>
        {/* Intro */}
        <div className={page > 1 ? "hidden" : "flex items-center justify-center flex-col h-screen"}>
            <div className="absolute top-24 left-32 flex gap-4">
                <svg className={`${anim} animate__fadeInLeft animate__fast ${page === 0 ? "animate__delay-2s" : ""} ${page !== 0 ? "animate__fadeOutLeftBig" : ""}`} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.53511 16.2543C13.1595 12.3251 18.6439 10.3333 25.8334 10.3333H28.4167V17.6158L26.3397 18.0317C22.8005 18.7395 20.3386 20.1319 19.0211 22.1753C18.3337 23.2762 17.9438 24.5366 17.8896 25.8333H25.8334C26.5185 25.8333 27.1756 26.1055 27.6601 26.59C28.1445 27.0745 28.4167 27.7315 28.4167 28.4167V46.5C28.4167 49.3494 26.0994 51.6667 23.25 51.6667H7.75003C7.06489 51.6667 6.4078 51.3945 5.92334 50.91C5.43887 50.4256 5.1667 49.7685 5.1667 49.0833V36.1667L5.17445 28.6259C5.1512 28.3392 4.66036 21.545 9.53511 16.2543ZM51.6667 51.6667H36.1667C35.4816 51.6667 34.8245 51.3945 34.34 50.91C33.8555 50.4256 33.5834 49.7685 33.5834 49.0833V36.1667L33.5911 28.6259C33.5679 28.3392 33.077 21.545 37.9518 16.2543C41.5762 12.3251 47.0606 10.3333 54.25 10.3333H56.8334V17.6158L54.7564 18.0317C51.2172 18.7395 48.7553 20.1319 47.4378 22.1753C46.7503 23.2762 46.3605 24.5366 46.3063 25.8333H54.25C54.9352 25.8333 55.5923 26.1055 56.0767 26.59C56.5612 27.0745 56.8334 27.7315 56.8334 28.4167V46.5C56.8334 49.3494 54.5161 51.6667 51.6667 51.6667Z" fill="#FFC922"/>
                </svg>
                <p className={`${anim} animate__fadeInDown animate__fast ${page === 0 ? "animate__delay-2s" : ""} ${page !== 0 ? "animate__fadeOutLeftBig" : ""} text-white font-Chakra tracking-widerr text-3xl z-10 text-wider`}>You can never use up creativity. The more<br/>you use, the more you have.</p>
            </div>
            <div className='mt-48'>
                <p className={`${anim} ${page === 0 ? "animate__delay-2s" : ""} animate__fast animate__fadeInLeft uppercase font-Chakra ml-2 text-white text-4xl font-bold tracking-widest ${page !== 0 ? " animate__fadeOutDownBig" : ""}`}>VISION OF</p>
                <h1 className={`${anim} animate__slow animate__fadeIn uppercase text-huge leading-none relative z-60 font-Chakra font-bold tracking-widest mix-blend-difference text-yellow-500 ${page !== 0 ? "animate__fadeOutDownBig" : ""}`}>creativity</h1>
            </div>
            <button onClick={() => setPage(1)} className={`${anim} animate__fadeInDown animate__fast ${page === 0 ? "animate__delay-3s" : ""} ${page !== 0 ? "animate__fadeOutDownBig" : ""} uppercase font-Chakra text-3xl relative z-10 font-semibold border-4 text-yellow-500 border-yellow-500 mix-blend-difference tracking-widest py-5 px-16 mt-24`}>START HERE</button>
        </div>
        
        {/* Intro.2 */}
        {[1, 2].includes(page) ? <div className="w-full h-screen tl-0 flex flex-col justify-center items-center absolute z-10">
            <div className={`${anim} ${page !== 0 ? "block animate__fadeInUp" : "hidden"}`}>
                <h2 className={`text-9xl tracking-widerr font-bold text-yellow-a800 text-inner font-Chakra ${page !== 1 ? "titleFadeOut" : ""}`}>GET READY</h2>
            </div>
            <p className={`font-Poppins text-center mt-4 text-xl tracking-widerr font-medium text-black-dark ${anim} ${page === 1 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>Use your mouse scroll to navigate between sections.<br/>Sit back, relax, and enjoy!</p>
            <DownButton {...{page, setPage}} currentPage={1}/>
        </div> : ""}

        {/* Intro.3 */}
        {[2, 3].includes(page) ? <div className="w-full h-screen tl-0 flex flex-col justify-center items-center absolute z-10">
            <h2 className={`${anim} font-Poppins text-center mt-4 text-2xl tracking-widerr font-medium text-black-dark ${page === 2 ? "animate__fadeIn animate__delay-1s" : "animate__fadeOutDown animate__faster"}`}>The portfolio of <span className="font-Chakra font-bold text-4xl">Melvin Chia</span></h2>
            <DownButton {...{page, setPage}} currentPage={2}/>
        </div> : ""}

        {/* 01A */}
        {[3, 4].includes(page) ? <div className="w-full h-screen tl-0 flex flex-col justify-center items-center absolute z-10">
            <h2 className={`text-huge tracking-widerr font-bold text-yellow-a800 text-inner font-Chakra ${page !== 3 ? "titleFadeOut" : "titleNoIn"}`}>01A</h2>
            <p className={`font-Poppins text-center text-4xl tracking-widerr font-medium text-black-dark ${anim} ${page === 3 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>Who Am I</p>
            <DownButton {...{page, setPage}} currentPage={3} delay={2}/>
        </div> : ""}

        <div className={`bg-yellow-500 w-full h-200 absolute ${page <= 1 ? `-translate-x-28 anim-1 transform rotate-27 ${page !== 0 ? "anim-2" : ""}` : "tl-0 wh-full"} transition-all mix-blend-difference`}></div>

        {Array(5).fill(0).map((_, i) => <div key={i} className={`layer layer-${i+1} wh-full left-0 -top-full absolute z-10 ${[4, 5, 7, 8, 9, 10, 12, 13, 14, 16, 17, 18, 19, 20, 22].includes(page) ? "active" : ""}`}></div>)}
        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full left-0 top-0 bg-black-dark absolute ${[4, 5, 6].includes(page) ? "" : "hidden"} ${page === 6 ? "section-leave" : ""}`}>
            <div className="flex px-32 pt-28 items-center gap-6">
                <p className={`${anim} ${page === 4 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold font-Chakra text-6xl tracking-widerr`}>01A</p>
                <h1 className={`${anim} ${page === 4 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase font-Chakra text-4xl font-bold text-white tracking-widerr`}>self introduction</h1>
            </div>
            {/* 01A.1 */}
            <div className={`px-32 pb-8 wh-full ${anim} ${page === 4 ? "" : "section-hide"}`}>
                <div className="mt-16 flex gap-32">
                    <img src={Illu1} className={`${anim} -mt-4 ${page === 4 ? "animate__fadeIn animate__delay-2s" : "animate__fadeOutDown"}`}/>
                    <div className="relative z-10">
                        <h1 className={`${anim} text-6xl text-white font-Chakra font-bold tracking-widerr uppercase ${page === 4 ? "animate__fadeInRight animate__delay-3s" : "animate__fadeOutRight"}`}>Hello,<br/>I’m <span className="text-yellow-500" ref={el}></span></h1>
                        <p className={`${anim} ${page === 4 ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOutDown"} text-white font-Poppins text-xl tracking-widerr font-light leading-7 mt-8 mb-12`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className={`${anim} ${page === 4 ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} font-Chakra text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-2xl tracking-widerr`}>download CV</button>
                    </div>
                </div>
            </div>
            {/* 01A.2 */}
            <div className={`px-32 wh-full ${anim} ${page === 5 ? "block" : "animate__delay-2 animate__fadeOut"}`}>
                <div className="flex gap-32" style={{height: "140%"}}>
                    <img src={Img1} className={`${anim} ${page === 5 ? "animate__delay-2s animate__fadeInUp" : "animate__fadeOutDown"}`}/>
                    <div className="relative z-10">
                        <h1 className={`${anim} text-6xl -mt-2 text-white font-Chakra font-bold tracking-widerr uppercase ${page === 5 ? "animate__fadeInRight animate__delay-2s" : "animate__fadeOutRight"}`}><span className="text-yellow-500">practice</span> skills<br/>make <span className="text-yellow-500">projects</span></h1>
                        <p className={`${anim} ${page === 5 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown"} text-white font-Poppins text-xl tracking-widerr font-light leading-7 mt-8 mb-12`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className={`${anim} relative z-10 ${page === 5 ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOut"} font-Chakra text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-2xl tracking-widerr`}>see my works</button>
                    </div>
                </div>
            </div>
            <p className="${anim} absolute z-0 bottom-0 right-8 text-enormous leading-none font-bold font-Chakra tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner" style={{zIndex: -1}}>01A</p>
        </div>

        {/* 01B */}
        <div className={`wh-full tl-0 flex flex-col justify-center items-center absolute z-10 ${[6, 7].includes(page) ? "" : "hidden"}`}>
            <h2 className={`text-huge tracking-widerr font-bold text-yellow-a800 text-inner font-Chakra ${page !== 6 ? "titleFadeOut" : "titleNoIn animate__delay-2s"}`}>01B</h2>
            <p className={`font-Poppins text-center text-4xl tracking-widerr font-medium text-black-dark ${anim} ${page === 6 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>HOW I DO MY PROJECTS</p>
            <DownButton {...{page, setPage}} currentPage={6} delay={2}/>
        </div>

        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full left-0 top-0 bg-black-dark absolute ${[7, 8, 9, 10, 11].includes(page) ? "" : "hidden"} ${page === 11 ? "section-leave" : ""}`}>
            <div className="flex px-32 pt-28 items-center gap-6">
                <p className={`${anim} ${page === 7 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold font-Chakra text-6xl tracking-widerr`}>01B</p>
                <h1 className={`${anim} ${page === 7 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase font-Chakra text-4xl font-bold text-white tracking-widerr`}>project workflow</h1>
            </div>
            {/* 01B.1.2.3.4 */}
            {workFlow.map(([i, illu, title, subtitle, desc], index) => <div key={i} className={`px-32 pb-8 wh-full ${anim} ${page === i ? "" : "section-hide"}`}>
                <div className={`${!index ? "mt-24" : ""} flex gap-32`}>
                    <img src={illu} className={`${anim} -mt-4 ${page === i ? "animate__fadeInUp animate__delay-1s" : "animate__fadeOutDown"}`}/>
                    <div className="relative z-10">
                        <div className={`${anim} workflow-title relative pl-6 ${page === i ? "animate__fadeInDown animate__delay-2s" : "animate__fadeOutUp"}`} style={{borderLeft: "10px solid rgba(254, 206, 60)"}}>
                            <h1 className={`${anim} text-6xl text-white font-Chakra font-bold tracking-widerr uppercase ${page === i ? "animate__fadeInDown animate__delay-3s" : "animate__fadeOutRight"}`}>{title}</h1>
                            <p className={`${anim} text-3xl mt-2 text-white font-Poppins tracking-widerr uppercase ${page === i ? "animate__fadeInRight animate__delay-3s" : "animate__fadeOutRight"}`}>{subtitle}</p>
                        </div>
                        <p className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOutDown"} text-white font-Poppins text-xl tracking-widerr font-light leading-7 mt-8 mb-12`}>{desc}</p>
                        <button className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} font-Chakra text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-2xl tracking-widerr`}>read more</button>
                    </div>
                </div>
            </div>)}
            <p className="${anim} absolute bottom-0 right-8 text-enormous leading-none font-bold font-Chakra tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner">01B</p>
        </div>

        {/* 02A */}
        <div className={`wh-full tl-0 flex flex-col justify-center items-center absolute z-10 ${[11, 12].includes(page) ? "" : "hidden"}`}>
            <h2 className={`text-huge tracking-widerr font-bold text-yellow-a800 text-inner font-Chakra ${page !== 11 ? "titleFadeOut" : "titleNoIn animate__delay-2s"}`}>02A</h2>
            <p className={`font-Poppins text-center text-4xl tracking-widerr font-medium text-black-dark ${anim} ${page === 11 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>WHAT I’M CAPABLE OF DOING</p>
            <DownButton {...{page, setPage}} currentPage={11} delay={2}/>
        </div>

        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full left-0 top-0 bg-black-dark absolute ${[12, 13, 14, 15].includes(page) ? "" : "hidden"} ${page === 15 ? "section-leave" : ""}`}>
            <div className="flex px-32 pt-28 items-center gap-6">
                <p className={`${anim} ${page === 7 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold font-Chakra text-6xl tracking-widerr`}>02A</p>
                <h1 className={`${anim} ${page === 7 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase font-Chakra text-4xl font-bold text-white tracking-widerr`}>my skills</h1>
            </div>
            {/* 02A.1.2.3 */}
            {skills.map(([i, title, subtitle, desc, item], index) => <div key={i} className={`px-32 pb-8 wh-full ${anim} ${page === i ? "" : "section-hide"}`}>
                <div className={`${!index ? "mt-24" : ""} flex gap-32`}>
                    <div className="relative z-10">
                        <p className={`${anim} text-xl mb-2 text-yellow-500 font-Poppins font-medium tracking-widerr uppercase ${page === i ? "animate__fadeInRight animate__delay-2s" : "animate__fadeOutUp"}`}>{subtitle}</p>
                        <h1 className={`${anim} text-6xl text-white font-Chakra font-bold tracking-widerr uppercase ${page === i ? "animate__fadeInDown animate__delay-2s" : "animate__fadeOutRight"}`}>{title}</h1>
                        <p className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOutDown"} text-white font-Poppins text-xl tracking-widerr font-light leading-7 mt-8 mb-12`}>{desc}</p>
                        <button className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} font-Chakra text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-2xl tracking-widerr`}>know more</button>
                    </div>
                    <div className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-1s" : "animate__fadeOut"} flex flex-col gap-16 mx-16`}>
                        {item.map(([icon, name, level]) => <div key={`item-${name}`} className="flex gap-8 items-center">
                            {icon}
                            <div >
                                <h2 className={`${anim} text-4xl text-white font-Chakra font-bold tracking-widerr uppercase whitespace-nowrap`}>{name}</h2>
                                <p className={`${anim} text-xl mb-2 text-yellow-500 font-Poppins font-medium tracking-widerr uppercase whitespace-nowrap`}>{level}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>)}
            <p className="${anim} absolute bottom-0 right-8 text-enormous leading-none font-bold font-Chakra tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner" style={{zIndex: -1}}>02A</p>
        </div>

        <div className={`wh-full tl-0 flex flex-col justify-center items-center absolute z-10 ${[15, 16].includes(page) ? "" : "hidden"}`}>
            <h2 className={`text-huge tracking-widerr font-bold text-yellow-a800 text-inner font-Chakra ${page !== 15 ? "titleFadeOut" : "titleNoIn animate__delay-2s"}`}>02B</h2>
            <p className={`font-Poppins text-center text-4xl tracking-widerr font-medium text-black-dark ${anim} ${page === 15 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>MY FAVOURITE PROJECTS</p>
            <DownButton {...{page, setPage}} currentPage={15} delay={2}/>
        </div>

        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full flex flex-col left-0 top-0 bg-black-dark absolute overflow-hidden pb-20 ${[16, 17, 18, 19, 20, 21].includes(page) ? "" : "hidden"} ${page === 21 ? "section-leave" : ""}`}>
            <div className="flex px-32 pt-28 items-center gap-6">
                <p className={`${anim} ${page === 7 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold font-Chakra text-6xl tracking-widerr`}>02B</p>
                <h1 className={`${anim} ${page === 7 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase font-Chakra text-4xl font-bold text-white tracking-widerr`}>MY FAVOURTIE PROJECTS</h1>
            </div>
            {/* 02B.1.2.3.4.5 */}
            {projects.map(([i, serial, name, type, color, image], index) => <div key={i} className={`px-32 wh-full ${anim} ${page === i ? "overflow-hidden" : "section-hide"}`}>
                <div style={{backgroundColor: color}} className={`mt-12 ${anim} flex gap-32 w-full h-full overflow-hidden justify-between p-12 pb-0 ${page === i ? "animate__delay-1s animate__fadeInDown" : "animate__fadeOutDown animate__fast"}`}>
                    <div className="w-full">
                        <svg className={`${anim} ${page == i ? "animate__fadeInDown animate__delay-2s" : ""}`} width="135" height="24" viewBox="0 0 135 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12V24H24V0H0V12ZM19.3395 11.043C19.9149 11.1785 20.4377 11.4799 20.8433 11.91C21.0623 12.144 21.39 12.5738 21.4177 12.6795C21.4252 12.711 20.3827 13.41 19.7498 13.8007C19.7265 13.8165 19.6327 13.719 19.5308 13.566C19.2225 13.1167 18.8977 12.9217 18.402 12.8865C17.6752 12.8392 17.2065 13.2188 17.2103 13.8555C17.2064 14.0113 17.2412 14.1656 17.3115 14.3048C17.472 14.637 17.7728 14.8358 18.702 15.2385C20.421 15.9765 21.1553 16.4648 21.612 17.1562C22.1235 17.9295 22.2367 19.164 21.8932 20.0858C21.5107 21.0818 20.565 21.7612 19.2367 21.984C18.8265 22.0583 17.85 22.0462 17.4083 21.9645C16.4438 21.7927 15.5295 21.3158 14.967 20.691C14.7442 20.4487 14.3145 19.812 14.3422 19.7692C14.3542 19.7535 14.4518 19.6912 14.5613 19.6283L15.4523 19.1122L16.1437 18.7103L16.2885 18.9247C16.4918 19.233 16.9327 19.6552 17.199 19.7955C17.9648 20.202 19.0155 20.1435 19.5353 19.6785C19.746 19.503 19.8638 19.233 19.848 18.96C19.848 18.6825 19.8127 18.558 19.668 18.3503C19.4805 18.0847 19.1017 17.8582 18.0195 17.3895C16.7812 16.854 16.2458 16.5263 15.762 15.999C15.4575 15.652 15.2322 15.2427 15.102 14.7997C15.012 14.46 14.9888 13.608 15.0592 13.2682C15.3135 12.069 16.2195 11.2372 17.52 10.9913C17.9423 10.9095 18.9263 10.9402 19.3403 11.0422L19.3395 11.043ZM13.707 12.0472L13.7145 13.0275H10.5893V21.9067H8.37825V13.0275H5.2575V12.0668C5.2575 11.5313 5.2695 11.0865 5.2845 11.0745C5.2965 11.0588 7.19475 11.0512 9.4995 11.055L13.695 11.067L13.707 12.0472Z" fill="white"/>
                            <path d="M61 11.689C61 10.099 59.009 8.592 55.956 7.658C56.661 4.547 56.348 2.071 54.968 1.278C54.6336 1.09072 54.2552 0.996452 53.872 1.005V2.095C54.097 2.095 54.278 2.14 54.43 2.223C55.095 2.605 55.384 4.057 55.159 5.926C55.105 6.386 55.017 6.87 54.909 7.364C53.8866 7.11764 52.849 6.93958 51.803 6.831C51.1799 5.97129 50.5 5.15414 49.768 4.385C51.363 2.903 52.86 2.091 53.878 2.091V1C52.532 1 50.771 1.959 48.99 3.622C47.21 1.97 45.448 1.02 44.103 1.02V2.11C45.116 2.11 46.618 2.918 48.213 4.39C47.528 5.11 46.843 5.926 46.192 6.831C45.1438 6.93837 44.1044 7.11814 43.081 7.369C42.968 6.88 42.885 6.406 42.826 5.951C42.596 4.081 42.88 2.629 43.541 2.243C43.687 2.155 43.878 2.115 44.103 2.115V1.025C43.693 1.025 43.32 1.113 42.998 1.298C41.623 2.091 41.315 4.561 42.024 7.663C38.981 8.603 37 10.104 37 11.689C37 13.279 38.991 14.786 42.044 15.719C41.339 18.831 41.652 21.307 43.032 22.099C43.35 22.285 43.722 22.373 44.132 22.373C45.478 22.373 47.239 21.414 49.02 19.751C50.8 21.404 52.561 22.353 53.907 22.353C54.2931 22.3612 54.6744 22.2666 55.012 22.079C56.387 21.287 56.695 18.817 55.986 15.715C59.019 14.781 61 13.274 61 11.689ZM54.63 8.426C54.44 9.07986 54.2197 9.72455 53.97 10.358C53.5612 9.56276 53.1123 8.78876 52.625 8.039C53.32 8.142 53.99 8.269 54.631 8.426H54.63ZM52.39 13.636C52.009 14.296 51.617 14.923 51.211 15.505C49.7433 15.6344 48.267 15.636 46.799 15.51C45.9569 14.3072 45.2205 13.0338 44.598 11.704C45.2196 10.3711 45.9529 9.09321 46.79 7.884C48.2574 7.75437 49.7333 7.75236 51.201 7.878C51.607 8.46 52.004 9.082 52.385 9.738C52.757 10.378 53.095 11.028 53.403 11.684C53.0916 12.348 52.7536 12.9991 52.39 13.636ZM53.97 13C54.234 13.655 54.46 14.311 54.645 14.947C54.005 15.104 53.329 15.236 52.63 15.338C53.1152 14.5814 53.5625 13.8011 53.97 13ZM49.01 18.22C48.555 17.75 48.1 17.227 47.65 16.654C48.09 16.674 48.54 16.689 48.995 16.689C49.455 16.689 49.91 16.679 50.355 16.654C49.915 17.227 49.46 17.75 49.01 18.22ZM45.37 15.338C44.6957 15.2403 44.0264 15.1115 43.364 14.952C43.545 14.321 43.77 13.67 44.024 13.02C44.225 13.41 44.436 13.802 44.666 14.194C44.896 14.585 45.13 14.967 45.37 15.338ZM48.985 5.158C49.44 5.628 49.895 6.151 50.345 6.724C49.905 6.704 49.455 6.689 49 6.689C48.54 6.689 48.085 6.699 47.64 6.724C48.08 6.151 48.535 5.628 48.985 5.158ZM45.365 8.04C44.8799 8.79493 44.4326 9.57356 44.025 10.373C43.7682 9.73546 43.5429 9.08567 43.35 8.426C43.99 8.274 44.666 8.142 45.365 8.04ZM40.938 14.164C39.206 13.426 38.086 12.457 38.086 11.689C38.086 10.921 39.206 9.947 40.938 9.214C41.358 9.033 41.818 8.871 42.293 8.72C42.572 9.678 42.939 10.676 43.393 11.699C42.9644 12.6612 42.6019 13.6515 42.308 14.663C41.8435 14.5192 41.3862 14.3526 40.938 14.164ZM43.57 21.154C42.905 20.774 42.616 19.32 42.841 17.452C42.895 16.992 42.983 16.507 43.091 16.013C44.049 16.248 45.096 16.429 46.197 16.547C46.8202 17.4067 47.5 18.2238 48.232 18.993C46.637 20.475 45.14 21.287 44.122 21.287C43.9299 21.2891 43.7403 21.2438 43.57 21.155V21.154ZM55.174 17.427C55.404 19.296 55.12 20.749 54.459 21.135C54.313 21.223 54.122 21.262 53.897 21.262C52.884 21.262 51.382 20.455 49.787 18.982C50.472 18.264 51.157 17.447 51.808 16.542C52.8562 16.4346 53.8956 16.2549 54.919 16.004C55.032 16.498 55.119 16.972 55.174 17.427ZM57.057 14.164C56.637 14.345 56.177 14.507 55.702 14.658C55.403 13.6413 55.0355 12.646 54.602 11.679C55.052 10.662 55.413 9.669 55.687 8.715C56.172 8.866 56.631 9.033 57.062 9.214C58.794 9.952 59.914 10.921 59.914 11.689C59.909 12.457 58.789 13.431 57.057 14.164Z" fill="white"/>
                            <path d="M48.9948 13.925C49.5878 13.925 50.1565 13.6894 50.5759 13.2701C50.9952 12.8508 51.2308 12.282 51.2308 11.689C51.2308 11.096 50.9952 10.5272 50.5759 10.1079C50.1565 9.68858 49.5878 9.453 48.9948 9.453C48.4018 9.453 47.833 9.68858 47.4137 10.1079C46.9944 10.5272 46.7588 11.096 46.7588 11.689C46.7588 12.282 46.9944 12.8508 47.4137 13.2701C47.833 13.6894 48.4018 13.925 48.9948 13.925Z" fill="white"/>
                            <path d="M98 18.588C97.6507 18.7201 97.2651 18.7198 96.916 18.5872C96.5669 18.4546 96.2785 18.1988 96.105 17.868L92.655 13.097L92.155 12.43L88.152 17.874C87.989 18.1909 87.7162 18.4375 87.3845 18.5678C87.0529 18.6981 86.6851 18.7032 86.35 18.582L91.508 11.662L86.71 5.41102C87.055 5.2867 87.4323 5.28505 87.7784 5.40636C88.1244 5.52766 88.4181 5.76451 88.61 6.07702L92.186 10.907L95.782 6.09702C95.9463 5.78581 96.2192 5.54581 96.5488 5.42265C96.8785 5.29949 97.2419 5.30176 97.57 5.42902L95.708 7.90002L93.186 11.183C93.116 11.2455 93.0599 11.3221 93.0216 11.4077C92.9832 11.4934 92.9633 11.5862 92.9633 11.68C92.9633 11.7739 92.9832 11.8667 93.0216 11.9523C93.0599 12.038 93.116 12.1145 93.186 12.177L97.99 18.589L98 18.588ZM74.002 11.576L74.422 9.50102C75.576 5.39802 80.28 3.69102 83.516 6.23102C85.411 7.72002 85.884 9.82802 85.791 12.204H75.116C74.943 16.447 78.005 19.009 81.92 17.7C82.5547 17.4716 83.1228 17.0893 83.5734 16.5873C84.024 16.0854 84.3431 15.4796 84.502 14.824C84.709 14.158 85.05 14.044 85.676 14.236C85.5717 15.0484 85.2845 15.8266 84.8361 16.5119C84.3876 17.1973 83.7896 17.7721 83.087 18.193C81.9264 18.8279 80.5948 19.0795 79.2826 18.9119C77.9704 18.7443 76.7448 18.1661 75.781 17.26C74.828 16.1874 74.2521 14.8325 74.141 13.402C74.141 13.167 74.061 12.947 74.007 12.736C74.0021 12.3497 73.9998 11.9634 74 11.577L74.002 11.576ZM75.129 11.29H84.783C84.723 8.21402 82.782 6.03202 80.193 6.01202C77.311 5.97202 75.249 8.10602 75.122 11.276L75.129 11.29Z" fill="white"/>
                            <path d="M127.838 16.745C128.273 16.7008 128.673 16.4829 128.957 16.1371C129.24 15.7914 129.383 15.3447 129.357 14.891V14.896C129.336 14.4315 129.145 13.9931 128.823 13.6703C128.502 13.3476 128.074 13.1651 127.628 13.16H127.566C127.338 13.1685 127.115 13.2236 126.908 13.3221C126.701 13.4207 126.515 13.5608 126.36 13.7343C126.205 13.9079 126.084 14.1116 126.005 14.3337C125.925 14.5559 125.889 14.7921 125.897 15.029V15.026C125.922 15.499 126.108 15.923 126.398 16.243L126.397 16.242C125.284 18.4262 123.535 20.1873 121.401 21.273L121.335 21.303C120.121 21.9952 118.758 22.3558 117.373 22.351C117.006 22.351 116.643 22.326 116.289 22.278L116.331 22.283C115.707 22.222 115.104 22.0223 114.561 21.6972C114.018 21.3722 113.549 20.9294 113.185 20.399L113.176 20.385C112.638 19.5924 112.35 18.6449 112.353 17.674C112.353 16.837 112.562 16.051 112.929 15.369L112.918 15.393C113.425 14.3838 114.145 13.5078 115.024 12.831L115.044 12.817C114.865 12.3098 114.726 11.788 114.63 11.257L114.619 11.191C110.123 14.54 110.579 19.121 111.945 21.286C112.578 22.1336 113.396 22.811 114.332 23.2616C115.268 23.7122 116.293 23.9228 117.323 23.876H117.31L117.424 23.877C118.032 23.8772 118.637 23.8048 119.229 23.661L119.175 23.672C121.025 23.3248 122.771 22.5264 124.268 21.3421C125.765 20.1578 126.972 18.6212 127.79 16.858L127.821 16.784L127.838 16.745Z" fill="white"/>
                            <path d="M133.253 12.799C130.946 10.059 127.579 8.33898 123.826 8.33898C123.711 8.33914 123.597 8.34081 123.483 8.34398H123.5H122.984C122.849 8.05907 122.64 7.81912 122.381 7.65125C122.123 7.48337 121.824 7.39426 121.519 7.39398L121.462 7.39498H121.465H121.428C120.5 7.40898 119.753 8.19498 119.753 9.16298L119.755 9.24798V9.24398C119.776 9.70872 119.966 10.1477 120.288 10.4708C120.609 10.794 121.037 10.9769 121.483 10.982H121.559C121.885 10.9689 122.201 10.8589 122.469 10.6651C122.738 10.4713 122.947 10.2017 123.073 9.88798L123.077 9.87598H123.639C126.09 9.87898 128.366 10.663 130.247 12.004L130.207 11.977C131.669 12.945 132.807 14.3618 133.463 16.032L133.483 16.09C133.733 16.632 133.878 17.268 133.878 17.939C133.878 18.649 133.716 19.319 133.427 19.911L133.437 19.886C132.691 21.472 131.153 22.544 129.376 22.544C129.31 22.544 129.246 22.543 129.182 22.54H129.191C128.138 22.519 127.099 22.2786 126.135 21.833L126.185 21.854C125.822 22.17 125.215 22.69 124.774 23.007C126.016 23.6329 127.372 23.972 128.751 24.001H128.763C129.957 24.0363 131.138 23.7421 132.187 23.1483C133.236 22.5545 134.116 21.6823 134.737 20.62L134.754 20.589C135.1 19.7198 135.276 18.7877 135.273 17.847C135.273 15.867 134.509 14.073 133.271 12.768L133.272 12.769L133.258 12.801L133.253 12.799Z" fill="white"/>
                            <path d="M117.57 17.316C117.591 17.7814 117.781 18.2211 118.103 18.5444C118.425 18.8677 118.854 19.0501 119.301 19.054H119.363C119.809 19.0299 120.23 18.8266 120.536 18.4867C120.841 18.1468 121.009 17.6967 121.003 17.2309C120.997 16.7651 120.818 16.3197 120.504 15.9882C120.19 15.6568 119.765 15.4649 119.318 15.453H119.253L119.222 15.452C119.153 15.4517 119.086 15.4628 119.021 15.485L119.026 15.484C117.95 13.6445 117.384 11.5308 117.391 9.377C117.391 9.013 117.406 8.653 117.438 8.298L117.435 8.344C117.515 6.51383 118.157 4.75869 119.266 3.337L119.254 3.353C119.739 2.80548 120.323 2.36404 120.973 2.05446C121.623 1.74489 122.326 1.57339 123.041 1.55H123.049C126.325 1.486 127.691 5.738 127.796 7.428L129.315 7.901C128.962 2.72 125.869 0 122.911 0C121.475 0.0762879 120.096 0.60895 118.959 1.5263C117.823 2.44365 116.983 3.70165 116.554 5.131L116.54 5.183C116.096 6.54479 115.872 7.97379 115.876 9.412C115.876 12 116.587 14.415 117.816 16.456L117.785 16.401C117.614 16.6731 117.539 16.9995 117.575 17.323L117.574 17.317L117.57 17.316Z" fill="white"/>
                        </svg>
                        <div className={`${anim} w-full h-2 bg-white my-2 mt-4 ${page == i ? "animate__fadeInLeft animate__delay-2s" : ""}`}></div>
                        <h1 className={`${anim} text-5xl text-white font-Montserrat font-extrabold tracking-wide uppercase ${page == i ? "animate__fadeInUp animate__delay-2s" : ""}`}>{name}</h1>
                        <p className={`${anim} text-2xl text-white font-Poppins font-medium tracking-wider uppercase -mt-1 ${page == i ? "animate__fadeInLeft animate__delay-2s" : ""}`}>{type}</p>
                        <h1 className={`${anim} text-7xl text-white font-Chakra font-bold tracking-wider uppercase mt-8 ${page == i ? "animate__fadeInDown animate__delay-2s" : ""}`}>{serial}</h1>
                        <div className={`${anim} w-full h-2 bg-white my-2 ${page == i ? "animate__fadeInRight animate__delay-2s" : ""}`}></div>
                        <button style={{color: color}} className={`${anim} font-Poppins font-semibold border-white border-4 bg-white py-4 mt-5 w-full uppercase text-xl tracking-widerr ${page == i ? "animate__fadeInLeft animate__delay-3s" : ""}`}>VISIT WEBSITE</button>
                        <button style={{backgroundColor: color}} className={`${anim} font-Poppins text-white font-semibold border-white border-4 mt-2 py-4 w-full uppercase text-xl tracking-widerr ${page == i ? "animate__fadeInRight animate__delay-3s" : ""}`}>CASE STUDY</button>
                    </div>
                    <img src={image} className={`${anim} object-cover w-7/12 object-top ${page == i ? "animate__fadeInUp animate__delay-2s" : ""}`} />
                </div>
            </div>)}
            <p className="${anim} absolute bottom-0 right-8 text-enormous leading-none font-bold font-Chakra tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner" style={{zIndex: -1}}>02B</p>
        </div>

        <div className={`wh-full tl-0 flex flex-col justify-center items-center absolute z-10 ${[21, 22].includes(page) ? "" : "hidden"}`}>
            <h2 className={`text-huge tracking-widerr font-bold text-yellow-a800 text-inner font-Chakra ${page !== 21 ? "titleFadeOut" : "titleNoIn animate__delay-2s"}`}>03</h2>
            <p className={`font-Poppins text-center text-4xl tracking-widerr font-medium text-black-dark ${anim} ${page === 21 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>WHAT CAN I DO FOR YOU</p>
            <DownButton {...{page, setPage}} currentPage={21} delay={2}/>
        </div>
    </>;
};

export default Landing;