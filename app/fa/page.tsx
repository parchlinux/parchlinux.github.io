import Nav from "@/components/Nav";
import Main from "@/components/Main";
import About from "@/components/About";
import Ability from "@/components/Ability";
import Footer from "@/components/Footer";

export default function page() {
    return (
        <div dir="rtl" className="min-h-screen scroll-smooth overflow-x-hidden bg-black text-white flex flex-col font-vazir">
            <Nav Lang="Fa" />
            <Main Lang="Fa" />
            <About Lang="Fa" />
            <Ability Lang="Fa" />
            <Footer Lang="Fa" />
        </div>
    )
}
