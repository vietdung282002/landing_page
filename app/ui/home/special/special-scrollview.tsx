"use client";
import { useRef } from "react";
import { roboto } from "../../fonts";
import CustomScrollbar from "../../custom-scrollbar";
import Image from "next/image";

const specialPackage = [
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

export default function SpecialScrollView() {
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
        className={`${roboto.className} flex flex-col gap-y-8 overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
      >
        {specialPackage.map((category) => (
          <div
            key={category.name}
            className="flex flex-row text-2xl leading-7 text-primary-200 w-[625px] h-[149px] gap-4"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={248}
              height={149}
              className="rounded-[10px]"
            />
            <div className="flex flex-col"></div>
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
