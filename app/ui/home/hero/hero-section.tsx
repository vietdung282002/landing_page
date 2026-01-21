import { openSans } from "@/app/ui/fonts";
import { Button } from "@/app/ui/home/hero/button";
export default function HeroSection() {
  return (
    <div
      className="flex h-[660px] transform flex-col items-center rounded-b-[50px] bg-cover bg-center bg-no-repeat px-4 transition-transform sm:h-[573px] sm:items-start md:px-5 lg:px-10 2xl:h-[992px] 2xl:rounded-b-[62px] 2xl:px-[150px]"
      style={{ backgroundImage: "url('/hero_bg.png')" }}
    >
      <div className="mt-32 flex flex-col items-center sm:mt-22 sm:items-start lg:mt-25 2xl:mt-60">
        <div className="text-primary-200 hidden flex-col items-center justify-center text-4xl leading-13 font-bold sm:flex sm:items-start 2xl:text-[64px] 2xl:leading-21">
          <h1>Exclusive Deals of</h1>
          <h1>Furniture Collection</h1>
        </div>
        <div className="text-primary-200 flex flex-col items-center justify-center text-4xl leading-13 font-bold sm:hidden sm:items-start">
          <h1>Exclusive Deals of</h1>
          <h1>of Furniture</h1>
          <h1>Collection</h1>
        </div>
        <div
          className={`${openSans.className} text-primary-200 mt-4 flex flex-col items-center justify-center text-center text-lg leading-6 sm:items-start sm:text-left sm:text-2xl 2xl:mt-13`}
        >
          Explore different categories. Find the best deals.
        </div>
        <div className="mt-13 2xl:mt-14">
          <Button>
            <div
              className={`${openSans.className} px-13 py-6 text-2xl font-bold text-white`}
            >
              Shop Now
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
