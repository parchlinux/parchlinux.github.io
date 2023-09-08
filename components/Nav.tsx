import Image from "next/image";
import Link from "next/link";
import data from "@/Data/data.json"

interface propstype {
  Lang: string,
}
export default function Nav(props: propstype) {
  return (
    <header className="flex justify-between items-center px-5 py-3 md:py-5 border-b-2 border-b-blue-50 rounded-b-3xl">
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
          <Link href={""} className="hover:text-[#035cae]">
            {props.Lang === "Fa" ? data.Fa.home : data.En.home}
          </Link>
          <Link href={"/download"} className="hover:text-[#035cae]">
            {props.Lang === "Fa" ? data.Fa.download : data.En.download}
          </Link>
          <Link href={"https://www.blog.parchlinux.ir"} className="hover:text-[#035cae]">
            {props.Lang === "Fa" ? data.Fa.blog : data.En.blog}
          </Link>
          <Link href={"https://www.wiki.parchlinux.ir"} className="hover:text-[#035cae]">
            {props.Lang === "Fa" ? data.Fa.document : data.En.document}
          </Link>
          <Link href={"#about"} className="hover:text-[#035cae]">
            {props.Lang === "Fa" ? data.Fa.about : data.En.about}
          </Link>
        </nav>
      </div>
      <div className="bg-slate-100 rounded-2xl py-3 px-4 flex justify-center items-center gap-3">
        <p className="text-black">
          {props.Lang === "Fa" ? data.Fa.Lang : data.En.Lang}
        </p>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" className="stroke-current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M2 12H22" className="stroke-current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" className="stroke-current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
    </header>
  );
}
