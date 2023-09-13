import Footer from "@/components/Footer";
import Team from "@/components/Team";
import Nav from "@/components/Nav";

export default function page() {
    return (
        <div className="min-h-screen scroll-smooth overflow-x-hidden bg-black text-white flex flex-col font-LilitaOne">
            <Nav Lang="En" />
            <Team Lang="En"/>
            <Footer Lang="En" />
        </div>
    )
}