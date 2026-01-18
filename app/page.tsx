import Header from "./ui/header";
import Explore from "./ui/home/explore/explore";
import HeroSection from "./ui/home/hero/hero-section";
import { Popular } from "./ui/home/popular/popular";
import SpecialPackage from "./ui/home/special/special-package";
import OurCreation from "./ui/home/our-creation/our-creation";
import Benefits from "./ui/home/benefits/benefits";
import Testimonials from "./ui/home/testimonials/testimonials";
import Newsletter from "./ui/home/newsletter/newsletter";
import Footer from "./ui/home/footer/footer";
export default function Home() {
  return (
    <div className="flex flex-col bg-bg-primary">
      <Header />
      <HeroSection />
      <Explore />
      <Popular />
      <SpecialPackage />
      <OurCreation />
      <Benefits />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
