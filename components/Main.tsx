import Image from "next/image";
import Link from "next/link";
import data from "@/Data/data.json";

interface propstype {
  Lang: string,
}

export default function Main(props: propstype) {
  return (
    <main className="flex justify-center items-center">
      <div className="relative flex flex-col md:flex-row justify-between items-center mt-[12vh]">
        <Image
          height={9999}
          width={9999}
          src={"/images/grid.webp"}
          alt="grid"
          className="absolute top-2"
        />
        <Image
          height={750}
          width={750}
          src={"/images/notebook.webp"}
          alt="notebook"
          className="z-40"
        />
        <div>
          <p className="text-8xl hidden md:block">
            {props.Lang === "Fa" ? data.Fa.ParchOS : data.En.ParchOS}
          </p>
          <div className="flex justify-center items-center gap-4 mt-10">
            <Link href={"/download"}>
              <button className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-700 text-lg px-10 py-3 font-bold">
                {props.Lang === "Fa" ? data.Fa.download : data.En.download}
              </button>
            </Link>
            <Link href={"https://wiki.parchlinux.ir/"}>
              <button className="rounded-lg bg-gradient-to-t from-amber-700 to-orange-400 text-lg px-7 py-3 font-bold">
                {props.Lang === "Fa" ? data.Fa.getStarted : data.En.getStarted}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
