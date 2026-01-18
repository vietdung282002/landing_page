"use client";

import { useRef } from "react";
import { roboto } from "../../fonts";
import CustomScrollbar from "../../custom-scrollbar";

const categories = [
  { name: "Bedroom", href: "/categories/bedroom" },
  { name: "Dining Room", href: "/categories/dining-room" },
  { name: "Meeting Room", href: "/categories/meeting-room" },
  { name: "Workspace", href: "/categories/workspace" },
  { name: "Living Room", href: "/categories/living-room" },
  { name: "Kitchen", href: "/categories/kitchen" },
  { name: "Living Space", href: "/categories/living-space" },
  { name: "Bathroom", href: "/categories/bathroom" },
  { name: "Home Office", href: "/categories/home-office" },
  { name: "Outdoor", href: "/categories/outdoor" },
  { name: "Kids Room", href: "/categories/kids-room" },
  { name: "Storage", href: "/categories/storage" },
  { name: "Lighting", href: "/categories/lighting" },
  { name: "Decor", href: "/categories/decor" },
];

export default function CategoryScrollView() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerHeight = 694;
  const emptyDivHeight = 104;
  const gap = 7;
  const trackHeight = containerHeight - emptyDivHeight - gap;

  return (
    <div className="hidden 2xl:flex flex-row justify-between w-full relative">
      <div
        ref={scrollContainerRef}
        className={`${roboto.className} flex flex-col gap-y-[83px] ml-[25px] overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
        style={{ height: `${containerHeight}px` }}
      >
        {categories.map((category) => (
          <div
            key={category.name}
            className="text-2xl leading-7 text-primary-200"
          >
            {category.name}
          </div>
        ))}
      </div>

      <CustomScrollbar
        containerRef={scrollContainerRef}
        trackHeight={trackHeight}
        itemCount={categories.length}
      />
    </div>
  );
}
