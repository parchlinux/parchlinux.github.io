"use client"
import Image from "next/image";
import Link from "next-intl/link";
import { useState } from "react";
import Sidenav from "./childComponents/sidenav";
import { useTranslations } from 'next-intl';

export default function Nav() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations('Index');
  return (
    <header
      className="flex justify-between items-center px-5 py-3 md:py-5 border-b-2 border-b-blue-50 rounded-b-lg"
    >
      <div>
        <Link href={"/"}>
          <Image
            height={50}
            width={50}
            src={"/images/logo.svg"}
            alt="logo"
            title="Parch logo"
            className=""
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <nav className="flex justify-center items-center gap-4 text-2xl">
          <Link href={"/"} className="hover:text-[#035cae]">
            {t('home')}
          </Link>
          <Link href={"/download"} className="hover:text-[#035cae]">
            {t('download')}
          </Link>
          <Link href={"https://blog.parchlinux.ir/"} className="hover:text-[#035cae]">
            {t('blog')}
          </Link>
          <Link href={"https://wiki.parchlinux.ir/"} className="hover:text-[#035cae]">
            {t('document')}
          </Link>
          <Link href={"/#about"} className="hover:text-[#035cae]">
            {t('about')}
          </Link>
          <a href="https://daramet.com/parchlinux" className="hover:text-[#035cae]">
            {t('donate')}
          </a>
          <Link href={"/team"} className="hover:text-[#035cae]">
            {t('team')}
          </Link>
        </nav>
      </div>
      <div className="hidden md:block">
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="bg-slate-100 text-black rounded-2xl py-4 px-6 flex justify-center items-center gap-1 relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          {t("Lang")}
          {isLangOpen &&
            <ul className="bg-slate-100 text-black flex flex-col justify-center items-center gap-3 rounded-3xl px-10 py-4 absolute mt-40">
              <li>
                <Link href={"/"} locale="fa">
                  فارسی
                </Link>
              </li>
              <li>
                <Link href={"/"} locale="en">English</Link>
              </li>
            </ul>
          }
        </button>
      </div>
      <Sidenav />
    </header >
  );
}