import { openSans } from "@/app/ui/fonts";
import { Button } from "@/app/ui/home/hero/button";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center sm:items-start bg-bg-100 px-[16px] md:px-[20px] lg:px-[40px] 2xl:px-[150px] rounded-b-[50px] 2xl:rounded-b-[62px] h-[660px] sm:h-[573px] 2xl:h-[992px]">
      <div className="flex flex-col mt-[128px] sm:mt-[88px] lg:mt-[100px] 2xl:mt-[240px] items-center sm:items-start">
        <div className="flex flex-col justify-center items-center sm:items-start hidden sm:block 2xl:text-[64px] text-4xl font-bold text-primary-200 leading-[52px] 2xl:leading-[82px] ">
          <h1>Exclusive Deals of</h1>
          <h1>Furniture Collection</h1>
        </div>
        <div className="flex flex-col justify-center items-center sm:items-start block sm:hidden text-4xl font-bold text-primary-200 leading-[52px]">
          <h1>Exclusive Deals of</h1>
          <h1>of Furniture</h1>
          <h1>Collection</h1>
        </div>
        <div
          className={`${openSans.className} flex flex-col justify-center text-center sm:text-left items-center sm:items-start text-lg sm:text-2xl text-primary-200 leading-[23px] mt-[16px] 2xl:mt-[54px]`}
        >
          Explore different categories. Find the best deals.
        </div>
        <div className="mt-[52px] 2xl:mt-[58px]">
          <Button>
            <div
              className={`${openSans.className} text-2xl font-bold text-white py-[24px] px-[54px]`}
            >
              Shop Now
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
