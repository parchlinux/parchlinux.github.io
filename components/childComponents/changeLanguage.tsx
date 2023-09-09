"use client"
import data from "@/Data/data.json";
import Link from "next/link";
import { useState } from "react";

interface propstype {
    Lang: string,
}

export default function ChangeLanguage(props: propstype) {
    const [isLangOpen, setIsLangOpen] = useState(false);
    return (
        <div className="relative">
            <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="bg-slate-100 rounded-2xl py-3 px-4 flex justify-center items-center gap-3 ">
                <p className="text-black">
                    {props.Lang === "Fa" ? data.Fa.Lang : data.En.Lang}
                </p>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" className="stroke-current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M2 12H22" className="stroke-current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" className="stroke-current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
            {isLangOpen && (
                <div className="absolute right-1 mt-2">
                    <ul className="h-28 w-36 grid place-items-center bg-slate-100 text-black rounded-3xl mx-2 relative">
                        <li>
                            <Link className="font-vazir" href={"/fa"}>
                                فارسی
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>English</Link>
                        </li>
                        <div className="h-5 w-5 rounded-sm bg-slate-100 rotate-45 absolute bottom-[6rem] right-7"></div>
                    </ul>
                </div>
            )}
        </div>
    )
}