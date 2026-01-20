"use client";
import Image from "next/image";
import { openSans, playfairDisplay } from "../../fonts";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SpecialScrollView from "./special-scrollview";
import CustomScrollbar from "../../custom-scrollbar";
import { useRef } from "react";

const specialPackage = [
  {
    name: "Larkin Wood Full Set",
    price: "$729.99",
    description:
      "Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.",
    image: "/bedroom.jpg",
  },
  {
    name: "Living Room Special Set",
    price: "$329.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bedroom.jpg",
  },
  {
    name: "Bedroom Collection Set",
    price: "$429.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bedroom.jpg",
  },
  {
    name: "Dining Room Premium Set",
    price: "$529.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bedroom.jpg",
  },
  {
    name: "Kitchen Modern Set",
    price: "$379.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bedroom.jpg",
  },
  {
    name: "Office Workspace Set",
    price: "$299.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bedroom.jpg",
  },
  {
    name: "Outdoor Patio Set",
    price: "$599.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bedroom.jpg",
  },
  {
    name: "Master Bedroom Suite",
    price: "$799.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bedroom.jpg",
  },
  {
    name: "Kids Room Fun Set",
    price: "$249.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bedroom.jpg",
  },
  {
    name: "Luxury Living Set",
    price: "$899.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bedroom.jpg",
  },
  {
    name: "Minimalist Home Set",
    price: "$349.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bedroom.jpg",
  },
];

export default function SpecialPackage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={`${playfairDisplay.className} text-primary-200  flex flex-col items-center justify-start py-20 2xl:py-37`}
    >
      <div className="text-[28px] 2xl:text-7xl font-bold">Special Package</div>
      <div
        className={`${openSans.className} hidden 2xl:flex px-25 flex-row items-start w-full mt-26`}
      >
        <div className="flex flex-col mr-25">
          <div className="relative">
            <Image
              src={specialPackage[0].image}
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
              <div className="text-4xl">{specialPackage[0].name}</div>
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
              <div className="text-4xl font-bold">
                {specialPackage[0].price}
              </div>
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
          <div className="text-lg mt-3">{specialPackage[0].description}</div>
          <Link
            href=""
            className={`${openSans.className} flex flex-row mt-5 justify-start items-center gap-[8px] text-lg text-black font-semibold`}
          >
            <span>See More</span>
            <ChevronDownIcon className="w-6 h-6" />
          </Link>
          <div className="flex flex-row mt-10 h-[183px]">
            <Image
              src={specialPackage[1].image}
              alt="special package"
              width={288}
              height={183}
              className="rounded-[10px] mr-4"
            />
            <div className="flex flex-col flex-1 rounded-[10px] h-full bg-secondary-600 justify-center items-start gap-y-6">
              <div className="text-xl flex flex-row justify-between w-full px-5">
                <div>{specialPackage[1].name}</div>
                <div className="font-bold">{specialPackage[1].price}</div>
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
          <div className="mt-8">
            <SpecialScrollView specialPackage={specialPackage} />
          </div>
        </div>
      </div>
      <div className="flex sm:hidden flex-col px-4 overflow-hidden w-full mt-15">
        <div
          ref={scrollContainerRef}
          className=" w-full flex flex-row overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-x-4"
        >
          {specialPackage.map((packageItem) => (
            <div
              key={packageItem.name}
              className="flex flex-col w-full shrink-0 min-w-full"
            >
              <div className={`${openSans.className} text-2xl`}>
                {packageItem.name}
              </div>
              <div className="flex flex-row gap-x-3 mt-5">
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
              <div
                className={`${openSans.className} text-[28px] font-bold mt-5`}
              >
                {packageItem.price}
              </div>
              <Link
                href=""
                className={`${openSans.className} flex flex-row mt-8 h-[58px] w-[178px] justify-center items-center gap-[18px] rounded-lg bg-primary-100 px-6 py-3 text-base text-white`}
              >
                <span>Add to cart</span>
                <Image
                  src="/icon_cart_white.svg"
                  alt="arrow right"
                  width={18}
                  height={18}
                />
              </Link>
              <div className="relative w-full mt-8">
                <Image
                  src={packageItem.image}
                  alt="special package"
                  width={288}
                  height={280}
                  className="w-full h-auto rounded-3xl"
                  sizes="100vw"
                />
              </div>
              <div className={`${openSans.className} mt-8 text-2xl font-bold`}>
                Description
              </div>
              <div className={`${openSans.className} mt-8 text-lg`}>
                {packageItem.description}
              </div>
            </div>
          ))}
        </div>
        <div className="px-0 mt-7 sm:mt-13">
          <CustomScrollbar
            containerRef={scrollContainerRef}
            trackHeight={200}
            itemCount={specialPackage.length}
            direction="horizontal"
            gap={20}
          />
        </div>
      </div>
      <div className="hidden sm:flex 2xl:hidden"></div>
    </div>
  );
}
