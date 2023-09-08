import Image from "next/image"

export default function Notfound() {
    return (
        <div className="bg-[#eaf6f9] min-h-screen flex justify-center items-center">
            <Image height={450} width={450} src={"/images/404.gif"} alt="404" />
        </div>
    )
}
