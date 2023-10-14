import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Team() {
    const t = useTranslations('Index');
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-10 gap-7 overflow-hidden">
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-10 px-5 flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center gap-2" >
                    <p className="text-xl md:text-3xl truncate">
                        {t('SOHRAB')}
                    </p>
                    <p className="text-lg md:text-2xl">
                        {t("FOUNDER")}
                    </p>
                </div>
                <Image
                    height={250}
                    width={250}
                    src={"https://avatars.githubusercontent.com/behdanisohrab"}
                    alt="SOHRAB BEHDANI"
                    title="SOHRAB BEHDANI"
                    className="rounded-lg "
                />
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://twitter.com/sbehdani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/behdanisohrab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                    <a
                        href="https://mas.to/@sohrabbehdani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-mastodon"
                            viewBox="0 0 16 16">
                            <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" />
                        </svg>
                    </a>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-10 px-5 flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center  gap-2">
                    <p className="text-xl md:text-3xl truncate">
                        {t("KOMEIL")}
                    </p>
                    <p className="text-lg md:text-2xl">
                        {t("FOUNDER")}
                    </p>
                </div>
                <Image
                    height={250}
                    width={250}
                    src={"https://avatars.githubusercontent.com/mmdbalkhi"}
                    alt="KOMEIL PARSEH"
                    title="KOMEIL PARSEH"
                    className="rounded-lg h-52 w-52"
                />
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://twitter.com/mmdbalkhi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/mmdbalkhi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-10 px-5 flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center  gap-2">
                    <p className="text-xl md:text-3xl truncate">
                        {t("JAVID")}
                    </p>
                    <p className="text-lg md:text-2xl">
                        {t("MAINTAINER")}
                    </p>
                </div>
                <Image
                    height={250}
                    width={250}
                    src={"https://avatars.githubusercontent.com/javidizadi"}
                    alt="JAVID IZADI"
                    title="JAVID IZADI"
                    className="rounded-lg "
                />
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://github.com/javidizadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-10 px-5 flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center  gap-2">
                    <p className="text-xl md:text-3xl truncate">
                        {t("MANI")}
                    </p>
                    <p className="text-lg md:text-2xl">
                        {t("COREDEVELOPER")}
                    </p>
                </div>
                <Image
                    height={250}
                    width={250}
                    src={"https://avatars.githubusercontent.com/manijamali2003"}
                    alt="MANI JAMALI"
                    title="MANI JAMALI"
                    className="rounded-lg "
                />
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://github.com/manijamali2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-10 px-5 flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center  gap-2">
                    <p className="text-xl md:text-3xl truncate">
                        {t("PARSA")}
                    </p>
                    <p className="text-lg md:text-2xl">
                        {t("MAINTAINER")}
                    </p>
                </div>
                <Image
                    height={250}
                    width={250}
                    src={"https://avatars.githubusercontent.com/metantesan"}
                    alt="PARSA SEDIGHI"
                    title="PARSA SEDIGHI"
                    className="rounded-lg "
                />
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://github.com/metantesan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-10 px-5 flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center  gap-2">
                    <p className="text-xl md:text-3xl truncate">
                        {t("SHAHRIAR")}
                    </p>
                    <p className="text-lg md:text-2xl">
                        {t("MAINTAINER")}
                    </p>
                </div>
                <Image
                    height={250}
                    width={250}
                    src={"https://avatars.githubusercontent.com/shahriaarrr"}
                    alt="SHAHRIAR GHASEM POOR"
                    title="SHAHRIAR GHASEM POOR"
                    className="rounded-lg "
                />
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://twitter.com/shahriaarrr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/shahriaarrr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-10 px-5 flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center  gap-2">
                    <p className="text-xl md:text-3xl truncate">
                        {t("ABOLFAZL")}
                    </p>
                    <p className="text-lg md:text-2xl">
                        {t("WEBDEVELOPER")}
                    </p>
                </div>
                <Image
                    height={250}
                    width={250}
                    src={"https://avatars.githubusercontent.com/AFzOfficial"}
                    alt="ABOLFAZL BADIE"
                    title="ABOLFAZL BADIE"
                    className="rounded-lg "
                />
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://twitter.com/AFzOfficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/AFzOfficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-10 px-5 flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center  gap-2">
                    <p className="text-xl md:text-3xl truncate">
                        {t("AliMohammad")}
                    </p>
                    <p className="text-lg md:text-2xl">
                        {t("WEBDEVELOPER")}
                    </p>
                </div>
                <Image
                    height={250}
                    width={250}
                    src={"https://avatars.githubusercontent.com/AliMohammad-Esmaeeli"}
                    alt="Ali Mohammad Esmaeeli"
                    title="Ali Mohammad Esmaeeli"
                    className="rounded-lg "
                />
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/ali-mohammad-esmaeeli-452182203/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/AliMohammad-Esmaeeli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.alimohammad.blog/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </a>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-10 px-5 flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center  gap-2">
                    <p className="text-xl md:text-3xl truncate">
                        {t("AHMADREZA")}
                    </p>
                    <p className="text-lg md:text-2xl">
                        {t("DESIGNER")}
                    </p>
                </div>
                <Image
                    height={250}
                    width={250}
                    src={"https://avatars.githubusercontent.com/ahmadreza3"}
                    alt="AHMADREZA KHATAMIAN"
                    title="AHMADREZA KHATAMIAN"
                    className="rounded-lg "
                />
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://github.com/ahmadreza3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-10 px-5 flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center  gap-2">
                    <p className="text-xl md:text-3xl truncate">
                        {t("ALI")}
                    </p>
                    <p className="text-lg md:text-2xl">
                        {t("DESIGNER")}
                    </p>
                </div>
                <Image
                    height={250}
                    width={250}
                    src={"https://avatars.githubusercontent.com/AEK84"}
                    alt="ALI EMAMI"
                    title="ALI EMAMI"
                    className="rounded-lg "
                />
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://github.com/AEK84"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg h-8 w-8 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </li>
        </ul>
    )
}
