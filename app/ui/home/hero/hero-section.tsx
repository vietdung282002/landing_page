import { openSans } from "@/app/ui/fonts";
import { Button } from "@/app/ui/home/hero/button";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center sm:items-start bg-bg-100 px-4 md:px-5 lg:px-10 2xl:px-[150px] rounded-b-[50px] 2xl:rounded-b-[62px] h-[660px] sm:h-[573px] 2xl:h-[992px] transform transition-transform">
      <div className="flex flex-col mt-32 sm:mt-22 lg:mt-25 2xl:mt-60 items-center sm:items-start">
        <div className="flex flex-col justify-center items-center sm:items-start hidden sm:block 2xl:text-[64px] text-4xl font-bold text-primary-200 leading-13 2xl:leading-21 ">
          <h1>Exclusive Deals of</h1>
          <h1>Furniture Collection</h1>
        </div>
        <div className="flex flex-col justify-center items-center sm:items-start block sm:hidden text-4xl font-bold text-primary-200 leading-13">
          <h1>Exclusive Deals of</h1>
          <h1>of Furniture</h1>
          <h1>Collection</h1>
        </div>
        <div
          className={`${openSans.className} flex flex-col justify-center text-center sm:text-left items-center sm:items-start text-lg sm:text-2xl text-primary-200 leading-6 mt-4 2xl:mt-13`}
        >
          Explore different categories. Find the best deals.
        </div>
        <div className="mt-13 2xl:mt-14">
          <Button>
            <div
              className={`${openSans.className} text-2xl font-bold text-white py-6 px-13`}
            >
              Shop Now
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
