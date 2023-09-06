import Image from "next/image";

export default function Main() {
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
          <p className="text-8xl hidden md:block">Parch OS</p>
          <div className="flex justify-center items-center gap-4 mt-10">
            <button className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-700 text-lg px-5 py-2">
              Download
            </button>
            <button className="rounded-lg bg-gradient-to-t from-amber-700 to-orange-400 text-lg px-5 py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
