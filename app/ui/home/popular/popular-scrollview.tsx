"use client";
import { useRef } from "react";
import { openSans } from "../../fonts";
import Image from "next/image";
import CustomScrollbar from "../../custom-scrollbar";

const popularProducts = [
  {
    name: "Armchair",
    href: "/products/product-1",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Premium Sofa",
    href: "/products/product-2",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Minimal Sofa",
    href: "/products/product-3",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Dining Chair",
    href: "/products/product-4",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Armchair1",
    href: "/products/product-5",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Armchair2",
    href: "/products/product-6",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Armchair3",
    href: "/products/product-7",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Armchair4",
    href: "/products/product-8",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Armchair5",
    href: "/products/product-8",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Armchair6",
    href: "/products/product-8",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
  {
    name: "Armchair7",
    href: "/products/product-8",
    image: "/armchair.png",
    subtitle: "Light single chair ",
    price: "$100",
  },
];

export default function PopularScrollView() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col w-full py-13 z-1">
      <div
        ref={scrollContainerRef}
        className={`${openSans.className} flex flex-row gap-x-8 pl-9 sm:pl-10 lg:pl-15 2xl:pl-49 overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
      >
        {popularProducts.map((product) => (
          <div
            key={product.name}
            className="flex flex-col justify-start items-center px-5 sm:px-10 h-[340px] w-[237px] sm:h-[585px] sm:w-[416px] 2xl:h-[585px] 2xl:w-[430px] bg-secondary-200 rounded-2xl"
          >
            <div className="relative mt-11 2xl:mt-21 h-[116px] sm:h-[275px] w-[197px] sm:w-[350px] 2xl:h-[275px] 2xl:w-[350px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full">
              <div className="text-lg 2xl:text-2xl font-bold mt-10 text-primary-100">
                {product.name}
              </div>
              <div className="text-lg 2xl:text-lg font-normal mt-5 text-primary-100">
                {product.subtitle}
              </div>
              <div className="text-2xl 2xl:text-2xl font-bold mt-4 text-primary-100">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 sm:px-5 lg:px-10 2xl:px-37 mt-7 sm: mt-13">
        <CustomScrollbar
          containerRef={scrollContainerRef}
          trackHeight={200}
          itemCount={popularProducts.length}
          emptyDivHeight={10}
          gap={7}
          direction="horizontal"
        />
      </div>
    </div>
  );
}
