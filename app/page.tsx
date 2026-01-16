import Header from "./ui/header";
import Explore from "./ui/home/explore/explore";
import HeroSection from "./ui/home/hero/hero-section";
import { Popular } from "./ui/home/popular/popular";
import SpecialPackage from "./ui/home/special/special-package";
import Footer from "./ui/home/footer/footer";
export default function Home() {
  return (
    <div className="flex flex-col bg-bg-primary">
      <Header />
      <HeroSection />
      <Explore />
      <Popular />
      <SpecialPackage />
      <Footer />
    </div>
  );
}
