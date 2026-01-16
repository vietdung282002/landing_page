import Image from "next/image";
import { openSans } from "../../fonts";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function SpecialPackage() {
  return (
    <div
      className={`${openSans.className} text-primary-200 px-25 py-37 flex flex-row items-start w-full`}
    >
      <div className="flex flex-col mr-25">
        <div className="relative">
          <Image
            src="/bedroom.jpg"
            alt="special package"
            width={822}
            height={556}
            className="rounded-[16px]"
          />
          <div className="absolute bottom-0 right-0 cursor-pointer">
            <Image
              src="/icon_zoom.svg"
              alt="special package"
              width={48}
              height={50}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-start mt-8">
          <div className="flex flex-col gap-y-5">
            <div className="text-4xl">Larkin Wood Full Set</div>
            <div className="flex flex-row gap-x-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/star_icon.svg"
                  alt="star"
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <div className="text-4xl font-bold">$729.99</div>
          </div>
          <Link
            href=""
            className={`${openSans.className} flex flex-row mt-0 h-[66px] w-[196px] justify-center items-center gap-[18px] rounded-lg bg-primary-100 px-6 py-3 text-lg text-white`}
          >
            <span>Add to cart</span>
            <Image
              src="/icon_cart_white.svg"
              alt="arrow right"
              width={26}
              height={26}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="text-2xl font-bold">Description</div>
        <div className="text-lg mt-6">
          Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to
          your outdoor space, this cast Aluminum Chaise Lounge combines the
          appearance, function and quality all together, offering you with the
          best experience.
        </div>
        <Link
          href=""
          className={`${openSans.className} flex flex-row mt-6 justify-start items-center gap-[8px] text-lg text-black font-semibold`}
        >
          <span>See More</span>
          <ChevronDownIcon className="w-6 h-6" />
        </Link>
        <div className="flex flex-row mt-10 h-[183px]">
          <Image
            src="/bedroom.jpg"
            alt="special package"
            width={288}
            height={183}
            className="rounded-[10px] mr-4"
          />
          <div className="flex flex-col flex-1 rounded-[10px] h-full bg-secondary-600 justify-center items-start gap-y-6">
            <div className="text-xl flex flex-row justify-between w-full px-5">
              <div>Living Room Family Set</div>
              <div className="font-bold">$229.99</div>
            </div>
            <div className="flex flex-row gap-x-3 pl-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/star_icon.svg"
                  alt="star"
                  width={18}
                  height={18}
                />
              ))}
            </div>
            <div className="text-xl flex flex-row justify-between w-full pl-5 cursor-pointer">
              <div className="underline">See Details</div>
              <Image
                src="/icon_zoom_2.svg"
                alt="special package"
                width={36}
                height={30}
                className="rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
