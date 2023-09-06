import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex justify-center md:justify-between items-center px-5 py-3 md:py-5 border-b-2 border-b-blue-50 rounded-b-3xl">
      <nav className="flex justify-center items-center gap-3">
        <Image
          height={50}
          width={50}
          src={"/images/logo.svg"}
          alt="logo"
          title="Parch logo"
          className=""
        />
        <Link href={""} className="text-2xl hidden md:block">
          Home
        </Link>
        <Link href={""} className="text-2xl hidden md:block">
          Download
        </Link>
        <Link href={""} className="text-2xl hidden md:block">
          Blog
        </Link>
        <Link href={""} className="text-2xl hidden md:block">
          Document
        </Link>
        <Link href={"#about"} className="text-2xl hidden md:block">
          About
        </Link>
      </nav>
      <div className="hidden md:block">
        <input
          className="rounded-2xl bg-slate-100 py-3 px-4 relative"
          placeholder="Search"
          type="text"
          name=""
          id=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black absolute top-8 right-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </header>
  );
}
