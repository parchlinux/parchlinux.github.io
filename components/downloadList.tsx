import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function DownloadList() {
    const t = useTranslations('Index');
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-10 gap-7 overflow-hidden">
            <li className="h-96 w-80 rounded-3xl bg-slate-100 text-black text-center py-10 px-5">
                <Image
                    height={1000}
                    width={1000}
                    alt="Parch GNOME"
                    title="Parch GNOME"
                    src={"/images/GNOME.webp"}
                    className="rounded-lg"
                />
                <div className="flex flex-col justify-center items-start my-4">
                    <p className="text-2xl md:text-4xl">Parch GNOME</p>
                    <p className="text-xl md:text-2xl">1.7GB</p>
                </div>
                <div className="flex justify-center items-center gap-4 my-4">
                    <Link
                        href={"https://github.com/parchlinux/Parch-iso-gnome/releases/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#e55026] to-[#eeb200] text-xl px-7 py-3 hover:ring-8 ring-rose-300 cursor-pointer truncate text-white">
                            {t("download")}
                        </button>
                    </Link>
                    <Link
                        href={"https://fosstorrents.com/distributions/parch-linux/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#0020ee] to-[#1084f2] text-xl px-10 py-3 hover:ring-8 ring-blue-300 cursor-pointer truncate text-white">
                            {t("Torrent")}
                        </button>
                    </Link>
                </div>
            </li>
            <li className="h-96 w-80 rounded-3xl bg-slate-100 text-black text-center py-10 px-5">
                <Image
                    height={1000}
                    width={1000}
                    alt="Parch KDE"
                    title="Parch KDE"
                    src={"/images/PLASMA.webp"}
                    className="rounded-lg"
                />
                <div className="flex flex-col justify-center items-start my-4">
                    <p className="text-2xl md:text-4xl">Parch KDE</p>
                    <p className="text-xl md:text-2xl">1.9GB</p>
                </div>
                <div className="flex justify-center items-center gap-4 my-4">
                    <Link
                        href={"https://github.com/parchlinux/parch-iso-plasma/releases/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#e55026] to-[#eeb200] text-xl px-7 py-3 hover:ring-8 ring-rose-300 cursor-pointer truncate text-white">
                            {t("download")}
                        </button>
                    </Link>
                    <Link
                        href={"https://fosstorrents.com/distributions/parch-linux/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#0020ee] to-[#1084f2] text-xl px-10 py-3 hover:ring-8 ring-blue-300 cursor-pointer truncate text-white">
                            {t("Torrent")}
                        </button>
                    </Link>
                </div>
            </li>
            <li className="h-96 w-80 rounded-3xl bg-slate-100 text-black text-center py-10 px-5">
                <Image
                    height={1000}
                    width={1000}
                    alt="Parch XFCE"
                    title="Parch XFCE"
                    src={"/images/XFCE.webp"}
                    className="rounded-lg"
                />
                <div className="flex flex-col justify-center items-start my-4">
                    <p className="text-2xl md:text-4xl">Parch XFCE</p>
                    <p className="text-xl md:text-2xl">1.5GB</p>
                </div>
                <div className="flex justify-center items-center gap-4 my-4">
                    <Link
                        href={"https://github.com/parchlinux/parch-iso-xfce/releases/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#e55026] to-[#eeb200] text-xl px-7 py-3 hover:ring-8 ring-rose-300 cursor-pointer truncate text-white">
                            {t("download")}
                        </button>
                    </Link>
                    <Link
                        href={"https://fosstorrents.com/distributions/parch-linux/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#0020ee] to-[#1084f2] text-xl px-10 py-3 hover:ring-8 ring-blue-300 cursor-pointer truncate text-white">
                            {t("Torrent")}
                        </button>
                    </Link>
                </div>
            </li>
            <li className="h-96 w-80 rounded-3xl bg-slate-100 text-black text-center py-10 px-5">
                <Image
                    height={1000}
                    width={1000}
                    alt="Parch CINNAMON"
                    title="Parch CINNAMON"
                    src={"/images/CINNAMON.webp"}
                    className="rounded-lg"
                />
                <div className="flex flex-col justify-center items-start my-4">
                    <p className="text-xl md:text-3xl">Parch CINNAMON</p>
                    <p className="text-xl md:text-2xl">1.5GB</p>
                </div>
                <div className="flex justify-center items-center gap-4 my-4">
                    <Link
                        href={"https://github.com/parchlinux/parch-iso-cinnamon/releases/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#e55026] to-[#eeb200] text-xl px-7 py-3 hover:ring-8 ring-rose-300 cursor-pointer truncate text-white">
                            {t("download")}
                        </button>
                    </Link>
                    <Link
                        href={"https://fosstorrents.com/distributions/parch-linux/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#0020ee] to-[#1084f2] text-xl px-10 py-3 hover:ring-8 ring-blue-300 cursor-pointer truncate text-white">
                            {t("Torrent")}
                        </button>
                    </Link>
                </div>
            </li>
        </ul>
    )
}
