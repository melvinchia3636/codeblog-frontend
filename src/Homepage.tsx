import React, { ReactElement, useRef, useState, useEffect } from "react";
import Illu1 from "./assets/illu1.svg";
import Img1 from "./assets/img1.png";

import workflowIllu1 from "./assets/workflow-illu-1.svg";
import workflowIllu2 from "./assets/workflow-illu-2.svg";
import workflowIllu3 from "./assets/workflow-illu-3.svg";
import workflowIllu4 from "./assets/workflow-illu-4.svg";

import "./style/Home.scss";
import "tailwindcss/tailwind.css";
import "animate.css/animate.min.css";
import Typed from "typed.js";
import axios from "axios";

const anim = "animate__animated";
  
interface ILanding {
    page: number;
    setPage: any
}

interface IDownButton extends ILanding {
    currentPage: number;
    delay?: 1|2|3|4|5,
    light?: boolean
}

const DownButton: React.FC<IDownButton> = ({page, setPage, currentPage, delay, light}: IDownButton):JSX.Element => {
    return <button onClick={() => setPage(currentPage+1)} className={`${anim} absolute bottom-${light ? "24" : "24"} z-50 left-1/2 -ml-4 ${page === currentPage ? `animate__fadeInDown animate__delay-${delay || 1}s` : "animate__fadeOutDown"} -ml-1/2`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 26.6667V5.33337" stroke={light ? "white" : "#131313"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66667 17.3334L16 26.6667L25.3333 17.3334" stroke={light ? "white" : "#131313"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>;
};

const Landing: React.FC<ILanding> = ({page, setPage}: ILanding): JSX.Element => {

    const el = React.useRef<any>(null);
    const typed = React.useRef<any>(null);

    const [projects, setProjects] = useState<[number, string, string, string, string, string][]>([]);

    const workFlow: [number, string, string, string, string][] = [
        [7, workflowIllu1, "A NEW IDEA", "LET’S GET CREATIVE", "Before starting a project, for sure you have to know what you want to do, right? Take your time, and start thinking about it."],
        [8, workflowIllu2, "UI DESIGNING", "INTO FIGMA WE GO", "After you've got the project ideas in your mind, you have to decide how your page will look like. Get creative, but don't bite off more than you can chew."],
        [9, workflowIllu3, "START CODING", "LET’S GET CREATIVE", "Now it's time to bring everything into life. Most of the time when I start a new project, I'll try learning some new technologies, and use them in my projects."],
        [10, workflowIllu4, "PUBLISH EM’", "last but not least", "Everything is done and dusted, now you have to make it public, so everyone can embrace your amazing work. Let's build our production code, and put it onto your server."]
        
    ];

    const skills: [number, string, string, string, [ReactElement, string, string][]][] = [
        [12, "ESSENTIAL SKILLS", "THE FUNDAMENTAL", "I don't think you can even be called a web developer without them. Despite having these skills, you are still far away from becoming a qualified web dev in modern era.", [
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
        [13, "EVERYTHING IN JAVASCRIPT", "THE FRONTEND", "With all of these, you can bring your UI and UX into another level. You'd better learn some of them, since these are skills on demand in the job markets nowadays.", [
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
        [14, "DATABASES & API", "THE BACKEND & THE MIDDLE", "With the frontend being done, you'll need a place do store data, and a way to fetch those data, so that there're no more hardcoded data in your website.", [
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

    useEffect(() => {axios({
        url: "http://localhost:9595/projects/fetch"
    }).then(res => setProjects(res.data)).catch(err => console.log(err));}, []);

    const credits: [number, string, string[], string, string, ReactElement, ReactElement][] = [
        [28, "VS Code", ["Code editing.", "Redefined."], "An integrated development environment made by Microsoft for Windows, Linux and macOS.", "https://code.visualstudio.com/", <svg key="vs-code-icon" width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.5148 4.42367L32.8658 0.259674C32.3774 0.0241716 31.8278 -0.0535444 31.2932 0.0372994C30.7586 0.128143 30.2655 0.383047 29.8823 0.766674L1.5698 26.5787C1.22629 26.8904 1.02066 27.3257 0.998155 27.7891C0.975651 28.2524 1.13811 28.7056 1.4498 29.0492C1.4873 29.0897 1.5248 29.1287 1.5653 29.1647L3.8768 31.2647C4.17885 31.5395 4.56764 31.7 4.97565 31.7181C5.38366 31.7361 5.78512 31.6107 6.1103 31.3636L40.2128 5.50367C40.4704 5.30821 40.7774 5.18853 41.0994 5.15809C41.4213 5.12766 41.7453 5.1877 42.0349 5.33143C42.3246 5.47516 42.5684 5.69689 42.7388 5.97166C42.9093 6.24642 42.9997 6.56332 42.9998 6.88667V6.78617C42.9998 6.29252 42.8604 5.80891 42.5977 5.39097C42.335 4.97303 41.9596 4.63774 41.5148 4.42367Z" fill="#0065A9"/>
            <path d="M41.5148 37.3338L32.8658 41.4993C32.3772 41.7341 31.8278 41.8114 31.2934 41.7206C30.7589 41.6298 30.2659 41.3753 29.8823 40.9923L1.5698 15.1788C1.22629 14.8671 1.02066 14.4317 0.998155 13.9684C0.975651 13.5051 1.13811 13.0518 1.4498 12.7083C1.4873 12.6678 1.5248 12.6288 1.5653 12.5928L3.8768 10.4928C4.17915 10.2167 4.56883 10.0556 4.97785 10.0375C5.38687 10.0194 5.78926 10.1455 6.1148 10.3938L40.2128 36.2538C40.4704 36.4492 40.7774 36.5689 41.0994 36.5993C41.4213 36.6298 41.7453 36.5697 42.0349 36.426C42.3246 36.2823 42.5684 36.0605 42.7388 35.7858C42.9093 35.511 42.9997 35.1941 42.9998 34.8708V34.9788C42.9982 35.4711 42.8581 35.953 42.5955 36.3695C42.3329 36.7859 41.9584 37.1201 41.5148 37.3338Z" fill="#007ACC"/>
            <path d="M32.8655 41.4992C32.3769 41.734 31.8275 41.8114 31.293 41.7206C30.7586 41.6297 30.2656 41.3752 29.882 40.9922C30.0974 41.2048 30.3707 41.3491 30.6678 41.407C30.9649 41.4649 31.2724 41.4338 31.5519 41.3177C31.8314 41.2016 32.0704 41.0056 32.239 40.7542C32.4075 40.5029 32.4981 40.2073 32.4995 39.9047V1.85269C32.4997 1.54863 32.4097 1.25133 32.2409 0.998453C32.072 0.74558 31.8319 0.548512 31.551 0.432214C31.27 0.315915 30.9609 0.285619 30.6627 0.345163C30.3645 0.404708 30.0907 0.551413 29.876 0.766695C30.2593 0.383206 30.7522 0.128286 31.2867 0.03719C31.8212 -0.0539063 32.3708 0.0233221 32.8595 0.258195L41.507 4.41619C41.9532 4.62919 42.3301 4.96402 42.5942 5.38205C42.8583 5.80007 42.9988 6.28424 42.9995 6.77869V34.9787C42.9996 35.4728 42.8601 35.9568 42.5971 36.375C42.3341 36.7933 41.9583 37.1287 41.513 37.3427L32.8655 41.4992Z" fill="#1F9CF0"/>
        </svg>,
        <svg key="vs-code" width="602" height="481" viewBox="0 0 602 481" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i)">
                <path d="M656.924 72.143L516.699 4.23488C508.78 0.394209 499.869 -0.873215 491.202 0.608302C482.535 2.08982 474.541 6.24689 468.328 12.5032L9.3014 433.455C3.73206 438.539 0.398283 445.639 0.0334252 453.195C-0.331433 460.751 2.30251 468.143 7.35586 473.745C7.96384 474.406 8.57182 475.042 9.22844 475.629L46.7045 509.876C51.6015 514.36 57.9049 516.976 64.5199 517.271C71.1349 517.566 77.6437 515.521 82.9159 511.491L635.815 89.7561C639.991 86.5684 644.969 84.6165 650.188 84.1203C655.407 83.624 660.66 84.603 665.356 86.9471C670.052 89.2911 674.005 92.9072 676.769 97.3882C679.532 101.869 680.998 107.037 681 112.311V110.672C680.999 102.621 678.74 94.734 674.48 87.918C670.221 81.1021 664.136 75.6341 656.924 72.143Z" fill="#1A1A1A"/>
                <path d="M656.924 608.854L516.699 676.786C508.778 680.616 499.87 681.878 491.205 680.397C482.54 678.916 474.547 674.765 468.328 668.518L9.3014 247.541C3.73206 242.458 0.398283 235.357 0.0334252 227.802C-0.331433 220.246 2.30251 212.854 7.35586 207.251C7.96384 206.591 8.57182 205.955 9.22844 205.368L46.7045 171.12C51.6064 166.618 57.9243 163.99 64.5556 163.695C71.187 163.4 77.7108 165.456 82.9888 169.506L635.815 591.241C639.991 594.428 644.969 596.38 650.188 596.876C655.407 597.373 660.66 596.394 665.356 594.05C670.052 591.706 674.005 588.09 676.769 583.609C679.532 579.128 680.998 573.96 681 568.686V570.448C680.974 578.477 678.702 586.336 674.444 593.128C670.187 599.92 664.115 605.369 656.924 608.854Z" fill="#1A1A1A"/>
                <path d="M516.692 676.785C508.771 680.615 499.863 681.877 491.198 680.396C482.534 678.914 474.54 674.764 468.321 668.517C471.813 671.984 476.245 674.337 481.061 675.282C485.878 676.226 490.864 675.72 495.395 673.826C499.926 671.932 503.801 668.735 506.534 664.636C509.267 660.537 510.736 655.717 510.758 650.782V30.2145C510.762 25.2556 509.303 20.4071 506.565 16.2832C503.828 12.1592 499.935 8.94535 495.38 7.04871C490.825 5.15207 485.813 4.65799 480.979 5.62906C476.144 6.60013 471.705 8.99266 468.224 12.5036C474.438 6.24948 482.43 2.09214 491.096 0.606509C499.761 -0.879126 508.672 0.380346 516.595 4.21074L656.796 72.0211C664.03 75.4947 670.141 80.9553 674.422 87.7725C678.704 94.5898 680.982 102.486 680.993 110.55V570.446C680.995 578.504 678.734 586.398 674.47 593.219C670.206 600.04 664.113 605.51 656.893 609L516.692 676.785Z" fill="#1A1A1A"/>
            </g>
            <defs>
                <filter id="filter0_i" x="0" y="0" width="681" height="685" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                </filter>
            </defs>
        </svg>        
        ],
        [29, "Figma", ["Creative tools", "meet the internet."], "The first design tool that combined the accessibility of the web with the functionality of a native app. It is free for anyone to get started.", "https://figma.com/", <svg key="figma-icon" width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="#19BCFE"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.00001 48C10.1217 48 12.1566 47.1572 13.6569 45.6569C15.1572 44.1566 16 42.1218 16 40V32H8.00001C5.87827 32 3.84344 32.8429 2.34315 34.3432C0.842856 35.8434 0 37.8783 0 40C0 42.1218 0.842856 44.1566 2.34315 45.6569C3.84344 47.1572 5.87827 48 8.00001 48Z" fill="#09CF83"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.00001 32H16V16H8.00001C5.87827 16 3.84344 16.8429 2.34315 18.3431C0.842856 19.8434 0 21.8783 0 24C0 26.1217 0.842856 28.1566 2.34315 29.6569C3.84344 31.1572 5.87827 32 8.00001 32Z" fill="#A259FF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.00001 16H16V0H8.00001C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842856 3.84344 0 5.87827 0 8C0 10.1217 0.842856 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8.00001 16Z" fill="#F24E1E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M24 16H16V0H24C26.1217 0 28.1566 0.842855 29.6569 2.34315C31.1571 3.84344 32 5.87827 32 8C32 10.1217 31.1571 12.1566 29.6569 13.6569C28.1566 15.1571 26.1217 16 24 16Z" fill="#FF7262"/>
        </svg>,
        <svg key="figma" width="561" height="509" viewBox="0 0 561 509" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)" filter="url(#filter0_i)">
                <path d="M422.667 422.667C481.025 422.667 528.333 375.358 528.333 317C528.333 258.642 481.025 211.333 422.667 211.333C364.309 211.333 317 258.642 317 317C317 375.358 364.309 422.667 422.667 422.667Z" fill="#1A1A1A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M211.334 634C239.358 634 266.235 622.867 286.051 603.051C305.868 583.235 317 556.358 317 528.333V422.667H211.334C183.309 422.667 156.432 433.799 136.616 453.616C116.8 473.432 105.667 500.309 105.667 528.333C105.667 556.358 116.8 583.235 136.616 603.051C156.432 622.867 183.309 634 211.334 634Z" fill="#1A1A1A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M211.334 422.667H317V211.333H211.334C183.309 211.333 156.432 222.466 136.616 242.282C116.8 262.099 105.667 288.975 105.667 317C105.667 345.024 116.8 371.901 136.616 391.718C156.432 411.534 183.309 422.667 211.334 422.667Z" fill="#1A1A1A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M211.334 211.333H317V0H211.334C183.309 0 156.432 11.1327 136.616 30.9491C116.8 50.7654 105.667 77.6421 105.667 105.667C105.667 133.691 116.8 160.568 136.616 180.384C156.432 200.201 183.309 211.333 211.334 211.333Z" fill="#1A1A1A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M422.667 211.333H317V0H422.667C450.691 0 477.568 11.1327 497.384 30.9491C517.201 50.7654 528.333 77.6421 528.333 105.667C528.333 133.691 517.201 160.568 497.384 180.384C477.568 200.201 450.691 211.333 422.667 211.333Z" fill="#1A1A1A"/>
            </g>
            <defs>
                <filter id="filter0_i" x="0" y="0" width="634" height="638" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                </filter>
                <clipPath id="clip0">
                    <rect width="634" height="634" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        ],
        [30, "Storyset", ["Awesome free illustrations", "for your next project"], "Customize, animate and download our illustrations to make incredible landing pages, app or presentations!", "https://storyset.com/", <svg key="storyset-icon" width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)" filter="url(#filter0_d)">
                <path d="M35.5371 19.1589C33.1209 17.9781 30.486 17.3084 27.7979 17.1918C25.3199 17.1918 24.0772 18.0603 24.0772 19.4187C24.0772 20.7771 25.8259 21.1631 28.0286 21.4897L30.1866 21.8163C35.4403 22.6106 38.3723 24.9563 38.3723 29.0538C38.3723 34.0496 34.2646 37.2712 27.2101 37.2712C23.8986 37.2712 19.5677 36.6476 16.4199 34.4207L18.9947 29.477C21.4358 31.1011 24.3215 31.931 27.2547 31.8523C30.2834 31.8523 31.7196 31.0061 31.7196 29.5809C31.7196 28.408 30.4992 27.7548 27.6938 27.354L25.7143 27.0793C20.1035 26.337 17.3278 23.8577 17.3278 19.7379C17.3278 14.7718 21.1825 11.8249 27.5672 11.8249C31.0845 11.7589 34.5651 12.546 37.71 14.1186L35.5371 19.1589Z" fill="#F8FAFB"/>
                <path d="M9.53657 16.0338H4.17871C4.18462 11.8029 5.87213 7.74693 8.87128 4.75519C11.8704 1.76345 15.9364 0.0801104 20.1778 0.0742188V5.41882C17.3592 5.43054 14.6594 6.55268 12.6664 8.54083C10.6732 10.529 9.54832 13.2222 9.53657 16.0338Z" fill="#1273EB"/>
                <path d="M46.6413 32.1421H51.9991C51.9932 36.373 50.3055 40.429 47.3066 43.4207C44.3069 46.4124 40.2409 48.0958 36 48.1017V42.7571C37.4005 42.77 38.7906 42.5042 40.0869 41.9753C41.3839 41.4464 42.5619 40.665 43.5531 39.6767C44.5435 38.6885 45.3271 37.5131 45.857 36.2194C46.3875 34.9258 46.654 33.5396 46.6413 32.1421Z" fill="#1273EB"/>
            </g>
            <defs>
                <filter id="filter0_d" x="0" y="0" width="56" height="56.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <clipPath id="clip0">
                    <rect width="48" height="48.25" fill="white" transform="translate(4)"/>
                </clipPath>
            </defs>
        </svg>, 
        <svg key="storyset" width="634" height="549" viewBox="0 0 634 549" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i)">
                <path d="M416.552 253.057C384.639 237.461 349.836 228.615 314.331 227.075C281.601 227.075 265.187 238.546 265.187 256.489C265.187 274.431 288.285 279.53 317.378 283.844L345.882 288.158C415.275 298.649 454.001 329.631 454.001 383.753C454.001 449.738 399.745 492.29 306.567 492.29C262.828 492.29 205.623 484.055 164.047 454.641L198.055 389.342C230.299 410.794 268.414 421.756 307.156 420.717C347.16 420.717 366.13 409.539 366.13 390.714C366.13 375.223 350.01 366.595 312.955 361.3L286.81 357.673C212.7 347.868 176.038 315.12 176.038 260.705C176.038 195.112 226.952 156.187 311.284 156.187C357.741 155.315 403.715 165.712 445.253 186.483L416.552 253.057Z" fill="#1A1A1A"/>
                <path d="M73.1288 211.78H2.36035C2.43836 155.897 24.7276 102.324 64.3413 62.8081C103.955 23.2922 157.66 1.05804 213.682 0.980225V71.5735C176.453 71.7284 140.793 86.55 114.468 112.81C88.1421 139.071 73.284 174.643 73.1288 211.78Z" fill="#1A1A1A"/>
                <path d="M563.221 424.543H633.989C633.91 480.427 611.618 533.999 572.008 573.515C532.387 613.031 478.682 635.266 422.667 635.343V564.75C441.165 564.92 459.526 561.409 476.648 554.423C493.779 547.438 509.338 537.117 522.431 524.063C535.513 511.01 545.863 495.486 552.861 478.398C559.869 461.312 563.388 443.002 563.221 424.543Z" fill="#1A1A1A"/>
            </g>
            <defs>
                <filter id="filter0_i" x="0" y="0" width="634" height="641.302" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                </filter>
            </defs>
        </svg>                 
        ],
        [31, "Tailwind CSS", ["Build modern websites", "without leaving your HTML."], "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.", "https://tailwindcss.com/", <svg key="tailwind-icon" width="56" height="49" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_303:46)">
                <g clipPath="url(#clip0_303:46)">
                    <path d="M28 10C21.6001 10 17.5999 13.2001 16 19.6C18.4 16.3999 21.1999 15.1999 24.4 16C26.2257 16.4564 27.5307 17.7811 28.9752 19.2471C31.3283 21.6357 34.0516 24.4 40 24.4C46.3999 24.4 50.4001 21.1999 52 14.8C49.6 18.0001 46.8001 19.2001 43.6 18.4C41.7743 17.9436 40.4693 16.6189 39.0248 15.1529C36.6717 12.7643 33.9484 10 28 10ZM16 24.4C9.60006 24.4 5.59994 27.6001 4 34C6.4 30.7999 9.19994 29.5999 12.4 30.4C14.2257 30.8564 15.5307 32.1811 16.9752 33.6471C19.3283 36.0357 22.0516 38.8 28 38.8C34.3999 38.8 38.4001 35.5999 40 29.2C37.6 32.4001 34.8001 33.6001 31.6 32.8C29.7743 32.3436 28.4693 31.0189 27.0248 29.5529C24.6717 27.1643 21.9484 24.4 16 24.4Z" fill="url(#paint0_linear_303:46)"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_d_303:46" x="0" y="0" width="56" height="56.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303:46"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303:46" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_303:46" x1="2.66656" y1="19.216" x2="44.1224" y2="43.1187" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2298BD"/>
                    <stop offset="1" stopColor="#0ED7B5"/>
                </linearGradient>
                <clipPath id="clip0_303:46">
                    <rect width="48" height="28.875" fill="white" transform="translate(4 10)"/>
                </clipPath>
            </defs>
        </svg>, 
        <svg key="tailwind" width="634" height="549" viewBox="0 0 634 549" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M317 158.5C246.467 158.5 202.616 193.634 184.916 264.167C211.333 229.032 242.241 215.824 277.375 224.542C297.451 229.561 311.981 244.09 327.831 260.204C353.719 286.621 383.041 317 449.083 317C519.616 317 563.467 281.866 581.166 211.333C554.75 246.467 523.842 259.676 488.708 250.958C468.631 245.939 454.366 231.41 438.252 215.296C412.364 188.879 383.041 158.5 317 158.5ZM184.916 317C114.384 317 70.5322 352.134 52.833 422.667C79.2497 387.532 110.157 374.324 145.291 383.042C165.368 388.061 179.633 402.59 195.747 418.704C221.636 445.121 250.958 475.5 317 475.5C387.532 475.5 431.384 440.366 449.083 369.833C422.666 404.967 391.759 418.176 356.625 409.458C336.548 404.439 322.283 389.91 306.169 373.796C280.281 347.379 250.958 317 184.916 317Z" fill="#1A1A1A"/>
        </svg>
        ],
    ];

    useEffect(() => {
        const options = {
            strings: [
                "A WEB DEV",
                "A UI DESIGNER",
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
        {[0, 1].includes(page) ? <div className={page > 1 ? "hidden" : "flex items-center justify-center flex-col h-full"}>
            <div className="absolute top-36 lg:top-24 left-6 560:left-12 lg:left-24 xl:left-32 flex gap-4">
                <svg className={`${anim} animate__fadeInLeft animate__fast flex-shrink-0 -mt-1 ${page === 0 ? "animate__delay-2s" : ""} ${page !== 0 ? "animate__fadeOutLeftBig" : ""}`} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.53511 16.2543C13.1595 12.3251 18.6439 10.3333 25.8334 10.3333H28.4167V17.6158L26.3397 18.0317C22.8005 18.7395 20.3386 20.1319 19.0211 22.1753C18.3337 23.2762 17.9438 24.5366 17.8896 25.8333H25.8334C26.5185 25.8333 27.1756 26.1055 27.6601 26.59C28.1445 27.0745 28.4167 27.7315 28.4167 28.4167V46.5C28.4167 49.3494 26.0994 51.6667 23.25 51.6667H7.75003C7.06489 51.6667 6.4078 51.3945 5.92334 50.91C5.43887 50.4256 5.1667 49.7685 5.1667 49.0833V36.1667L5.17445 28.6259C5.1512 28.3392 4.66036 21.545 9.53511 16.2543ZM51.6667 51.6667H36.1667C35.4816 51.6667 34.8245 51.3945 34.34 50.91C33.8555 50.4256 33.5834 49.7685 33.5834 49.0833V36.1667L33.5911 28.6259C33.5679 28.3392 33.077 21.545 37.9518 16.2543C41.5762 12.3251 47.0606 10.3333 54.25 10.3333H56.8334V17.6158L54.7564 18.0317C51.2172 18.7395 48.7553 20.1319 47.4378 22.1753C46.7503 23.2762 46.3605 24.5366 46.3063 25.8333H54.25C54.9352 25.8333 55.5923 26.1055 56.0767 26.59C56.5612 27.0745 56.8334 27.7315 56.8334 28.4167V46.5C56.8334 49.3494 54.5161 51.6667 51.6667 51.6667Z" fill="#FFC922"/>
                </svg>
                <p className={`${anim} animate__fadeInDown animate__fast ${page === 0 ? "animate__delay-2s" : ""} ${page !== 0 ? "animate__fadeOutLeftBig" : ""} text-white tracking-widerr text-xl md:text-2xl lg:text-2xl z-10 sm:w-8/12 md:w-full leading-tight pr-12 font-Poppins`}>You can never use up creativity. The more <br className="hidden xl:inline"/>you use, the more you have.</p>
            </div>
            <div className='mt-16 xl:mt-48'>
                <p className={`${anim} ${page === 0 ? "animate__delay-2s" : ""} animate__fast animate__fadeInLeft uppercase xl:ml-2 text-white text-xl lg:text-3xl xl:text-4xl font-bold tracking-widest ${page !== 0 ? " animate__fadeOutDownBig" : ""}`}>VISION OF</p>
                <h1 className={`${anim} animate__slow animate__fadeIn uppercase text-6xl 481:text-7xl sm:text-8xl 818:text-9xl 1080:text-big 1440:text-huge leading-none relative z-60 font-bold tracking-wider lg:tracking-morewide xl:tracking-widest mix-blend-difference text-yellow-500 ${page !== 0 ? "animate__fadeOutDownBig" : ""}`}>creativity</h1>
            </div>
            <button onClick={() => setPage(1)} className={`${anim} animate__fadeInDown animate__fast ${page === 0 ? "animate__delay-3s" : ""} ${page !== 0 ? "animate__fadeOutDownBig" : ""} uppercase text-xl lg:text-3xl relative z-10 font-bold xl:font-semibold border-4 text-yellow-500 border-yellow-500 mix-blend-difference tracking-widest py-5 px-16 mt-24`}>START HERE</button>
        </div> : ""}
        
        {/* Intro.2 */}
        {[1, 2].includes(page) ? <div className="w-full h-screen tl-0 flex flex-col justify-center items-center absolute z-10">
            <div className={`${anim} ${page !== 0 ? "block animate__fadeInUp" : "hidden"} -mt-8 xl:mt-0`}>
                <h2 className={`transition-all text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-widerr font-bold text-yellow-a800 text-inner ${page !== 1 ? "titleFadeOut" : ""}`}>GET READY</h2>
            </div>
            <p className={`font-Poppins text-center mt-6 px-6 transition-all text-sm sm:text-md md:text-lg lg:text-xl tracking-widerr font-medium text-black-dark ${anim} ${page === 1 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"} leading-5`}>Use your <span className="font-Poppins font-semibold uppercase">spacebar</span> or the <span className="font-Poppins font-semibold uppercase">ARROW</span> button to proceed to next sections.<br className="inline sm:hidden" /><br/>Sit back, relax, and enjoy!</p>
            <DownButton {...{page, setPage}} currentPage={1}/>
        </div> : ""}

        {/* Intro.3 */}
        {[2, 3].includes(page) ? <div className="w-full h-screen tl-0 flex flex-col justify-center items-center absolute z-10">
            <p className={`${anim} font-Poppins text-center -mt-12 text-md sm:text-lg tracking-widerr font-medium text-black-dark ${page === 2 ? "animate__fadeInDown animate__delay-1s" : "animate__fadeOutDown animate__faster"}`}>Presenting you with</p>
            <h2 className={`${anim} font-Poppins text-center mt-4 text-xl tracking-widerr font-medium text-black-dark ${page === 2 ? "animate__fadeIn animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>The portfolio of <span className="font-bold text-2xl lg:text-3xl">Melvin Chia</span></h2>
            <DownButton {...{page, setPage}} currentPage={2}/>
        </div> : ""}

        {/* 01A */}
        {[3, 4].includes(page) ? <div className="w-full h-screen tl-0 flex flex-col justify-center items-center absolute z-10">
            <h2 className={`text-9xl md:text-huge tracking-widerr font-bold text-yellow-a800 text-inner -mt-12 ${page !== 3 ? "titleFadeOut" : "titleNoIn"}`}>01A</h2>
            <p className={`font-Poppins text-center text-xl md:text-3xl lg:text-4xl tracking-widerr font-medium -mt-4 text-black-dark ${anim} ${page === 3 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>Who Am I</p>
            <DownButton {...{page, setPage}} currentPage={3} delay={2}/>
        </div> : ""}

        <div className={`bg-yellow-500 w-full h-200 absolute ${page <= 1 ? `-translate-x-44 xl:-translate-x-28 anim-1 transform rotate-27 ${page !== 0 ? "anim-2" : ""}` : "tl-0 wh-full"} ${page === 24 ? "anim-3" : ""} ${page === 25 ? "anim-4" : ""} transition-all mix-blend-difference`}></div>

        {Array(5).fill(0).map((_, i) => <div key={i} className={`layer layer-${i+1} wh-full left-0 -top-full absolute z-20 ${[4, 5, 7, 8, 9, 10, 12, 13, 14, 16, 17, 18, 19, 20, 22, 28, 29, 30, 31].includes(page) ? "active" : ""}`}></div>)}
        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full left-0 top-0 bg-black-dark absolute z-10 ${[4, 5, 6].includes(page) ? "" : "hidden"} ${page === 6 ? "section-leave z-0" : ""}`}>
            <div className="flex px-6 sm:px-20 lg:px-32 pt-28 items-center gap-6">
                <p className={`${anim} ${page === 4 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold text-4xl 380:text-5xl sm:text-6xl tracking-widerr`}>01A</p>
                <h1 className={`${anim} ${page === 4 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase text-2xl 440:text-3xl sm:text-4xl font-bold text-white tracking-widerr`}>self introduction</h1>
            </div>
            {/* 01A.1 */}
            <div className={`px-6 sm:px-20 lg:px-32 pb-8 wh-full ${anim} ${page === 4 ? "" : "section-hide"}`}>
                <div className="mt-8 sm:mt-24 flex gap-24">
                    <img src={Illu1} className={`${anim} -mt-4 ${page === 4 ? "animate__fadeIn animate__delay-2s" : "animate__fadeOutDown"} w-80 xl:w-96 flex-shrink-0 hidden lg:block`}/>
                    <div className="relative z-10">
                        <h1 className={`${anim} text-4xl xl:text-6xl text-white font-bold tracking-widerr uppercase ${page === 4 ? "animate__fadeInRight animate__delay-3s" : "animate__fadeOutRight"}`}>Hello,<br/>I’m <span className="text-yellow-500" ref={el}></span></h1>
                        <p className={`${anim} ${page === 4 ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOutDown"} text-white font-Poppins text-base xl:text-xl tracking-widerr font-light leading-6 xl:leading-7 mt-8 mb-12`}>Hey! It&#39;s a true pleasant to meet you. I love creating cool and nice looking websites, using the latest technologies. I do large scale projects most of the time, sometimes smaller scale projects as well.</p>
                        <button className={`${anim} ${page === 4 ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-xl tracking-widerr`}>download CV</button>
                    </div>
                </div>
                <DownButton {...{page, setPage}} currentPage={4} delay={2} light/>
            </div>
            {/* 01A.2 */}
            <div className={`px-6 sm:px-20 lg:px-32 wh-full ${anim} ${page === 5 ? "block" : "animate__delay-2 animate__fadeOut"}`}>
                <div className="mt-8 sm:mt-0 flex gap-24" style={{height: "140%"}}>
                    <img src={Img1} className={`${anim} ${page === 5 ? "animate__delay-2s animate__fadeInUp" : "animate__fadeOutDown"} hidden lg:block`}/>
                    <div className="relative z-10">
                        <h1 className={`${anim} whitespace-nowrap text-4xl xl:text-6xl -mt-2 text-white font-bold tracking-widerr uppercase ${page === 5 ? "animate__fadeInRight animate__delay-2s" : "animate__fadeOutRight"}`}><span className="text-yellow-500">practice</span> skills<br/>make <span className="text-yellow-500">projects</span></h1>
                        <p className={`${anim} ${page === 5 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown"} text-white font-Poppins xl:text-xl tracking-widerr font-light leading-6 xl:leading-7 mt-8 mb-12`}>If you never do projects by your own, you will never truly understand the stuff you have learnt. Without your portfolio, all your certificates are just pieces of junk. Make  projects, to show people what you are capable of doing.</p>
                        <a aria-label='Thanks' className={`${anim} ${page === 5 ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-xl tracking-widerr h-button relative inline-flex items-center justify-center`} data-text='SEE MY WORKS' href='#'>
                            {"VIEW PROJECTS".split("").map(e => <span style={{padding: "0 .04em"}} key={e}>{e}</span>)}
                        </a>
                    </div>
                </div>
                <DownButton {...{page, setPage}} currentPage={5} delay={2} light/>
            </div>
            <p className="${anim} absolute z-0 bottom-20 right-6 text-big 440:text-huge sm:text-enormous leading-none font-bold tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner" style={{zIndex: -1}}>01A</p>
        </div>

        {/* 01B */}
        <div className={`wh-full tl-0 flex flex-col justify-center items-center absolute z-10 ${[6, 7].includes(page) ? "" : "hidden"} ${page === 7 ? "section-leave" : ""}`}>
            <h2 className={`text-9xl md:text-huge tracking-widerr font-bold text-yellow-a800 text-inner -mt-12 ${page !== 6 ? "titleFadeOut" : "titleNoIn"}`}>01B</h2>
            <p className={`font-Poppins text-center text-xl md:text-3xl lg:text-4xl tracking-widerr font-medium -mt-4 text-black-dark ${anim} ${page === 6 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>How I do my projects</p>
            <DownButton {...{page, setPage}} currentPage={6} delay={2}/>
        </div>

        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full left-0 top-0 bg-black-dark absolute z-10 ${[7, 8, 9, 10, 11].includes(page) ? "" : "hidden"} ${page === 11 ? "section-leave z-0" : ""}`}>
            <div className="flex px-6 sm:px-20 lg:px-32 pt-28 items-center gap-6">
                <p className={`${anim} ${page === 7 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold text-4xl 380:text-5xl sm:text-6xl tracking-widerr`}>01B</p>
                <h1 className={`${anim} ${page === 7 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase text-2xl 440:text-3xl sm:text-4xl font-bold text-white tracking-widerr`}>project workflow</h1>
            </div>
            {/* 01B.1.2.3.4 */}
            {workFlow.map(([i, illu, title, subtitle, desc], index) => <div key={i} className={`px-6 sm:px-20 lg:px-32 wh-full ${anim} ${page === i ? "pb-8 mt-12" : "section-hide pb-0"}`}>
                <div className={"flex gap-32"}>
                    <img src={illu} className={`${anim} -mt-4 ${page === i ? "animate__fadeInUp animate__delay-1s" : "animate__fadeOutDown"} hidden lg:block`}/>
                    <div className="relative z-10">
                        <div className={`${anim} workflow-title relative pl-4 xl:pl-6 ${page === i ? "animate__fadeInDown animate__delay-2s" : "animate__fadeOutUp"}`} style={{borderLeft: "10px solid rgba(254, 206, 60)"}}>
                            <h1 className={`${anim} text-4xl xl:text-6xl text-white font-bold tracking-widerr uppercase whitespace-nowrap ${page === i ? "animate__fadeInDown animate__delay-3s" : "animate__fadeOutRight"}`}>{title}</h1>
                            <p className={`${anim} text-xl xl:text-3xl xl:mt-2 text-white font-Poppins tracking-widerr uppercase ${page === i ? "animate__fadeInRight animate__delay-3s" : "animate__fadeOutRight"}`}>{subtitle}</p>
                        </div>
                        <p className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOutDown"} text-white font-Poppins xl:text-xl tracking-widerr font-light leading-6 xl:leading-7 mt-8 mb-12`}>{desc}</p>
                        <a aria-label='Thanks' className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-xl tracking-widerr h-button relative inline-flex items-center justify-center`} data-text='READ MORE' href='#'>
                            {"SEE ARTICLE".split("").map(e => <span style={{padding: "0 .04em"}} key={e}>{e}</span>)}
                        </a>
                    </div>
                    <DownButton {...{page, setPage}} currentPage={i} delay={2} light/>
                </div>
            </div>)}
            <p className="${anim} absolute bottom-20 right-6 text-big 440:text-huge sm:text-enormous leading-none font-bold tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner">01B</p>
        </div>

        {/* 02A */}
        <div className={`wh-full tl-0 flex flex-col justify-center items-center absolute z-10 ${[11, 12].includes(page) ? "" : "hidden"} ${page === 12 ? "section-leave" : ""}`}>
            <h2 className={`text-9xl md:text-huge tracking-widerr font-bold text-yellow-a800 text-inner -mt-12 ${page !== 11 ? "titleFadeOut" : "titleNoIn"}`}>02A</h2>
            <p className={`font-Poppins text-center text-xl md:text-3xl lg:text-4xl tracking-widerr font-medium -mt-4 text-black-dark ${anim} ${page === 11 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>Technologies I&#39;m Using</p>
            <DownButton {...{page, setPage}} currentPage={11} delay={2}/>
        </div>

        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full left-0 top-0 bg-black-dark absolute ${[12, 13, 14, 15].includes(page) ? "" : "hidden"} ${page === 15 ? "section-leave" : ""}`}>
            <div className="flex px-32 pt-28 items-center gap-6">
                <p className={`${anim} ${page === 12 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold text-4xl 380:text-5xl sm:text-6xl tracking-widerr`}>02A</p>
                <h1 className={`${anim} ${page === 12 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase text-2xl 440:text-3xl sm:text-4xl font-bold text-white tracking-widerr`}>my skills</h1>
            </div>
            {/* 02A.1.2.3 */}
            {skills.map(([i, title, subtitle, desc, item], index) => <div key={i} className={`px-32 pb-8 wh-full ${anim} ${page === i ? "" : "section-hide"}`}>
                <div className={`${!index ? "mt-16" : ""} flex gap-32`}>
                    <div className="relative z-10">
                        <p className={`${anim} text-xl mb-2 text-yellow-500 font-Poppins font-medium tracking-widerr uppercase ${page === i ? "animate__fadeInRight animate__delay-2s" : "animate__fadeOutUp"}`}>{subtitle}</p>
                        <h1 className={`${anim} text-6xl text-white font-bold tracking-widerr uppercase ${page === i ? "animate__fadeInDown animate__delay-2s" : "animate__fadeOutRight"}`}>{title}</h1>
                        <p className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOutDown"} text-white font-Poppins text-xl tracking-widerr font-light leading-7 mt-8 mb-12`}>{desc}</p>
                        <a aria-label='Thanks' className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-xl tracking-widerr h-button relative inline-flex items-center justify-center`} data-text='KNOW MORE' href='#'>
                            {"SEE ARTICLE".split("").map(e => <span style={{padding: "0 .04em"}} key={e}>{e}</span>)}
                        </a>
                    </div>
                    <div className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-1s" : "animate__fadeOut"} flex flex-col gap-16 mx-16`}>
                        {item.map(([icon, name, level]) => <div key={`item-${name}`} className="flex gap-8 items-center">
                            {icon}
                            <div >
                                <h2 className={`${anim} text-4xl text-white font-bold tracking-widerr uppercase whitespace-nowrap`}>{name}</h2>
                                <p className={`${anim} text-xl mb-2 text-yellow-500 font-Poppins font-medium tracking-widerr uppercase whitespace-nowrap`}>{level}</p>
                            </div>
                        </div>)}
                    </div>
                    <DownButton {...{page, setPage}} currentPage={i} delay={2} light />
                </div>
            </div>)}
            <p className="${anim} absolute bottom-0 right-8 text-enormous leading-none font-bold tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner" style={{zIndex: -1}}>02A</p>
        </div>

        <div className={`wh-full tl-0 flex flex-col justify-center items-center absolute z-10 ${[15, 16].includes(page) ? "" : "hidden"} ${page === 16 ? "section-leave" : ""}`}>
            <h2 className={`text-9xl md:text-huge tracking-widerr font-bold text-yellow-a800 text-inner -mt-12 ${page !== 15 ? "titleFadeOut" : "titleNoIn"}`}>02B</h2>
            <p className={`font-Poppins text-center text-xl md:text-3xl lg:text-4xl tracking-widerr font-medium -mt-4 text-black-dark ${anim} ${page === 15 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>MY FAVOURITE PROJECTS</p>
            <DownButton {...{page, setPage}} currentPage={15} delay={2}/>
        </div>

        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full flex flex-col left-0 top-0 bg-black-dark absolute overflow-hidden pb-12 ${[16, 17, 18, 19, 20, 21].includes(page) ? "" : "hidden"} ${page === 21 ? "section-leave" : ""}`}>
            <div className="flex px-6 sm:px-20 lg:px-32 pt-28 items-center gap-6">
                <p className={`${anim} ${page === 16 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold text-6xl tracking-widerr`}>02B</p>
                <h1 className={`${anim} ${page === 16 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase text-4xl font-bold text-white tracking-widerr`}>MY FAVOURTIE PROJECTS</h1>
            </div>
            {/* 02B.1.2.3.4.5 */}
            {projects.map(([i, serial, name, type, color, image]) => <div key={i} className={`px-6 sm:px-20 lg:px-32 wh-full ${anim} ${page === i ? "overflow-hidden" : "section-hide"}`}>
                <div style={{backgroundColor: color}} className={`mt-12 ${anim} gap-8 lg:gap-16 xl:gap-24 flex flex-col lg:flex-row w-full h-full overflow-hidden justify-between p-6 sm:p-12 pb-0 ${page === i ? "animate__delay-1s animate__fadeInDown" : "animate__fadeOutDown animate__fast"}`}>
                    <div className="lg:w-5/12">
                        <svg className={"sm:-mt-4 " + `${anim} ${page == i ? "animate__fadeInDown animate__delay-2s" : ""}`} width="135" height="24" viewBox="0 0 135 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12V24H24V0H0V12ZM19.3395 11.043C19.9149 11.1785 20.4377 11.4799 20.8433 11.91C21.0623 12.144 21.39 12.5738 21.4177 12.6795C21.4252 12.711 20.3827 13.41 19.7498 13.8007C19.7265 13.8165 19.6327 13.719 19.5308 13.566C19.2225 13.1167 18.8977 12.9217 18.402 12.8865C17.6752 12.8392 17.2065 13.2188 17.2103 13.8555C17.2064 14.0113 17.2412 14.1656 17.3115 14.3048C17.472 14.637 17.7728 14.8358 18.702 15.2385C20.421 15.9765 21.1553 16.4648 21.612 17.1562C22.1235 17.9295 22.2367 19.164 21.8932 20.0858C21.5107 21.0818 20.565 21.7612 19.2367 21.984C18.8265 22.0583 17.85 22.0462 17.4083 21.9645C16.4438 21.7927 15.5295 21.3158 14.967 20.691C14.7442 20.4487 14.3145 19.812 14.3422 19.7692C14.3542 19.7535 14.4518 19.6912 14.5613 19.6283L15.4523 19.1122L16.1437 18.7103L16.2885 18.9247C16.4918 19.233 16.9327 19.6552 17.199 19.7955C17.9648 20.202 19.0155 20.1435 19.5353 19.6785C19.746 19.503 19.8638 19.233 19.848 18.96C19.848 18.6825 19.8127 18.558 19.668 18.3503C19.4805 18.0847 19.1017 17.8582 18.0195 17.3895C16.7812 16.854 16.2458 16.5263 15.762 15.999C15.4575 15.652 15.2322 15.2427 15.102 14.7997C15.012 14.46 14.9888 13.608 15.0592 13.2682C15.3135 12.069 16.2195 11.2372 17.52 10.9913C17.9423 10.9095 18.9263 10.9402 19.3403 11.0422L19.3395 11.043ZM13.707 12.0472L13.7145 13.0275H10.5893V21.9067H8.37825V13.0275H5.2575V12.0668C5.2575 11.5313 5.2695 11.0865 5.2845 11.0745C5.2965 11.0588 7.19475 11.0512 9.4995 11.055L13.695 11.067L13.707 12.0472Z" fill="white"/>
                            <path d="M61 11.689C61 10.099 59.009 8.592 55.956 7.658C56.661 4.547 56.348 2.071 54.968 1.278C54.6336 1.09072 54.2552 0.996452 53.872 1.005V2.095C54.097 2.095 54.278 2.14 54.43 2.223C55.095 2.605 55.384 4.057 55.159 5.926C55.105 6.386 55.017 6.87 54.909 7.364C53.8866 7.11764 52.849 6.93958 51.803 6.831C51.1799 5.97129 50.5 5.15414 49.768 4.385C51.363 2.903 52.86 2.091 53.878 2.091V1C52.532 1 50.771 1.959 48.99 3.622C47.21 1.97 45.448 1.02 44.103 1.02V2.11C45.116 2.11 46.618 2.918 48.213 4.39C47.528 5.11 46.843 5.926 46.192 6.831C45.1438 6.93837 44.1044 7.11814 43.081 7.369C42.968 6.88 42.885 6.406 42.826 5.951C42.596 4.081 42.88 2.629 43.541 2.243C43.687 2.155 43.878 2.115 44.103 2.115V1.025C43.693 1.025 43.32 1.113 42.998 1.298C41.623 2.091 41.315 4.561 42.024 7.663C38.981 8.603 37 10.104 37 11.689C37 13.279 38.991 14.786 42.044 15.719C41.339 18.831 41.652 21.307 43.032 22.099C43.35 22.285 43.722 22.373 44.132 22.373C45.478 22.373 47.239 21.414 49.02 19.751C50.8 21.404 52.561 22.353 53.907 22.353C54.2931 22.3612 54.6744 22.2666 55.012 22.079C56.387 21.287 56.695 18.817 55.986 15.715C59.019 14.781 61 13.274 61 11.689ZM54.63 8.426C54.44 9.07986 54.2197 9.72455 53.97 10.358C53.5612 9.56276 53.1123 8.78876 52.625 8.039C53.32 8.142 53.99 8.269 54.631 8.426H54.63ZM52.39 13.636C52.009 14.296 51.617 14.923 51.211 15.505C49.7433 15.6344 48.267 15.636 46.799 15.51C45.9569 14.3072 45.2205 13.0338 44.598 11.704C45.2196 10.3711 45.9529 9.09321 46.79 7.884C48.2574 7.75437 49.7333 7.75236 51.201 7.878C51.607 8.46 52.004 9.082 52.385 9.738C52.757 10.378 53.095 11.028 53.403 11.684C53.0916 12.348 52.7536 12.9991 52.39 13.636ZM53.97 13C54.234 13.655 54.46 14.311 54.645 14.947C54.005 15.104 53.329 15.236 52.63 15.338C53.1152 14.5814 53.5625 13.8011 53.97 13ZM49.01 18.22C48.555 17.75 48.1 17.227 47.65 16.654C48.09 16.674 48.54 16.689 48.995 16.689C49.455 16.689 49.91 16.679 50.355 16.654C49.915 17.227 49.46 17.75 49.01 18.22ZM45.37 15.338C44.6957 15.2403 44.0264 15.1115 43.364 14.952C43.545 14.321 43.77 13.67 44.024 13.02C44.225 13.41 44.436 13.802 44.666 14.194C44.896 14.585 45.13 14.967 45.37 15.338ZM48.985 5.158C49.44 5.628 49.895 6.151 50.345 6.724C49.905 6.704 49.455 6.689 49 6.689C48.54 6.689 48.085 6.699 47.64 6.724C48.08 6.151 48.535 5.628 48.985 5.158ZM45.365 8.04C44.8799 8.79493 44.4326 9.57356 44.025 10.373C43.7682 9.73546 43.5429 9.08567 43.35 8.426C43.99 8.274 44.666 8.142 45.365 8.04ZM40.938 14.164C39.206 13.426 38.086 12.457 38.086 11.689C38.086 10.921 39.206 9.947 40.938 9.214C41.358 9.033 41.818 8.871 42.293 8.72C42.572 9.678 42.939 10.676 43.393 11.699C42.9644 12.6612 42.6019 13.6515 42.308 14.663C41.8435 14.5192 41.3862 14.3526 40.938 14.164ZM43.57 21.154C42.905 20.774 42.616 19.32 42.841 17.452C42.895 16.992 42.983 16.507 43.091 16.013C44.049 16.248 45.096 16.429 46.197 16.547C46.8202 17.4067 47.5 18.2238 48.232 18.993C46.637 20.475 45.14 21.287 44.122 21.287C43.9299 21.2891 43.7403 21.2438 43.57 21.155V21.154ZM55.174 17.427C55.404 19.296 55.12 20.749 54.459 21.135C54.313 21.223 54.122 21.262 53.897 21.262C52.884 21.262 51.382 20.455 49.787 18.982C50.472 18.264 51.157 17.447 51.808 16.542C52.8562 16.4346 53.8956 16.2549 54.919 16.004C55.032 16.498 55.119 16.972 55.174 17.427ZM57.057 14.164C56.637 14.345 56.177 14.507 55.702 14.658C55.403 13.6413 55.0355 12.646 54.602 11.679C55.052 10.662 55.413 9.669 55.687 8.715C56.172 8.866 56.631 9.033 57.062 9.214C58.794 9.952 59.914 10.921 59.914 11.689C59.909 12.457 58.789 13.431 57.057 14.164Z" fill="white"/>
                            <path d="M48.9948 13.925C49.5878 13.925 50.1565 13.6894 50.5759 13.2701C50.9952 12.8508 51.2308 12.282 51.2308 11.689C51.2308 11.096 50.9952 10.5272 50.5759 10.1079C50.1565 9.68858 49.5878 9.453 48.9948 9.453C48.4018 9.453 47.833 9.68858 47.4137 10.1079C46.9944 10.5272 46.7588 11.096 46.7588 11.689C46.7588 12.282 46.9944 12.8508 47.4137 13.2701C47.833 13.6894 48.4018 13.925 48.9948 13.925Z" fill="white"/>
                            <path d="M98 18.588C97.6507 18.7201 97.2651 18.7198 96.916 18.5872C96.5669 18.4546 96.2785 18.1988 96.105 17.868L92.655 13.097L92.155 12.43L88.152 17.874C87.989 18.1909 87.7162 18.4375 87.3845 18.5678C87.0529 18.6981 86.6851 18.7032 86.35 18.582L91.508 11.662L86.71 5.41102C87.055 5.2867 87.4323 5.28505 87.7784 5.40636C88.1244 5.52766 88.4181 5.76451 88.61 6.07702L92.186 10.907L95.782 6.09702C95.9463 5.78581 96.2192 5.54581 96.5488 5.42265C96.8785 5.29949 97.2419 5.30176 97.57 5.42902L95.708 7.90002L93.186 11.183C93.116 11.2455 93.0599 11.3221 93.0216 11.4077C92.9832 11.4934 92.9633 11.5862 92.9633 11.68C92.9633 11.7739 92.9832 11.8667 93.0216 11.9523C93.0599 12.038 93.116 12.1145 93.186 12.177L97.99 18.589L98 18.588ZM74.002 11.576L74.422 9.50102C75.576 5.39802 80.28 3.69102 83.516 6.23102C85.411 7.72002 85.884 9.82802 85.791 12.204H75.116C74.943 16.447 78.005 19.009 81.92 17.7C82.5547 17.4716 83.1228 17.0893 83.5734 16.5873C84.024 16.0854 84.3431 15.4796 84.502 14.824C84.709 14.158 85.05 14.044 85.676 14.236C85.5717 15.0484 85.2845 15.8266 84.8361 16.5119C84.3876 17.1973 83.7896 17.7721 83.087 18.193C81.9264 18.8279 80.5948 19.0795 79.2826 18.9119C77.9704 18.7443 76.7448 18.1661 75.781 17.26C74.828 16.1874 74.2521 14.8325 74.141 13.402C74.141 13.167 74.061 12.947 74.007 12.736C74.0021 12.3497 73.9998 11.9634 74 11.577L74.002 11.576ZM75.129 11.29H84.783C84.723 8.21402 82.782 6.03202 80.193 6.01202C77.311 5.97202 75.249 8.10602 75.122 11.276L75.129 11.29Z" fill="white"/>
                            <path d="M127.838 16.745C128.273 16.7008 128.673 16.4829 128.957 16.1371C129.24 15.7914 129.383 15.3447 129.357 14.891V14.896C129.336 14.4315 129.145 13.9931 128.823 13.6703C128.502 13.3476 128.074 13.1651 127.628 13.16H127.566C127.338 13.1685 127.115 13.2236 126.908 13.3221C126.701 13.4207 126.515 13.5608 126.36 13.7343C126.205 13.9079 126.084 14.1116 126.005 14.3337C125.925 14.5559 125.889 14.7921 125.897 15.029V15.026C125.922 15.499 126.108 15.923 126.398 16.243L126.397 16.242C125.284 18.4262 123.535 20.1873 121.401 21.273L121.335 21.303C120.121 21.9952 118.758 22.3558 117.373 22.351C117.006 22.351 116.643 22.326 116.289 22.278L116.331 22.283C115.707 22.222 115.104 22.0223 114.561 21.6972C114.018 21.3722 113.549 20.9294 113.185 20.399L113.176 20.385C112.638 19.5924 112.35 18.6449 112.353 17.674C112.353 16.837 112.562 16.051 112.929 15.369L112.918 15.393C113.425 14.3838 114.145 13.5078 115.024 12.831L115.044 12.817C114.865 12.3098 114.726 11.788 114.63 11.257L114.619 11.191C110.123 14.54 110.579 19.121 111.945 21.286C112.578 22.1336 113.396 22.811 114.332 23.2616C115.268 23.7122 116.293 23.9228 117.323 23.876H117.31L117.424 23.877C118.032 23.8772 118.637 23.8048 119.229 23.661L119.175 23.672C121.025 23.3248 122.771 22.5264 124.268 21.3421C125.765 20.1578 126.972 18.6212 127.79 16.858L127.821 16.784L127.838 16.745Z" fill="white"/>
                            <path d="M133.253 12.799C130.946 10.059 127.579 8.33898 123.826 8.33898C123.711 8.33914 123.597 8.34081 123.483 8.34398H123.5H122.984C122.849 8.05907 122.64 7.81912 122.381 7.65125C122.123 7.48337 121.824 7.39426 121.519 7.39398L121.462 7.39498H121.465H121.428C120.5 7.40898 119.753 8.19498 119.753 9.16298L119.755 9.24798V9.24398C119.776 9.70872 119.966 10.1477 120.288 10.4708C120.609 10.794 121.037 10.9769 121.483 10.982H121.559C121.885 10.9689 122.201 10.8589 122.469 10.6651C122.738 10.4713 122.947 10.2017 123.073 9.88798L123.077 9.87598H123.639C126.09 9.87898 128.366 10.663 130.247 12.004L130.207 11.977C131.669 12.945 132.807 14.3618 133.463 16.032L133.483 16.09C133.733 16.632 133.878 17.268 133.878 17.939C133.878 18.649 133.716 19.319 133.427 19.911L133.437 19.886C132.691 21.472 131.153 22.544 129.376 22.544C129.31 22.544 129.246 22.543 129.182 22.54H129.191C128.138 22.519 127.099 22.2786 126.135 21.833L126.185 21.854C125.822 22.17 125.215 22.69 124.774 23.007C126.016 23.6329 127.372 23.972 128.751 24.001H128.763C129.957 24.0363 131.138 23.7421 132.187 23.1483C133.236 22.5545 134.116 21.6823 134.737 20.62L134.754 20.589C135.1 19.7198 135.276 18.7877 135.273 17.847C135.273 15.867 134.509 14.073 133.271 12.768L133.272 12.769L133.258 12.801L133.253 12.799Z" fill="white"/>
                            <path d="M117.57 17.316C117.591 17.7814 117.781 18.2211 118.103 18.5444C118.425 18.8677 118.854 19.0501 119.301 19.054H119.363C119.809 19.0299 120.23 18.8266 120.536 18.4867C120.841 18.1468 121.009 17.6967 121.003 17.2309C120.997 16.7651 120.818 16.3197 120.504 15.9882C120.19 15.6568 119.765 15.4649 119.318 15.453H119.253L119.222 15.452C119.153 15.4517 119.086 15.4628 119.021 15.485L119.026 15.484C117.95 13.6445 117.384 11.5308 117.391 9.377C117.391 9.013 117.406 8.653 117.438 8.298L117.435 8.344C117.515 6.51383 118.157 4.75869 119.266 3.337L119.254 3.353C119.739 2.80548 120.323 2.36404 120.973 2.05446C121.623 1.74489 122.326 1.57339 123.041 1.55H123.049C126.325 1.486 127.691 5.738 127.796 7.428L129.315 7.901C128.962 2.72 125.869 0 122.911 0C121.475 0.0762879 120.096 0.60895 118.959 1.5263C117.823 2.44365 116.983 3.70165 116.554 5.131L116.54 5.183C116.096 6.54479 115.872 7.97379 115.876 9.412C115.876 12 116.587 14.415 117.816 16.456L117.785 16.401C117.614 16.6731 117.539 16.9995 117.575 17.323L117.574 17.317L117.57 17.316Z" fill="white"/>
                        </svg>
                        <div className={`${anim} w-full h-2 bg-white my-2 mt-4 ${page == i ? "animate__fadeInLeft animate__delay-2s" : ""}`}></div>
                        <h1 className={`${anim} text-4xl xl:text-5xl text-white font-Montserrat font-extrabold tracking-wide uppercase ${page == i ? "animate__fadeInUp animate__delay-2s" : ""}`}>{name}</h1>
                        <p className={`${anim} text-xl text-white font-Poppins font-medium tracking-wider uppercase -mt-1 ${page == i ? "animate__fadeInLeft animate__delay-2s" : ""}`}>{type}</p>
                        <h1 className={`${anim} text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-wider uppercase mt-8 whitespace-nowrap ${page == i ? "animate__fadeInDown animate__delay-2s" : ""}`}>{serial}</h1>
                        <div className={`${anim} w-full h-2 bg-white my-2 ${page == i ? "animate__fadeInRight animate__delay-2s" : ""}`}></div>
                        <button style={{color: color}} className={`${anim} font-Poppins font-semibold border-white border-4 bg-white py-4 mt-5 w-full uppercase text-xl tracking-widerr ${page == i ? "animate__fadeInLeft animate__delay-2s" : ""}`}>VISIT WEBSITE</button>
                        <button style={{backgroundColor: color}} className={`${anim} font-Poppins text-white font-semibold border-white border-4 mt-2 py-4 w-full uppercase text-xl tracking-widerr ${page == i ? "animate__fadeInRight animate__delay-2s" : ""}`}>CASE STUDY</button>
                    </div>
                    <div className="w-full h-full">
                        <img src={"http://localhost:9595"+image} className={`${anim} object-cover object-top ${page == i ? "animate__fadeInUp animate__delay-2s" : ""}`} />
                    </div>
                </div>
            </div>)}
            <p className="${anim} absolute bottom-0 right-8 text-enormous leading-none font-bold tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner" style={{zIndex: -1}}>02B</p>
        </div>

        <div className={`wh-full tl-0 flex flex-col justify-center items-center absolute z-10 ${[21, 22].includes(page) ? "" : "hidden"} ${page === 22 ? "section-leave" : ""}`}>
            <h2 className={`text-huge tracking-widerr font-bold text-yellow-a800 text-inner ${page !== 21 ? "titleFadeOut" : "titleNoIn animate__delay-2s"}`}>03</h2>
            <p className={`font-Poppins text-center text-4xl tracking-widerr font-medium text-black-dark ${anim} ${page === 21 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>WHAT CAN I DO FOR YOU</p>
            <DownButton {...{page, setPage}} currentPage={21} delay={2}/>
        </div>

        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full flex flex-col left-0 top-0 bg-black-dark absolute overflow-hidden pb-12 ${[22, 23].includes(page) ? "" : "hidden"} ${page === 23 ? "section-leave" : ""}`}>
            <div className="flex px-32 pt-28 items-center gap-6">
                <p className={`${anim} ${page === 22 ? "animate__fadeInDown animate__delay-2s" : ""} text-yellow-500 font-bold text-6xl tracking-widerr`}>03</p>
                <h1 className={`${anim} ${page === 22 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase text-4xl font-bold text-white tracking-widerr`}>MY SERVICES</h1>
            </div>
            {/* 02B.1.2.3.4.5 */}
            <div className={`mt-6 ${anim} flex w-full h-full overflow-hidden justify-between p-12 px-32 pb-0 ${page === 22 ? "animate__delay-1s animate__fadeInDown" : "animate__fadeOut animate__fast"}`}>
                <div className="pr-8 flex flex-col justify-between">
                    <h1 className={`${anim} text-6xl text-white font-bold tracking-widerr uppercase ${page === 22 ? "animate__fadeInLeft animate__delay-2s" : ""}`}><span className="text-yellow-500">UI</span><br/>Design</h1>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase ${page === 22 ? "animate__fadeInLeft animate__delay-3s" : ""}`}>description</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2 ${page === 22 ? "animate__fadeInLeft animate__delay-3s" : ""}`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </div>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase ${page === 22 ? "animate__fadeInLeft animate__delay-4s" : ""}`}>pricing</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2 ${page === 22 ? "animate__fadeInLeft animate__delay-4s" : ""}`}><span className="font-semibold">50US$</span> per page</p>
                    </div>
                    <button className={`${anim} text-yellow-500 font-bold border-yellow-500 border-4 mt-2 py-4 w-full uppercase text-xl tracking-widerr ${page === 22 ? "animate__fadeInLeft animate__delay-5s" : ""}`}>order now</button>
                </div>
                <div className={`${anim} h-full bg-gray-500 ${page === 22 ? "animate__fadeInDown animate__delay-1s" : ""}`} style={{width: "2px"}}></div>
                <div className="px-8 flex flex-col justify-between">
                    <h1 className={`${anim} text-6xl text-white font-bold tracking-widerr uppercase ${page === 22 ? "animate__fadeInDown animate__delay-2s" : ""}`}><span className="text-yellow-500">WEBSITE</span><br/>Developing</h1>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase ${page === 22 ? "animate__fadeInUp animate__delay-3s" : ""}`}>description</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2 ${page === 22 ? "animate__fadeInUp animate__delay-3s" : ""}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase ${page === 22 ? "animate__fadeInUp animate__delay-4s" : ""}`}>pricing</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2 ${page === 22 ? "animate__fadeInUp animate__delay-4s" : ""}`}><span className="font-semibold">1,200US$</span> per project</p>
                    </div>
                    <button className={`${anim} text-black-dark font-bold bg-yellow-500 border-yellow-500 border-4 mt-2 py-4 w-full uppercase text-xl tracking-widerr ${page === 22 ? "animate__fadeInDown animate__delay-5s" : ""}`}>order now</button>
                </div>
                <div className={`${anim} h-full bg-gray-500 ${page === 22 ? "animate__fadeInDown animate__delay-1s" : ""}`} style={{width: "2px"}}></div>
                <div className="pl-8 flex flex-col justify-between">
                    <h1 className={`${anim} text-6xl text-white font-bold tracking-widerr uppercase ${page === 22 ? "animate__fadeInRight animate__delay-2s" : ""}`}><span className="text-yellow-500">DATA</span><br/>Scraping</h1>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase ${page === 22 ? "animate__fadeInRight animate__delay-3s" : ""}`}>description</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2 ${page === 22 ? "animate__fadeInRight animate__delay-3s" : ""}`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum incididunt ut labore et dolore.</p>
                    </div>
                    <div>
                        <p className={`${anim} text-yellow-500 font-Poppins tracking-widerr text-lg font-bold uppercase ${page === 22 ? "animate__fadeInRight animate__delay-4s" : ""}`}>pricing</p>
                        <p className={`${anim} text-white font-Poppins tracking-widerr leading-snug mt-2 ${page === 22 ? "animate__fadeInRight animate__delay-4s" : ""}`}><span className="font-semibold">30US$</span> per script</p>
                    </div>
                    <button className={`${anim} text-yellow-500 font-bold border-yellow-500 border-4 mt-2 py-4 w-full uppercase text-xl tracking-widerr ${page === 22 ? "animate__fadeInRight animate__delay-5s" : ""}`}>order now</button>
                </div>
            </div>
            <p className="${anim} absolute bottom-0 right-8 text-enormous leading-none font-bold tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner" style={{zIndex: -1}}>03</p>
        </div>

        <div className={`wh-full tl-0 flex flex-col justify-center items-center absolute z-10 ${[23, 24].includes(page) ? "" : "hidden"} ${page === 24 ? "section-leave" : ""}`}>
            <h2 className={`text-huge tracking-widerr font-bold text-yellow-a800 text-inner ${page !== 23 ? "titleFadeOut" : "titleNoIn animate__delay-2s"}`}>04</h2>
            <p className={`font-Poppins text-center text-4xl tracking-widerr font-medium text-black-dark ${anim} ${page === 23 ? "animate__fadeInUp animate__delay-2s" : "animate__fadeOutDown animate__faster"}`}>GET IN TOUCH WITH ME</p>
            <DownButton {...{page, setPage}} currentPage={23} delay={2}/>
        </div>

        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full flex flex-col left-0 top-0 absolute overflow-hidden pb-12 ${[24, 25].includes(page) ? "" : "hidden"} ${page === 25 ? "section-leave-no-delay" : ""}`}>
            <div className="flex px-32 pt-28 items-center gap-6">
                <p className={`${anim} ${page === 24 ? "animate__fadeInDown animate__delay-2s" : ""} text-black-dark font-bold text-6xl tracking-widerr`}>04</p>
                <h1 className={`${anim} ${page === 24 ? "animate__fadeInRight animate__delay-2s" : ""} uppercase text-4xl font-bold text-black-dark tracking-widerr`}>CONTACT ME</h1>
            </div>
            <div className={`${anim} flex w-full h-full justify-between px-32 pb-0 ${page === 24 ? "animate__delay-1s animate__fadeInDown" : "animate__fadeOut animate__fast"}`}>
                <div className="mb-12">
                    <form style={{width: "32rem"}} className="flex flex-col gap-8 mt-12 h-full">
                        <input type='text' placeholder="NAME" className="uppercase w-full bg-yellow-a800 px-6 py-4 placeholder-yellow-1000 font-Poppins font-semibold text-lg tracking-widerr box-inner"/>
                        <input type='text' placeholder="EMAIL" className="uppercase w-full bg-yellow-a800 px-6 py-4 placeholder-yellow-1000 font-Poppins font-semibold text-lg tracking-widerr box-inner"/>
                        <textarea placeholder="MESSAGES" className="uppercase w-full h-full bg-yellow-a800 px-6 py-4 placeholder-yellow-1000 font-Poppins font-semibold text-lg tracking-widerr box-inner"/>
                        <button className={`${anim} ${page === 24 ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} text-yellow-900 font-bold border-4 border-yellow-900 text-inner py-4 px-16 uppercase text-xl tracking-widerr`}>SUBMIT</button>
                    </form>
                </div>
                <div className="w-min -mt-12 -mr-8">
                    <h1 className={`${anim} text-6xl whitespace-nowrap text-white font-bold tracking-widerr uppercase mr-24 ${page === 24 ? "animate__fadeInDown animate__delay-2s" : ""}`}>LET’S<br/>HAVE A <span className="text-yellow-500">TALK</span></h1>
                    <p className={`${anim} ${page === 24 ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOutDown"} text-white font-Poppins text-xl tracking-widerr font-light leading-7 mt-8 mb-12`}>Are you willing to make friends with me? Or considering a collaboration with me? Fill up the form on the left or contact me straight away, and I’ll get in touch with you as soon as possible.</p>
                    <button className={`${anim} ${page === 24 ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-xl tracking-widerr`}>contact me</button>
                </div>
            </div>
            <p className="${anim} absolute bottom-0 right-8 text-enormous leading-none font-bold tracking-wider text-black-light animate__fadeInUp animate__delay-2s text-dark-inner" style={{zIndex: -1}}>04</p>
        </div>

        {[25, 26].includes(page) ? <div className="w-full h-screen tl-0 flex flex-col justify-center items-center absolute z-10">
            <div className={`${anim} ${page === 25 ? "block animate__fadeInUp" : "hidden"}`}>
                <h2 className={`text-9xl tracking-widerr font-bold text-yellow-a800 text-inner ${page !== 25 ? "titleFadeOut" : ""}`}>ALMOST DONE</h2>
            </div>
            <p className={`font-Poppins text-center mt-4 text-xl tracking-widerr font-medium text-black-dark ${anim} ${page === 25 ? "animate__fadeInUp animate__delay-1s" : "animate__fadeOutDown animate__faster"}`}>Why not keep pressing the <span className="font-Poppins font-semibold uppercase">spacebar</span> and check out what&#39;s below?</p>
            <DownButton {...{page, setPage}} currentPage={25}/>
        </div> : ""}
        
        {[26, 27].includes(page) ? <div>
            <div className="relative z-10 px-32 py-24">
                <div className={`${anim} ${page === 26 ? "block animate__fadeInDown" : "animate__fadeOutUp"}`}>
                    <p className={`${anim} text-xl mb-2 text-yellow-a800 text-inner font-bold tracking-widerr uppercase ${page === 26 ? "" : "animate__fadeOutUp"}`}>SUPPORT</p>
                </div>
                <h1 className={`${anim} text-6xl font-black tracking-widerr uppercase ${page === 26 ? "animate__fadeInDown" : "animate__fadeOutRight"} text-black-dark`}>BUY ME A COFFEE<br/>FOR MORE PROJECTS</h1>
                <p className={`${anim} ${page === 26 ? "animate__fadeInUp" : "animate__fadeOutDown"} font-Poppins text-xl w-8/12 text-black-dark tracking-widerr font-medium leading-7 mt-8 mb-12`}>Making projects is fun. However, these projects are all open source, and I am not able to make money from them. If you want to show your support and give me some motivation, consider buying me a coffee.</p>
                <button className={`${anim} ${page === 26 ? "animate__fadeInUp animate__delay-1s" : "animate__fadeOut"} border-black-dark text-black-dark font-bold border-4 py-4 px-16 uppercase text-xl tracking-widerr`}>donate me</button>
            </div>
            <svg className={`absolute bottom-0 right-0 ${anim} ${page === 26 ? "animate__fadeInRight" : "hidden"}`} width="539" height="573" viewBox="0 0 539 573" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_di)">
                    <path d="M197.458 620.583H479.542C486.33 620.584 492.89 618.137 498.02 613.692C503.15 609.246 506.504 603.1 507.468 596.381L560.415 225.667H592.375V169.25H553.391L504.76 72.0159C502.424 67.3269 498.826 63.3827 494.371 60.6269C489.916 57.8711 484.78 56.413 479.542 56.4167H197.458C186.767 56.4167 177.007 62.4533 172.212 72.0159L123.609 169.25H84.625V225.667H116.585L169.532 596.381C170.496 603.1 173.85 609.246 178.98 613.692C184.11 618.137 190.67 620.584 197.458 620.583ZM491.333 310.292H185.667L173.566 225.667H503.406L491.333 310.292ZM221.915 564.167L209.814 479.542H467.158L455.057 564.167H221.915ZM214.891 112.833H462.109L490.317 169.25H186.683L214.891 112.833Z" fill="#DDA700"/>
                </g>
                <defs>
                    <filter id="filter0_di" x="-12" y="-8" width="701" height="701" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.788235 0 0 0 0 0.133333 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                    </filter>
                </defs>
            </svg>
            <svg className={`absolute bottom-0 left-16 ${anim} ${page === 26 ? "animate__fadeInLeft" : "hidden"}`} width="323" height="249" viewBox="0 0 323 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i)">
                    <path d="M219.539 263.208C273.112 234.119 265.449 168.914 236.36 115.34C207.283 61.7721 156.764 19.8417 103.195 48.9194C49.622 78.008 57.2746 143.208 86.3632 196.782C115.452 250.355 165.965 292.296 219.539 263.208Z" stroke="#DDA700" strokeWidth="20"/>
                    <path d="M114.826 70.3474C109.933 86.8842 111.767 141.377 150.654 161.883C189.524 182.394 207.438 228.161 207.895 241.78C218.161 222.337 210.955 170.75 172.068 150.245C133.197 129.734 115.278 83.9775 114.826 70.3474Z" fill="#DDA700"/>
                </g>
                <defs>
                    <filter id="filter0_i" x="0.59082" y="0.591125" width="321.548" height="314.948" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                    </filter>
                </defs>
            </svg>
        </div> : ""}
        
        {[27, 28].includes(page) ? <div className="w-full h-screen tl-0 flex flex-col justify-center items-center absolute z-10">
            <div className={`${anim} ${page === 27 ? "block animate__fadeInUp" : "animate__fadeOutUp"}`}>
                <h2 className={`text-9xl tracking-widerr font-bold text-yellow-a800 text-inner ${page !== 27 ? "titleFadeOut" : ""}`}>CREDITS</h2>
            </div>
            <p className={`font-Poppins text-center mt-4 text-xl tracking-widerr font-medium text-black-dark ${anim} ${page === 27 ? "animate__fadeInUp animate__delay-1s" : "animate__fadeOutDown animate__faster"}`}>This website will never come true without their help.<br/>Below are some credits for them.</p>
            <DownButton {...{page, setPage}} currentPage={27}/>
        </div> : ""}

        <div className={`${anim} animate__delay-1s animate__fadeIn wh-full py-28 px-32 left-0 top-0 bg-black-dark absolute overflow-hidden pb-12 ${[28, 29, 30, 31, 32].includes(page) ? "" : "hidden"} ${page === 32 ? "section-leave" : ""}`}>
            <div className={`${anim} ${[28, 29, 30, 31].includes(page) ? "block animate__fadeInDown animate__delay-2s" : "animate__fadeOutUp"}`}>
                <p className={`${anim} text-xl mb-6 text-yellow-500 font-bold tracking-widerr uppercase ${[28, 29, 30, 31].includes(page) ? "" : "animate__fadeOutUp"}`}>CREDITS</p>
            </div>
            {credits.map(([i, name, quote, desc, link, icon, image]) => <div key={i} className={`wh-full ${anim} ${page === i ? "overflow-hidden" : "section-hide"}`}>
                <div className={`flex items-center gap-6 ${anim} ${page === i ? "block animate__fadeInDown animate__delay-2s" : "animate__fadeOutUp"}`}>
                    {icon}
                    <h1 className="uppercase text-4xl font-bold text-white tracking-widerr">{name}</h1>
                </div>
                <div className={`${anim} workflow-title relative z-20 pl-4 mt-8 ${page === i ? "animate__fadeInDown animate__delay-2s" : "animate__fadeOutUp"}`} style={{borderLeft: "10px solid rgba(254, 206, 60)"}}>
                    <h1 className={`${anim} text-6xl text-white font-bold tracking-widerr uppercase ${page === i ? "animate__fadeInDown animate__delay-3s" : "animate__fadeOutRight"}`}>{quote[0]}<br/>{quote[1]}</h1>
                </div>
                <p className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-3s" : "animate__fadeOutDown"} text-white font-Poppins text-xl tracking-widerr font-light leading-7 mt-8 mb-12 w-10/12 relative z-10`}>{desc}</p>
                <a className={`${anim} ${page === i ? "animate__fadeInUp animate__delay-4s" : "animate__fadeOut"} text-yellow-500 font-bold border-4 border-yellow-500 py-4 px-16 uppercase text-xl tracking-widerr w-auto`} href={link} target="_blank" rel="noreferrer">VISIT WEBSITE</a>
                <div className={`${anim} ${page === i ? "block animate__fadeIn animate__delay-2s" : "animate__fadeOut"} z-0 absolute right-0 bottom-0`}>{image}</div>
            </div>)}
        </div>

        {[32, 33].includes(page) ? <div className="w-full h-screen tl-0 flex flex-col justify-center items-center absolute z-10">
            <div className={`${anim} ${page === 32 ? "block animate__fadeInUp" : "hidden"}`}>
                <h2 className={`text-9xl tracking-widerr font-bold text-yellow-a800 text-inner ${page !== 32 ? "titleFadeOut" : ""}`}>THE END</h2>
            </div>
            <p className={`font-Poppins text-center mt-4 text-xl tracking-widerr font-medium text-black-dark ${anim} ${page === 32 ? "animate__fadeInUp animate__delay-1s" : "animate__fadeOutDown animate__faster"}`}>Thanks for your time. Now it’s time to explore my projects.<br/>Click on the button in the navbar!</p>
            <button onClick={() => setPage(0)} className={`${anim} absolute bottom-6 left-1/2 ${page === 32 ? "animate__fadeInDown animate__delay-1s" : "animate__fadeOutDown"}`}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 5.33334L16 26.6667" stroke="#131313" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M25.333 14.6667L15.9997 5.33334L6.66634 14.6667" stroke="#131313" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div> : ""}
    </>;
};

export default Landing;