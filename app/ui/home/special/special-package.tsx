"use client";
import Image from "next/image";
import { openSans, playfairDisplay } from "../../fonts";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import DesktopSpecialScrollView from "./special-scrollview";
import CustomScrollbar from "../../custom-scrollbar";
import { useRef } from "react";

const specialPackage = [
  {
    name: "Larkin Wood Full Set",
    price: "$729.99",
    description:
      "Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.",
    image: "/special/larkin_wood_full_set.jpg",
  },
  {
    name: "Living Room Special Set",
    price: "$329.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/special/living_room_special_set.webp",
  },
  {
    name: "Bedroom Collection Set",
    price: "$429.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/special/bedroom_collection_set.webp",
  },
  {
    name: "Dining Room Premium Set",
    price: "$529.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/special/dining_room_premium_set.jpg",
  },
  {
    name: "Kitchen Modern Set",
    price: "$379.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/special/kitchen_modern_set.jpeg",
  },
  {
    name: "Office Workspace Set",
    price: "$299.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/special/office_workspace_set.jpeg",
  },
  {
    name: "Outdoor Patio Set",
    price: "$599.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/special/outdoor_patio_set.webp",
  },
];

export default function SpecialPackage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabletScrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={`${playfairDisplay.className} text-primary-200 flex flex-col items-center justify-start py-20 2xl:py-37`}
    >
      <div className="text-[28px] font-bold sm:text-7xl 2xl:text-7xl">
        Special Package
      </div>
      <div
        className={`${openSans.className} mt-26 hidden w-full flex-row items-start px-25 2xl:flex`}
      >
        <div className="mr-25 flex flex-col">
          <div className="relative">
            <Image
              src={specialPackage[0].image}
              alt="special package"
              width={822}
              height={556}
              className="rounded-[16px]"
            />
            <div className="absolute right-0 bottom-0 cursor-pointer">
              <Image
                src="/icon_zoom.svg"
                alt="special package"
                width={48}
                height={50}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-row items-start justify-between">
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
              className={`${openSans.className} bg-primary-100 mt-0 flex h-[66px] w-[196px] flex-row items-center justify-center gap-[18px] rounded-lg px-6 py-3 text-lg text-white`}
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
        <div className="flex flex-1 flex-col">
          <div className="text-2xl font-bold">Description</div>
          <div className="mt-3 text-lg">{specialPackage[0].description}</div>
          <Link
            href=""
            className={`${openSans.className} mt-5 flex flex-row items-center justify-start gap-[8px] text-lg font-semibold text-black`}
          >
            <span>See More</span>
            <ChevronDownIcon className="h-6 w-6" />
          </Link>
          <div className="mt-10 flex h-[183px] flex-row">
            <Image
              src={specialPackage[1].image}
              alt="special package"
              width={288}
              height={183}
              className="mr-4 rounded-[10px]"
            />
            <div className="bg-secondary-600 flex h-full flex-1 flex-col items-start justify-center gap-y-6 rounded-[10px]">
              <div className="flex w-full flex-row justify-between px-5 text-xl">
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
              <div className="flex w-full cursor-pointer flex-row justify-between pl-5 text-xl">
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
            <DesktopSpecialScrollView specialPackage={specialPackage} />
          </div>
        </div>
      </div>
      <div className="mt-15 flex w-full flex-col overflow-hidden px-4 sm:hidden">
        <div
          ref={scrollContainerRef}
          className="flex w-full flex-row gap-x-4 overflow-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {specialPackage.map((packageItem) => (
            <div
              key={packageItem.name}
              className="flex w-full min-w-full shrink-0 flex-col"
            >
              <div className={`${openSans.className} text-2xl`}>
                {packageItem.name}
              </div>
              <div className="mt-5 flex flex-row gap-x-3">
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
                className={`${openSans.className} mt-5 text-[28px] font-bold`}
              >
                {packageItem.price}
              </div>
              <Link
                href=""
                className={`${openSans.className} bg-primary-100 mt-8 flex h-[58px] w-[178px] flex-row items-center justify-center gap-[18px] rounded-lg px-6 py-3 text-base text-white`}
              >
                <span>Add to cart</span>
                <Image
                  src="/icon_cart_white.svg"
                  alt="arrow right"
                  width={18}
                  height={18}
                />
              </Link>
              <div className="relative mt-8 w-full">
                <Image
                  src={packageItem.image}
                  alt="special package"
                  width={288}
                  height={280}
                  className="h-auto w-full rounded-3xl"
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
        <div className="mt-7 px-0 sm:mt-13">
          <CustomScrollbar
            containerRef={scrollContainerRef}
            trackHeight={200}
            itemCount={specialPackage.length}
            direction="horizontal"
            gap={20}
          />
        </div>
      </div>
      <div className="mt-15 hidden w-full flex-col px-5 sm:flex 2xl:hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="relative flex w-full lg:w-[583px]">
            <Image
              src={specialPackage[0].image}
              alt="special package"
              width={1000}
              height={1000}
              className="h-auto w-full rounded-3xl"
            />
            <div className="absolute right-0 bottom-0 cursor-pointer">
              <Image
                src="/icon_zoom_circle.svg"
                alt="special package"
                width={48}
                height={50}
              />
            </div>
          </div>
          <div
            className={`${openSans.className} mt-5 flex flex-1 flex-col lg:mt-0 lg:ml-5`}
          >
            <div className={`${openSans.className} text-2xl font-bold`}>
              {specialPackage[0].name}
            </div>
            <div className="mt-5 flex flex-row gap-x-3">
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
            <div className={`${openSans.className} mt-5 text-[28px] font-bold`}>
              {specialPackage[0].price}
            </div>
            <Link
              href=""
              className={`${openSans.className} bg-primary-100 mt-8 flex h-[46px] w-[178px] flex-row items-center justify-center gap-[18px] rounded-lg px-6 py-3 text-base text-white`}
            >
              <span>Add to cart</span>
              <Image
                src="/icon_cart_white.svg"
                alt="arrow right"
                width={18}
                height={18}
              />
            </Link>
            <div className="mt-8 text-2xl font-bold">Description</div>
            <div className={`${openSans.className} mt-8 line-clamp-3 text-lg`}>
              {specialPackage[0].description}
            </div>
          </div>
        </div>

        <div className="mt-15 flex w-full flex-col px-4">
          <div
            ref={tabletScrollContainerRef}
            className="flex w-full flex-row gap-x-5 overflow-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {specialPackage.slice(1).map((packageItem, index) => (
              <div
                key={index}
                className={`${openSans.className} flex h-[183px] w-[728px] shrink-0 flex-row`}
              >
                <Image
                  src={packageItem.image}
                  alt={packageItem.name}
                  width={241}
                  height={183}
                  className="rounded-[10px]"
                />
                <div className="bg-secondary-200 relative ml-4 flex flex-1 rounded-[10px] px-5">
                  <div className="flex w-full flex-col items-start justify-center gap-y-6">
                    <div className="flex w-full flex-row items-center justify-between">
                      <div className="text-[22px]">{packageItem.name}</div>
                      <div className="text-[28px] font-bold">
                        {packageItem.price}
                      </div>
                    </div>
                    <div className="flex flex-row gap-x-3">
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
                    <div className="text-base underline">See Details</div>
                  </div>
                  <div className="absolute right-0 bottom-0 cursor-pointer">
                    <Image
                      src="/icon_zoom_2.svg"
                      alt="special package"
                      width={36}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 px-0 sm:mt-13">
            <CustomScrollbar
              containerRef={tabletScrollContainerRef}
              trackHeight={200}
              itemCount={specialPackage.slice(1).length}
              direction="horizontal"
              gap={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
