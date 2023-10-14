"use client";
import Link from "next-intl/link";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Index');
  const [isLangOpen, setIsLangOpen] = useState(false);
  return (
    <footer className="mt-auto">
      {isLangOpen && (
        <ul className="h-28 w-36 grid place-items-center bg-slate-100 text-black rounded-3xl mx-2 relative">
          <li>
            <Link className="font-vazir" href={"/"} locale="fa">
              فارسی
            </Link>
          </li>
          <li>
            <Link href={"/"} locale="en">English</Link>
          </li>
          <div className="h-5 w-5 rounded-sm bg-slate-100 rotate-45 absolute top-[6rem] left-5"></div>
        </ul>
      )}

      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="h-11 w-32 bg-orange-400 text-black rounded-lg  flex justify-center items-center mx-5 md:mx-3 my-5 gap-2"
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
          {t("Lang")}
        </p>
      </button>

      <div className="border-y-2 border-y-slate-100 py-4 mx-5 md:mx-3 flex justify-center md:justify-start items-center">
        <div className="flex justify-start items-center gap-4 mx-5">
          <a
            href="https://github.com/parchlinux"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center text-black hover:bg-[#035cae]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/bssfoss"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center text-black hover:bg-[#035cae]"
          >
            <svg
              data-testid="geist-icon"
              height="16"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 16 16"
              width="16"
              aria-label=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a
            href="https://discord.gg/9RW5cRByAM"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center text-black hover:bg-[#035cae]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-discord"
              viewBox="0 0 16 16"
            >
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
            </svg>
          </a>
          <a
            href="https://t.me/parchlinux"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center text-black hover:bg-[#035cae]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-telegram"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
            </svg>
          </a>
        </div>
        <svg
          className="mt-2 hidden md:block"
          width="142"
          height="49"
          viewBox="0 0 142 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M139.831 15.8802C129.034 16.7882 112.183 18.2052 112.183 18.2052C104.537 19.1676 97.1394 17.6514 89.7371 19.8261C82.1502 22.0551 74.398 25.0082 73.1014 34.5148C72.3611 39.9429 76.1621 44.192 80.6819 45.8591C87.8446 48.501 94.8254 46.727 97.5264 39.1973C100.227 31.6676 98.5348 23.8155 93.4329 21.7776C89.9328 20.3795 88.0905 19.7749 84.4171 19.0707C80.6735 18.353 76.9913 17.8133 73.1637 17.8918C60.1257 18.1593 47.0315 19.542 33.9714 19.9256C28.3578 20.0904 22.3869 20.9841 16.8235 19.9176"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M21.4064 1.80503C21.1035 3.61572 19.8476 4.95937 18.7001 6.28595C14.7074 10.9019 10.2753 15.2582 5.59446 19.0974C4.50103 19.9943 3.2151 20.7817 2.18791 21.7662C2.08163 21.868 3.60256 22.4697 3.71667 22.5245C6.20312 23.719 8.84195 24.8753 11.1047 26.4955C14.7794 29.1268 18.1707 33.1891 20.9106 36.8561C21.4764 37.6133 22.0837 38.2528 22.6243 39.0586"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <p className="text-2xl mb-2 mx-5 hidden md:block">
          {t("social")}
        </p>
      </div>

      <p className="text-xl text-center my-3">
        <a href="https://bssinc.ir/" target="_blank" rel="noopener noreferrer">
          {new Date().getFullYear()} BSS OSF
        </a>
      </p>
    </footer>
  );
}
