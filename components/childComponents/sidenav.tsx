"use client"
import data from "@/Data/data.json";
import Link from "next/link";
import { useState } from "react";

interface propstype {
    Lang: string,
}

export default function Sidenav(props: propstype) {
    const [isLangOpen, setIsLangOpen] = useState(false);
    return (
        <div className="block md:hidden">
            <button
                onClick={() => document.getElementById("mySidenav")!.style.width = "250px"}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
            <div id="mySidenav" className="sidenav">
                <a
                    href="javascript:void(0)"
                    className="closebtn"
                    onClick={() => document.getElementById("mySidenav")!.style.width = "0"}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </a>
                <nav className="flex flex-col justify-center items-start gap-4 text-2xl mx-3">
                    <Link href={props.Lang == "Fa" ? "/fa" : "/"} className="hover:text-[#035cae]">
                        {props.Lang === "Fa" ? data.Fa.home : data.En.home}
                    </Link>
                    <Link href={"/download"} className="hover:text-[#035cae]">
                        {props.Lang === "Fa" ? data.Fa.download : data.En.download}
                    </Link>
                    <Link href={"https://blog.parchlinux.ir/"} className="hover:text-[#035cae]">
                        {props.Lang === "Fa" ? data.Fa.blog : data.En.blog}
                    </Link>
                    <Link href={"https://wiki.parchlinux.ir/"} className="hover:text-[#035cae]">
                        {props.Lang === "Fa" ? data.Fa.document : data.En.document}
                    </Link>
                    <Link href={"#about"} className="hover:text-[#035cae]">
                        {props.Lang === "Fa" ? data.Fa.about : data.En.about}
                    </Link>
                    <a href="https://daramet.com/parchlinux" className="hover:text-[#035cae]">
                        {props.Lang === "Fa" ? data.Fa.donate : data.En.donate}
                    </a>
                </nav>
                <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="h-11 w-32 bg-orange-400 text-black rounded-lg  flex justify-center items-center m-3 mt-5 gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                        className="vt-locales-btn-icon h-6 w-6"
                        data-v-9b573068=""
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                            className="css-c4d79v"
                        ></path>
                    </svg>
                    <p className="text-lg">
                        {props.Lang === "Fa" ? data.Fa.Lang : data.En.Lang}
                    </p>
                </button>
                {isLangOpen && (
                    <ul className="h-28 w-36 grid place-items-center bg-slate-100 text-black rounded-3xl mx-2 relative">
                        <li>
                            <Link className="font-vazir" href={"/fa"}>
                                فارسی
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>English</Link>
                        </li>
                        <div className="h-5 w-5 rounded-sm bg-slate-100 rotate-45 absolute bottom-[6rem] left-9"></div>
                    </ul>
                )}
            </div>
        </div>
    )
}
