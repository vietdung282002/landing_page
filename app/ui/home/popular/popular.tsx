import Link from "next/link";
import PopularScrollView from "./popular-scrollview";
import Image from "next/image";
import { openSans } from "../../fonts";
export function Popular() {
  return (
    <div className="py-25 relative">
      <div className="absolute top-23/40 left-[-181px] sm:left-[-474px] -translate-y-1/2 w-[365px] h-[434px] sm:w-[768px] sm:h-[909px]  2xl:h-[1098] 2xl:w-[926px]">
        <Image
          src="/bg_product_image.svg"
          alt="popular bg"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className=" sm:text-[64px] text-[28px] leading-10 sm:leading-21 font-bold text-primary-200">
          Popular Products
        </div>
        <PopularScrollView />
        <Link
          href=""
          className={`${openSans.className}  flex sm:mt-9 2xl:mt-0 h-[73px] w-[265px] justify-center items-center gap-[18px] rounded-lg bg-primary-100 px-6 py-3 text-lg font-bold text-white`}
        >
          <span>Explore all items </span>
          <Image
            src="/icon_arrow_right.svg"
            alt="arrow right"
            width={20}
            height={13}
          />
        </Link>
      </div>
    </div>
  );
}
