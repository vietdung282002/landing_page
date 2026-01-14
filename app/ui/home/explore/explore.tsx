import Search from "./search";
import Link from "next/link";
import { openSans } from "../../fonts";
import Image from "next/image";
import CategoryGridView from "./category-grid-view";
import CategoryScrollView from "./category-scrollview";
import CategoryList from "./category-list";

export default function Explore() {
  return (
    <div className="flex flex-col items-center my-25">
      <div className=" font-bold text-primary-200 text-[28px] sm:text-[48px] 2xl:text-[64px] leading-10 sm:leading-16 2xl:leading-21">
        Explore by Category
      </div>
      <div className="flex flex-col 2xl:flex-row items-center 2xl:items-start gap-x-15 px-4 sm:px-5 2xl:px-[150px] mt-9 2xl:mt-25 w-full">
        <div className="flex flex-col w-full sm:w-[350px] 2xl:gap-y-20 items-center 2xl:items-start">
          <div className="flex flex-row w-full justify-between items-center">
            <div className="h-[55px] sm:h-[81px] 2xl:h-[75px] w-full mr-9 sm:mr-0 sm:w-[463px] 2xl:w-[349px]">
              <Search placeholder="Search" />
            </div>
            <button type="button" className="sm:hidden cursor-pointer">
              <Image src={"/icon_menu.svg"} alt="menu" width={24} height={24} />
            </button>
          </div>
          <CategoryList />
          <CategoryScrollView />
          <Link
            href=""
            className={`${openSans.className} hidden sm:flex sm:mt-9 2xl:mt-0 h-[89px] w-[265px] justify-center items-center gap-[18px] rounded-lg bg-primary-100 px-6 py-3 text-lg font-bold text-white`}
          >
            <span>All Categories </span>
            <Image
              src="/icon_arrow_right.svg"
              alt="arrow right"
              width={20}
              height={13}
            />
          </Link>
        </div>
        <CategoryGridView />
      </div>
    </div>
  );
}
