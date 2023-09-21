import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function Main() {
  const t = useTranslations('Index');
  return (
    <main className="flex justify-center items-center">
      <div className="relative flex flex-col lg:flex-row justify-between items-center mt-[12vh]">
        <Image
          height={9999}
          width={9999}
          src={"/images/grid.webp"}
          alt="grid"
          className="absolute top-2 z-10"
        />
        <Image
          height={750}
          width={750}
          src={"/images/notebook.webp"}
          alt="notebook"
          className="z-20"
        />
        <div className="flex flex-col justify-center items-center z-20">
          <p className="text-8xl hidden lg:block">
            {t("ParchOS")}
          </p>
          <div className="flex justify-center items-center gap-4 mt-10">
            <Link href={"/download"}>
              <button className="rounded-lg bg-gradient-to-r from-[#0020ee] to-[#1084f2] text-xl px-10 py-3 hover:ring-8 ring-blue-300 cursor-pointer truncate transition ease-out duration-75">
                {t("download")}
              </button>
            </Link>
            <a href={"https://wiki.parchlinux.ir/"}>
              <button className="rounded-lg bg-gradient-to-r from-[#e55026] to-[#eeb200] text-xl px-7 py-3 hover:ring-8 ring-rose-300 cursor-pointer truncate transition ease-out duration-75">
                {t("getStarted")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
