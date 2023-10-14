import Footer from "@/components/Footer";
import Team from "@/components/Team";
import Nav from "@/components/Nav";

export default function page() {
    return (
        <div className="min-h-screen scroll-smooth overflow-x-hidden bg-black text-white flex flex-col">
            <Nav />
            <Team />
            <Footer />
        </div>
    )
}