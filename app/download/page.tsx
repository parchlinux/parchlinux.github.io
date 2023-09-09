import Nav from "@/components/Nav";
import DownloadList from "@/components/downloadList";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden bg-black text-white flex flex-col
    font-LilitaOne">
      <Nav Lang="En" />
      <DownloadList />
      <Footer Lang="En" />
    </div>
  )
}
