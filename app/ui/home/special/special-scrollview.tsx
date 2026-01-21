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

export default function DesktopSpecialScrollView({
  specialPackage,
}: SpecialScrollViewProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerHeight = 332;
  const emptyDivHeight = 104;
  const gap = 44;
  const trackHeight = containerHeight - emptyDivHeight - gap;

  return (
    <div
      className="relative hidden w-full flex-1 flex-row justify-between 2xl:flex"
      style={{ height: `${containerHeight}px` }}
    >
      <div
        ref={scrollContainerRef}
        className={`${openSans.className} flex flex-col gap-y-8 overflow-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {specialPackage.slice(2).map((packageItem) => (
          <div
            key={packageItem.name}
            className="text-primary-200 flex h-[149px] w-[625px] flex-row gap-4 text-2xl leading-7"
          >
            <Image
              src={packageItem.image}
              alt={packageItem.name}
              width={248}
              height={149}
              className="rounded-[10px]"
            />
            <div className="flex flex-col justify-center gap-y-3">
              <div className="flex h-[22px] flex-row items-center justify-between">
                <div className={`${playfairDisplay.className} text-base`}>
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
              <div className="line-clamp-1 overflow-hidden text-[14px] font-normal text-ellipsis">
                {packageItem.description}
              </div>
              <Link
                href=""
                className={`${openSans.className} flex flex-row items-center justify-start gap-[8px] text-[14px] font-semibold text-black`}
              >
                <span>See More</span>
                <ChevronDownIcon className="h-[7px] w-[14px]" />
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
