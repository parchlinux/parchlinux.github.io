import Image from "next/image";
import Link from "next/link";
import data from "@/Data/data.json";
import Sidenav from "./childComponents/sidenav";
import ChangeLanguage from "./childComponents/changeLanguage";

interface propstype {
  Lang: string,
}

export default function Nav(props: propstype) {
  return (
    <header
      className="flex justify-between items-center px-5 py-3 md:py-5 border-b-2 border-b-blue-50 rounded-b-3xl"
    >
      <div>
        <Image
          height={50}
          width={50}
          src={"/images/logo.svg"}
          alt="logo"
          title="Parch logo"
          className=""
        />
      </div>
      <div className="hidden md:block">
        <nav className="flex justify-center items-center gap-4 text-2xl">
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
      </div>
      <div className="hidden md:block">
        <ChangeLanguage Lang={props.Lang} />
      </div>
      <Sidenav Lang={props.Lang} />
    </header >
  );
}
