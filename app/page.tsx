import Nav from "@/components/Nav";
import Main from "@/components/Main";
import About from "@/components/About";
import Ability from "@/components/Ability";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden bg-black text-white flex flex-col">
      <Nav />
      <Main />
      <About />
      <Ability />
      <Footer />
    </div>
  );
}
