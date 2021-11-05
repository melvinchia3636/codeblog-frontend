import React from "react";
import { useHistory } from "react-router-dom";

interface ILogo {
    page: number;
    setPage(page: number): void;
}

const Logo: React.FC<ILogo> = ({ page, setPage }: ILogo): JSX.Element => {
    const history = useHistory();

    return <svg onClick={() => {history.push("/"); setPage(0);}} className="cursor-pointer" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={`transition-all logo1 page-${page}`} d="M2.38184 14.3744V10.9696L21.1748 4.2496V8.13227L7.97827 12.5824V12.7616L21.1748 17.4507V21.3333L2.38184 14.3744ZM27.7824 40.9173L40.979 36.2283V36.0491L27.7824 31.5989V27.7163L46.5754 34.4363V37.8411L27.7824 44.8V40.9173Z"/>
        <path className={`transition-all logo2 page-${page}`} d="M27.2292 0.426666H42.3949L45.8495 3.41334V9.2672L44.4676 10.4917L46.9204 12.6421V18.1077L43.1894 21.3333H27.2292V0.426666ZM39.9767 9.1776L41.2203 8.1024V4.8768L40.0112 3.83147H31.8238V9.1776H39.9767ZM40.8058 17.9285L42.2912 16.6443V13.7173L40.8058 12.4331H31.8238V17.9285H40.8058ZM2.90002 41.3653V27.328L6.8728 23.8933H18.6875L22.5912 27.2683V30.464H17.8929V28.7616L16.2693 27.3579H9.36011L7.59827 28.8811V39.8123L9.36011 41.3355H16.2693L17.8929 39.9317V38.2293H22.5912V41.4251L18.6875 44.8H6.8728L2.90002 41.3653Z" fill="white"/>
    </svg>;
	
};

export default Logo;