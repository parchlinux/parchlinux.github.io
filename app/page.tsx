import Nav from "@/components/Nav";
import Main from "@/components/Main";
import About from "@/components/About";
import Ability from "@/components/Ability";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div dir="ltr" className="min-h-screen scroll-smooth overflow-x-hidden bg-black text-white flex flex-col font-LilitaOne">
      <Nav Lang="En" />
      <Main Lang="En" />
      <About Lang="En" />
      <Ability Lang="En" />
      <Footer Lang="En" />
    </div>
  );
}
