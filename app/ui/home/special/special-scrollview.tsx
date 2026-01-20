"use client";
import { useRef } from "react";
import { playfairDisplay, openSans } from "../../fonts";
import CustomScrollbar from "../../custom-scrollbar";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface SpecialPackageItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

interface SpecialScrollViewProps {
  specialPackage: SpecialPackageItem[];
}

export default function SpecialScrollView({
  specialPackage,
}: SpecialScrollViewProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerHeight = 332;
  const emptyDivHeight = 104;
  const gap = 44;
  const trackHeight = containerHeight - emptyDivHeight - gap;

  return (
    <div
      className="hidden 2xl:flex flex-row flex-1 justify-between w-full relative"
      style={{ height: `${containerHeight}px` }}
    >
      <div
        ref={scrollContainerRef}
        className={`${openSans.className} flex flex-col gap-y-8 overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
      >
        {specialPackage.slice(2).map((packageItem) => (
          <div
            key={packageItem.name}
            className="flex flex-row text-2xl leading-7 text-primary-200 w-[625px] h-[149px] gap-4"
          >
            <Image
              src={packageItem.image}
              alt={packageItem.name}
              width={248}
              height={149}
              className="rounded-[10px]"
            />
            <div className="flex flex-col gap-y-3 justify-center">
              <div className="flex flex-row justify-between items-center h-[22px]">
                <div className={`${playfairDisplay.className} text-base `}>
                  {packageItem.name}
                </div>
                <div className="text-[22px] font-bold">{packageItem.price}</div>
              </div>
              <div className="flex flex-row gap-x-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src="/star_icon.svg"
                    alt="star"
                    width={17}
                    height={17}
                  />
                ))}
              </div>
              <div className="text-[14px] font-normal line-clamp-1 text-ellipsis overflow-hidden">
                {packageItem.description}
              </div>
              <Link
                href=""
                className={`${openSans.className} flex flex-row justify-start items-center gap-[8px] text-[14px] text-black font-semibold`}
              >
                <span>See More</span>
                <ChevronDownIcon className="w-[14px] h-[7px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <CustomScrollbar
        containerRef={scrollContainerRef}
        trackHeight={trackHeight}
        itemCount={specialPackage.length}
        gap={gap}
      />
    </div>
  );
}
