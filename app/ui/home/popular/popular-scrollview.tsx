"use client";
import { useRef } from "react";
import { openSans } from "../../fonts";
import Image from "next/image";
import CustomScrollbar from "../../custom-scrollbar";

const popularProducts = [
  {
    name: "Armchair",
    href: "/products/product-1",
    image: "/chair/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Premium Sofa",
    href: "/products/product-2",
    image: "/chair/premium_sofa.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Minimal Sofa",
    href: "/products/product-3",
    image: "/chair/minimal_sofa.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Dining Chair",
    href: "/products/product-4",
    image: "/chair/dining_chair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Armchair2",
    href: "/products/product-1",
    image: "/chair/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Premium Sofa2",
    href: "/products/product-2",
    image: "/chair/premium_sofa.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Minimal Sofa2",
    href: "/products/product-3",
    image: "/chair/minimal_sofa.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Dining Chair2",
    href: "/products/product-4",
    image: "/chair/dining_chair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
];

const bgColors = [
  "bg-secondary-100",
  "bg-secondary-200",
  "bg-secondary-300",
  "bg-secondary-400",
  "bg-secondary-500",
  "bg-secondary-600",
];

export default function PopularScrollView() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="z-1 flex w-full flex-col py-13">
      <div
        ref={scrollContainerRef}
        className={`${openSans.className} flex flex-row gap-x-8 overflow-hidden pl-9 [-ms-overflow-style:none] [scrollbar-width:none] sm:pl-10 lg:pl-15 2xl:pl-49 [&::-webkit-scrollbar]:hidden`}
      >
        {popularProducts.map((product, index) => (
          <div
            key={product.name}
            className={`flex h-[340px] w-[237px] flex-col items-center justify-start px-5 sm:h-[585px] sm:w-[416px] sm:px-10 2xl:h-[585px] 2xl:w-[430px] ${bgColors[index % bgColors.length]} rounded-2xl`}
          >
            <div className="relative mt-11 h-[116px] w-[197px] sm:h-[275px] sm:w-[350px] 2xl:mt-21 2xl:h-[275px] 2xl:w-[350px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <div className="text-primary-100 mt-10 text-lg font-bold 2xl:text-2xl">
                {product.name}
              </div>
              <div className="text-primary-100 mt-5 text-lg font-normal 2xl:text-lg">
                {product.subtitle}
              </div>
              <div className="text-primary-100 mt-4 text-2xl font-bold 2xl:text-2xl">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-7 px-4 sm:mt-13 sm:px-5 lg:px-10 2xl:px-37">
        <CustomScrollbar
          containerRef={scrollContainerRef}
          trackHeight={200}
          itemCount={popularProducts.length}
          direction="horizontal"
          gap={20}
        />
      </div>
    </div>
  );
}
